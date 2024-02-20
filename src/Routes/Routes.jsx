import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<SignUp></SignUp>
            },
            {
                path : 'details/:id',
                element : <Details></Details>,
                loader : ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children : [
            
        ]
    }
]);
export default router;