package com.control.e.app.repository;

import com.control.e.app.domain.Colando;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ColandoRepository extends JpaRepository<Colando, Long>, JpaSpecificationExecutor<Colando> {

}
