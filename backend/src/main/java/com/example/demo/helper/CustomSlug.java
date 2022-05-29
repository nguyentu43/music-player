package com.example.demo.helper;

import java.util.Random;

import com.github.slugify.Slugify;

public class CustomSlug {
	public static String slugify(String src) {
		Slugify slugify = new Slugify();
		Random random = new Random();
		return slugify.slugify(src + "-" + random.nextInt());
	}
}
