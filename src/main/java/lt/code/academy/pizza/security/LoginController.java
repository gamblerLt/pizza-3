package lt.code.academy.pizza.security;

import lt.code.academy.pizza.Endpoint;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Endpoint.LOGIN)
public class LoginController
{
    @PostMapping
    public void login() {}
}