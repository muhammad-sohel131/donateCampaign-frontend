import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../components/Loading/Loading"


export default function PrivateRoute({children}) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading />
    }
    if(user){
        return children
    }
  return (
    <Navigate state={location.pathname} to='/login'></Navigate>
  )
}