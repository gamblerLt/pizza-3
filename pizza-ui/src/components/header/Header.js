import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pizza UI
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Menu</Button>
                <Button color="inherit">Order</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;