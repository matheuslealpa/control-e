package com.control.e.app.rest;
import com.control.e.app.domain.Endereco;
import com.control.e.app.service.EnderecoService;
import com.control.e.core.RSQLParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/enderecos")
public class EnderecoRest {
    @Autowired
    private EnderecoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Endereco create(@RequestBody Endereco endereco){
        return service.create(endereco);
    }

    @GetMapping
    public Page<Endereco> findAll(RSQLParam q, Pageable pageable){
        return service.findAll(q, pageable);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Endereco>> findById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping(path = "/{id}")
    public Endereco update(@PathVariable Long id, @RequestBody Endereco endereco){
        return service.update(id, endereco);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
