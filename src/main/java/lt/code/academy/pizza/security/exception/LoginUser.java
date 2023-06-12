package lt.code.academy.pizza.security.exception;

import lombok.Getter;
import lt.code.academy.pizza.user.dto.User;

@Getter
public class LoginUser {

    private final String name;


    public LoginUser(User user) {
        name = user.getName();

    }
}


