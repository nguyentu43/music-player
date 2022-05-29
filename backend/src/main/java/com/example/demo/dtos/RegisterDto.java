package com.example.demo.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.example.demo.annotations.PasswordMatch;
import com.example.demo.annotations.ValidPassword;

import lombok.Data;

@Data
@PasswordMatch(message = "Repeat Password must be matched Password", field = "password", fieldMatch = "repeatPassword")
public class RegisterDto {
	@NotBlank(message = "Name must be not blank")
	private String name;
	
	@NotBlank(message = "Email must be not blank")
	@Email(message = "Email not valid")
	private String email;
	
	@ValidPassword
	private String password;
	
	@ValidPassword
	private String repeatPassword;
}
