package com.control.e.modulo.colacao.service;

import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository repository;

    public Endereco create(Endereco endereco){
        return repository.save(endereco);
    }

    public List<Endereco> findAll(){
        return repository.findAll();
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
