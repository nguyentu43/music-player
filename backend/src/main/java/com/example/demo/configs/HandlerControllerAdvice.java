package com.example.demo.configs;

import java.util.Arrays;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.example.demo.models.User;

@ControllerAdvice
public class HandlerControllerAdvice {

	@ModelAttribute("menuAdmin")
	public List<?> menuAdmin(){
		return Arrays.asList(
				Arrays.asList("Song", "/song", "music"),
				Arrays.asList("Attribute", "/attribute", "equals"),
				Arrays.asList("Playlist", "/playlist", "window-restore"),
				Arrays.asList("Tag", "/tag", "hashtag"),
				Arrays.asList("Comment", "/comment", "comments"),
				Arrays.asList("Post", "/post", "columns"),
				Arrays.asList("User", "/user", "user"),
				Arrays.asList("Role", "/role", "address-card")
		);
	}

	@ModelAttribute("currentUser")
	public User currentUser(Authentication authentication) {
		return authentication != null ? (User) authentication.getPrincipal() : null;
	}

	@ExceptionHandler(Exception.class)
	public String handleError(Model model, Exception ex) {
		model.addAttribute("message", ex.getMessage());
	    return "error";
	}
}
