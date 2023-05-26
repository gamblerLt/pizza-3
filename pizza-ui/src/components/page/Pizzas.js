import {useEffect, useState} from "react";
import {getPizzas} from "../api/pizzaApi";
import {CircularProgress, Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Pizzas = () => {

    const [loading, setLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);

    useEffect( () => {
    getPizzas()
        .then(({data}) => setPizzas(data))
        .catch((error) => console.log('error ', error))
        .finally(() => setLoading(false));
});


return (
    <>
        {
            loading ? <CircularProgress/> :

                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>Size</StyledTableCell>
                                <StyledTableCell>Description</StyledTableCell>
                                <StyledTableCell align="center">Picture</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pizzas.map((pizza) => (
                                <StyledTableRow key={pizza.id}>
                                    <StyledTableCell component="th" scope="row">{pizza.title}</StyledTableCell>
                                    <StyledTableCell>{pizza.size}</StyledTableCell>
                                    <StyledTableCell>{pizza.description}</StyledTableCell>
                                  {/*<StyledTableCell align="center">{pizza.picture}</StyledTableCell>*/}
                                    <img src={`http://localhost:3000/${pizza.picture}`} alt={pizza.title} style={{ width: "100px", height: "100px" }} />


                                    <StyledTableCell align="right">{pizza.price} €</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        }
    </>
)
}
export default Pizzas;