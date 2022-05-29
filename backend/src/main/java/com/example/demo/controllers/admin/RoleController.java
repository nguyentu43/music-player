package com.example.demo.controllers.admin;

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

import com.example.demo.models.Role;
import com.example.demo.repositories.RoleRepository;

@Controller
@RequestMapping("/admin/role")
public class RoleController {
	@Autowired
	private RoleRepository roleRepository;

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("roles", roleRepository.findAll());
		return "admin/role/index";
	}

	@GetMapping("create")
	public String createRole(Model model) {
		model.addAttribute("role", new Role());
		return "admin/role/edit";
	}

	@PostMapping("save")
	public String saveRole(@ModelAttribute("role") @Valid Role role, BindingResult result) {
		if(result.hasErrors()) {
			return "admin/role/edit";
		}
		roleRepository.save(role);
		return "redirect:/admin/role/" + role.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String editRole(Model model, @PathVariable("id") Long id) {
		Optional<Role> role = roleRepository.findById(id);
		if(role.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found");
		model.addAttribute("role", role.get());
		return "admin/role/edit";
	}

	@PostMapping("{id}/delete")
	public String deleteRole(@PathVariable("id") Long id) {
		if(!roleRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found");
		roleRepository.deleteById(id);
		return "redirect:/admin/role";
	}
}
