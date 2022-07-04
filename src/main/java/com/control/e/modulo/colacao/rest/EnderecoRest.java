package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
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

    @PutMapping(path = "/{id}")
    public Endereco update(@PathVariable Long id, @RequestBody Endereco endereco){
        return service.update(id, endereco);
    }

    @DeleteMapping
    public void delete(@RequestBody Endereco endereco){
        service.delete(endereco.getId());
    }
}
