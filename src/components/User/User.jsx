import React, { useState } from "react";

import Title from "../UI/Title";
import TotalCoop from "./Graphs/TotalCoop";
import WeekCoop from "./Graphs/WeekCoop";
import WeekNonCoop from "./Graphs/WeekNonCoop";
import FirstCoop from "./Graphs/FirstCoop";
import SecondCoop from "./Graphs/SecondCoop";
import ThirdCoop from "./Graphs/ThirdCoop";

const User = () => {
  let username = "Ami"; // data

  const [graph, setGraph] = useState(<TotalCoop />);

  const selectHandler = (e) => {
    const value = e.target.value;
    switch (value) {
      case "TotalCoop":
        setGraph(<TotalCoop />);
        break;
      case "WeekCoop":
        setGraph(<WeekCoop />);
        break;
      case "WeekNonCoop":
        setGraph(<WeekNonCoop />);
        break;
      case "FirstCoop":
        setGraph(<FirstCoop />);
        break;
      case "SecondCoop":
        setGraph(<SecondCoop />);
        break;
      case "ThirdCoop":
        setGraph(<ThirdCoop />);
        break;
      default:
        setGraph(<TotalCoop />);
        break;
    }
  };

  return (
    <div className="User">
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-3/4 flex flex-wrap items-center">
          <div className="w-full text-center">
            <Title title={`Hello, ${username}`} />
          </div>
          <div className="w-full">{graph}</div>

          <div className="w-full flex justify-center mt-6">
            <select
              onChange={selectHandler}
              className="h-8 w-1/2 text-xs text-gray-400 rounded px-2"
            >
              <option value="TotalCoop">Total Coop Time</option>
              <option value="WeekCoop">Week Coop Time</option>
              <option value="WeekNonCoop">Week Non Coop Time</option>
              <option value="FirstCoop">First Company Coop Time</option>
              <option value="SecondCoop">Second Company Coop Time</option>
              <option value="ThirdCoop">Third Company Coop Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
