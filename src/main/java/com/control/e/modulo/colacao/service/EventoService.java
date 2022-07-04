package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Evento;
import com.control.e.modulo.colacao.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;

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

    public Evento update(Integer id, Evento evento){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("Informe um id válido");
        return repository.save(evento);
    }

    public void delete(Integer id){
        repository.deleteById(id);
    }

}
