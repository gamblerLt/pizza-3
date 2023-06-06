package lt.code.academy.pizza;

public interface Endpoint {

    String pizzaId = "pizzaId";
    String orderId = "orderId";
    String userId = "userId";
    String ROOT = "/api";
    String PIZZAS = ROOT + "/pizzas";
    String ORDERS = ROOT + "/orders";

    String USERS = ROOT + "/users";
    String PIZZA = "/{"+ pizzaId +"}";
    String ORDER = "/{"+ orderId +"}";
    String USER = "/{"+ userId +"}";
    String SEARCH = "/search";

    String LOGIN = "/login";
}
