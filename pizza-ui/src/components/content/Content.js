import {Container} from "@mui/material";

const Content = () => {

    return (
        <>
            <Container disableGutters maxWidth="xl" component="main"
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           minHeight: 'calc(100vh - 157px)',
                       }}>
                cia bus musu kontentas
            </Container>
        </>
    );
}

export default Content;