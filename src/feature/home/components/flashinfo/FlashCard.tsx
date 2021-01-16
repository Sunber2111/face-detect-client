import LineChart from "app/common/chart/LineChart";
import React from "react";
import { IconType } from "react-icons/lib";

interface IProps {
  data?: Number[];
  color?: string;
  bgColor?: string;
  number?: string;
  title?: string;
  Icon: IconType;
}

const FlashCard: React.FC<IProps> = ({
  data,
  color,
  bgColor,
  number,
  title,
  Icon,
}) => {
  const config = {
    series: [
      {
        data,
      },
    ],
    options: {
      fill: {
        colors: [color],
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
        margin: {
          bottom: 0,
        },
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
        height: "100px",
        type: "area",
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
        colors: [color],
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

  const bg = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <div className="fc">
      <div className="icon" style={bg}>
        <Icon color={color} />
      </div>
      <div className="number">
        <h2>{number}</h2>
      </div>
      <p className="title">{title}</p>
      <div className="chart">
        <LineChart config={config} />
      </div>
    </div>
  );
};

export default FlashCard;
