import React from "react";

import NavBar from "./components/UI/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
