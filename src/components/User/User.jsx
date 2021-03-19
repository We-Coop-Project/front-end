import React from "react";

import Title from "../UI/Title";
import { TotalGraph, WeekGraph, WeekNonGraph } from "./Graphs";

const User = () => {
  let username = "Ami"; // data require

  return (
    <div className="User border">
      <div className="hidden lg:block w-full lg:w-1/4 border-yellow-500 border-2">
        <div>
          <WeekGraph />
        </div>
        <div className="mt-8">
          <WeekNonGraph />
        </div>
      </div>
      <div className="w-full lg:w-2/4 text-center border-yellow-500 border-2">
        <Title title={`Hello, ${username}`} />
        <TotalGraph />
      </div>
      <div className="hidden lg:block w-full lg:w-1/4 border-yellow-500 border-2">
        {/* <div>
          <WeekGraph />
        </div>
        <div className="mt-8">
          <WeekNonGraph />
        </div> */}
      </div>
    </div>
  );
};

export default User;
