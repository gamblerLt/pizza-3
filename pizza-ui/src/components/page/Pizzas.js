import {useEffect, useState} from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
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
    const [editPizzaId, setEditPizzaId] = useState(null);
    const [editedFields, setEditedFields] = useState({});

    useEffect(() => {
        getPizzas()
            .then(({data}) => setPizzas(data))
            .catch((error) => console.log("error ", error))
            .finally(() => setLoading(false));
    }, []);

    const handleEditClick = (id) => {
        setEditPizzaId(id);
        setEditedFields({});
    };

    const handleSaveClick = (id) => {
        /*Sukuriu nauja objekta seno objekto pagrindu*/
        const updatedPizza = {
            ...pizzas.find((pizza) => pizza.id === id),
            ...editedFields,
        };

        updatePizza(id, updatedPizza)
            .then(() => {
                setPizzas((prevPizzas) =>
                    prevPizzas.map((pizza) =>
                        pizza.id === id ? {...pizza, ...updatedPizza} : pizza
                    )
                );
                setEditPizzaId(null);
                setEditedFields({});
            })
            .catch((error) => console.log("error ", error));
    };

    const handleFieldChange = (field, value) => {
        setEditedFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
    };

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
            {loading ? (
                <CircularProgress/>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>Size</StyledTableCell>
                                <StyledTableCell>Description</StyledTableCell>
                                <StyledTableCell align="center">Picture</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pizzas.map((pizza) => (
                                <StyledTableRow key={pizza.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {editPizzaId === pizza.id ? (
                                            <TextField
                                                value={editedFields.title || pizza.title}
                                                onChange={(e) =>
                                                    handleFieldChange("title", e.target.value)
                                                }
                                            />
                                        ) : (
                                            pizza.title
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {editPizzaId === pizza.id ? (
                                            <TextField
                                                value={editedFields.size || pizza.size}
                                                onChange={(e) =>
                                                    handleFieldChange("size", e.target.value)
                                                }
                                            />
                                        ) : (
                                            pizza.size
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {editPizzaId === pizza.id ? (
                                            <TextField
                                                value={editedFields.description || pizza.description}
                                                onChange={(e) =>
                                                    handleFieldChange("description", e.target.value)
                                                }
                                            />
                                        ) : (
                                            pizza.description
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <img
                                            src={`http://localhost:3000/${pizza.picture}`}
                                            alt={pizza.title}
                                            style={{width: "100px", height: "100px"}}
                                        />
                                    </StyledTableCell>
                                    {editPizzaId === pizza.id ? (
                                        <>
                                            <StyledTableCell align="right">
                                                <TextField
                                                    value={editedFields.price || pizza.price}
                                                    onChange={(e) =>
                                                        handleFieldChange("price", e.target.value)
                                                    }
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                <SaveIcon
                                                    onClick={() => handleSaveClick(pizza.id)}
                                                    color="primary"
                                                />
                                            </StyledTableCell>
                                        </>
                                    ) : (
                                        <>
                                            <StyledTableCell align="right">
                                                {`${pizza.price} €`}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                <EditIcon
                                                    onClick={() => handleEditClick(pizza.id)}
                                                    color="secondary"
                                                />
                                                <DeleteIcon
                                                    onClick={() => handleDeletePizza(pizza.id)}
                                                    color="secondary"
                                                />
                                            </StyledTableCell>
                                        </>
                                    )}
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
