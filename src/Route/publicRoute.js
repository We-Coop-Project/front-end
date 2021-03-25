import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/User/Loading";
import { Consumer } from "../context/Auth-context";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Consumer>
      {(context) => {
        if (context.loading) {
          return <Loading />;
        }
        return (
          <Route
            {...rest}
            render={(props) => {
              return context.currentUser && restricted ? (
                <Redirect to="/" />
              ) : (
                <Component {...props} />
              );
            }}
          />
        );
      }}
    </Consumer>
  );
};
export default PublicRoute;
