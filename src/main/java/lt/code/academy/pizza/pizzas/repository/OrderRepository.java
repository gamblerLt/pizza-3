package lt.code.academy.pizza.pizzas.repository;

import lt.code.academy.pizza.pizzas.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {
    List<OrderEntity>findAllByQuantityByPrice(Integer quantity, BigDecimal price);
}
