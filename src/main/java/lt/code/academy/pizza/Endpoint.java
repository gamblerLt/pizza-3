package lt.code.academy.pizza;


public interface Endpoint {
    //variable
    String pizzaId = "pizzaId";

    String PIZZAS = "/pizzas";
    String PIZZA = "/{"+ pizzaId +"}";
    String SEARCH = "/search";
    String LOGIN = "/login";
    String USERS = "/users";

    String LOGOUT = "/logout";
}