import React, { useState, useEffect } from "react";
import "chartjs-plugin-doughnutlabel";
import { Doughnut } from "react-chartjs-2";

const GraphModel = ({ coopData, base, text, percent, hours }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (base) {
      const graphOption = JSON.parse(JSON.stringify(base));
      const {
        plugins: {
          doughnutlabel: { labels },
        },
      } = graphOption;
      labels[0].text = text;
      labels[1].text = `${percent} %`;
      labels[2].text = `${hours} hrs`;
      setData(graphOption);
    }
  }, [base, hours, percent, text]);

  return <Doughnut data={coopData} options={data} />;
};

export default GraphModel;
