import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { GraphContext } from "../context/context";
import { useContext } from "react";

const CircleChart = () => {
  const { labels, amounts } = useContext(GraphContext);
  

  return (
    <Doughnut
      data={{
        labels: labels,
        datasets: [
          {
            label: "Revenue",
            data: amounts,
            borderColor: "#c9184a",
            pointStyle: false,
            fill: true,
            backgroundColor: "#ffb3c1",
            label: " ",
          },
        ],
      }}
      options={{
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
              label: (context) => {
                const value = context.parsed;
                return `Amount: $${value.toLocaleString()}`;
              },
            },
          },
        },
        responsive: true,
      }}
    />
  );
};

export default CircleChart;
