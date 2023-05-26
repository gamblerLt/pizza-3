import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "./img/pizza-logo-long.png";

const Header = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: "wrap", justifyContent: "center" }}>
                <Typography variant="h6" color="inherit" noWrap>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "30px", marginRight: "10px" }}
                    />
                </Typography>
                <nav>
                    {/*<Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Our Pizzas
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Delivery information
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        About Us
                    </Link>*/}
                    <MenuItem path="/" name="Pizzas"/>
                    <MenuItem path="/pizzas/create" name="Create pizza"/>
                    <MenuItem path="/users/login" name="User login"/>
                    <MenuItem path="/orders/create" name="Create Order"/>
                    <MenuItem path="/users/registration" name="Create user"/>

{/*<Routes>
                    <Route path="/" element={<Pizzas/>}/>
                    <Route path="/pizzas/create" element={<Pizzas/>}/>
                    <Route path="/users/login" element={<UserLogin/>}/>
                    <Route path="/orders/create" element={<Order/>}/>
                    <Route path="/users/registration" element={<UserRegistration/>}/>
                </Routes>*/}

                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;