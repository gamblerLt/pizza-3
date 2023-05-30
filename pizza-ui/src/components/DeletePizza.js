import {Button} from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {deletePizza} from "./api/pizzaApi";
import {useNavigate} from "react-router-dom";

const DeletePizza = ({id, removePizza}) => {

    const navigation = useNavigate();

    const onDeletePizza = () => {
        deletePizza(id)
            .then(() => {
                if (removePizza) {
                    removePizza(id);
                }
                navigation('/');
            })
            .catch((err) => console.log(err));
    }

    return (
        <Button variant="outlined"
                type="button"
                color="error" onClick={() => onDeletePizza()}><DeleteOutlinedIcon/></Button>
    );
}

export default DeletePizza;