import {NavLink} from "react-router-dom";
import {Link} from "@mui/material";

const MenuItem = ({path, name}) => (
    <Link
        variant="button"
        color="text.primary"
        to={path}
        component={NavLink}
        sx={{my: 1, mx: 1.5}}>
        {name}
    </Link>
)

export default MenuItem;