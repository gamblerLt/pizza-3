import HTTP from "./index";

const getPizzas =  () => HTTP.get('/pizzas');

export {
    getPizzas
}