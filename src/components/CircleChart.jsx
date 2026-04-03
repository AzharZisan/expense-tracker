import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { GraphContext } from "../context/context";
import { useContext } from "react";

const CircleChart = () => {
  const { thisDay, thisMonth, btnStates, weekFilter } = useContext(GraphContext)
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  const result = expenses.reduce((acc, item) => {
    const existing = acc.find((i) => i.type === item.type);

    if (existing) {
      existing.amount = Number(existing.amount) + Number(item.amount)
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  let labels;
  let amounts;
  if (btnStates === 'thisDay') {
    labels = result.map((item) => item.date === thisDay ? item.type : '')
    amounts = result.map((item) => item.date === thisDay ? item.amount : '')
  } else if( btnStates === "thisWeek"){
    labels = weekFilter.map((item) => item.type)
    amounts = weekFilter.map((item) => item.amount)
  } else if (btnStates === 'thisMonth') {
    labels = result.map((item) => item.date.slice(5, 7) === String(thisMonth).padStart(2, '0') ? item.type : '' )
    amounts = result.map((item) => item.date.slice(5, 7) === String(thisMonth).padStart(2, '0') ? item.amount : '' )
  } else {
    labels = result.map((item) => item.type)
    amounts = result.map((item) => item.amount)
  }

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
