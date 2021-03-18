import React from "react";
import "chartjs-plugin-doughnutlabel";

import { Doughnut } from "react-chartjs-2";
import { data, options } from "./GraphData";

const Graph = () => {
  return (
    <div className="w-full border">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Graph;
