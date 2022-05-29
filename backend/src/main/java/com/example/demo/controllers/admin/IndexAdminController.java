package com.example.demo.controllers.admin;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.repositories.PlaylistRepository;
import com.example.demo.repositories.PostRepository;
import com.example.demo.repositories.SongRepository;
import com.example.demo.repositories.UserRepository;

@Controller
@RequestMapping("admin")
public class IndexAdminController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private SongRepository songRepository;

	@Autowired
	private PlaylistRepository playlistRepository;

	@Autowired
	private PostRepository postRepository;

	@ModelAttribute("statistics")
	public Map<String, Long> statistics(){
		HashMap<String, Long> map = new HashMap<>();
		map.put("user", userRepository.count());
		map.put("song", songRepository.count());
		map.put("post", postRepository.count());
		map.put("playlist", playlistRepository.count());
		return map;
	}

	@GetMapping
	public String indexPage(){
		return "admin/index";
	}
}
