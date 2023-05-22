package lt.code.academy.pizza.pizzas.service;

import lt.code.academy.pizza.pizzas.dto.Pizza;
import lt.code.academy.pizza.pizzas.entity.PizzaEntity;
import lt.code.academy.pizza.pizzas.exception.PizzaNotExistRuntimeException;
import lt.code.academy.pizza.pizzas.repository.PizzaRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PizzaService {
    private final PizzaRepository pizzaRepository;

    public PizzaService(PizzaRepository pizzaRepository) {
        this.pizzaRepository = pizzaRepository;
    }
    public void createPizza(Pizza pizza) {
        pizzaRepository.save(PizzaEntity.convert(pizza));
    }


    public List<Pizza>getPizzas() {
        return pizzaRepository.findAll()
                .stream()
                .map(Pizza::convert)
                .toList();
    }

    public Pizza getPizza(UUID id) {
        return pizzaRepository.findById(id)
                .map(Pizza::convert)
                .orElseThrow(() -> new PizzaNotExistRuntimeException(id)
                );
    }
    public void updatePizza(Pizza pizza) {
        getPizza(pizza.getId());
        pizzaRepository.save(PizzaEntity.convert(pizza));
    }
    public void deletePizza(UUID id) {
        pizzaRepository.deleteById(id);
    }

    public List<Pizza> search (String text) {
        return pizzaRepository.findAllByTitleContainsOrDescriptionContains(text, text)
                .stream()
                .map(Pizza::convert)
                .toList();
    }
}

