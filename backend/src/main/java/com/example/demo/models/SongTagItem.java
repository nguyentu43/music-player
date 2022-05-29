package com.example.demo.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@DiscriminatorValue("SONG")
@NoArgsConstructor
public class SongTagItem extends TagItem{

	public SongTagItem(@NonNull Long taggableId, @NonNull Long tagId) {
		super(taggableId, tagId);
	}

	@ManyToOne
	@JoinColumn(name="taggable_id", insertable = false, updatable = false)
	private Song song;
}
