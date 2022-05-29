package com.example.demo.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@DiscriminatorValue("POST")
@NoArgsConstructor
public class PostTagItem extends TagItem{

	public PostTagItem(@NonNull Long taggableId, @NonNull Long tagId) {
		super(taggableId, tagId);
	}

	@ManyToOne
	@JoinColumn(name="taggable_id", insertable = false, updatable = false)
	private Post post;
}
