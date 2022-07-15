package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Convidado;
import com.control.e.modulo.colacao.repository.ConvidadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ConvidadoService {
    @Autowired
    private ConvidadoRepository repository;

    public Convidado create(Convidado convidado){
        return repository.save(convidado);
    }

    public List<Convidado> findAll(){
        return repository.findAll();
    }

    public Convidado update(Long id, Convidado convidado){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("Convidado não encontrado");
        return repository.save(convidado);
    }

    public void delete(Long id){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        repository.deleteById(id);
    }
}
