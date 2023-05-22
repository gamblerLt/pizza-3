package lt.code.academy.pizza.pizzas.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor
public class OrderNotExistRuntimeException extends RuntimeException{
    private final UUID id;
}
