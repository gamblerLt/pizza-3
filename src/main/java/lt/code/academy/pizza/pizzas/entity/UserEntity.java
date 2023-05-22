package lt.code.academy.pizza.pizzas.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.pizzas.dto.User;

import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(nullable = false, length = 255)
    private String address;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    public static UserEntity convert(User user) {
        return new UserEntity(
                user.getId(),
                user.getName(),
                user.getPhone(),
                user.getAddress(),
                user.getEmail(),
                user.getPassword()
        );
    }
}
