package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Curso;
import com.control.e.modulo.colacao.domain.Evento;
import com.control.e.modulo.colacao.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/evento")
public class EventoRest {
    @Autowired
    private EventoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Evento create(@RequestBody Evento evento){
        return service.create(evento);
    }

    @GetMapping
    public List<Evento> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Evento>> findById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping(path = "/{id}")
    public Evento update(@PathVariable Long id, @RequestBody Evento evento){
        return service.update(id, evento);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

}
