package com.control.e.modulo.colacao.service;
import com.control.e.modulo.colacao.domain.Curso;
import com.control.e.modulo.colacao.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;


@Service
public class CursoService {

    @Autowired
    private CursoRepository repository;


    public Curso create(Curso curso) {
        return repository.save(curso);
    }

    public List<Curso> findAll() {
        return repository.findAll();
    }

    public Curso update(Long id, Curso colando) {
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID " + id + " NOT FOUND.");
        return repository.save(colando);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) throw new
                EntityNotFoundException("ID " + id + " NOT FOUND.");
        repository.deleteById(id);
    }

    public Optional<Curso> findById(Long id) {
        repository.findById(id).orElseThrow(()-> new EntityNotFoundException("ID " + id + " NOT FOUND."));
        return repository.findById(id);
    }

}
