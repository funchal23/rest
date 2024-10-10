package br.com.rest.controller;

import br.com.rest.controller.request.JogadorRequest;
import br.com.rest.domain.JogadorDomain;
import br.com.rest.model.JogadorModel;
import br.com.rest.service.JogadorService;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jogador")
public class JogadorController {

    private JogadorService jogadorService;

    public JogadorController(JogadorService jogadorService) {
        this.jogadorService = jogadorService;
    }

    @PostMapping
    public EntityModel<JogadorDomain> criarJogador(@RequestBody JogadorRequest request) {
        JogadorDomain jogadorDomain = jogadorService.criarJogador(request.getNome(), request.getPosicao(), request.getTime());
        return new JogadorModel(jogadorDomain);
    }

    @GetMapping("/{identificador}")
    public EntityModel<JogadorDomain> buscarJogador(@PathVariable String identificador) {
        JogadorDomain jogadorDomain = jogadorService.buscarJogador(identificador);
        return new JogadorModel(jogadorDomain);
    }
}
