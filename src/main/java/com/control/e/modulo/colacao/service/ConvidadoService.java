package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.core.RSQLParam;
import com.control.e.modulo.colacao.domain.Convidado;
import com.control.e.modulo.colacao.repository.ConvidadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;


@Service
public class ConvidadoService {
    @Autowired
    private ConvidadoRepository repository;

    public Convidado create(Convidado convidado){
        return repository.save(convidado);
    }

    public Page<Convidado> findAll(RSQLParam q, Pageable pageable){
        return repository.findAll(q.getSpecification(), pageable);
    }

    public Optional<Convidado> findById(Long id){
        repository.findById(id).orElseThrow(()->
                new EntityNotFoundException("ID " + id + " NOT FOUND."));
        return repository.findById(id);
    }

    public Convidado update(Long id, Convidado convidado){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        return repository.save(convidado);
    }

    public void delete(Long id){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        repository.deleteById(id);
    }
}
