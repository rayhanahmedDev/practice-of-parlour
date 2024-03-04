
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";



const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = UseAuth()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;