package com.control.e.modulo.colacao.repository;

import com.control.e.modulo.colacao.domain.Convidado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ConvidadoRepository extends JpaRepository<Convidado, Long>, JpaSpecificationExecutor<Convidado> {
}
