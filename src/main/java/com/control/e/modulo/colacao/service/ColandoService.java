package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Colando;
import com.control.e.modulo.colacao.repository.ColandoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ColandoService {
    @Autowired
    private ColandoRepository repository;

    public Colando create(Colando colando){
        return repository.save(colando);
    }

    public List<Colando> read(Colando colando){
        return repository.findAll();
    }

    public Colando update(Long id, Colando colando){
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("Colando não encontrado!");
        return repository.save(colando);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }
}
