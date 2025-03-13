import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router";

function ProtectedRoute({children}) {

    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    const location = useLocation();

    if(!isAuthenticated){
        // Redirect to login page but save the attempted location
        console.log(location);
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children
}

export default ProtectedRoute
