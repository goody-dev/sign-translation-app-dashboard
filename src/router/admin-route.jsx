import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/authProvider";
import Dashboard from "../Dashboard";


const AdminRoute = () => {
    const { token } = useAuth();
    if(!token || token === "initial") {
        return <Navigate to="/signin" />
    }
    return <Dashboard />
}

export default AdminRoute