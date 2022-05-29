package com.example.demo.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Title must not be blank")
	@Column(nullable=false)
	private String title;

	@NotBlank(message = "Content must not be blank")
	@Column(nullable=false)
	private String content;

	@Column(columnDefinition = "TIMESTAMPTZ DEFAULT NOW()", insertable = false, updatable = false)
	private Date created_at;

	@Column(unique = true)
	private String slug;

	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "post")
	@Where(clause = "commentable_type = 'POST'")
	private List<PostComment> comments = new ArrayList<>();
	
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
	@Where(clause = "taggable_type = 'POST'")
	private List<PostTagItem> tags = new ArrayList<>();
	
	@Transient
	@JsonIgnore
	private List<Long> tagIds = new ArrayList<>();
}
