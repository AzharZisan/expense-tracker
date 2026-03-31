import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <Line
      data={{
        labels: ["A", "B", "C", "d", "e", "f", "g", "h", "i", "y"],
        datasets: [
          {
            label: "Revenue",
            data: [200, 150, 300, 123, 765, 504, 235, 1200, 400, 60],
            borderColor: "#c9184a",
            tension: 0.3,
            pointStyle: false,
            fill: true,
            backgroundColor: "#ffb3c1",
            label: " ",
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
          },
          // y: {
          //   grid: { display: false },
          //   border: { display: false },
          //   ticks: { display: false },
          // },
        },
      }}
    />
  );
};

export default LineChart;
