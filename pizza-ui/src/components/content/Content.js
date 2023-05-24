import {Container} from "@mui/material";
import Pizza from "../forms/Pizza";
import User from "../forms/User";

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
                <User/>


            </Container>
        </>
    );
}

export default Content;