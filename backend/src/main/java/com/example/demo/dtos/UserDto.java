package com.example.demo.dtos;

import com.example.demo.annotations.ValidPassword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    @NotBlank(message = "Name not blank")
    private String name;
    @NotBlank(message = "Email not blank")
    @Email(message="Email not valid")
    private String email;
    @ValidPassword
    private String password;
    @NotEmpty(message = "Roles not empty")
    private List<Long> roles = new ArrayList<>();
}
