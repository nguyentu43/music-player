package com.example.demo.controllers.admin;

import java.util.Optional;

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
import com.example.demo.models.Post;
import com.example.demo.models.PostTagItem;
import com.example.demo.models.Tag;
import com.example.demo.models.User;
import com.example.demo.repositories.PostRepository;
import com.example.demo.repositories.TagRepository;
import com.example.demo.repositories.UserRepository;

@Controller
@RequestMapping("/admin/post")
public class PostController {
	@Autowired
	private PostRepository postRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TagRepository tagRepository;

	@ModelAttribute("tags")
	public Iterable<Tag> getAllTags(){
		return tagRepository.findAll();
	}

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("posts", postRepository.findAll());
		return "admin/post/index";
	}

	@GetMapping("create")
	public String create(Model model) {
		model.addAttribute("post", new Post());
		return "admin/post/edit";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("post") @Valid Post post, BindingResult result, Authentication authentication) {
		if(result.hasErrors()) {
			return "admin/post/edit";
		}

		if(post.getSlug().isBlank()) {
			post.setSlug(CustomSlug.slugify(post.getTitle()));
		}

		if(post.getId() == null) {
			post.setUser((User) authentication.getPrincipal());
		}
		else {
			post.setUser(userRepository.findById(post.getUser().getId()).get());
		}

		post.setTags(post.getTagIds().stream().map(tagId -> {
			return new PostTagItem(post.getId(), tagId);
		}).toList());

		try {
			postRepository.save(post);
		}
		catch(DataIntegrityViolationException exception) {
			if(!exception.getMessage().contains("slug")) throw exception;
			result.addError(new FieldError("post", "slug", "Slug must be unique"));
			return "/admin/post/edit";
		}

		return "redirect:/admin/post/" + post.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Post> postOptional = postRepository.findById(id);
		if(postOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
		Post post = postOptional.get();
		post.setTagIds(post.getTags().stream().map(tag -> tag.getTagId()).toList());
		model.addAttribute("post", post);
		return "admin/post/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!postRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
		postRepository.deleteById(id);
		return "redirect:/admin/post";
	}
}
