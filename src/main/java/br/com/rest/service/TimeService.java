package br.com.rest.service;

import br.com.rest.domain.TimeDomain;
import br.com.rest.entity.TimeEntity;
import br.com.rest.repository.TimeRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TimeService {

    private TimeRepository timeRepository;

    public TimeService(TimeRepository timeRepository) {
        this.timeRepository = timeRepository;
    }

    public TimeDomain criarTime(String nome) {
        TimeDomain timeDomain = TimeDomain.criarTime(nome);
        timeRepository.save(TimeEntity.from(timeDomain));
        return timeDomain;
    }

    public TimeDomain buscarTime(String identificador) {
        Optional<TimeEntity> timeEntity = timeRepository.findById(identificador);
        if(timeEntity.isEmpty()){
            throw new IllegalArgumentException("Time não encontrado");
        } else {
            return TimeDomain.from(timeEntity.get());
        }
    }

    public TimeDomain adicionarJogadorAoTime(String identificadorDoJogador, String identificadorDoTime) {
        Optional<TimeEntity> timeEntity = timeRepository.findById(identificadorDoTime);
        if(timeEntity.isEmpty()){
            throw new IllegalArgumentException("Time não encontrado");
        } else {
            TimeEntity time = timeEntity.get();
            TimeDomain timeUpdated = TimeDomain.from(time);
            timeUpdated.adicionarJogador(identificadorDoJogador);
            timeRepository.save(TimeEntity.from(timeUpdated));
            return TimeDomain.from(timeEntity.get());
        }
    }
}
