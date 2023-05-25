import {Container} from "@mui/material";
import Pizza from "../forms/Pizza";
import UserRegistration from "../forms/UserRegistration";
import UserLogin from "../forms/UserLogin";
import Order from "../forms/Order";

const Content = () => {

    return (
        <>
            <Container disableGutters maxWidth="xl" component="main"
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           minHeight: 'calc(100vh - 157px)',
                           mt: 4
                       }}>

               <Pizza/>
                <UserRegistration/>
                <UserLogin/>
                <Order/>


            </Container>
        </>
    );
}

export default Content;