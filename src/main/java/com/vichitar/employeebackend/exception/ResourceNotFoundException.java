package com.vichitar.employeebackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    private final static long serialVersionUID = 1L;
    public ResourceNotFoundException(String message){
        super(message);
    }
}
