package lt.code.academy.pizza.user;

import lt.code.academy.pizza.user.dto.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import lt.code.academy.pizza.Endpoint;

@RestController
@RequestMapping(Endpoint.USERS)
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@Validated @RequestBody User user) {
        userService.createUser(user);
    }
}