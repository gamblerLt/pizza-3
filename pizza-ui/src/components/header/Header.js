import React from "react";

import {
    AppBar,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import PizzaMenuItem from "./PizzaMenuItem";
import logo from "./img/pizza-logo-long.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

const Header = () => {
    const user = useSelector((state) => state.user.user);
    const { t } = useTranslation("header");
    const dispatch = useDispatch();
    const location = useLocation();


    const handleLogout = () => {
        dispatch(removeUser());

    };

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: "wrap", justifyContent: "center" }}>
                <Typography variant="h6" color="inherit" noWrap>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "30px", marginRight: "10px" }}
                        />
                    </NavLink>
                </Typography>

                <PizzaMenuItem path="/" name={t("pizzas")} />
                {user && (
                <PizzaMenuItem path="/pizzas/create" name={t("create.pizza")} />
                )}
                <PizzaMenuItem path="/users/registration" name={t("header:create.user")} />
                {!user && <PizzaMenuItem path="/users/login" name={t("login:user_login")} />}
                {user && (
                <Typography variant="body1" color="inherit" noWrap>

                    <MenuItem>{t("login:user_logged_in")}{ user && `${user.name}`}</MenuItem>

                </Typography>
                )}
                {user && (
                    <MenuItem onClick={() => dispatch(removeUser())}>
                        {t("login:user_logout")}
                    </MenuItem>
                )}


                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
