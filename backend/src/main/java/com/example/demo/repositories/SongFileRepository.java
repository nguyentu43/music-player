package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.SongFile;

public interface SongFileRepository extends CrudRepository<SongFile, Long> {

}
