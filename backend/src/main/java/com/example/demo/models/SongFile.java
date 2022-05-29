package com.example.demo.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class SongFile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String url;
	private String filename;

	@Column(columnDefinition = "boolean default true")
	private boolean enable;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "song_id")
	private Song song;

	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	@Column(columnDefinition = "timestamptz default now()", insertable = false, updatable = false)
	private Date created_at;
}
