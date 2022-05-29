package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import com.example.demo.models.AttributeValue;
import com.example.demo.models.QAttributeValue;
import com.querydsl.core.types.dsl.StringPath;

public interface AttributeValueRepository extends JpaRepository<AttributeValue, Long>, 
QuerydslPredicateExecutor<AttributeValue>, QuerydslBinderCustomizer<QAttributeValue> {
	@Override
	  default public void customize(QuerydslBindings bindings, QAttributeValue attributeValue) {
	    bindings.bind(String.class)
	      .first((StringPath path, String value) -> path.containsIgnoreCase(value));
	  }
}
