import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/authProvider";


const UserRoute = () => {
    const { token } = useAuth();
    if(!token || token === "initial") {
        return <Navigate to="/signin" />
    }
    return <Outlet/>
}

export default UserRoute