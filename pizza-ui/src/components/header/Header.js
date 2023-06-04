import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "./img/pizza-logo-long.png";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";



const Header = () => {

    const {t} = useTranslation('header');


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


                  {/*  <MenuItem path="/" value={t('pizzas')}/>
                    <MenuItem path="/pizzas/create" value={t('create.pizza')}/>
                    <MenuItem path="/orders" value={t('orders')}/>
                    <MenuItem path="/users/registration" value={t('create.user')}/>
                    <MenuItem path="/users/login" value={t('login')}/>*/}

                    <MenuItem path="/" name={t("pizzas")} />
                    <MenuItem path="/pizzas/create" name={t("create.pizza")} />
                    <MenuItem path="/orders" name={t("orders")} />
                    <MenuItem path="/users/registration" name={t("create.user")} />
                    <MenuItem path="/users/login" name={t("login")} />

                    {/*<Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Our Pizzas
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Delivery information
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        About Us
                    </Link>*/}
                    {/*<MenuItem path="/" name="Pizzas"/>
                    <MenuItem path="/pizzas/create" name="Create pizza"/>
                    <MenuItem path="/orders" name="Orders"/>
                    <MenuItem path="/users/registration" name="User Registration"/>
                    <MenuItem path="/users/login" name="User login"/>
                    */}


{/*<Routes>
                    <Route path="/" element={<Pizzas/>}/>
                    <Route path="/pizzas/create" element={<Pizzas/>}/>
                    <Route path="/users/login" element={<UserLogin/>}/>
                    <Route path="/orders/create" element={<Order/>}/>
                    <Route path="/users/registration" element={<UserRegistration/>}/>
                </Routes>*/}

                </nav>
                <LanguageSwitcher/>
             {/*   <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>*/}
            </Toolbar>
        </AppBar>
    );
}

export default Header;