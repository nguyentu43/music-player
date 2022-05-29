package com.example.demo.repositories;

import org.assertj.core.util.Arrays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import com.example.demo.models.QSong;
import com.example.demo.models.Song;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.StringPath;

public interface SongRepository extends JpaRepository<Song, Long>, QuerydslPredicateExecutor<Song>, QuerydslBinderCustomizer<QSong>{
	@Override
	  default public void customize(QuerydslBindings bindings, QSong song) {
		bindings.bind(song.tags.any().tag.name).as("tags")
		.first(( path, values) -> {
			BooleanBuilder builder = new BooleanBuilder();
			Arrays.asList(values.split(",")).forEach(value -> builder.or(path.containsIgnoreCase(value.toString())));
			return builder;
		});
		bindings.bind(song.attributeValues.any().value).as("attributes")
		.first(( path, values) -> {
			BooleanBuilder builder = new BooleanBuilder();
			Arrays.asList(values.split(",")).forEach(value -> builder.or(path.containsIgnoreCase(value.toString())));
			return builder;
		});
		bindings.bind(String.class)
	      .first((StringPath path, String value) -> path.containsIgnoreCase(value));
		bindings.excluding(song.lyric, song.cover, song.enable);
	  }
}
