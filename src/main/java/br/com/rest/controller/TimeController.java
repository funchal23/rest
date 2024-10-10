package br.com.rest.controller;


import br.com.rest.controller.request.TimeRequest;
import br.com.rest.domain.TimeDomain;
import br.com.rest.model.TimeModel;
import br.com.rest.service.TimeService;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/time")
public class TimeController {

    private TimeService timeService;

    public TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public EntityModel<TimeDomain> criarTime(@RequestBody TimeRequest request) {
        TimeDomain timeDomain = timeService.criarTime(request.getNome());
        return new TimeModel(timeDomain);
    }

    @PostMapping(produces = MediaType.APPLICATION_XML_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public EntityModel<TimeDomain> criarTimeXml(@RequestBody TimeRequest request) {
        TimeDomain timeDomain = timeService.criarTime(request.getNome());
        return new TimeModel(timeDomain);
    }

    @GetMapping("/{identificador}")
    public EntityModel<TimeDomain> buscarTime(@PathVariable String identificador) {
        TimeDomain timeDomain = timeService.buscarTime(identificador);
        return new TimeModel(timeDomain);
    }

    @PutMapping("/{identificadorDoJogador}/{identificadorDoTime}")
    public EntityModel<TimeDomain> adicionarJogadorAoTime(@PathVariable String identificadorDoJogador, @PathVariable String identificadorDoTime) {
        TimeDomain timeDomain = timeService.adicionarJogadorAoTime(identificadorDoJogador, identificadorDoTime);
        return new TimeModel(timeDomain);
    }
}
