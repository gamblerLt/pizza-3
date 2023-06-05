package lt.code.academy.pizza.user.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.pizza.user.dto.User;


import java.util.Set;
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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<RoleEntity> roles;

    public static UserEntity convert(User user) {
        return new UserEntity(
                user.getId(),
                user.getName(),
                user.getPhone(),
                user.getAddress(),
                user.getEmail(),
                user.getPassword()
                //Set.of(new RoleEntity(UUID.fromString("b26cb831-9427-41ee-adcc-271f7b02d611"), "USER")));
        );
    }
}
