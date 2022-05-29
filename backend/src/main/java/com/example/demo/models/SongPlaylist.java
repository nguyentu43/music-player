package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class SongPlaylist {

	@NonNull
	@Id
	SongPlaylistId id;

	@ManyToOne
	@JoinColumn(name="song_id", insertable = false, updatable = false)
	private Song song;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="playlist_id", insertable = false, updatable = false)
	private Playlist playlist;

	@NonNull
	@Column(nullable=false, name = "_order")
	private Long order;
}