// total coop hours and percentage
const totalCoopTime = 760.5; //data firstCoopTime + secondCoopTime + thirdCoopTime;
const coopTime = 960.0; // data
const remainTime = coopTime - totalCoopTime;
const coopPercent = Math.round((totalCoopTime / coopTime) * 1000) / 10;
const remainPercent = Math.round((remainTime / coopTime) * 1000) / 10;

// week coop hours and percentage
const weekTotalCoopTime = 15.5; // data
const weekCoopTime = 20.0; // data
const weekTotalNonCoopTime = 10.5; // data
const weekNonCoopTime = 20.0;
const weekCoopRemainTime = weekCoopTime - weekTotalCoopTime;
const weekNonCoopRemainTime = weekNonCoopTime - weekTotalNonCoopTime;
const weekCoopPercent =
  Math.round((weekTotalCoopTime / weekCoopTime) * 1000) / 10;
const weekCoopRemainPercent =
  Math.round((weekCoopRemainTime / weekCoopTime) * 1000) / 10;
const weekNonCoopPercent =
  Math.round((weekTotalNonCoopTime / weekNonCoopTime) * 1000) / 10;
const weekNonCoopRemainPercent =
  Math.round((weekNonCoopRemainTime / weekNonCoopTime) * 1000) / 10;

// coop hours and percentage by company
const firstCoopTime = 300.0; // data
const secondCoopTime = 460.5; // data
const thirdCoopTime = 0; // data
const firstCoopRemainTime = totalCoopTime - firstCoopTime;
const secondCoopRemainTime = totalCoopTime - secondCoopTime;
const thirdCoopRemainTime = totalCoopTime - thirdCoopTime;
const firstCoopPercent =
  Math.round((firstCoopTime / totalCoopTime) * 1000) / 10;
const secondCoopPercent =
  Math.round((secondCoopTime / totalCoopTime) * 1000) / 10;
const thirdCoopPercent =
  Math.round((thirdCoopTime / totalCoopTime) * 1000) / 10;
const firstCoopRemainPercent =
  Math.round((firstCoopRemainTime / totalCoopTime) * 1000) / 10;
const secondCoopRemainPercent =
  Math.round((secondCoopRemainTime / totalCoopTime) * 1000) / 10;
const thirdCoopRemainPercent =
  Math.round((thirdCoopRemainTime / totalCoopTime) * 1000) / 10;

// coop duration
const coopStartDate = "2021-09-01"; // data
const coopEndDate = "2022-08-31"; // data
// const duration = `${coopStartDate} - ${coopEndDate}`;

// colors
const blue500 = "#3B82F6";
const gray200 = "#E5E7EB";
const gray100 = "#F3F4F6";

// dataData
const baseData = {
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
  // maintainAspectRatio: false,
  // responsive: false,
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
  baseOptions,
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  firstCoopData,
  secondCoopData,
  thirdCoopData,
};
