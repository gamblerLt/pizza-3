package lt.code.academy.pizza.pizzas.service;

import lt.code.academy.pizza.pizzas.dto.Order;
import lt.code.academy.pizza.pizzas.entity.OrderEntity;
import lt.code.academy.pizza.pizzas.exception.OrnerNotExistRuntimeException;
import lt.code.academy.pizza.pizzas.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void createOrder(Order order) {
        orderRepository.save(OrderEntity.convert(order));
    }

    public List<Order> getOrders() {
        return orderRepository.findAll()
                .stream()
                .map(Order::convert)
                .toList();
    }

    public Order getOrder(UUID id) {
        return orderRepository.findById(id)
                .map(Order::convert)
                .orElseThrow(() -> new OrnerNotExistRuntimeException(id));
    }

    public void updateOrder(Order order) {
        getOrder(order.getId());
        orderRepository.save(OrderEntity.convert(order));
    }

    public void deleteOrder(UUID id) {
        orderRepository.deleteById(id);
    }
}
