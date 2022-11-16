package com.control.e.app.rest;
import com.control.e.app.service.CursoService;
import com.control.e.core.persistence.datafilter.RSQLParam;
import com.control.e.app.domain.Curso;
import com.control.e.app.repository.CursoRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("api/cursos")
@AllArgsConstructor
public class CursoRest {
    private CursoService service;
    private final CursoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Curso create(@RequestBody Curso curso){
        return service.create(curso);
    }

    @GetMapping
    public Page<Curso> findAll(RSQLParam q, Pageable pageable){
        return service.findAll(q, pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Curso>> findById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping(path = "/{id}")
    public Curso update(@PathVariable Long id, @RequestBody Curso curso){
        return service.update(id, curso);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

    @GetMapping(path = "/find-by-nome")
    public ResponseEntity<Curso> findByNome(@RequestParam String nome){
        return repository.findCursoByNomeIgnoreCase(nome).map(curso -> ResponseEntity.ok(curso))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
