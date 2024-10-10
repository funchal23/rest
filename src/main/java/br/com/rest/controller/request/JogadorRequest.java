package br.com.rest.controller.request;

public class JogadorRequest {

    private String nome;
    private String posicao;
    private String time;

    public String getNome() {
        return nome;
    }

    public String getPosicao() {
        return posicao;
    }

    public String getTime() {
        return time;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
