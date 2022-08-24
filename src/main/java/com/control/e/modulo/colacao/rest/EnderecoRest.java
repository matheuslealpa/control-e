package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public List<Endereco> findAll(){
        return service.findAll();
    }

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
