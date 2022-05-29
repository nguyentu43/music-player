package com.example.demo.controllers.admin;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import javax.validation.Valid;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.dtos.UserDto;
import com.example.demo.helper.ValidatorHelper;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;


@Controller
@RequestMapping("/admin/user")
public class UserController {
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@ModelAttribute("roles")
	public Iterable<Role> rolesAttribute(){
		return roleRepository.findAll();
	}

	@GetMapping
	public String indexPage(Model model) {
		model.addAttribute("users", userRepository.findAll());
		return "admin/user/index";
	}

	@GetMapping("create")
	public String createRole(Model model) {
		model.addAttribute("user", new UserDto());
		return "admin/user/edit";
	}

	@PostMapping("save")
	public String saveUser(@ModelAttribute("user") @Valid UserDto userDto, BindingResult result) {

		if(userDto.getId() != null && userDto.getPassword().isBlank()) {
			result = ValidatorHelper.removeFieldErrors(result, userDto, "user", "password");
		}

		if(result.hasErrors()) {
			return "admin/user/edit";
		}

		User user = mapUserDtoToUser(userDto);
		if(user.getPassword().isBlank()) {
			user.setPassword(userRepository.findByEmail(userDto.getEmail()).getPassword());
		}
		else {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
		}

		userRepository.save(user);
		return "redirect:/admin/user/" + user.getId() + "/edit";
	}

	@GetMapping("{id}/edit")
	public String editUser(Model model, @PathVariable("id") Long id) {
		Optional<User> user = userRepository.findById(id);
		if(user.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
		model.addAttribute("user", mapUserToUserDto(user.get()));
		return "admin/user/edit";
	}

	@PostMapping("{id}/delete")
	public String deleteUser(@PathVariable("id") Long id) {
		if(!userRepository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
		userRepository.deleteById(id);
		return "redirect:/admin/user";
	}

	private UserDto mapUserToUserDto(User user){
		ModelMapper modelMapper = new ModelMapper();
		TypeMap<User, UserDto> typeMap = modelMapper.createTypeMap(User.class, UserDto.class);
		Converter<List<Role>, List<Long>> toLongList = src -> src.getSource().stream().map(r -> r.getId()).toList();
		typeMap.addMappings(mapper -> mapper.using(toLongList).map(User::getRoles, UserDto::setRoles));
		return modelMapper.map(user, UserDto.class);
	}

	private User mapUserDtoToUser(UserDto userDto){
		ModelMapper modelMapper = new ModelMapper();
		TypeMap<UserDto, User> typeMap = modelMapper.createTypeMap(UserDto.class, User.class);
		Converter<List<Long>, List<Role>> toLongList = src -> StreamSupport.stream(roleRepository.findAllById(src.getSource()).spliterator(), false).toList();
		typeMap.addMappings(mapper -> mapper.using(toLongList).map(UserDto::getRoles, User::setRoles));
		return modelMapper.map(userDto, User.class);
	}
}
