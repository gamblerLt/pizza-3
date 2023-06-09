package lt.code.academy.pizza.pizzas;

import lt.code.academy.pizza.security.exception.data.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import lt.code.academy.pizza.pizzas.exception.PizzaNotExistRuntimeException;

@RestControllerAdvice(basePackages = "lt/code/academy/pizza/pizzas")
public class PizzaExceptionAdvice {

    @ExceptionHandler(PizzaNotExistRuntimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse handleProductNotExistException(PizzaNotExistRuntimeException ex) {
        return new ExceptionResponse(String.format("Product does not exist by this%s id", ex.getId()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionResponse handleException(Exception e) {
        return new ExceptionResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
