package lt.code.academy.pizza.pizzas.controller;

import lt.code.academy.pizza.pizzas.dto.User;
import lt.code.academy.pizza.pizzas.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static lt.code.academy.pizza.Endpoint.*;

@RestController
@RequestMapping(USERS)
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getUsers() {
        return userService.getUsers();
    }
    @GetMapping(value = USER, produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable(userId) UUID id) {
        return userService.getUser(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody User user) {
        userService.createUser(user);
    }
    @PutMapping(value = USER, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateUser(@RequestBody User user, @PathVariable(userId) UUID id) {
        user.setId(id);
        userService.updateUser(user);
    }
    @DeleteMapping(USER)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable(userId) UUID id) {
        userService.deleteUser(id);
    }
}
