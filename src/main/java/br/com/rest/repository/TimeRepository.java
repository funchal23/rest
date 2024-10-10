package br.com.rest.repository;

import br.com.rest.entity.TimeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TimeRepository extends JpaRepository<TimeEntity, String> {
}
