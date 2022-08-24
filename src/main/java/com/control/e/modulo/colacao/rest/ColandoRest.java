package com.control.e.modulo.colacao.rest;
import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.service.ColandoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/colandos")
public class ColandoRest {

    @Autowired
    private ColandoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Colando create(@RequestBody Colando colando){
        return service.create(colando);
    }

    @GetMapping
    public List<Colando> findAll(Colando colando){
        return service.findAll(colando);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Colando>> findById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping(path = "/{id}")
    public Colando update(@PathVariable Long id, @RequestBody Colando colando){
        return service.update(id, colando);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

}
