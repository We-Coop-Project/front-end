import React, { useState, useEffect, memo } from "react";
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

const WeekGraph = () => {
  const [data, setData] = useState();
  console.log("week1");
  useEffect(() => {
    console.log("week2");

    const exec = async () => {
      const tempData = await weekOptions();
      setData(tempData);
    };
    exec();
  }, []);

  return (
    <div className="w-full border">
      <Doughnut data={weekCoopData} options={data} />
    </div>
  );
};

const WeekNonGraph = () => {
  const [data, setData] = useState();
  console.log("weekNon1");
  useEffect(() => {
    console.log("weekNon2");
    const exec = async () => {
      const tempData = await weekNonOptions();
      setData(tempData);
      console.log(data);
    };
    exec();
  }, []);
  console.log(data);

  return (
    <div className="border">
      <Doughnut data={weekNonCoopData} options={data} />
    </div>
  );
};

const TotalGraph = () => {
  console.log("total1");
  const [data, setData] = useState();
  useEffect(() => {
    console.log("total2");
    // console.log("weekNon");
    const exec = async () => {
      const tempData = await totalOptions();
      setData(tempData);
    };
    exec();
  }, []);

  return (
    <div className="border">
      {/* <Doughnut data={totalCoopData} options={totalOptions()} /> */}
      <Doughnut data={totalCoopData} options={data} />
    </div>
  );
};
export { WeekGraph, WeekNonGraph, TotalGraph };
