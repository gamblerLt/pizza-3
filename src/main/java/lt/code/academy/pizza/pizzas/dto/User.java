package lt.code.academy.pizza.pizzas.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.pizzas.entity.PizzaEntity;
import lt.code.academy.pizza.pizzas.entity.UserEntity;

import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private UUID id;

    @NotBlank
    private String name;
    @NotBlank
    private String phone;
    @NotBlank
    private String address;

    public static User convert(UserEntity userEntity) {
        return new User(
                userEntity.getId(),
                userEntity.getName(),
                userEntity.getPhone(),
                userEntity.getAddress()
        );
    }

}
