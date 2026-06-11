package com.restaurante.reservas.controller;

import com.restaurante.reservas.model.Reserva;
import com.restaurante.reservas.repository.ReservaRepository; // <-- ¡Este import es vital!
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @PostMapping
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva reserva) {
        try {
            Reserva nuevaReserva = reservaRepository.save(reserva);
            return new ResponseEntity<Reserva>(nuevaReserva, HttpStatus.CREATED); // Especificamos <Reserva> explícitamente para evitar dudas
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> obtenerTodasLasReservas() {
        List<Reserva> reservas = reservaRepository.findAll();
        return new ResponseEntity<>(reservas, HttpStatus.OK);
    }
}