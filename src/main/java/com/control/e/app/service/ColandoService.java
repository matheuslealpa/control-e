package com.control.e.app.service;
import com.control.e.app.repository.ColandoRepository;
import com.control.e.core.RSQLParam;
import com.control.e.app.domain.Colando;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ColandoService {
    @Autowired
    private ColandoRepository repository;

    public Colando create(Colando colando){
        return repository.save(colando);
    }

    public Page<Colando> findAll(RSQLParam q, Pageable pageable){
        return repository.findAll(q.getSpecification(), pageable);
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
