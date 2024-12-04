import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Layout from "../Layout/Layout"
import NotFound from "../Pages/NotFound/NotFound"
import Home from "../Pages/Home/Home"
import Campaigns from "../Pages/Campaigns/Campaigns"
import details from "../Pages/Campaign-details/details"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path:"",
                element: <Home />
            },
            {
                path:"/campaigns",
                element: <Campaigns />
            },
            {
                path: 'campaign-details/:id',
                element: <PrivateRoute><details /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default route