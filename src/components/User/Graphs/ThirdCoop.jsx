import React from "react";

import GraphModel from "../GraphModel";
import { thirdCoopData, thirdCoopTime, baseOptions } from "../GraphData";

const ThirdCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={thirdCoopData}
      text="Company C"
      percent={thirdCoopData().datasets[0].data[0]}
      hours={thirdCoopTime}
    />
  );
};

export default ThirdCoop;
