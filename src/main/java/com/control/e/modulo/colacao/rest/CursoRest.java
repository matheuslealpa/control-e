package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Curso;
import com.control.e.modulo.colacao.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/cursos")
public class CursoRest {
    @Autowired
    private CursoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Curso create(@RequestBody Curso curso){
        return service.create(curso);
    }

    @GetMapping
    public List<Curso> findAll(){
        return service.findAll();
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


}
