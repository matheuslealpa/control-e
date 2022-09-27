package com.control.e.modulo.colacao.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String rua;
    private String numero;
    private String cep;
    private String cidade;
    private String estado;
    private String pais;

    @Transient
    private String label;
    
    public String getLabel(){
        return rua + ", " + numero + ", " +
                cep + ", " + cidade + ", " +
                estado + ", " + pais;
    }
}
