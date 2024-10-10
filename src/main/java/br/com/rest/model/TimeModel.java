package br.com.rest.model;

import br.com.rest.controller.JogadorController;
import br.com.rest.controller.TimeController;
import br.com.rest.domain.TimeDomain;
import org.springframework.hateoas.EntityModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

public class TimeModel extends EntityModel<TimeDomain> {
    public TimeModel(TimeDomain time) {
        super(time);
        add(linkTo(methodOn(TimeController.class).buscarTime(time.getIdentificador())).withRel("Buscar este time"));
        time.getJogadores().forEach(jogador -> add(linkTo(methodOn(JogadorController.class).buscarJogador(jogador)).withRel("Detalhe de cada jogador")));
    }
}