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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
