package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Playlist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name must not be blank")
	private String name;

	@Column(unique = true)
	private String slug;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "playlist", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderBy("_order ASC")
	private List<SongPlaylist> songs = new ArrayList<>();

	@Transient
	@JsonIgnore
	private List<Long> songIds = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "playlist")
	@Where(clause = "commentable_type = 'PLAYLIST'")
	private List<PlaylistComment> comments = new ArrayList<>();

	@Transient
	@JsonIgnore
	private List<Long> tagIds = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "playlist", orphanRemoval = true)
	@Where(clause = "taggable_type = 'PLAYLIST'")
	private List<PlaylistTagItem> tags = new ArrayList<>();
}
