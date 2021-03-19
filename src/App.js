import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/UI/NavBar";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import User from "./components/User/User";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Contact from "./components/Contact/Contact";
import Input from "./components/Input/Input";
import Setting from "./components/Setting/Setting";
import Sliders from "./components/Setting/Sliders";
import Modal from "./components/UI/Modal";

const App = () => {
  return (
    <Router>
      <Route path="/" component={NavBar} />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/input" exact component={Home}></Route>
          <Route path="/setting" exact component={Home}></Route>
          <Route path="/signout" exact component={Home}></Route>
          <Route path="/contact" exact component={Home}></Route>
          <Route path="/signout" exact component={Home}></Route>
          <Route path="/aboutus" component={Aboutus}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
