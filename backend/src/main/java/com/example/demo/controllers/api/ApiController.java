package com.example.demo.controllers.api;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Attribute;
import com.example.demo.models.AttributeValue;
import com.example.demo.models.Playlist;
import com.example.demo.models.Post;
import com.example.demo.models.QSong;
import com.example.demo.models.Song;
import com.example.demo.models.Tag;
import com.example.demo.repositories.AttributeValueRepository;
import com.example.demo.repositories.PlaylistRepository;
import com.example.demo.repositories.PostRepository;
import com.example.demo.repositories.SongRepository;
import com.example.demo.repositories.TagRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;

@RestController
@CrossOrigin(origins = "http://localhost:9000")
@RequestMapping("api")
public class ApiController {
	@Autowired
	private SongRepository songRepository;

	@Autowired
	private TagRepository tagRepository;

	@Autowired
	private PlaylistRepository playlistRepository;

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private AttributeValueRepository attributeValueRepository;

	@Autowired
	private EntityManager entityManager;

	private void enableSongFileFilter() {
		Session session = entityManager.unwrap(Session.class);
		session.enableFilter("enableFileFilter").setParameter("enable", true);
	}

	@GetMapping("songs")
	public Iterable<?> getAllSongs(@QuerydslPredicate(root = Song.class) Predicate predicate, Pageable pageable){
		enableSongFileFilter();
		BooleanBuilder builder = new BooleanBuilder();
		builder
			.and(predicate)
			.and(QSong.song.enable.eq(true));
		return songRepository.findAll(builder, pageable);
	}

	@GetMapping("posts")
	public Iterable<?> getAllPosts(@QuerydslPredicate(root = Post.class) Predicate predicate, Pageable pageable){
		return postRepository.findAll(predicate, pageable);
	}

	@GetMapping("playlists")
	public Iterable<?> getAllPlaylists(@QuerydslPredicate(root = Playlist.class) Predicate predicate, Pageable pageable){
		enableSongFileFilter();
		return playlistRepository.findAll(predicate, pageable);
	}

	@GetMapping("tags")
	public Iterable<Tag> getAllTags(@QuerydslPredicate(root = Tag.class) Predicate predicate, Pageable pageable) {
		return tagRepository.findAll(predicate, pageable);
	}

	@GetMapping("attributes")
	public Map<Attribute, List<AttributeValue>> getAllAttributes(
			@QuerydslPredicate(root = AttributeValue.class) Predicate predicate) {
		Map<Attribute, List<AttributeValue>> data = StreamSupport
		.stream(attributeValueRepository.findAll(predicate).spliterator(), false)
		.collect(Collectors.groupingBy(AttributeValue::getAttribute));
		return data;
	}
}
