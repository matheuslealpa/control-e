package com.control.e.modulo.colacao.rest;

import com.control.e.modulo.colacao.domain.Convidado;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.service.ConvidadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/convidado")
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
