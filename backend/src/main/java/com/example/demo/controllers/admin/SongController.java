package com.example.demo.controllers.admin;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.StreamSupport;

import javax.validation.Valid;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
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
import com.example.demo.models.AttributeValue;
import com.example.demo.models.Song;
import com.example.demo.models.SongFile;
import com.example.demo.models.SongTagItem;
import com.example.demo.models.Tag;
import com.example.demo.models.User;
import com.example.demo.repositories.AttributeValueRepository;
import com.example.demo.repositories.SongFileRepository;
import com.example.demo.repositories.SongRepository;
import com.example.demo.repositories.TagRepository;

@Controller
@RequestMapping("/admin/song")
public class SongController {
	@Autowired
	private SongRepository songRepository;

	@Autowired
	private TagRepository tagRepository;

	@Autowired
	private AttributeValueRepository attributeValueRepository;

	@Autowired
	private SongFileRepository songFileRepository;

	@Autowired
	private Environment env;

	private Long timestamp = Timestamp.valueOf(LocalDateTime.now()).getTime();

	@ModelAttribute("timestamp")
	public Long cloudinaryTimestamp() {
		return timestamp;
	}

	@ModelAttribute("signature")
	public String signature() {
		String cloud_name = env.getProperty("music.cloudinary.cloud_name");
		String username = env.getProperty("music.cloudinary.username");
		String api_secret = env.getProperty("music.cloudinary.api_secret");
		return DigestUtils.sha256Hex("cloud_name=" + cloud_name +"&timestamp=" + timestamp + "&username=" + username + api_secret);
	}

	@ModelAttribute("tags")
	public Iterable<Tag> tags(){
		return tagRepository.findAll();
	}

	@ModelAttribute("attributeValues")
	public Iterable<AttributeValue> attributeValues(){
		return attributeValueRepository.findAll();
	}

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("songs", songRepository.findAll());
		return "admin/song/index";
	}

	@GetMapping("create")
	public String create(Model model) {
		model.addAttribute("song", new Song());
		return "admin/song/edit";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("song") @Valid Song song, BindingResult result, Authentication authentication) {
		if(result.hasErrors()) {
			return "admin/song/edit";
		}

		if(song.getId() == null) {
			song.setUser((User) authentication.getPrincipal());
		}

		if(song.getSlug().isBlank()) {
			song.setSlug(CustomSlug.slugify(song.getName()));
		}

		song.setAttributeValues(StreamSupport.stream(attributeValueRepository.findAllById(song.getAttributeValueIds()).spliterator(), false).toList());
		song.setTags(song.getTagIds().stream().map(id -> {
			return new SongTagItem(song.getId(), id);
		}).toList());

		if(song.getFiles()!=null) {
			song.setFiles(song.getFiles().stream().map(file -> {
				if(file.getId() != null) {
					SongFile songFile = songFileRepository.findById(file.getId()).get();
					songFile.setEnable(file.isEnable());
					songFile.setFilename(file.getFilename());
					file = songFile;
				}
				else {
					file.setUser((User)authentication.getPrincipal());
					file.setSong(song);
				}
				songFileRepository.save(file);
				return file;
			}).toList());
		}

		try {
			songRepository.save(song);
		}catch(DataIntegrityViolationException exception) {
			if(!exception.getMessage().contains("slug")) throw exception;
			result.addError(new FieldError("song", "slug", "Slug must be unique"));
			return "/admin/song/edit";
		}
		return "redirect:/admin/song/" + song.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Song> song = songRepository.findById(id);
		if(song.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Song not found");
		song.get().setTagIds(song.get().getTags().stream().map(tag -> tag.getTagId()).toList());
		song.get().setAttributeValueIds(song.get().getAttributeValues().stream().map(v -> v.getId()).toList());
		model.addAttribute("song", song.get());
		return "admin/song/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!songRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Song not found");
		songRepository.deleteById(id);
		return "redirect:/admin/song";
	}
}
