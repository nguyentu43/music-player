package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import com.example.demo.models.QTag;
import com.example.demo.models.Tag;
import com.querydsl.core.types.dsl.StringPath;

public interface TagRepository extends JpaRepository<Tag, Long>, QuerydslPredicateExecutor<Tag>, QuerydslBinderCustomizer<QTag> {
	Tag findBySlug(String slug);
	@Override
	  default public void customize(QuerydslBindings bindings, QTag tag) {
	    bindings.bind(String.class)
	      .first((StringPath path, String value) -> path.containsIgnoreCase(value));
	  }
}
