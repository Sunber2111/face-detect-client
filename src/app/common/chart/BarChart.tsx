import React from "react";
import Chart from "react-apexcharts";

interface IProps {
  config: any;
}

const BarChart: React.FC<IProps> = ({ config }) => {
  return (
    <Chart
      type="bar"
      height={320}
      options={config.options}
      series={config.series}
    />
  );
};

export default BarChart;
