import React from "react";

import VersionBtn from "./components/UI/VersionBtn";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <VersionBtn />
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
