import React from "react";

import Title from "../UI/Title";
import Graph from "./Graph";

const User = () => {
  let username = "Ami";

  return (
    <div className="User border">
      <div className="hidden lg:block w-full lg:w-1/4 border-yellow-500 border-2">
        <Graph />
        <Graph />
      </div>
      <div className="w-full lg:w-2/4 text-center border-yellow-500 border-2">
        <Title title={`Hello, ${username}`} />
        <Graph />
        {/* <div className="border">
          <Graph />
        </div> */}
      </div>
      <div className="hidden lg:block w-full lg:w-1/4 border-yellow-500 border-2">
        <Graph />
        <Graph />
      </div>
    </div>
  );
};

export default User;
