import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "./img/pizza-logo-long.png";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {removeUser} from "../../store/slices/userSlice";


const Header = () => {

   // const pizzas = useSelector(state => state.cart);
   // const totalQuantity = products.reduce((sum, {cartQuantity}) => sum + cartQuantity, 0);
   // const {t} = useTranslation('header');
    const user = useSelector(state => state.user.user);
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
    }

    const {t} = useTranslation('header');



    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>

            <Toolbar sx={{flexWrap: "wrap", justifyContent: "center"}}>
                <Typography variant="h6" color="inherit" noWrap>
                    <Link component={NavLink} to="/" underline="none">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '30px', marginRight: '10px' }}
                        />
                    </Link>
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