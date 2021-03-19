import React, { useState, useEffect } from "react";
import "chartjs-plugin-doughnutlabel";

import { Doughnut } from "react-chartjs-2";
import {
  totalCoopData,
  totalOptions,
  weekCoopData,
  weekOptions,
  weekNonCoopData,
  weekNonOptions,
} from "./GraphDataOld";

const TotalGraph = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const exec = async () => {
      const tempData = await totalOptions();
      setData(tempData);
    };
    exec();
  }, []);

  return (
    <div className="border">
      <Doughnut data={totalCoopData} options={data} />
    </div>
  );
};

const WeekGraph = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const exec = async () => {
      const tempData = await weekOptions();
      setData(tempData);
    };
    exec();
  }, []);

  return (
    <div className="border">
      <Doughnut data={weekCoopData} options={data} />
    </div>
  );
};

const WeekNonGraph = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const exec = async () => {
      const tempData = await weekNonOptions();
      setData(tempData);
    };
    exec();
  }, []);

  return (
    <div className="border">
      <Doughnut data={weekNonCoopData} options={data} />
    </div>
  );
};

// export { TotalGraph, WeekGraph, WeekNonGraph };
