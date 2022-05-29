package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Attribute {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name must not be blank")
	@Column(nullable=false)
	private String name;

	@JsonIgnore
	@OneToMany(mappedBy = "attribute", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<AttributeValue> attributeValues = new ArrayList<>();

	@Override
	public String toString() {
		return name;
	}
}
