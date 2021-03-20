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
  // let thisWeek = "4th week, March"; // data

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
        break;
    }
  };

  return (
    <div className="User">
      <div className="w-full flex justify-center border">
        <div className="w-full lg:w-3/4 flex flex-wrap items-center border-4">
          <div className="w-full text-center border">
            <Title title={`Hello, ${username}`} />
          </div>
          <div className="w-full border">{graph}</div>

          <div className="w-full flex justify-center mt-4 border">
            <select
              onChange={selectHandler}
              className="h-6 sm:h-8 w-1/3 text-xs border-red-500 border"
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
