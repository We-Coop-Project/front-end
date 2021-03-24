import React from "react";

import GraphModel from "../GraphModel";
import {
  secondCoopData,
  secondCoopTime,
  baseOptions,
  secondCompanyName,
} from "../GraphData";

const SecondCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={secondCoopData}
      text={secondCompanyName}
      percent={secondCoopData().datasets[0].data[0]}
      hours={secondCoopTime}
    />
  );
};

export default SecondCoop;
