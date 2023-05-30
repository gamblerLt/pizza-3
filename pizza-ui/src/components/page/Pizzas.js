import { useEffect, useState } from "react";
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { getPizzas } from "../api/pizzaApi";
import styled from "@emotion/styled";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeletePizza from "../DeletePizza";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledImage = styled.img`
    width: 40vh;
    height: 40vh;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 30vh;
        height: 30vh;
    }

    @media (max-width: 480px) {
        width: 20vh;
        height: 20vh;
    }
`;

const Pizzas = () => {
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas()
            .then(({ data }) => setPizzas(data))
            .catch((error) => console.log("error ", error))
            .finally(() => setLoading(false));
    }, []);

    const removePizza = (id) => {
        const filterPizzas = pizzas.filter(p => p.id !== id);
        setPizzas(filterPizzas);

    }

    return (
        <>
            {
                loading ?
                <CircularProgress />
            :
                <GridContainer>
                    {pizzas.map((pizza) => (
                        <Paper key={pizza.id}>
                            <NavLink to={`/pizzas/${pizza.id}`}>
                                <StyledImage
                                    src={`http://localhost:3000/${pizza.picture}`}
                                    alt={pizza.title}
                                />
                            </NavLink>
                            <StyledTableCell>{pizza.title}</StyledTableCell>
                            <StyledTableCell>{pizza.size}</StyledTableCell>
                            <StyledTableCell>{`${pizza.price} €`}</StyledTableCell>

                            <StyledTableCell align="right">
                                <DeletePizza key={pizza.id}
                                               id={pizza.id}
                                               removePizza={removePizza}/>
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
        </>
    );
};

export default Pizzas;
