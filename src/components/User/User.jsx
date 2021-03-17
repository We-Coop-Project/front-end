import React from "react";

import Title from "../UI/Title";
import Graph from "./Graph";

const User = () => {
  let username = "Ami";

  return (
    <div className="User border">
      <div className="w-2/3 text-center">
        <Title title={`Hello, ${username}`} />
        <Graph />
      </div>
    </div>
  );
};

export default User;
