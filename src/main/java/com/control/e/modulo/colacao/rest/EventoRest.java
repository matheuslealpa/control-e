package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Evento;
import com.control.e.modulo.colacao.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PutMapping(path = "/{id}")
    public Evento update(@PathVariable Integer id, @RequestBody Evento evento){
        return service.update(id, evento);
    }

    @DeleteMapping
    public void delete(@RequestBody Evento evento){
        service.delete(evento.getId());
    }

}
