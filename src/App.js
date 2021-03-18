import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/UI/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" component={NavBar} />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/user" exact component={Home}></Route>
          <Route path="/input" exact component={Home}></Route>
          <Route path="/setting" exact component={Home}></Route>
          <Route path="/signout" exact component={Home}></Route>
          <Route path="/aboutus" exact component={Home}></Route>
          <Route path="/contact" exact component={Home}></Route>
          <Route path="/signout" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
