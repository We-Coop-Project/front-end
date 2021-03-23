import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/UI/NavBar";
import PriveteRoute from "../src/Route/PrivateRoute";

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
  // const [userName, setUserName] = useContext(UserContext);
  // console.log(userContext);
  // const authContext = useContext(AuthContext);
  // let content = <Home />;

  // if (authContext.isAuth) {
  //   content = <User />;
  // }

  // return content;
  return (
    <AuthProvider>
      <Router>
        <Route path="/" component={NavBar} />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/aboutus" exact component={Aboutus}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signout" exact component={Home}></Route>
            <PriveteRoute path="/user" exact component={User}></PriveteRoute>
            <PriveteRoute path="/input" exact component={Input}></PriveteRoute>
            <PriveteRoute
              path="/setting"
              exact
              component={Setting}
            ></PriveteRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
