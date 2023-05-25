import {useEffect} from "react";
import {getPizzas} from "../api/pizzaApi";
const Pizzas = () => {
    useEffect( () => {
    getPizzas()
        .then(({data}) => console.log('data ', data))
        .catch((error) => console.log('error ', error))
        .finally(() => console.log('finaly'));
});


return (
        <div>Landing page under construction...</div>
    )
}
export default Pizzas;