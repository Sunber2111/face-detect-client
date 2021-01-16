let config = {
  series: [],
  options: {
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    chart: {
      height: 350,
      type: "line",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [],
    },
    xaxis: {
      categories: [],
      labels: {
        show: false,
      },
    },
    yaxis: { show: false },
  },
};

export default config;
