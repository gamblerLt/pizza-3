/*
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const SecuredRoute = ({isLoggedIn}) => {
    const user = useSelector(state => state.user.user);
    const allowAccess = isLoggedIn.some(isLi => isLoggedIn.includes(isLi)) : user;

    return allowAccess ? <Outlet/> : <Navigate to="/login"/>
}

export default SecuredRoute;

*/
