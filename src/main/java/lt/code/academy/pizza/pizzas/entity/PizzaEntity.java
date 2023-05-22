package lt.code.academy.pizza.pizzas.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.pizzas.dto.Pizza;

import java.math.BigDecimal;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pizzas")
public class PizzaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false, columnDefinition = "BINARY(16)")
    private UUID id;



    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, length = 50)
    private String size;

    @Column(nullable = false)
    private String description;

    @Column(nullable = true)
    private String picture;

    @Column(nullable = false)
    private BigDecimal price;

    public static PizzaEntity convert(Pizza pizza) {
        return new PizzaEntity(
                pizza.getId(),
                pizza.getTitle(),
                pizza.getSize(),
                pizza.getDescription(),
                pizza.getPicture(),
                pizza.getPrice()
        );
    }
}


