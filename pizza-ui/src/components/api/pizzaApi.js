import HTTP from "./index";

const getPizzas =  () => HTTP.get('/pizzas');
const savePizza = (pizza) => HTTP.post('/pizzas', pizza);

export {
    getPizzas,
    savePizza
}