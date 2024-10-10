package br.com.rest.model;

import br.com.rest.controller.JogadorController;
import br.com.rest.controller.TimeController;
import br.com.rest.domain.JogadorDomain;
import org.springframework.hateoas.EntityModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

public class JogadorModel extends EntityModel<JogadorDomain> {
    public JogadorModel(JogadorDomain jogadorDomain) {
        super(jogadorDomain);

        add(linkTo(methodOn(TimeController.class).buscarTime(jogadorDomain.getTime())).withRel("Buscar time"));
        add(linkTo(methodOn(JogadorController.class).buscarJogador(jogadorDomain.getIdentificador())).withRel("Buscar este jogador"));

    }
}
