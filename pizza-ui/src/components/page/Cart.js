import styled from "@emotion/styled/dist/emotion-styled.cjs";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow, Button} from "@mui/material";
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
const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const Cart = () => {
    const dispatcher = useDispatch();
    const pizzas = useSelector(state => state.cart);
    const totalPrice = pizzas.reduce((sum, {cartQuantity, price}) => sum + cartQuantity) * price
),
    0
)
    ;

    const increaseCartQuantity = (id) => dispatcher(increaseCartQuantity(id));
    const decreaseCartQuantity = (id) => dispatcher(decreaseCartQuantity(id));

    const deletePizza = (id) => dispatcher(deleteFromCart(id));

    return (
        <>
            {
                pizzas.length > 0 ?
                    <>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 700}} aria-label="customized table"}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Title</StyledTableCell>
                                        <StyledTableCell align="center">Size</StyledTableCell>
                                        <StyledTableCell>Description</StyledTableCell>
                                        <StyledTableCell align="center">Quantity</StyledTableCell>
                                        <StyledTableCell align="center">Price</StyledTableCell>
                                        <StyledTableCell align="center">Subtotal</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pizzas.map((pizza) => (
                                        <StyledTableRow key={pizza.id}>
                                            <StyledTableCell component="th" scope="row">
                                                <NavLink to={`/pizzas/${pizza.id}`}>
                                                    {pizza.title}
                                                </NavLink>
                                            </StyledTableCell>

                                            <StyledTableCell {pizza.size}></StyledTableCell>

                                            <StyledTableCell sx={{maxWidth: 600}}>{pizza.description}</StyledTableCell>

                                            <StyledTableCell align="center">
                                                <Button variant="outlined" type="button" sx={{p: 0, mr: 1, minWidth: '25px'}}
                                                        onClick={() => decreaseCartQuantity(pizza.id)}
                                                        disabled={pizza.cartQuantity < 2}></Button>
                                                {pizza.cartQuantity}
                                                <Button variant="outlined" type="button" sx={{p: 0, mr: 1, minWidth: '25px'}}
                                                        onClick={() =>
                                                increaseCartQuantity(pizza.id)}
                                                        disabled={pizza.cartQuantity >= pizza.quantity}>+</Button>

                                            </StyledTableCell>



                                        </StyledTableRow>
                                    ))}

                                </TableBody>


                            </Table>


                        </TableContainer>

                    </>
            }
        </>
    )


}
export default Cart;