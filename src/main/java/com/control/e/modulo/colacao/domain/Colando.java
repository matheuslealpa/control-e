package com.control.e.modulo.colacao.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Colando {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String matricula;
    private String nome;
    @ManyToOne
    private Curso curso;
    @OneToMany
    private List<Convidado> convidados;

}
