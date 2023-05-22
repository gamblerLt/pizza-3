package lt.code.academy.pizza.pizzas.controller;

import lt.code.academy.pizza.pizzas.dto.Pizza;
import lt.code.academy.pizza.pizzas.service.PizzaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static lt.code.academy.pizza.Endpoint.*;

@RestController
@RequestMapping(PIZZAS)
public class PizzaController {
    private final PizzaService pizzaService;

    public PizzaController(PizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Pizza> getPizzas() {
        return pizzaService.getPizzas();
    }
    @GetMapping(value = PIZZA, produces = MediaType.APPLICATION_JSON_VALUE)
    public Pizza getPizza(@PathVariable(pizzaId) UUID id) {
        return pizzaService.getPizza(id);
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createPizza(@RequestBody Pizza pizza) {
        pizzaService.createPizza(pizza);
    }
    @PutMapping(value = PIZZA, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updatePizza(@RequestBody Pizza pizza, @PathVariable(pizzaId) UUID id) {
        pizza.setId(id);
        pizzaService.updatePizza(pizza);
    }
    @DeleteMapping(PIZZA)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePizza(@PathVariable(pizzaId) UUID id) {
        pizzaService.deletePizza(id);
    }
    @GetMapping(value = SEARCH, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Pizza> search(@RequestParam String query) {
        return pizzaService.search(query);
    }

}
