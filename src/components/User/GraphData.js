// time variables
let totalCoopTime = 0;
let weekTotalCoopTime = 0;
let weekTotalNonCoopTime = 0;
let firstCoopTime = 0;
let secondCoopTime = 0;
let thirdCoopTime = 0;
// percent variables
let coopPercent = 0;
let remainPercent = 0;
let weekCoopPercent = 0;
let weekNonCoopPercent = 0;
let weekCoopRemainPercent = 0;
let weekNonCoopRemainPercent = 0;
let firstCoopPercent = 0;
let secondCoopPercent = 0;
let thirdCoopPercent = 0;
let firstCoopRemainPercent = 0;
let secondCoopRemainPercent = 0;
let thirdCoopRemainPercent = 0;
// other variables
let duration = "";
let firstCompanyName = "You don't have comapany info!";
let secondCompanyName = "You don't have comapany info!";
let thirdCompanyName = "You don't have comapany info!";

export const calculateData = (res) => {
  // // for weekCoopData, weekNonCoopData
  // // reset week data
  // let date = new Date();
  // let dayOfWeek = date.getDay();
  // let hour = date.getHours();
  // let minute = date.getMinutes();
  // let second = date.getSeconds();
  // let time = `${dayOfWeek}:${hour}:${minute}:${second}`;
  // const resetTime = "7:23:59:59";

  // // delete week data when Sunday 23:59:59
  // if (time == resetTime) {
  //   weekTotalCoopTime = 0;
  //   weekTotalNonCoopTime = 0;
  // } else {
  //   weekTotalCoopTime = res.week_coop_working_hours;
  //   weekTotalNonCoopTime = res.week_non_coop_working_hours;
  // }

  let weekCoopTime;
  let weekNonCoopTime;
  weekTotalCoopTime = res.week_coop_working_hours;
  weekTotalNonCoopTime = res.week_non_coop_working_hours;

  const companies = res.company_status;
  if (companies.length > 0) {
    for (let company of companies) {
      let hire_type = company.hire_type;
      if (hire_type === "CO") {
        // define total coop hours
        let workingTime = parseFloat(company.working_time);
        totalCoopTime += workingTime;
        // define working limit
        weekCoopTime = 40.0;
        weekNonCoopTime = 0;

        switch (res.company_status.length) {
          case 3:
            // define company name
            firstCompanyName = res.company_status[0].name;
            secondCompanyName = res.company_status[1].name;
            thirdCompanyName = res.company_status[2].name;
            // define working time by companies
            firstCoopTime = res.company_status[0].working_time;
            secondCoopTime = res.company_status[1].working_time;
            thirdCoopTime = res.company_status[2].working_time;
            break;
          case 2:
            firstCompanyName = res.company_status[0].name;
            secondCompanyName = res.company_status[1].name;
            firstCoopTime = res.company_status[0].working_time;
            secondCoopTime = res.company_status[1].working_time;
            break;
          case 1:
            firstCompanyName = res.company_status[0].name;
            firstCoopTime = res.company_status[0].working_time;
            break;
          default:
            break;
        }
      } else {
        weekCoopTime = 20.0;
        weekNonCoopTime = 20.0;
      }
    }
  } else {
    // alert("You don't have any coop company data. Get a coop job!");
    weekCoopPercent = 0;
    weekCoopRemainPercent = 0;
  }

  let coopTime = res.coop_hours;
  let remainTime = coopTime - totalCoopTime;
  coopPercent = Math.round((totalCoopTime / coopTime) * 1000) / 10;
  remainPercent = Math.round((remainTime / coopTime) * 1000) / 10;

  let weekCoopRemainTime = weekCoopTime - weekTotalCoopTime;
  let weekNonCoopRemainTime = weekNonCoopTime - weekTotalNonCoopTime;
  weekCoopPercent = Math.round((weekTotalCoopTime / weekCoopTime) * 1000) / 10;
  weekCoopRemainPercent =
    Math.round((weekCoopRemainTime / weekCoopTime) * 1000) / 10;
  weekNonCoopPercent =
    Math.round((weekTotalNonCoopTime / weekNonCoopTime) * 1000) / 10;
  weekNonCoopRemainPercent =
    Math.round((weekNonCoopRemainTime / weekNonCoopTime) * 1000) / 10;

  // for firstCoopData, secondCoopData, thirdCoopData
  let firstCoopRemainTime = totalCoopTime - firstCoopTime;
  let secondCoopRemainTime = totalCoopTime - secondCoopTime;
  let thirdCoopRemainTime = totalCoopTime - thirdCoopTime;
  firstCoopPercent = Math.round((firstCoopTime / totalCoopTime) * 1000) / 10;
  secondCoopPercent = Math.round((secondCoopTime / totalCoopTime) * 1000) / 10;
  thirdCoopPercent = Math.round((thirdCoopTime / totalCoopTime) * 1000) / 10;
  firstCoopRemainPercent =
    Math.round((firstCoopRemainTime / totalCoopTime) * 1000) / 10;
  secondCoopRemainPercent =
    Math.round((secondCoopRemainTime / totalCoopTime) * 1000) / 10;
  thirdCoopRemainPercent =
    Math.round((thirdCoopRemainTime / totalCoopTime) * 1000) / 10;

  if (isNaN(weekCoopPercent)) {
    weekCoopPercent = 0;
    weekCoopRemainPercent = 100;
  }
  if (isNaN(weekNonCoopPercent)) {
    weekNonCoopPercent = 0;
    weekNonCoopRemainPercent = 100;
  }
  if (isNaN(firstCoopPercent)) {
    firstCoopPercent = 0;
    firstCoopRemainPercent = 100;
  }
  if (isNaN(secondCoopPercent)) {
    secondCoopPercent = 0;
    secondCoopRemainPercent = 100;
  }
  if (isNaN(thirdCoopPercent)) {
    thirdCoopPercent = 0;
    thirdCoopRemainPercent = 100;
  }

  // coop duration
  let coopStartDate = res.coop_start_date;
  let coopEndDate = res.coop_end_date;
  duration = `${coopStartDate} - ${coopEndDate}`;

  return {
    coopTime,
    totalCoopTime,
    remainTime,
    coopPercent,
    remainPercent,
  };
};

// dataData
const baseData = {
  datasets: [
    {
      data: [],
      backgroundColor: ["#3B82F6", "#E5E7EB"],
      borderColor: ["transparent", "transparent"],
    },
  ],
  labels: ["Done", "Remain"],
};

// baseOptions
const baseOptions = {
  legend: {
    display: false,
  },
  plugins: {
    doughnutlabel: {
      labels: [
        {
          text: "",
          color: "#F3F4F6",
          font: {
            size: 16,
          },
        },
        {
          text: "",
          color: "#F3F4F6",
          font: {
            size: 32,
          },
        },
        {
          text: "",
          color: "#F3F4F6",
          font: {
            size: 20,
          },
        },
      ],
    },
  },
  cutoutPercentage: 70,
};

// datas
const totalCoopData = () => {
  baseData.datasets[0].data = [coopPercent, remainPercent];
  return baseData;
};
const weekCoopData = () => {
  baseData.datasets[0].data = [weekCoopPercent, weekCoopRemainPercent];
  return baseData;
};
const weekNonCoopData = () => {
  baseData.datasets[0].data = [weekNonCoopPercent, weekNonCoopRemainPercent];
  return baseData;
};
const firstCoopData = () => {
  baseData.datasets[0].data = [firstCoopPercent, firstCoopRemainPercent];
  return baseData;
};
const secondCoopData = () => {
  baseData.datasets[0].data = [secondCoopPercent, secondCoopRemainPercent];
  return baseData;
};
const thirdCoopData = () => {
  baseData.datasets[0].data = [thirdCoopPercent, thirdCoopRemainPercent];
  return baseData;
};

export {
  totalCoopTime,
  weekTotalCoopTime,
  weekTotalNonCoopTime,
  firstCoopTime,
  secondCoopTime,
  thirdCoopTime,
  duration,
  firstCompanyName,
  secondCompanyName,
  thirdCompanyName,
  baseData,
  baseOptions,
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  firstCoopData,
  secondCoopData,
  thirdCoopData,
};
