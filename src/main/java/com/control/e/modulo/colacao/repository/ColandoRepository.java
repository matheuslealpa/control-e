package com.control.e.modulo.colacao.repository;

import com.control.e.modulo.colacao.domain.Colando;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColandoRepository extends JpaRepository<Colando, Long> {

}
