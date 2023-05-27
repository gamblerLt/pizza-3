import { useEffect, useState } from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import styled from "@emotion/styled";
import { deletePizza } from '../api/pizzaApi';
import DeleteIcon from "@mui/icons-material/Delete";
import { getPizzas } from "../api/pizzaApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const Pizzas = () => {
    const [loading, setLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas()
            .then(({ data }) => setPizzas(data))
            .catch((error) => console.log("error ", error))
            .finally(() => setLoading(false));
    });

    const handleDeletePizza = (id) => {
        // Implement the logic to delete the pizza with the given id
        // e.g., send a delete request to the server
        deletePizza(id)
            .then(() => {
                // Remove the deleted pizza from the list
                setPizzas((prevPizzas) =>
                    prevPizzas.filter((pizza) => pizza.id !== id)
                );
            })
            .catch((error) => console.log("error ", error));
    };

    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>Size</StyledTableCell>
                                <StyledTableCell>Description</StyledTableCell>
                                <StyledTableCell align="center">Picture</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell> {/* Add the Actions column */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pizzas.map((pizza) => (
                                <StyledTableRow key={pizza.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {pizza.title}
                                    </StyledTableCell>
                                    <StyledTableCell>{pizza.size}</StyledTableCell>
                                    <StyledTableCell>{pizza.description}</StyledTableCell>
                                    <StyledTableCell>
                                        <img
                                            src={`http://localhost:3000/${pizza.picture}`}
                                            alt={pizza.title}
                                            style={{ width: "100px", height: "100px" }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {pizza.price} €
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {/* Render the delete icon with an onClick handler */}
                                        <DeleteIcon
                                            onClick={() => handleDeletePizza(pizza.id)}
                                            color="secondary"
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default Pizzas;
