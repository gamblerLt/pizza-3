/*
package lt.code.academy.pizza.pizzas.service;


import lt.code.academy.pizza.pizzas.dto.User;
import lt.code.academy.pizza.pizzas.entity.UserEntity;
import lt.code.academy.pizza.pizzas.exception.UserNotExistRuntimeException;
import lt.code.academy.pizza.pizzas.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(User user) {
        userRepository.save(UserEntity.convert(user));
    }

    public List<User> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(User::convert)
                .toList();
    }

    public User getUser(UUID id) {
        return userRepository.findById(id)
                .map(User::convert)
                .orElseThrow(() -> new UserNotExistRuntimeException(id)
                );
    }

    public void updateUser(User user) {
        getUser(user.getId());
        userRepository.save(UserEntity.convert(user));
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}



  */
/*  public List<UserRegistration> search(String text)
       return userRep...

    {
            .stream()
            .map(Pizza::convert)
            .toList();
    }*//*


*/
