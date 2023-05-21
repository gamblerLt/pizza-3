package lt.code.academy.pizza.pizzas.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.pizzas.entity.PizzaEntity;

import java.math.BigDecimal;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Pizza {
    private UUID id;

    @NotBlank
    private String title;

    @NotBlank
    private String size;

    @NotBlank
    private String description;

    private String picture;

    @NotBlank
    private BigDecimal price;

    public static Pizza convert(PizzaEntity pizzaEntity) {
        return new Pizza(
                pizzaEntity.getId(),
                pizzaEntity.getTitle(),
                pizzaEntity.getSize(),
                pizzaEntity.getDescription(),
                pizzaEntity.getPicture(),
                pizzaEntity.getPrice()

        );
    }
}
