import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Layout from "../Layout/Layout"
import NotFound from "../Pages/NotFound/NotFound"
import Home from "../Pages/Home/Home"
import Campaigns from "../Pages/Campaigns/Campaigns"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import AddCampaign from "../Pages/AddCampaign/AddCampaign"
import MyCampaigns from "../Pages/MyCampaigns/MyCampaigns"
import MyDonation from "../Pages/MyDonation/MyDonation"
import Details from "../Pages/Campaign-details/Details"
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
                path: 'campaign/:id',
                element: <PrivateRoute><Details /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/add-campaign',
                element: <PrivateRoute><AddCampaign /></ PrivateRoute>
            },
            {
                path: '/my-campaigns',
                element: <PrivateRoute><MyCampaigns /></PrivateRoute>
            },
            {
                path: '/my-donations',
                element: <PrivateRoute><MyDonation /></PrivateRoute>
            }
        ]
    }
])

export default route