import {Container} from "@mui/material";
import Pizza from "../forms/Pizza";
import Pizzas from "../page/Pizzas";
import UserLogin from "../forms/UserLogin";
import UserRegistration from "../forms/UserRegistration";
import Order from "../forms/Order";
import {Route, Routes} from "react-router-dom";
import PizzaDetailPage from "../page/PizzaDetailPage";
//import Cart from "..page/Cart";


const Content = () => {

    return (
        <>
            <Container disableGutters maxWidth="xl" component="main"
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           minHeight: 'calc(100vh - 157px)',
                           mt: 4
                       }}>

                <Routes>
                    <Route path="/" element={<Pizzas/>}/>
                   {/* <Route path="/pizzas/create" element={<Pizza/>}/>*/}
                    <Route path="/pizzas/create" element={<Pizza key="create"/>}/>
                    <Route path="/users/login" element={<UserLogin/>}/>
                    <Route path="/orders/create" element={<Order/>}/>
                    <Route path="/users/registration" element={<UserRegistration/>}/>
                    <Route path="/pizzas/:id/update" element={<Pizza key="update"/>}/>
                    <Route path="/pizzas/:id" element={<PizzaDetailPage/>}/>
                    <Route path="/login" element={<UserLogin/>}/>
                   {/* <Route path="/cart" element={<Cart/>}/>*/}


                </Routes>
            </Container>
        </>
    );
}

export default Content;