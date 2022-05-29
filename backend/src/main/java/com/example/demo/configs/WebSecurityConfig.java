package com.example.demo.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.example.demo.services.CustomUserDetailsService;

@Configuration
public class WebSecurityConfig{

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, @Autowired Environment environment) throws Exception {
		return http.authorizeRequests().antMatchers("/admin/**").hasRole("ADMIN").anyRequest().permitAll()
		.and()
			.formLogin()
			.loginPage("/login")
			.defaultSuccessUrl("/admin", true)
			.usernameParameter("email")
		.and()
			.rememberMe()
			.userDetailsService(userDetailsService())
			.tokenValiditySeconds(Integer.parseInt(environment.getProperty("music.rememberMe.tokenValiditySeconds")))
			.key(environment.getProperty("music.rememberMe.tokenValiditySeconds"))
		.and().build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		return new CustomUserDetailsService();
	}
}
