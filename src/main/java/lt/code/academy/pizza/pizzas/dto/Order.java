package lt.code.academy.pizza.pizzas.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.pizzas.entity.OrderEntity;

import java.math.BigDecimal;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private UUID id;

    @NotBlank
    private Integer quantity;

    @NotBlank
    private String size;

    @NotBlank
    private BigDecimal price;

    public static Order convert(OrderEntity orderEntity) {
        return new Order(
                orderEntity.getId(),
                orderEntity.getQuantity(),
                orderEntity.getSize(),
                orderEntity.getPrice()
        );
    }
}

