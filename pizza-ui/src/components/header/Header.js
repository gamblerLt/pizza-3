import {
    AppBar,
    Avatar,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    Menu,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
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

                <nav>
                    <MenuItem path="/" name={t("pizzas")} />

                    {user && (
                        <MenuItem path="/pizzas/create" name={t("create.pizza")} />
                    )}
                    <MenuItem path="/users/registration" name={t("header:create.user")} />
                    {!user && (
                    <MenuItem path="/users/login" name={t("login:user_login")} />
                )}
                    {user && (
                    <MenuItem path="/" name={t("login:user_logout")} onClick={handleLogout} />
                    )}
                </nav>
                <Typography variant="body1" color="inherit" noWrap>
                    {user && `${user.name}`}
                </Typography>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Header;

/*
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
    AppBar,
    Avatar,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    Menu,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import MenuItem from "./MenuItem";
import logo from "./img/pizza-logo-long.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import { removeUser } from "../../store/slices/userSlice";
import { Logout, Settings } from "@mui/icons-material";

const Header = () => {
    const user = useSelector((state) => state.user.user);
    const { t } = useTranslation("header");
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogout = () => {
        dispatch(removeUser());
    };

    // Handle clearing user data when logging out and refreshing the page
    React.useEffect(() => {
        if (!user && location.pathname !== "/users/login") {
            // User is logged out and not on the login page, redirect to the login page
            window.location.href = "/users/login";
        }
    }, [user, location.pathname]);

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

                <nav>
                    <MenuItem path="/" name={t("pizzas")} />
                    <MenuItem path="/pizzas/create" name={t("create.pizza")} />
                    <MenuItem path="/users/registration" name={t("create.user")} />
                    <MenuItem path="/users/login" name={t("login:user_login")} />
                    <MenuItem path="/" name={t("login:user_logout")} onClick={handleLogout} />

                </nav>

                <Typography variant="body1" color="inherit" noWrap>
                    {user && `Hi, ${user.name}`}
                </Typography>

                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
*/
