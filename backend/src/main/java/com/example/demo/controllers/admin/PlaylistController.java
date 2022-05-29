package com.example.demo.controllers.admin;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.helper.CustomSlug;
import com.example.demo.models.Playlist;
import com.example.demo.models.PlaylistTagItem;
import com.example.demo.models.Song;
import com.example.demo.models.SongPlaylist;
import com.example.demo.models.SongPlaylistId;
import com.example.demo.models.Tag;
import com.example.demo.models.User;
import com.example.demo.repositories.PlaylistRepository;
import com.example.demo.repositories.SongRepository;
import com.example.demo.repositories.TagRepository;

@Controller
@RequestMapping("/admin/playlist")
public class PlaylistController {
	@Autowired
	private PlaylistRepository playlistRepository;

	@Autowired
	private TagRepository tagRepository;

	@Autowired
	private SongRepository songRepository;

	@ModelAttribute("tags")
	public Iterable<Tag> getAllTags(){
		return tagRepository.findAll();
	}

	@ModelAttribute("songs")
	public Iterable<Song> getAllSongs(){
		return songRepository.findAll();
	}

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("playlists", playlistRepository.findAll());
		return "admin/playlist/index";
	}

	@GetMapping("create")
	public String create(Model model) {
		model.addAttribute("playlist", new Playlist());
		return "admin/playlist/edit";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("playlist") @Valid Playlist playlist, BindingResult result, Authentication authentication) {
		if(result.hasErrors()) {
			return "admin/playlist/edit";
		}

		boolean isCreate = playlist.getId() == null;

		if(playlist.getSlug().isBlank()) {
			playlist.setSlug(CustomSlug.slugify(playlist.getName()));
		}

		playlist.setTags(playlist.getTagIds().stream().map(id -> {
			return new PlaylistTagItem(playlist.getId(), id);
		}).toList());

		AtomicLong i = new AtomicLong(0);
		playlist.setSongs(playlist.getSongIds().stream().map(id -> {
			i.incrementAndGet();
			return new SongPlaylist(new SongPlaylistId(id, playlist.getId()), i.get());
		}).toList());

		if(isCreate) {
			playlist.setUser((User) authentication.getPrincipal());
		}

		try {
			playlistRepository.save(playlist);
		}
		catch(DataIntegrityViolationException exception) {
			if(!exception.getMessage().contains("slug")) throw exception;
			result.addError(new FieldError("playlist", "slug", "Slug must be unique"));
			return "/admin/playlist/edit";
		}

		return "redirect:/admin/playlist/" + playlist.getId() +"/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Playlist> playlistOptional = playlistRepository.findById(id);
		if(playlistOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
		Playlist playlist = playlistOptional.get();
		playlist.setTagIds(playlist.getTags().stream().map(tag -> tag.getTagId()).toList());
		playlist.setSongIds(playlist.getSongs().stream().map(i -> i.getId().getSongId()).toList());
		model.addAttribute("playlist", playlist);
		return "admin/playlist/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!playlistRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
		playlistRepository.deleteById(id);
		return "redirect:/admin/playlist";
	}
}
