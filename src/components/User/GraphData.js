// numbers
// coop duration
const coopStartDate = "2021-09-01"; // data required
const coopEndDate = "2022-08-31"; // data required
const duration = `${coopStartDate} - ${coopEndDate}`;
// total coop hours and percentage
const totalCoopTime = 760.5; // data required (working time)
const coopTime = 960.0; // data required (duration?)
const remainTime = coopTime - totalCoopTime;
const coopPercent = Math.round((totalCoopTime / coopTime) * 1000) / 10;
const remainPercent = Math.round((remainTime / coopTime) * 1000) / 10;
// week coop hours and percentage
const weekTotalCoopTime = 10.0; // data required
const weekCoopTime = 20.0; // data required (20 or 40)
const weekTotalNonCoopTime = 15.0; // data required
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
// coop company rate
const totalCoopTimeA = 300.0; // data required
const totalCoopTimeB = 460.5; // data required
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
};

const newBaseData = { ...baseData };
// const newBaseOptions = { ...baseOptions };
// const doughnutlabel = newBaseOptions.plugins.doughnutlabel.labels;

// const baseDataFunc = (done, remain) => {
//   newBaseData.datasets[0].data = [`${done}`, `${remain}`];
//   return newBaseData;
// };

// datas
const totalCoopData = () => {
  newBaseData.datasets[0].data = [coopPercent, remainPercent];
  return newBaseData;
};
const weekCoopData = () => {
  newBaseData.datasets[0].data = [weekCoopPercent, weekCoopRemainPercent];
  return newBaseData;
};
const weekNonCoopData = () => {
  newBaseData.datasets[0].data = [weekNonCoopPercent, weekNonCoopRemainPercent];
  return newBaseData;
};
const breakdownCoopDataA = () => {
  newBaseData.datasets[0].data = [breakdownPercentA, breakdownRemainPercentB];
  return newBaseData;
};
const breakdownCoopDataB = () => {
  newBaseData.datasets[0].data = [weekNonCoopPercent, breakdownRemainPercentB];
  return newBaseData;
};

// const weekCoopData = baseDataFunc(
//   weekCoopPercent,
//   weekCoopRemainPercent
// );
// const weekNonCoopData = baseDataFunc(
//   weekNonCoopPercent,
//   weekNonCoopRemainPercent
// );

//options
const totalOptions = () => {
  const newBaseOptions = { ...baseOptions };
  const doughnutlabel = newBaseOptions.plugins.doughnutlabel.labels;
  doughnutlabel[0].text = duration;
  doughnutlabel[1].text = `${coopPercent} %`;
  doughnutlabel[2].text = `${totalCoopTime} hrs`;
  return newBaseOptions;
};
const weekOptions = () => {
  const newBaseOptions = { ...baseOptions };
  const doughnutlabel = newBaseOptions.plugins.doughnutlabel.labels;
  doughnutlabel[0].text = "Coop Job";
  doughnutlabel[1].text = `${weekCoopPercent} %`;
  doughnutlabel[2].text = `${weekTotalCoopTime} hrs`;
  //   doughnutlabel[1].font.size = 20;
  //   doughnutlabel[2].font.size = 16;
  return newBaseOptions;
};
const weekNonOptions = () => {
  const newBaseOptions = { ...baseOptions };
  const doughnutlabel = newBaseOptions.plugins.doughnutlabel.labels;
  doughnutlabel[0].text = "Non Coop Job";
  doughnutlabel[1].text = `${weekNonCoopPercent} %`;
  doughnutlabel[2].text = `${weekNonCoopTime} hrs`;
  return newBaseOptions;
};

export {
  totalCoopData,
  weekCoopData,
  weekNonCoopData,
  totalOptions,
  weekOptions,
  weekNonOptions,
};
