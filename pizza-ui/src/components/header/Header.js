import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
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
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Our Pizzas
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        Delivery information
                    </Link>
                    <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                        About Us
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;