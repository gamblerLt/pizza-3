import {useEffect, useState} from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    TextField,
} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {deletePizza} from '../api/pizzaApi';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {getPizzas} from "../api/pizzaApi";
import {updatePizza} from "../api/pizzaApi";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const StyledTableRow = styled(TableRow)(({theme}) => ({
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
            .then(({data}) => setPizzas(data))
            .catch((error) => console.log("error ", error))
            .finally(() => setLoading(false));
    }, []);

    const handleDeletePizza = (id) => {
        deletePizza(id)
            .then(() => {
                setPizzas((prevPizzas) =>
                    prevPizzas.filter((pizza) => pizza.id !== id)
                );
            })
            .catch((error) => console.log("error ", error));
    };

    return (
        <>
            {
                loading ? <CircularProgress/> :


                <GridContainer>
                    {pizzas.map((pizza) => (
                        <Paper key={pizza.id}>
                            <NavLink to={`/pizzas/${pizza.id}`}>
                                <img
                                    src={`http://localhost:3000/${pizza.picture}`}
                                    alt={pizza.title}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </NavLink>
                            <StyledTableCell>{pizza.title}</StyledTableCell>
                            <StyledTableCell>{pizza.size}</StyledTableCell>
                            <StyledTableCell>{`${pizza.price} €`}</StyledTableCell>
                            <StyledTableCell>
                                <DeleteIcon
                                    onClick={() => handleDeletePizza(pizza.id)}
                                    color="secondary"
                                />
                            </StyledTableCell>
                            <StyledTableRow>
                                <StyledTableCell colSpan={4}>
                                    {pizza.description}
                                </StyledTableCell>
                            </StyledTableRow>
                        </Paper>
                    ))}
                </GridContainer>
            }
            )
        </>
    );
};
export default Pizzas;