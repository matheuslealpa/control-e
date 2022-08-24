package com.control.e.modulo.colacao.rest;

import com.control.e.modulo.colacao.domain.Convidado;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.service.ConvidadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/convidados")
public class ConvidadoRest {

    @Autowired
    private ConvidadoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Convidado create(@RequestBody Convidado convidado){
        return service.create(convidado);
    }

    @GetMapping
    public List<Convidado> findAll(){
        return service.findAll();
    }

    public ResponseEntity<Optional<Convidado>> findById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping(path = "/{id}")
    public Convidado update(@PathVariable Long id, @RequestBody Convidado convidado){
        return service.update(id, convidado);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
