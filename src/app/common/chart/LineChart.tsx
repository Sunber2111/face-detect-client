import React from "react";
import Chart from "react-apexcharts";

interface IProps {
  config: any;
}

const LineChart: React.FC<IProps> = ({ config }) => {
  return <Chart type="area" options={config.options} series={config.series} height="70px" />;
};

export default LineChart;
