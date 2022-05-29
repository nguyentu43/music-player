package com.example.demo.controllers.admin;

import java.util.ArrayList;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.Attribute;
import com.example.demo.repositories.AttributeRepository;

@Controller
@RequestMapping("/admin/attribute")
public class AttributeController {
	@Autowired
	private AttributeRepository attributeRepository;

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("attributes", attributeRepository.findAll());
		return "admin/attribute/index";
	}

	@GetMapping("create")
	public String create(Model model) {
		Attribute attribute = new Attribute();
		attribute.setAttributeValues(new ArrayList<>());
		model.addAttribute("attribute", attribute);
		return "admin/attribute/edit";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("attribute") @Valid Attribute attribute, BindingResult result) {
		if(result.hasErrors()) {
			return "admin/attribute/edit";
		}
		if(attribute.getAttributeValues()!=null)
			attribute.getAttributeValues().stream().forEach(v -> v.setAttribute(attribute));
		attributeRepository.save(attribute);
		return "redirect:/admin/attribute/" + attribute.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Attribute> attribute = attributeRepository.findById(id);
		if(attribute.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Attribute not found");
		model.addAttribute("attribute", attribute.get());
		return "admin/attribute/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!attributeRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Attribute not found");
		attributeRepository.deleteById(id);
		return "redirect:/admin/attribute";
	}
}
