import { Paper } from "@material-ui/core";
import React from "react";
import Chart from "react-apexcharts";

const state = {
  series: [14, 23, 21, 17, 15],
  options: {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const BarChart = () => {
  return (
    <Paper className="bar-chart">
      <p className="title">Phần trăm Highbernaye</p>
      <Chart options={state.options} series={state.series} type="polarArea" />
    </Paper>
  );
};

export default BarChart;
