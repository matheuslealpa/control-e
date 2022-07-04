package com.control.e.modulo.colacao.service;

import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.domain.Endereco;
import com.control.e.modulo.colacao.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

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

    public Endereco update(Long id, Endereco endereco){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("Endereço não encontrado");
        return repository.save(endereco);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }
}
