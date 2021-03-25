import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/UI/NavBar";
import PrivateRoute from "./Route/privateRoute";
import PublicRoute from "./Route/publicRoute";

import {
  Home,
  Aboutus,
  User,
  Signin,
  Contact,
  Input,
  Setting,
} from "./components/components";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" component={NavBar} />
        <div className="App">
          <Switch>
            <PublicRoute exact path="/" restricted={false} component={Home} />
            <PublicRoute
              exact
              path="/aboutus"
              restricted={false}
              component={Aboutus}
            />
            <PublicRoute
              exact
              path="/contact"
              restricted={false}
              component={Contact}
            />
            <PublicRoute
              exact
              path="/signin"
              restricted={true}
              component={Signin}
            />
            <PrivateRoute path="/user" exact component={User}></PrivateRoute>
            <PrivateRoute path="/input" exact component={Input}></PrivateRoute>
            <PrivateRoute
              path="/setting"
              exact
              component={Setting}
            ></PrivateRoute>
            <Route path="/signout" exact component={Home}></Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
