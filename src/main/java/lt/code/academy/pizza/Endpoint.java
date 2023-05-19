package lt.code.academy.pizza;

public interface Endpoint {

    String pizzaId = "pizzaId";
    String ROOT = "/api";
    String PIZZAS = ROOT + "/pizzas";
    String PIZZA = "/{"+ pizzaId +"}";
    String SEARCH = "/search";
}
