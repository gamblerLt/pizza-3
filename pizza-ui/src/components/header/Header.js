import {
    AppBar,
    Avatar,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemIcon, Menu,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import Rms from "./Rms";
import logo from "./img/pizza-logo-long.png";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {removeUser} from "../../store/slices/userSlice";
import {Logout, Settings} from "@mui/icons-material";


const Header = () => {


    // const user = useSelector(state => state.user.user);
    const user = useSelector(state => state.user);
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
                    <Rms path="/" name={t("pizzas")}/>
                    <Rms path="/pizzas/create" name={t("create.pizza")}/>
                    <Rms path="/users/registration" name={t("create.user")}/>
                </nav>

                {user ?
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
                            <Rms>
                                <Avatar/>

                            </Rms>
                            <Divider/>
                            {/*<Rms onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small"/>
                                    </ListItemIcon>
                                    Settings
                                </Rms>
                                <Rms onClick={onLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small"/>
                                    </ListItemIcon>
                                    Logout
                                </Rms>*/}
                            <Rms onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" onClick={(event) => event.stopPropagation()} />
                                </ListItemIcon>
                                Settings
                            </Rms>
                            <Rms onClick={onLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" onClick={(event) => event.stopPropagation()} />
                                </ListItemIcon>
                                Logout
                            </Rms>
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
                <LanguageSwitcher/>

            </Toolbar>
        </AppBar>
    )
        ;
}

export default Header;