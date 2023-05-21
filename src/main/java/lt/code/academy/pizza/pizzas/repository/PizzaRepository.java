package lt.code.academy.pizza.pizzas.repository;

import lt.code.academy.pizza.pizzas.entity.PizzaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PizzaRepository extends JpaRepository <PizzaEntity, UUID>{

    List<PizzaEntity>findAllByTitleContainsorDescriptionContains(String title, String description);


}
