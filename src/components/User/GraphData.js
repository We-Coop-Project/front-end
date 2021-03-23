import axios from "axios";

// variables
let totalCoopTime = 0;
let weekTotalCoopTime = 0;
let weekTotalNonCoopTime = 0;
let firstCoopTime = 0;
let secondCoopTime = 0;
let thirdCoopTime = 0;
let coopPercent = 0;
let remainPercent = 0;
let weekCoopPercent = 0;
let weekCoopRemainPercent = 0;
let weekNonCoopPercent = 0;
let weekNonCoopRemainPercent = 0;
let firstCoopPercent = 0;
let secondCoopPercent = 0;
let thirdCoopPercent = 0;
let firstCoopRemainPercent = 0;
let secondCoopRemainPercent = 0;
let thirdCoopRemainPercent = 0;
// let coopStartDate = "2021-01-01";
// let coopEndDate = "2021-12-31";
// let duration = `${coopStartDate} - ${coopEndDate}`;
let duration = "";
let firstCompanyName = "";
let secondCompanyName = "";
let thirdCompanyName = "";

// get api data
const getData = async () => {
  // TEST
  let uid = 123456;
  const url = `https://we-coop-staging.herokuapp.com/api/v2/user_status/${uid}`;
  const res = await axios.get(url);
  return res.data;
};

getData().then((res) => {
  // for totalCoopData
  const companies = res.company_status;
  for (let company of companies) {
    let hire_type = company.hire_type;
    if (hire_type === "CO") {
      let workingTime = parseFloat(company.working_time);
      totalCoopTime += workingTime;
    }
  }

  let coopTime = res.coop_hours;
  let remainTime = coopTime - totalCoopTime;
  coopPercent = Math.round((totalCoopTime / coopTime) * 1000) / 10;
  remainPercent = Math.round((remainTime / coopTime) * 1000) / 10;

  // for weekCoopData
  // for weekNonCoopData
  weekTotalCoopTime = res.week_coop_working_hours;
  weekTotalNonCoopTime = res.week_non_coop_working_hours;

  let weekCoopTime;
  let weekNonCoopTime;

  for (let company of companies) {
    let hire_type = company.hire_type;
    if (hire_type === "CO") {
      weekCoopTime = 40.0;
      weekNonCoopTime = 0;
      firstCoopTime = res.company_status[0].working_time;
      secondCoopTime = res.company_status[1].working_time;
      thirdCoopTime = res.company_status[2].working_time;
    } else {
      weekCoopTime = 20.0;
      weekNonCoopTime = 20.0;
    }
  }

  let weekCoopRemainTime = weekCoopTime - weekTotalCoopTime;
  let weekNonCoopRemainTime = weekNonCoopTime - weekTotalNonCoopTime;
  weekCoopPercent = Math.round((weekTotalCoopTime / weekCoopTime) * 1000) / 10;
  weekCoopRemainPercent =
    Math.round((weekCoopRemainTime / weekCoopTime) * 1000) / 10;
  weekNonCoopPercent =
    Math.round((weekTotalNonCoopTime / weekNonCoopTime) * 1000) / 10;
  weekNonCoopRemainPercent =
    Math.round((weekNonCoopRemainTime / weekNonCoopTime) * 1000) / 10;

  // firstCoopData, secondCoopData, thirdCoopData
  firstCompanyName = res.company_status[0].name;
  secondCompanyName = res.company_status[1].name;
  thirdCompanyName = res.company_status[2].name;

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

  // coop duration
  let coopStartDate = res.coop_start_date;
  let coopEndDate = res.coop_end_date;
  duration = `${coopStartDate} - ${coopEndDate}`;
});

// colors
const blue500 = "#3B82F6";
const gray200 = "#E5E7EB";
const gray100 = "#F3F4F6";

// baseData
export const baseData = {
  datasets: [
    {
      data: [],
      backgroundColor: [blue500, gray200],
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
          color: gray100,
          font: {
            size: 16,
          },
        },
        {
          text: "",
          color: gray100,
          font: {
            size: 32,
          },
        },
        {
          text: "",
          color: gray100,
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
  baseOptions,
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  firstCoopData,
  secondCoopData,
  thirdCoopData,
};

// export {
//   totalCoopTime,
//   weekTotalCoopTime,
//   weekTotalNonCoopTime,
//   firstCoopTime,
//   secondCoopTime,
//   thirdCoopTime,
//   baseOptions,
//   totalCoopData,
//   weekCoopData,
//   weekNonCoopData,
//   firstCoopData,
//   secondCoopData,
//   thirdCoopData,
// };
