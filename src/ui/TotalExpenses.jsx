import React from "react";
import { Temporal } from "@js-temporal/polyfill";

const TotalExpenses = () => {
  const expenseData = JSON.parse(localStorage.getItem("expenses")) || [];
  const thisDay = Temporal.Now.plainDateISO().toString()
  const todayExpenses = expenseData.reduce((acc, item) => {return acc + item?.totalAmount ?? 0},0)

  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-md font-semibold text-[#ffccd5] flex justify-center items-center gap-1 lg:text-lg">
          Total Expenses
          <span className="text-[9px] text-[#590d22] bg-[#ffccd5] font-bold py-0.5 px-2 rounded-xl">
            Untill Today
          </span>
        </h2>
        <p className="text-7xl text-[#fff0f3] sm:text-4xl">${expenseData.length > 0 ? todayExpenses : '0'}</p>
      </div>
    </>
  );
};

export default TotalExpenses;
