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
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: "wrap", justifyContent: "center"}}>
                <Typography variant="h6" color="inherit" noWrap>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{height: "30px", marginRight: "10px"}}
                    />
                </Typography>
                <nav>
                    <MenuItem path="/" name={t("pizzas")}/>
                    <MenuItem path="/pizzas/create" name={t("create.pizza")}/>
                    <MenuItem path="/users/registration" name={t("create.user")}/>
                </nav>
                <LanguageSwitcher/>

                <Button variant="outlined"
                        sx={{my: 1, mx: 1.5}}
                        component={NavLink}
                        to="users/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;