package lt.code.academy.pizza.pizzas.repository;

import lt.code.academy.pizza.pizzas.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

}
