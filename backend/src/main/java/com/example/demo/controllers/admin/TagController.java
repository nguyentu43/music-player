package com.example.demo.controllers.admin;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
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
import com.example.demo.models.Tag;
import com.example.demo.repositories.TagRepository;

@Controller
@RequestMapping("/admin/tag")
public class TagController {
	@Autowired
	private TagRepository tagRepository;

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("tags", tagRepository.findAll());
		return "admin/tag/index";
	}

	@GetMapping("create")
	public String create(Model model) {
		model.addAttribute("tag", new Tag());
		return "admin/tag/edit";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("tag") @Valid Tag tag, BindingResult result) {
		if(result.hasErrors()) {
			return "admin/tag/edit";
		}
		
		if(tag.getSlug().isBlank()) {
			tag.setSlug(CustomSlug.slugify(tag.getName()));
		}
		
		try {
			tagRepository.save(tag);
		}
		catch(DataIntegrityViolationException exception) {
			if(!exception.getMessage().contains("slug")) throw exception;
			result.addError(new FieldError("tag", "slug", "Slug must be unique"));
			return "/admin/tag/edit";
		}
		
		
		return "redirect:/admin/tag/" + tag.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Tag> tag = tagRepository.findById(id);
		if(tag.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Tag not found");
		model.addAttribute("tag", tag.get());
		return "admin/tag/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!tagRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Tag not found");
		tagRepository.deleteById(id);
		return "redirect:/admin/tag";
	}
}
