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
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
    margin: {
      bottom: 0,
    },
    show: false,
  },
  options: {
    fill: {
      colors: ['#fff'],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.5,
        stops: [0, 90, 100],
      },
    },
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#F97794", "#7E68E8"],
    },
  },
};

const AreaChart = () => {
  return (
    <Chart
      options={config.options}
      series={config.series}
      type="area"
      height="300"
      width="780"
    />
  );
};

export default AreaChart;
