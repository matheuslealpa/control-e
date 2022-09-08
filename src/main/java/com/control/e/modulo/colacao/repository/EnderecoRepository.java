package com.control.e.modulo.colacao.repository;

import com.control.e.modulo.colacao.domain.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>, JpaSpecificationExecutor<Endereco> {
}
