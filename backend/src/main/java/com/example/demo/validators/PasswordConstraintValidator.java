package com.example.demo.validators;

import java.util.Arrays;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.passay.*;

import com.example.demo.annotations.ValidPassword;

public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword, String> {

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		PasswordValidator validator = new PasswordValidator(Arrays.asList(
           new LengthRule(8, 25),
           new WhitespaceRule())
		);

        RuleResult result = validator.validate(new PasswordData(value));
        if (result.isValid()) {
            return true;
        }
        
        context.disableDefaultConstraintViolation();
        context.buildConstraintViolationWithTemplate(
        		String.join( ",", validator.getMessages(result)))
        .addConstraintViolation();
        return false;
	}
}