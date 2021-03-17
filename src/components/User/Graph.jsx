import React from "react";

import { Doughnut } from "react-chartjs-2";

const Graph = () => {
  let coopTime = 777.0;
  const totalCoopTime = 960.0;
  const remainTime = totalCoopTime - coopTime;
  // percentage of decimal point one
  const coopPercent = Math.round((coopTime / totalCoopTime) * 100 * 10) / 10;
  const remainPercent =
    Math.round((remainTime / totalCoopTime) * 100 * 10) / 10;

  const graphData = {
    datasets: [
      {
        data: [coopPercent, remainPercent],
        backgroundColor: ["#3B82F6", "#E5E7EB"],
        // hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["transparent", "transparent"],
      },
    ],

    labels: ["Done", "Remain"],
  };

  //   graphData.datasets.forEach(function (dataset, i) {
  //     let dataSum = 0;
  //     dataset.data.forEach(function (element) {
  //       dataSum += element;
  //     });

  //     const percentage = (dataset.data[0] / dataSum) * 100 + "%";
  //   });

  return (
    <div className="border">
      <Doughnut data={graphData} />
    </div>
  );
};

export default Graph;
