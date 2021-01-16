import React from "react";
import Chart from "react-apexcharts";

const config = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      width: '100%'
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["#FFA9B7","#C5B5FF"]
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
      ],
    },
   
  },
};

const LineChart = () => {
  return (
    <Chart
      options={config.options}
      series={config.series}
      type="line"
    />
  );
};

export default LineChart;
