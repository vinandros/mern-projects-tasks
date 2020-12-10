import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticationContext from "../../context/authentication/authenticationCotext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { authentication, getAuthenticatedUser, loading } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    getAuthenticatedUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Route
      {...props}
      render={(props) =>
        !authentication && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
