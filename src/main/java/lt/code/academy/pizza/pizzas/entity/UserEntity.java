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
    @GeneratedValue
    @Column(updatable = false)
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


/*public class User {
    private UUID id;
    @NotBlank
    private String name;
    @NotBlank
    private String phone;
    @NotBlank
    private String address;

    public static User convert(UserEntity userEntity) {
        return new User(
                .puserEntity.getId(),
        .userEntity.getName(),
        .userEntity..getAddress()
        );
    }

}*/