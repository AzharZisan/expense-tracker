import React, { useContext, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { SearchContext } from "../context/context";

const LineChart = () => {
  const { labels, amounts } = useContext(SearchContext);
  const chartRef = useRef(null);

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom,
    );
    gradient.addColorStop(0, "rgba(201, 24, 74, 0.7)"); // top - solid-ish
    gradient.addColorStop(0.5, "rgba(201, 24, 74, 0.3)"); // top - solid-ish
    gradient.addColorStop(1, "rgba(201, 24, 74, 0)"); // bottom - transparent
    return gradient;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: " ",
        data: amounts,
        borderColor: "#c9184a",
        tension: 0.1,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "transparent"; // chart not yet mounted
          return getGradient(ctx, chartArea);
        },
        pointBackgroundColor: "#c9184a",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff0f3",
        titleColor: "#a4133c",
        titleAlign: "center",
        bodyColor: "#a4133c",
        bodyAlign: "center",
        displayColors: false,
        padding: 12,
        callbacks: {
          label: (context) => `Amount: $${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
      },
      y: {
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
