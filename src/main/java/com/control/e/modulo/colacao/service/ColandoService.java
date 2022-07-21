package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.repository.ColandoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Observable;
import java.util.Optional;

@Service
public class ColandoService {
    @Autowired
    private ColandoRepository repository;

    public Colando create(Colando colando){
        return repository.save(colando);
    }

    public List<Colando> findAll(Colando colando){
        return repository.findAll();
    }

    public Optional<Colando> findById(Long id){
        repository.findById(id).orElseThrow(()-> new EntityNotFoundException("ID " + id + " NOT FOUND."));
        return repository.findById(id);
    }

    public Colando update(Long id, Colando colando){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        return repository.save(colando);
    }

    public void delete(Long id){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID "+id+" NOT FOUND.");
        repository.deleteById(id);
    }
}
