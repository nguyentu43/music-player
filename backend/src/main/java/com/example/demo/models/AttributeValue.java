package com.example.demo.models;

import javax.persistence.*;
import javax.validation.constraints.*;

import lombok.Data;

@Entity
@Data
public class AttributeValue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Value must not be blank")
	@Column(nullable=false)
	private String value;
	
	@ManyToOne
	@JoinColumn(name = "attribute_id")
	private Attribute attribute;
}
