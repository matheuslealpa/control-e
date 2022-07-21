package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Evento;
import com.control.e.modulo.colacao.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class EventoService {
    @Autowired
    private EventoRepository repository;

    public Evento create(Evento evento){
        return repository.save(evento);
    }

    public List<Evento> findAll(){
       return repository.findAll();
    }

    public Optional<Evento> findById(Long id){
        repository.findById(id).orElseThrow(()->
                new EntityNotFoundException("ID " + id + " NOT FOUND."));
        return repository.findById(id);
    }

    public Evento update(Long id, Evento evento){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        return repository.save(evento);
    }

    public void delete(Long id){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        repository.deleteById(id);
    }

}
