package lt.code.academy.pizza.security;

import lt.code.academy.pizza.Endpoint;
import lt.code.academy.pizza.security.exception.LoginUser;
import lt.code.academy.pizza.user.dto.User;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Endpoint.LOGIN)
public class LoginController {
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginUser login(@AuthenticationPrincipal User user) {
        return new LoginUser(user);
    }
}