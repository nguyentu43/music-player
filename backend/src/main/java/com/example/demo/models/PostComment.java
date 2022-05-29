package com.example.demo.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@DiscriminatorValue("POST")
public class PostComment extends Comment{
	@ManyToOne
	@JoinColumn(name="commentable_id")
	private Post post;
}
