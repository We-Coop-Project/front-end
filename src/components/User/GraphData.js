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
const weekTotalCoopTime = 8.5; // data required
const weekCoopTime = 20.0; // data required (20 or 40)
const weekTotalNonCoopTime = 16.0; // data required
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
const newBaseOptions = { ...baseOptions };
// const doughnutlabel = newBaseOptions.plugins.doughnutlabel.labels;

// const baseDataFunc = (done, remain) => {
//   newBaseData.datasets[0].data = [`${done}`, `${remain}`];
//   return newBaseData;
// };

// datas
export const totalCoopData = () => {
  newBaseData.datasets[0].data = [coopPercent, remainPercent];
  return newBaseData;
};
export const weekCoopData = () => {
  newBaseData.datasets[0].data = [weekCoopPercent, weekCoopRemainPercent];
  return newBaseData;
};
export const weekNonCoopData = () => {
  newBaseData.datasets[0].data = [weekNonCoopPercent, weekNonCoopRemainPercent];
  return newBaseData;
};
// export const weekCoopData = baseDataFunc(
//   weekCoopPercent,
//   weekCoopRemainPercent
// );
// export const weekNonCoopData = baseDataFunc(
//   weekNonCoopPercent,
//   weekNonCoopRemainPercent
// );

//options

export const totalOptions = () => {
  newBaseOptions.plugins.doughnutlabel.labels[0].text = duration;
  newBaseOptions.plugins.doughnutlabel.labels[1].text = `${coopPercent} %`;
  newBaseOptions.plugins.doughnutlabel.labels[2].text = `${coopTime} hrs`;
  return newBaseOptions;
};
export const weekOptions = () => {
  newBaseOptions.plugins.doughnutlabel.labels[0].text = "2";
  newBaseOptions.plugins.doughnutlabel.labels[1].text = `${weekCoopPercent} %`;
  newBaseOptions.plugins.doughnutlabel.labels[2].text = `${weekTotalCoopTime} hrs`;
  return newBaseOptions;
};
export const weekNonOptions = () => {
  newBaseOptions.plugins.doughnutlabel.labels[0].text = "3";
  newBaseOptions.plugins.doughnutlabel.labels[1].text = `${weekNonCoopPercent} %`;
  newBaseOptions.plugins.doughnutlabel.labels[2].text = `${weekNonCoopTime} hrs`;
  return newBaseOptions;
};
