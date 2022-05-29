package com.example.demo.annotations;

import java.lang.annotation.*;

import javax.validation.Constraint;

import com.example.demo.validators.PasswordConstraintValidator;

@Documented
@Constraint(validatedBy = PasswordConstraintValidator.class)
@Target({ ElementType.TYPE, ElementType.FIELD, ElementType.ANNOTATION_TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPassword {

    String message() default "Invalid Password";
    Class<?>[] groups() default {};
    Class<? extends Package>[] payload() default {};

}
