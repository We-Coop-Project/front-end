import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth-context";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
};

export default PublicRoute;
