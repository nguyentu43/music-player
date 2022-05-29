package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="taggable_type", discriminatorType = DiscriminatorType.STRING)
@RequiredArgsConstructor
@NoArgsConstructor
public class TagItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NonNull
	@Column(name="taggable_id")
	private Long taggableId;

	@JsonIgnore
	@NonNull
	@Column(name="tag_id")
	private Long tagId;

	@ManyToOne
	@JoinColumn(name="tag_id", insertable = false, updatable = false)
	private Tag tag;
}
