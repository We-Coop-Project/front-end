import React from "react";

import GraphModel from "../GraphModel";
import { firstCoopData, firstCoopTime, baseOptions } from "../GraphData";

const FirstCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={firstCoopData}
      text="Company A"
      percent={firstCoopData().datasets[0].data[0]}
      hours={firstCoopTime}
    />
  );
};

export default FirstCoop;
