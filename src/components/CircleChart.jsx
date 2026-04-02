import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const CircleChart = () => {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const amounts = expenses.map((item) => item.amount);
  const labels = expenses.map((item) => item.type);
  const typeID = expenses.map((item) => item.typeID);

  return (
    <Doughnut
      data={{
        labels: [...labels, labels],
        datasets: [
          {
            label: "Revenue",
            data: [...amounts, amounts],
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
