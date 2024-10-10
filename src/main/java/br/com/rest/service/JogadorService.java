package br.com.rest.service;


import br.com.rest.domain.JogadorDomain;
import br.com.rest.entity.JogadorEntity;
import br.com.rest.repository.JogadorRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JogadorService {

    private JogadorRepository jogadorRepository;

    public JogadorService(JogadorRepository jogadorRepository) {
        this.jogadorRepository = jogadorRepository;
    }

    public JogadorDomain criarJogador(String nome, String posicao, String time) {
        JogadorDomain jogadorDomain = JogadorDomain.criarJogador(nome, posicao, time);
        jogadorRepository.save(JogadorEntity.from(jogadorDomain));
        return jogadorDomain;
    }

    public JogadorDomain buscarJogador(String identificador) {
        Optional<JogadorEntity> jogador = jogadorRepository.findById(identificador);
        if(jogador.isEmpty()){
            throw new IllegalArgumentException("Jogador não encontrado");
        } else {
            return JogadorDomain.from(jogador.get());
        }
    }
}
