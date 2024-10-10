package br.com.rest.entity;

import br.com.rest.domain.TimeDomain;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;


@Entity
public class TimeEntity {

    @Id
    private String identificador;
    private String nome;
    private List<String> jogadores;

    protected TimeEntity() {
    }

    private TimeEntity(TimeDomain time) {
        this.identificador = time.getIdentificador();
        this.jogadores = time.getJogadores();
        this.nome = time.getNome();
    }

    public static TimeEntity from(TimeDomain time) {
        return new TimeEntity(time);
    }

    public String getIdentificador() {
        return identificador;
    }

    public String getNome() {
        return nome;
    }

    public List<String> getJogadores() {
        return jogadores;
    }
}
