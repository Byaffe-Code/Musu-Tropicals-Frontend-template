import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
    const isAuthenticated = sessionStorage.getItem('token')
    if (isAuthenticated === undefined) {
        return null;
    }

    return isAuthenticated ? (
        <Route {...props} />
    ) : (
        <Redirect
            to="/logintwo"

        />
    );

}

export default ProtectedRoute