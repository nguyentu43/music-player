package com.example.demo.controllers;

import java.util.Arrays;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.dtos.RegisterDto;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

@Controller
public class AuthController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@GetMapping("login")
	public String loginPage() {
		return "auth/login";
	}
	
	@GetMapping("register")
	public String registerPage(Model model) {
		model.addAttribute("register", new RegisterDto());
		return "auth/register";
	}
	
	@PostMapping("register")
	public String processRegister(@ModelAttribute("register") @Valid RegisterDto register, BindingResult result) {
		
		if(userRepository.findByEmail(register.getEmail()) != null) {
			result.addError(new FieldError("register", "email", "Email has been registered"));
		}
		
		if(result.hasErrors()) {
			return "auth/register";
		}
		
		Role role = roleRepository.findByName("ROLE_USER");
		userRepository.save(new User(register.getEmail(), register.getName(), passwordEncoder.encode(register.getPassword()), Arrays.asList(role)));
		
		return "redirect:/login";
	}
}
