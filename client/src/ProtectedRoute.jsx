import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ redirectPath = "/signin", children }) => {
    const [cookies] = useCookies(["token"]);
    const isSignIn = cookies.token;
    return isSignIn ? children : <Navigate to={redirectPath} replace />;
}

export default ProtectedRoute;