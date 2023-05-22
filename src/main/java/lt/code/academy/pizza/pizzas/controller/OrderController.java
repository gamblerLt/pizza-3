package lt.code.academy.pizza.pizzas.controller;

import lt.code.academy.pizza.pizzas.dto.Order;
import lt.code.academy.pizza.pizzas.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static lt.code.academy.pizza.Endpoint.*;

@RestController
@RequestMapping(ORDERS)
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Order> getOrders() {
        return orderService.getOrders();
    }
    @GetMapping(value = ORDER, produces = MediaType.APPLICATION_JSON_VALUE)
    public Order getOrder(@PathVariable(orderId) UUID id) {
        return orderService.getOrder(id);
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createOrder(@RequestParam Order order) {
        orderService.createOrder(order);
    }
    @PutMapping(value = ORDER, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateOrder(@RequestParam Order order, @PathVariable(orderId) UUID id) {
        order.setId(id);
        orderService.updateOrder(order);
    }
    @DeleteMapping(ORDER)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable(orderId) UUID id) {
        orderService.deleteOrder(id);
    }
}
