package lt.code.academy.pizza.pizzas.repository;

import lt.code.academy.pizza.pizzas.entity.PizzaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface PizzaRepository extends JpaRepository <PizzaEntity, UUID>{


    //for search
    List<PizzaEntity>findAllByTitleContainsOrDescriptionContains(String title, String description);

    @Query("SELECT p FROM PizzaEntity p WHERE p.title = :title AND p.description = :description")
    List<PizzaEntity> getPizzasByTitleAndDescription(@Param("title") String title, @Param("description") String description);


}
