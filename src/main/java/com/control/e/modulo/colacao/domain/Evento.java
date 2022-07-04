package com.control.e.modulo.colacao.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
public class Evento {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String nomeLocal;
    private LocalDateTime dataEvento;
    @ManyToOne(cascade=CascadeType.PERSIST)
    private Endereco endereco;
    @OneToMany
    private Set<Colando> colandos = new HashSet<>();
}
