package com.example.demo.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
@FilterDef(name="enableFileFilter", parameters = @ParamDef(name="enable", type= "boolean"))
public class Song {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name must not be blank")
	@Column(nullable = false)
	private String name;

	@Column(unique = true)
	private String slug;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@Column(columnDefinition = "boolean default true")
	private boolean enable;

	@Column(insertable = false, updatable = false)
	private Date created_at;

	private String lyric;

	private String cover;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="song_attribute",
	joinColumns = @JoinColumn(name="song_id"),
	inverseJoinColumns = @JoinColumn(name="attribute_value_id"))
	private List<AttributeValue> attributeValues = new ArrayList<>();

	@Transient
	@JsonIgnore
	private List<Long> attributeValueIds = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "song")
	@Where(clause = "commentable_type = 'SONG'")
	private List<SongComment> comments = new ArrayList<>();

	@Transient
	@JsonIgnore
	private List<Long> tagIds = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "song", orphanRemoval = true)
	@Where(clause = "taggable_type = 'SONG'")
	private List<SongTagItem> tags = new ArrayList<>();

	@OneToMany(mappedBy = "song", orphanRemoval = true, cascade = CascadeType.ALL)
	@Filter(name="enableFileFilter", condition = "enable = :enable")
	private List<SongFile> files = new ArrayList<>();
}
