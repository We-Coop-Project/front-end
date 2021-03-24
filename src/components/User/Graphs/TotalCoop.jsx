import React from "react";

import GraphModel from "../GraphModel";
import {
  // coopTime,
  totalCoopTime,
  totalCoopData,
  baseOptions,
} from "../GraphData";

const TotalCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={totalCoopData}
      text="Total CO-OP Hours"
      percent={totalCoopData().datasets[0].data[0].toFixed(1)}
      hours={totalCoopTime.toFixed(1)}
      // hours={totalCoopTime.toFixed(1) + " / " + coopTime}
    />
  );
};

export default TotalCoop;
