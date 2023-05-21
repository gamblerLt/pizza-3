package lt.code.academy.pizza.pizzas.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor
public class OrnerNotExistRuntimeException extends RuntimeException{
    private final UUID id;
}
