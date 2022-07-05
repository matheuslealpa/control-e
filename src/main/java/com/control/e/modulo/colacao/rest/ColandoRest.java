package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.service.ColandoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/colandos")
public class ColandoRest {

    @Autowired
    private ColandoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Colando create(@RequestBody Colando colando){
        return service.create(colando);
    }

    @GetMapping
    public List<Colando> read(Colando colando){
        return service.findAll(colando);
    }

    @PutMapping(path = "/{id}")
    public Colando update(@PathVariable Long id, @RequestBody Colando colando){
        return service.update(id, colando);
    }

    @DeleteMapping
    public void delete(@RequestBody Colando colando){
        service.delete(colando.getId());
    }

}
