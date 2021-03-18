import React from "react";
import "chartjs-plugin-doughnutlabel";

import { Doughnut } from "react-chartjs-2";
import {
  totalCoopData,
  totalOptions,
  weekCoopData,
  weekOptions,
  weekNonCoopData,
  weekNonOptions,
} from "./GraphData";

const TotalGraph = () => {
  return (
    <div className="border">
      <Doughnut data={totalCoopData} options={totalOptions()} />
    </div>
  );
};

const WeekGraph = () => {
  return (
    <div className="w-full border">
      <Doughnut data={weekCoopData} options={weekOptions()} />
    </div>
  );
};

const WeekNonGraph = () => {
  return (
    <div className="border">
      <Doughnut data={weekNonCoopData} options={weekNonOptions()} />
    </div>
  );
};

export { TotalGraph, WeekGraph, WeekNonGraph };
