package lt.code.academy.pizza.security.exception;

import lombok.Getter;
import lt.code.academy.pizza.user.dto.User;
import lt.code.academy.pizza.user.dto.Role;
import lt.code.academy.pizza.user.entity.RoleEntity;

import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class LoginUser {
    //private final String fullName;
    private final String username;
    private final Set<String> roles;//

    public LoginUser(User user) {
        //fullName = user.getFullName();
        username = user.getUsername();
        roles = user.getRoles().stream()
                .map(Role::convert)//converts RoleEntity instances to Role
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
}


