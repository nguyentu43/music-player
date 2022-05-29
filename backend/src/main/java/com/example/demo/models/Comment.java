package com.example.demo.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "commentable_type", discriminatorType = DiscriminatorType.STRING)
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Content must not be blank")
	private String content;
	
	@Column(columnDefinition = "timestamptz default now()", insertable = false, updatable = false)
	private Date created_at;
	
	@NotNull
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(columnDefinition = "boolean default true")
	private boolean enable;
	
	@Column(insertable = false, updatable = false)
	private String commentable_type;
	
	@OneToMany
	@JoinColumn(name="parent_id")
	private List<Comment> children = new ArrayList<>();
}
