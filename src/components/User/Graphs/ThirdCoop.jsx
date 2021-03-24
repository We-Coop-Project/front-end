import React from "react";

import GraphModel from "../GraphModel";
import {
  thirdCoopData,
  thirdCoopTime,
  baseOptions,
  thirdCompanyName,
} from "../GraphData";

const ThirdCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={thirdCoopData}
      text={thirdCompanyName}
      percent={thirdCoopData().datasets[0].data[0].toFixed(1)}
      hours={thirdCoopTime}
    />
  );
};

export default ThirdCoop;
