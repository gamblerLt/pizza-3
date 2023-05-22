package lt.code.academy.pizza;

public interface Endpoint {

    String pizzaId = "pizzaId";
    String orderId = "orderId";
    String ROOT = "/api";
    String PIZZAS = ROOT + "/pizzas";
    String ORDERS = ROOT + "/orders";
    String PIZZA = "/{"+ pizzaId +"}";
    String ORDER = "/{"+ orderId +"}";
    String SEARCH = "/search";
}
