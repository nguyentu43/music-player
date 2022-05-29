package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import com.example.demo.models.Playlist;
import com.example.demo.models.QPlaylist;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.StringPath;

public interface PlaylistRepository extends JpaRepository<Playlist, Long>, QuerydslPredicateExecutor<Playlist>, QuerydslBinderCustomizer<QPlaylist> {
	@Override
	  default public void customize(QuerydslBindings bindings, QPlaylist playlist) {
		bindings.bind(playlist.tags.any().tag.slug).as("tags")
		.all(( path, values) -> {
			BooleanBuilder builder = new BooleanBuilder();
			values.forEach(value -> builder.or(path.eq(value)));
			return Optional.of(builder);
		});
		bindings.bind(playlist.songs.any().song.slug).as("song").first((path, value) -> path.eq(value));
	    bindings.bind(String.class)
	      .first((StringPath path, String value) -> path.containsIgnoreCase(value));
	  }
}
