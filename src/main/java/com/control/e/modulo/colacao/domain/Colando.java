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
    private Long matricula;
    private String nome;
    @ManyToOne(cascade=CascadeType.PERSIST)
    private Curso curso;
    @OneToMany(cascade=CascadeType.PERSIST)
    private List<Convidado> convidados;

}
