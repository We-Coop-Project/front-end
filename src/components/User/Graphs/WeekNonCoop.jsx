import React from "react";

import GraphModel from "../GraphModel";
import {
  weekTotalNonCoopTime,
  weekNonCoopData,
  baseOptions,
} from "../GraphData";

const WeekNonCoop = () => {
  return (
    <GraphModel
      base={baseOptions}
      coopData={weekNonCoopData}
      text="Non Coop Job"
      percent={weekNonCoopData().datasets[0].data[0]}
      hours={weekTotalNonCoopTime}
    />
  );
};

export default WeekNonCoop;
