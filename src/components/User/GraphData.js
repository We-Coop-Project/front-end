// coop duration
const coopStartDate = "2021-09-01"; // data
const coopEndDate = "2022-08-31"; // data
const duration = `${coopStartDate} - ${coopEndDate}`;

// total coop hours and percentage
const totalCoopTime = 760.5; // data
const coopTime = 960.0; // data
const remainTime = coopTime - totalCoopTime;
const coopPercent = Math.round((totalCoopTime / coopTime) * 1000) / 10;
const remainPercent = Math.round((remainTime / coopTime) * 1000) / 10;

// week coop hours and percentage
const weekTotalCoopTime = 10.0; // data
const weekCoopTime = 20.0; // data
const weekTotalNonCoopTime = 15.0; // data
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
const totalCoopTimeA = 300.0; // data
const totalCoopTimeB = 460.5; // data
const totalCoopRemainTimeA = totalCoopTime - totalCoopTimeA;
const totalCoopRemainTimeB = totalCoopTime - totalCoopTimeB;
const breakdownPercentA =
  Math.round((totalCoopTimeA / totalCoopTime) * 1000) / 10;
const breakdownPercentB =
  Math.round((totalCoopTimeB / totalCoopTime) * 1000) / 10;
const breakdownRemainPercentA =
  Math.round((totalCoopRemainTimeA / totalCoopTime) * 1000) / 10;
const breakdownRemainPercentB =
  Math.round((totalCoopRemainTimeB / totalCoopTime) * 1000) / 10;

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
            size: 12,
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

export {
  totalCoopTime,
  weekTotalCoopTime,
  weekTotalNonCoopTime,
  baseOptions,
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
};
