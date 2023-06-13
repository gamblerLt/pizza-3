import React, { useState } from "react";
import {AppBar, Button, Divider, ListItemIcon, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import logo from "./img/pizza-logo-long.png";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import {Logout, Settings} from "@mui/icons-material";

const Header = () => {
    const user = useSelector((state) => state.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = () => {
        dispatch(removeUser());
    };

    const { t } = useTranslation("header");

    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
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
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        {t("pizzas")}
                    </NavLink>
                    <NavLink
                        to="/pizzas/create"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        {t("create.pizza")}
                    </NavLink>
                    <NavLink
                        to="/users/registration"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        {t("create.user")}
                    </NavLink>
                </nav>

                {user ?
                    <>
                        <Button
                            onClick={handleClick}
                            size="small"
                            sx={{ mx: 2 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            {user.name}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform: "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: "right", vertical: "top" }}
                            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                        >
                            <MenuItem>
                                {user.name}
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings
                                        fontSize="small"
                                        onClick={(event) => event.stopPropagation()}
                                    />
                                </ListItemIcon>
                                Login
                            </MenuItem>
                            <MenuItem onClick={onLogout}>
                                <ListItemIcon>
                                    <Logout
                                        fontSize="small"
                                        onClick={(event) => event.stopPropagation()}
                                    />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                 :
                    <Button
                        variant="outlined"
                        sx={{ my: 1, mx: 1.5 }}
                        component={NavLink}
                        to="users/login"
                    >
                        Login
                    </Button>
                }
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
