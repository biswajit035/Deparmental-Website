import React from "react";
import { Chart } from "react-google-charts";

const Pie = ({ data, chartTitle }) => {
  

  const options = {
    title: chartTitle,
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Pie;
