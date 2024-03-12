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
import Review from "../Pages/DashBoard/Review/Review";
import Bookings from "../Pages/DashBoard/Bookings/Bookings";
import Book from "../Pages/DashBoard/Book/Book";
import Payments from "../Pages/DashBoard/Payments/Payments";
import OrderList from "../Pages/DashBoard/OrderList/OrderList";
import AdminRoute from "../Provider/AdminRoute";
import AddServices from "../Pages/DashBoard/AddServices/AddServices";
import PrivateRoute from "../Provider/PrivateRoute";
import MakeAdmin from "../Pages/DashBoard/MakeAdmin/MakeAdmin";

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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : "review",
                element : <Review></Review>
            },
            {
                path : 'bookings',
                element : <Bookings></Bookings>,
                loader : () => fetch("http://localhost:5000/bookingsData")
            },
            {
                path : "book",
                element : <Book></Book>
            },
            {
                path : 'payments',
                element : <Payments></Payments>
            },

            // admin dashboard
            {
                path : 'order-list',
                element : <AdminRoute><OrderList></OrderList></AdminRoute>,
                loader : () => fetch("http://localhost:5000/orders")
            },
            {
                path : 'add-service',
                element : <AdminRoute><AddServices></AddServices></AdminRoute>
            },
            {
                path : "make-admin",
                element : <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            }
        ]
    }
]);
export default router;