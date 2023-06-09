package lt.code.academy.pizza.security.exception;

import lombok.Getter;
import lt.code.academy.pizza.user.dto.User;

@Getter
public class LoginUser {

    private final String username;


    public LoginUser(User user) {
        username = user.getUsername();

    }
}


