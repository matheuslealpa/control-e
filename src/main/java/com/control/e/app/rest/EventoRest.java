package com.control.e.app.rest;
import com.control.e.app.domain.Colando;
import com.control.e.app.domain.Evento;
import com.control.e.app.repository.ColandoRepository;
import com.control.e.app.repository.specification.ColandoSpecification;
import com.control.e.app.service.EventoService;
import com.control.e.core.RSQLParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/eventos")
public class EventoRest {

    @Autowired
    private EventoService service;

    @Autowired
    private ColandoRepository colandoRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Evento create(@RequestBody Evento evento){
        return service.create(evento);
    }

    @GetMapping
    public Page<Evento> findAll(RSQLParam q, Pageable pageable){
        return service.findAll(q.getSpecification(), pageable);
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

    @GetMapping("/{idEvento}/_colandos")
    public Page<Colando> findColandoByIdEvento(@PathVariable Long idEvento, RSQLParam q, Pageable pageable){
        Specification<Colando> spec = Specification
                .where(ColandoSpecification.eventoEqualsId(idEvento))
                .and(q.getSpecification());
        return colandoRepository.findAll(spec, pageable);
    }

}
