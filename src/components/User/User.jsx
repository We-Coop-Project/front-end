import React from "react";

import Title from "../UI/Title";
import GraphModel from "./GraphModel";
import {
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  baseOptions,
} from "./GraphData";

const User = () => {
  let username = "Ami"; // data

  return (
    <div className="User border">
      <div className="h-3/4 w-full flex border-4">
        <div className="hidden lg:flex w-full lg:w-1/4 lg:flex-wrap lg:content-between border">
          <div className="w-full">
            <GraphModel
              base={baseOptions}
              coopData={weekCoopData}
              text="Co-op Job"
              percent={50}
              hours={12}
            />
          </div>
          <div className="w-full mt-8">
            <GraphModel
              base={baseOptions}
              coopData={weekNonCoopData}
              text="Non Co-op Job"
              percent={75}
              hours={40}
            />
          </div>
        </div>
        <div className="w-full lg:w-2/4 flex flex-wrap items-center border">
          <div className="w-full text-center border">
            <Title title={`Hello, ${username}`} />
          </div>
          <div className="w-full border">
            <GraphModel
              base={baseOptions}
              coopData={totalCoopData}
              text="Total"
              percent={75}
              hours={500}
            />
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/4 border"></div>
      </div>
    </div>
  );
};

export default User;
