import React from "react";

import Title from "../UI/Title";
import GraphModel from "./GraphModel";
import {
  totalCoopTime,
  weekTotalCoopTime,
  weekTotalNonCoopTime,
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  baseOptions,
} from "./GraphData";

const User = () => {
  let username = "Ami"; // data
  let thisWeek = "4th week, March"; // data

  console.log(coopData);

  const selectHandler = (e) => {
    const value = e.target.value;
    switch (value) {
      case "TotalCoop":
        console.log("1");
        break;
      case "WeekCoop":
        console.log("2");
        break;
      case "WeekNonCoop":
        break;
      case "FirstCoop":
        break;
      case "SecondCoop":
        break;
      case "ThirdCoop":
        break;

      default:
        break;
    }
  };

  return (
    <div className="User border">
      <div className="h-3/4 w-full flex justify-center border-4">
        {/* <div className="hidden lg:flex w-full lg:w-1/4 lg:flex-wrap lg:content-between border">
          <div className="w-full">
            <h6 className="w-full text-center">{thisWeek}</h6>
            <GraphModel
              base={baseOptions}
              coopData={weekCoopData}
              text="Co-op Job"
              percent={weekCoopData().datasets[0].data[0]}
              hours={weekTotalCoopTime}
            />
          </div>
          <div className="w-full mt-8">
            <GraphModel
              base={baseOptions}
              coopData={weekNonCoopData}
              text="Non Co-op Job"
              percent={weekNonCoopData().datasets[0].data[0]}
              hours={weekTotalNonCoopTime}
            />
          </div>
        </div> */}

        <div className="w-3/4 flex flex-wrap items-center border">
          {/* <div className="w-full lg:w-2/4 flex flex-wrap items-center border"> */}
          <div className="w-full text-center border">
            <Title title={`Hello, ${username}`} />
          </div>
          <div className="w-full border">
            <GraphModel
              base={baseOptions}
              coopData={totalCoopData}
              text="Total"
              percent={totalCoopData().datasets[0].data[0]}
              hours={totalCoopTime}
            />
          </div>

          <div className="w-full flex justify-center border-red-500 border-2">
            <select
              onChange={selectHandler}
              className="h-8 w-2/3 border-red-500 border-2"
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

        {/* <div className="hidden lg:flex w-full lg:w-1/4 lg:flex-wrap lg:content-between border">
          <div className="w-full">
            <h6 className="w-full text-center">{thisWeek}</h6>
            <GraphModel
              base={baseOptions}
              coopData={weekCoopData}
              text="Co-op Job"
              percent={weekCoopData().datasets[0].data[0]}
              hours={weekTotalCoopTime}
            />
          </div>
          <div className="w-full mt-8">
            <GraphModel
              base={baseOptions}
              coopData={weekNonCoopData}
              text="Non Co-op Job"
              percent={weekNonCoopData().datasets[0].data[0]}
              hours={weekTotalNonCoopTime}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default User;
