import HTTP from "./index";

const getPizzas =  () => HTTP.get('/pizzas');
const savePizza = (pizza) => HTTP.post('/pizzas', pizza);

const updatePizza = (id, pizza) => HTTP.put(`/pizzas/${id}`, pizza);

const deletePizza = (id, pizza) => HTTP.delete(`/pizzas/${id}`, pizza);

export {
    getPizzas,
    savePizza,
    updatePizza,
    deletePizza
}