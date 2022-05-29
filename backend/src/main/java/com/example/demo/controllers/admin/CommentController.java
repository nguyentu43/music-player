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

import com.example.demo.models.Comment;
import com.example.demo.repositories.CommentRepository;

@Controller
@RequestMapping("/admin/comment")
public class CommentController {
	@Autowired
	private CommentRepository commentRepository;

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("comments", commentRepository.findAll());
		return "admin/comment/index";
	}

	@GetMapping("create")
	public String create(Model model) {
//		model.addAttribute("comment", new Comment());
//		return "admin/comment/edit";
		return "redirect:/admin/comment";
	}

	@PostMapping("save")
	public String save(@ModelAttribute("comment") @Valid Comment commentBody, BindingResult result) {
		if(result.hasErrors()) {
			return "admin/comment/edit";
		}
		Comment comment = commentRepository.findById(commentBody.getId()).get();
		comment.setContent(commentBody.getContent());
		comment.setEnable(commentBody.isEnable());
		commentRepository.save(comment);
		return "redirect:/admin/comment/" + comment.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		Optional<Comment> comment = commentRepository.findById(id);
		if(comment.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
		model.addAttribute("comment", comment.get());
		return "admin/comment/edit";
	}

	@PostMapping("{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		if(!commentRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found");
		commentRepository.deleteById(id);
		return "redirect:/admin/comment";
	}
}
