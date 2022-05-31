package com.example.demo.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2ErrorCodes;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class CustomOidcUserService extends OidcUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public OidcUser loadUser(OidcUserRequest userRequest) {
		final OidcUser oidcUser = super.loadUser(userRequest);
		final String provider = userRequest.getClientRegistration().getRegistrationId();

		final String email = oidcUser.getEmail();
		final String name = oidcUser.getFullName();
		User user = userRepository.findByEmail(email);

		if(user != null) {
			if(user.getOauth2Provider().compareTo(provider) == 0) {
				user.setName(name);
				userRepository.save(user);
				return user;
			}
			throw new OAuth2AuthenticationException(new OAuth2Error("USER_HAS_REGISTERED"), "User has registered with other provider");
		}

		List<Role> roles = Arrays.asList(roleRepository.findByName("ROLE_USER"));
		User newUser = new User(email, name, roles);
		newUser.setOauth2Provider(provider);
		userRepository.save(newUser);
		return newUser;
	}

}
