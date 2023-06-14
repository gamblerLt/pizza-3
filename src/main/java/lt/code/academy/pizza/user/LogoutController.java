package lt.code.academy.pizza.user;


import lt.code.academy.pizza.Endpoint;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Endpoint.USERS)
public class LogoutController {

    @PostMapping(value = Endpoint.LOGOUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void logout() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            SecurityContextHolder.getContext().setAuthentication(null);
        }
    }
}
