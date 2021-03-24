import React, { useState, useEffect } from "react";

import { api } from "../../api/api";
import { calculateData } from "./GraphData";

import TotalCoop from "./Graphs/TotalCoop";
import WeekCoop from "./Graphs/WeekCoop";
import WeekNonCoop from "./Graphs/WeekNonCoop";
import FirstCoop from "./Graphs/FirstCoop";
import SecondCoop from "./Graphs/SecondCoop";
import ThirdCoop from "./Graphs/ThirdCoop";
import { duration } from "./GraphData";

const User = () => {
  // let username = "Ami"; // data
  const { currentUser } = useAuth();

  const [selectedGraph, setSelectedGraph] = useState("");
  const [graphData, setGraphData] = useState({});
  const [currentCompany, setCurrentCompany] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // TEST
      let uid = "1";
      // let uid = "2";
      // let uid = "3";
      // let uid = "4";

      const res = await api.get(`user_status/${uid}`);
      const calculatedData = await calculateData(res.data);
      setCurrentCompany(res.data.company_status);
      setGraphData(calculatedData);
    };
    getData();
  }, []);

  const selectHandler = (e) => {
    setSelectedGraph(e.target.value);
  };

  const selectedComponent = (value) => {
    switch (value) {
      case "TotalCoop":
        return <TotalCoop data={graphData} />;
      case "WeekCoop":
        return <WeekCoop data={graphData} />;
      case "WeekNonCoop":
        return <WeekNonCoop data={graphData} />;
      case "FirstCoop":
        return <FirstCoop data={graphData} />;
      case "SecondCoop":
        return <SecondCoop data={graphData} />;
      case "ThirdCoop":
        return <ThirdCoop data={graphData} />;
      default:
        return <TotalCoop data={graphData} />;
    }
  };

  return (
    <div className="User">
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-3/4 flex flex-wrap items-center">
          <div className="w-full text-center">
            <h1>Hello, {currentUser.displayName}</h1>
            <h6 className="mt-2">{duration}</h6>
          </div>
          <div className="w-full my-4">{selectedComponent(selectedGraph)}</div>

          <div className="w-full flex justify-center">
            <select
              onChange={selectHandler}
              className="h-8 w-1/2 text-xs text-gray-400 rounded px-2"
            >
              <option value="TotalCoop">Total Coop Time</option>
              <option value="WeekCoop">Week Coop Time</option>
              <option value="WeekNonCoop">Week Non Coop Time</option>

              {currentCompany
                .filter((company) => company.hire_type === "CO")
                .map((company, index) => {
                  const values = ["FirstCoop", "SecondCoop", "ThirdCoop"];
                  return <option value={values[index]}>{company.name}</option>;
                })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
