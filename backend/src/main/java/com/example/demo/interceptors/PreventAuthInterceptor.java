package com.example.demo.interceptors;

import java.util.stream.Stream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;

public class PreventAuthInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		Stream<String> routes = Stream.of("/register", "/login");
		if(routes.anyMatch(str -> request.getServletPath().startsWith(str)) && request.getUserPrincipal() != null) {
			response.sendRedirect("/");
			return false;
		}
		return true;
	}

}
