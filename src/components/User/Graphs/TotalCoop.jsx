import React from "react";

import GraphModel from "../GraphModel";
import { totalCoopTime, totalCoopData, baseOptions } from "../GraphData";

const TotalCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={totalCoopData}
      text="Total Coop Hours"
      percent={totalCoopData().datasets[0].data[0]}
      hours={totalCoopTime.toFixed(1)}
    />
  );
};

export default TotalCoop;
