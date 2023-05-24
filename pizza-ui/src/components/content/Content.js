import {Container} from "@mui/material";
import Pizza from "../forms/Pizza";

const Content = () => {

    return (
        <>
            <Container disableGutters maxWidth="xl" component="main"
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           minHeight: 'calc(100vh - 157px)',
                       }}>
               <Pizza/>

            </Container>
        </>
    );
}

export default Content;