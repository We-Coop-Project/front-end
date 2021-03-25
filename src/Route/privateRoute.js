import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/User/Loading";
import { Consumer } from "../context/Auth-context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {(context) => {
        if (context.loading) {
          return <Loading />;
        }
        return (
          <Route
            {...rest}
            render={(props) =>
              context.currentUser ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        );
      }}
    </Consumer>
  );
};
export default PrivateRoute;
