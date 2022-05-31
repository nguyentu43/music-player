package com.example.demo.configs;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import com.example.demo.services.CustomOidcUserService;
import com.example.demo.services.CustomUserDetailsService;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class WebSecurityConfig{

	@Autowired
	private Environment env;
	
	@Autowired
	private CustomOidcUserService oidcUserService;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, @Autowired Environment environment) throws Exception {
		return http.authorizeRequests().antMatchers("/admin/**").authenticated().anyRequest().permitAll()
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
		.and()
			.oauth2Login()
			.loginPage("/login").authorizationEndpoint().baseUri("/login/oauth2/authorization")
			.and().userInfoEndpoint().oidcUserService(oidcUserService).and().failureHandler(authenticationFailureHandler())
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
	
	private AuthenticationFailureHandler authenticationFailureHandler() {
		return new SimpleUrlAuthenticationFailureHandler() {

			@Override
			public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
					AuthenticationException exception) throws IOException, ServletException {
				String error = exception.getMessage();
	            super.setDefaultFailureUrl("/login?error=" + error);
	            super.onAuthenticationFailure(request, response, exception);
			}
		};
	}

	private static List<String> clients = Arrays.asList("google");

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        List<ClientRegistration> registrations = clients.stream()
          .map(c -> getRegistration(c))
          .filter(registration -> registration != null)
          .collect(Collectors.toList());

        return new InMemoryClientRegistrationRepository(registrations);
    }

	private ClientRegistration getRegistration(String client) {

		final String CLIENT_PROPERTY_KEY
		  = "spring.security.oauth2.client.registration.";

	    String clientId = env.getProperty(
	      CLIENT_PROPERTY_KEY + client + ".client-id");

	    if (clientId == null) {
	        return null;
	    }

	    String clientSecret = env.getProperty(
	      CLIENT_PROPERTY_KEY + client + ".client-secret");

	    if (client.equals("google")) {
	        return CommonOAuth2Provider.GOOGLE.getBuilder(client)
	          .clientId(clientId).clientSecret(clientSecret).build();
	    }
	    if (client.equals("facebook")) {
	        return CommonOAuth2Provider.FACEBOOK.getBuilder(client)
	          .clientId(clientId).clientSecret(clientSecret).build();
	    }
	    return null;
	}
}
