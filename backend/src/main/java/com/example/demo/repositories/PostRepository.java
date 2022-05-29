package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import com.example.demo.models.Post;
import com.example.demo.models.QPost;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.StringPath;

public interface PostRepository extends JpaRepository<Post, Long>, QuerydslPredicateExecutor<Post>, QuerydslBinderCustomizer<QPost> {
	@Override
	  default public void customize(QuerydslBindings bindings, QPost p) {
		bindings.bind(p.tags.any().tag.slug).as("tags")
		.all(( path, values) -> {
			BooleanBuilder builder = new BooleanBuilder();
			values.forEach(value -> builder.or(path.eq(value)));
			return Optional.of(builder);
		});
	    bindings.bind(String.class)
	      .first((StringPath path, String value) -> path.containsIgnoreCase(value));
	  }
}
