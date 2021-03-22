import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/UI/NavBar";

import {
  Home,
  Aboutus,
  User,
  Signin,
  Contact,
  Input,
  Setting,
} from "./components/components";
import { AuthContext } from "./context/Auth-context";

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
    <Router>
      <Route path="/" component={NavBar} />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/user" exact component={User}></Route>
          <Route path="/aboutus" exact component={Aboutus}></Route>
          <Route path="/input" exact component={Input}></Route>
          <Route path="/setting" exact component={Setting}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/signin" exact component={Signin}></Route>

          <Route path="/signout" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
