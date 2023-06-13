import {
    AppBar,
    Avatar,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "./img/pizza-logo-long.png";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {removeUser} from "../../store/slices/userSlice";
import {Logout, Settings} from "@mui/icons-material";


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
                            style={{height: '30px', marginRight: '10px'}}
                        />
                    </Link>
                </Typography>
                <nav>
                    <MenuItem path="/" name={t("pizzas")}/>
                    <MenuItem path="/pizzas/create" name={t("create.pizza")}/> //access it only user is logged in eg:
                    user.isLoggedIn()
                    <MenuItem path="/users/registration" name={t("create.user")}/>
                </nav>
                {
                    user ?
                        <>
                            <Tooltip title="Account">
                                <IconButton onClick={handleClick} size="small" sx={{mx: 2}}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}>
                                    <Avatar sx={{width: 32, height: 32}}></Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                                <MenuItem>
                                    <Avatar/> {user.fullName}
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small"/>
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={onLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small"/>
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                        :
                        <Button variant="outlined"
                                sx={{my: 1, mx: 1.5}}
                                component={NavLink}
                                to="users/login">
                            Login
                        </Button>
                }
                <LanguageSwitcher/>

            </Toolbar>
        </AppBar>
    )
        ;
}

export default Header;