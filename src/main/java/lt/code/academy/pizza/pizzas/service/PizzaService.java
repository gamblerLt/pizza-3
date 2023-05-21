package lt.code.academy.pizza.pizzas.service;

import lt.code.academy.pizza.pizzas.dto.Pizza;
import lt.code.academy.pizza.pizzas.entity.PizzaEntity;
import lt.code.academy.pizza.pizzas.exception.PizzaNotExistRuntimeException;
import lt.code.academy.pizza.pizzas.repository.PizzaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<Pizza> getPizzaByPage(Pageable pageable) {
        return pizzaRepository.findAll(pageable)
                .map(Pizza::convert);
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

    //public List<Pizza> getPizzasByTitleBySizeAndByPrice
}

/*public List<Product> getProductsByCategory(String category) {
		return productRepository.findAllByCategoryContainsOrNameContainsOrDescriptionContains(category, category, category)
				.stream()
				.map(Product::convert)
				.toList();
	}

	public List<Product> getProductsByCategoryAndPrice(String category, BigDecimal price) {
		return productRepository.getProductsByCategoryAndPrice(category ,price)
				.stream()
				.map(Product::convert)
				.toList();
	}

	public List<Product> getFilteredProducts(String category, BigDecimal price) {
		if(category != null && !category.isBlank()) {

			if(price!= null && !price.equals(0)) {
				return getProductsByCategoryAndPrice(category, price);
			}

			return getProductsByCategory(category);
		}

		return getProduc*/