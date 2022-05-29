package com.example.demo.helper;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class ValidatorHelper {
	public static <T> BindingResult removeFieldErrors(BindingResult result, T dto, String attributeModelName, String... fields) {
		List<FieldError> errorsToKeep = result.getFieldErrors().stream()
                .filter(fer -> !Arrays.asList(fields).contains(fer.getField()))
                .collect(Collectors.toList());

        result = new BeanPropertyBindingResult(dto, attributeModelName);

        for (FieldError fieldError : errorsToKeep) {
            result.addError(fieldError);
        }
        
        return result;
	}
}
