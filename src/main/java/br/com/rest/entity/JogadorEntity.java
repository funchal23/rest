package br.com.rest.entity;


import br.com.rest.domain.JogadorDomain;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class JogadorEntity {

    @Id
    private String identificador;
    private String nome;
    private String posicao;
    private String time;

    protected JogadorEntity() {
    }

    private JogadorEntity(JogadorDomain jogador) {
        this.identificador = jogador.getIdentificador();
        this.posicao = jogador.getPosicao();
        this.time = jogador.getTime();
        this.nome = jogador.getNome();
    }

    public static JogadorEntity from(JogadorDomain jogador) {
        return new JogadorEntity(jogador);
    }

    public String getIdentificador() {
        return identificador;
    }

    public String getNome() {
        return nome;
    }

    public String getPosicao() {
        return posicao;
    }

    public String getTime() {
        return time;
    }
}
