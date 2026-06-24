package com.restaurante.reservas.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class AdminControllerTest {

    @Autowired
    private AdminController adminController;

    @Test
    public void testLoginSuccess() {
        Map<String, String> body = new HashMap<>();
        body.put("password", "maruryou2026");
        ResponseEntity<Void> response = adminController.login(body);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testLoginFailure() {
        Map<String, String> body = new HashMap<>();
        body.put("password", "wrongpassword");
        ResponseEntity<Void> response = adminController.login(body);
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }
}
