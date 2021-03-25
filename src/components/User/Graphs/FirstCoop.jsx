import React from "react";

import GraphModel from "../GraphModel";
import {
  firstCoopData,
  firstCoopTime,
  baseOptions,
  firstCompanyName,
} from "../GraphData";

const FirstCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={firstCoopData}
      text={firstCompanyName}
      percent={firstCoopData().datasets[0].data[0].toFixed(1)}
      hours={firstCoopTime}
    />
  );
};

export default FirstCoop;
