package com.control.e.app.service;

import com.control.e.core.persistence.datafilter.RSQLParam;
import com.control.e.app.domain.Endereco;
import com.control.e.app.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository repository;

    public Endereco create(Endereco endereco){
        return repository.save(endereco);
    }

    public Page<Endereco> findAll(RSQLParam q, Pageable pageable){
        return repository.findAll(q.getSpecification(), pageable);
    }

    public Optional<Endereco> findById(Long id){
        repository.findById(id).orElseThrow(()-> new EntityNotFoundException("ID " + id + " NOT FOUND."));
        return repository.findById(id);
    }

    public Endereco update(Long id, Endereco endereco){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        return repository.save(endereco);
    }

    public void delete(Long id){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        repository.deleteById(id);
    }
}
