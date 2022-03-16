import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { BarChartMain, LineChartWrap, PieChartWrap } from "./styles";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { FlexibleDiv } from "../Box/styles";
import { Typography } from "antd";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const BarChart = ({
  title,
  type,
  subHeaderText,
  barChartBk,
  barChartData,
}) => {
  const { Text, Title } = Typography;

  const data = {
    labels: barChartData.label,
    datasets: barChartData.datas.map((data) => {
      return {
        data: data.data,
        backgroundColor: data.color,
        barPercentage: 0.1,
        barThickness: 25,
        borderRadius: 5,
        maxBarThickness: 25,
      };
    }),
  };

  const options = {
    cornerRadius: 20,
    barRoundness: 1,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
        title: {
          display: false,
        },
      },
      labels: {
        fontSize: 6,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          borderColor: "#78A431",
          borderWidth: 3,
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
        },

        gridLines: {
          display: false,
          color: "#FFFFFF",
        },
      },
      x: {
        ticks: {
          tickLength: 20,
          tickMaxLength: 1,
          reverse: false,
          fontSize: 3,
        },

        grid: {
          display: false,
          borderColor: "#78A431",
          borderWidth: 3,
        },
      },
    },
  };

  return (
    <BarChartMain barChartBk={barChartBk}>
      <FlexibleDiv>
        <FlexibleDiv
          flexDir="column"
          className="header"
          alignItems="flex-start"
        >
          <Title level={5}>{title}</Title>
          <Text>{subHeaderText}</Text>
        </FlexibleDiv>
        <OverFlowScrollBar className="scrolling">
          <div className="canvas">
            <Bar data={data} options={options} />
          </div>
        </OverFlowScrollBar>
      </FlexibleDiv>
    </BarChartMain>
  );
};

export const LineChart = ({
  lineBkCol,
  lineChartBk,
  hovLabel,
  lineChartData,
  headerText,
  subHeaderText,
}) => {
  const { Text } = Typography;
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#78A43133");
    }

    return gradient;
  }

  const data = {
    labels: lineChartData.label,
    datasets: lineChartData.datas.map((data) => {
      return {
        label: hovLabel || "Data",
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: data.color,
        data: data.data,
        borderWidth: 4,
        pointBackgroundColor: data.color,
        pointBorderColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 7,
        lineTension: 0.3,
        pointHoverRadius: 5,
        pointHoverBorderColor: data.color,
        fill: true,
        pointHoverBorderWidth: 5,
        pointHitRadius: 7,
        spanGaps: false,
      };
    }),
  };

  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
        title: {
          display: false,
        },
      },
    },
    layout: {
      padding: 20,
    },
    scales: {
      y: {
        grid: {
          display: false,
          borderColor: "#78A431",
          borderWidth: 3,
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          display: false,
        },
        title: {
          display: true,
          text: headerText,
          font: {
            size: 15,
            weight: "bold",
          },
        },
        gridLines: {
          display: false,
          color: "#FFFFFF",
        },
      },
      x: {
        grid: {
          display: false,
          borderColor: "#78A431",
          borderWidth: 3,
        },
        ticks: {
          reverse: false,
        },
      },
    },
  };

  return (
    <LineChartWrap lineChartBk={lineChartBk}>
      <FlexibleDiv>
        <FlexibleDiv
          flexDir="column"
          className="header"
          alignItems="flex-start"
        >
          <Text>{subHeaderText}</Text>
        </FlexibleDiv>
        <OverFlowScrollBar className="scrolling">
          <div className="canvas">
            <Line options={options} data={data} />
          </div>
        </OverFlowScrollBar>
      </FlexibleDiv>
    </LineChartWrap>
  );
};

export const PieChart = ({ pieBkCol, lineChartBk, hovLabel, pieChartData }) => {
  const data = {
    labels: pieChartData.label,

    datasets: pieChartData.datas.map((data) => {
      return {
        label: hovLabel || "Data",
        backgroundColor: [
          "#109618",
          "#FB700780",
          "#CBDFAB",
          "#FF9900",
          "#78A431",
        ],
        borderColor: "transparent",
        data: data.data,
        datalabels: {
          color: "#fff",
        },
      };
    }),
  };
  const plugins = [ChartDataLabels];

  const options = {
    maintainAspectRatio: false,
    tooltipTemplate: "<%= Math.round(circumference / 6.283 * 100) %>%",

    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + "%";
        },
        font: {
          size: 14,
        },
      },
      legend: {
        position: "left",
        align: "end",

        labels: {
          boxWidth: 8,
          font: {
            size: 9,
            weight: "bold",
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
  };
  return (
    <PieChartWrap lineChartBk={lineChartBk}>
      <FlexibleDiv>
        <div className="canvas">
          <Pie options={options} data={data} plugins={plugins} />
        </div>
      </FlexibleDiv>
    </PieChartWrap>
  );
};
