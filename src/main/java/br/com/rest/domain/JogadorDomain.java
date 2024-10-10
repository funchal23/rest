package br.com.rest.domain;

import br.com.rest.entity.JogadorEntity;

import java.util.UUID;

public class JogadorDomain {

    private String identificador;
    private String nome;
    private String posicao;
    private String time;

    private JogadorDomain(String nome, String time, String posicao) {
        this.identificador = UUID.randomUUID().toString();
        this.posicao = posicao;
        this.time = time;
        this.nome = nome;
    }

    private JogadorDomain(String nome, String time, String posicao, String identificador) {
        this.identificador = identificador;
        this.posicao = posicao;
        this.time = time;
        this.nome = nome;
    }

    public static JogadorDomain from(JogadorEntity jogadorEntity) {
        return new JogadorDomain(jogadorEntity.getNome(), jogadorEntity.getTime(), jogadorEntity.getPosicao(), jogadorEntity.getIdentificador());
    }

    public static JogadorDomain criarJogador(String nome, String posicao, String time) {
        if(nome.isBlank() || time.isBlank() || posicao.isBlank()){
            throw new IllegalArgumentException("Nome, time e posição do jogador não podem ser vazios");
        }
        return new JogadorDomain(nome, time, posicao);
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
