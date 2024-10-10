package br.com.rest.repository;

import br.com.rest.entity.JogadorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JogadorRepository extends JpaRepository<JogadorEntity, String> {
}
