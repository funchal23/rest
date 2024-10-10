package br.com.rest.domain;

import br.com.rest.entity.TimeEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class TimeDomain {

    private String identificador;
    private String nome;
    private List<String> jogadores;


    private TimeDomain(String nome) {
        this.identificador = UUID.randomUUID().toString();
        this.jogadores = new ArrayList<>();
        this.nome = nome;
    }

    private TimeDomain(String identificador, String nome, List<String> jogadores) {
        this.identificador = identificador;
        this.jogadores = jogadores;
        this.nome = nome;
    }

    public static TimeDomain from(TimeEntity timeEntity) {
        return new TimeDomain(timeEntity.getIdentificador(), timeEntity.getNome(), timeEntity.getJogadores());
    }

    public static TimeDomain criarTime(String nome) {
        if(nome.isBlank()){
            throw new IllegalArgumentException("Nome do time não pode ser vazio");
        }
        return new TimeDomain(nome);
    }

    public void adicionarJogador(String jogador) {
        this.jogadores.add(jogador);
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
