import HTTP from "./index";

const createUser = (user) => HTTP.post('/users', user);
const getUserById = (id) => HTTP.get(`/users/${id}`);

export {
    createUser,
    getUserById
}





/*


import HTTP from "./index";

const getPizzas =  () => HTTP.get('/pizzas');
const savePizza = (pizza) => HTTP.post('/pizzas', pizza);

const updatePizza = (id, pizza) => HTTP.put(`/pizzas/${id}`, pizza);

const deletePizza = (id, pizza) => HTTP.delete(`/pizzas/${id}`, pizza);
const getPizzaById = (id) => HTTP.get(`/pizzas/${id}`);

export {
    getPizzas,
    savePizza,
    updatePizza,
    deletePizza,
    getPizzaById
}*/
