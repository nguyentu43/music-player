package com.example.demo.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class SongPlaylistId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "song_id")
	private Long songId;
	
	@Column(name="playlist_id")
	private Long playlistId;
}
