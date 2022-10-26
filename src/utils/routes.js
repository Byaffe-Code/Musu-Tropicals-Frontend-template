import { Navigate } from "react-router";
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (sessionStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Navigate
                to={{
                    pathname: '/login',
                    state: { from: props.history.location },
                }}
            />
        ))
        }
    />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (!sessionStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Navigate
                to={{
                    pathname: '/',
                    state: { from: props.history.location },
                }}
            />
        ))
        }
    />
);
