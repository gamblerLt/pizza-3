package lt.code.academy.pizza.pizzas.filter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.RequestFacade;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import java.io.IOException;

@Slf4j
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RequestTimerFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException, IOException {
        log.debug("__________________________________________________________");

        StopWatch stopWatch = new StopWatch();
        stopWatch.start();

        filterChain.doFilter(servletRequest, servletResponse);

        stopWatch.stop();

        if(servletRequest instanceof RequestFacade requestFacade){
            log.debug("{} request took: {} ms", requestFacade.getRequestURI(), stopWatch.getLastTaskTimeMillis());
        }
        log.debug("__________________________________________________________");
    }
}
