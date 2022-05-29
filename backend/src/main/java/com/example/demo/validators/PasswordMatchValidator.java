package com.example.demo.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.BeanWrapperImpl;

import com.example.demo.annotations.PasswordMatch;

public class PasswordMatchValidator implements ConstraintValidator<PasswordMatch, Object> {

	private String field;
	private String fieldMatch;
	
	@Override
	public void initialize(PasswordMatch constraintAnnotation) {
		field = constraintAnnotation.field();
		fieldMatch = constraintAnnotation.fieldMatch();
	}

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		Object fieldValue = new BeanWrapperImpl(value)
          .getPropertyValue(field);
        Object fieldMatchValue = new BeanWrapperImpl(value)
          .getPropertyValue(fieldMatch);
        
        if (fieldValue != null) {
            return fieldValue.equals(fieldMatchValue);
        } else {
            return fieldMatchValue == null;
        }
	}

}
