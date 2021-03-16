import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/UI/NavBar";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Contact from "./components/Contact/Contact";
import Input from "./components/Input/Input";
import Setting from "./components/Setting/Setting";
import Sliders from "./components/Setting/Sliders";

const App = () => {
  return (
    <Router>
      <Route path="/" component={NavBar} />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/input" exact component={Input}></Route>
          <Route path="/setting" exact component={Setting}></Route>
          <Route path="/sliders" exact component={Sliders}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
