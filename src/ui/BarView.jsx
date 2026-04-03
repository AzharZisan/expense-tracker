import React, { useState } from "react";
import CircleChart from "../components/CircleChart";
import { Temporal } from "@js-temporal/polyfill";
import { GraphContext } from "../context/context";

const BarView = () => {
  const [btnStates, setBtnStates] = useState("thisDay");
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  const result = expenses.reduce((acc, item) => {
    const existing = acc.find((i) => i.type == item.type);

    if (existing) {
      existing.amount = Number(existing.amount) + Number(item.amount);
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const thisDay = Temporal.Now.plainDateISO().toString();

  const getWeekRange = (date = Temporal.Now.plainDateISO()) => {
    const startOfWeek = date.subtract({ days: date.dayOfWeek - 1 });
    const endOfWeek = date.add({ days: 7 - date.dayOfWeek });
    return { startOfWeek, endOfWeek };
  };

  const { startOfWeek, endOfWeek } = getWeekRange();
  const weekFilter = result.filter((item) => {
    const itemDate = Temporal.PlainDate.from(item.date);
    return (
      Temporal.PlainDate.compare(itemDate, startOfWeek) >= 0 &&
      Temporal.PlainDate.compare(itemDate, endOfWeek) <= 0
    );
  });

  const thisMonth = Temporal.Now.plainDateISO().month;
  console.log(thisMonth)

  let labels;
  if (btnStates === "thisDay") {
    labels = result.filter((item) => item.date === thisDay);
  } else if (btnStates === "thisMonth") {
    labels = result.filter(
      (item) => item.date.slice(5, 7) === String(thisMonth).padStart(2, "0"),
    );
  } else if (btnStates === "thisWeek") {
    labels = weekFilter.filter((item) => item.type);
  } else {
    labels = result.map((item) => item.type);
  }

  return (
    <>
      <GraphContext.Provider value={{ thisDay, thisMonth, btnStates, weekFilter }}>
        <div className="w-full h-[300px] flex justify-center items-center relative">
          <div className="w-auto h-auto flex flex-col justify-center items-start gap-2 absolute top-0 left-4">
            <button
              onClick={() => setBtnStates("thisDay")}
              className={`py-1 px-2 text-sm rounded-xl ${btnStates === "thisDay" ? "bg-[#ffb3c1] text-[#a4133c]" : "bg-[#c9184a] text-[#fff0f3]"}`}
            >
              This Day
            </button>
            <button
              onClick={() => setBtnStates("thisWeek")}
              className={`py-1 px-2 text-sm rounded-xl ${btnStates === "thisWeek" ? "bg-[#ffb3c1] text-[#a4133c]" : "bg-[#c9184a] text-[#fff0f3]"}`}
            >
              This Week
            </button>
            <button
              onClick={() => setBtnStates("thisMonth")}
              className={`py-1 px-2 text-sm rounded-xl ${btnStates === "thisMonth" ? "bg-[#ffb3c1] text-[#a4133c]" : "bg-[#c9184a] text-[#fff0f3]"}`}
            >
              This Month
            </button>
          </div>
          <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-[50%] z-0">
            <p className="text-6xl text-[#a4133c]">{labels.length}</p>
            <p className="text-xl text-[#a4133c]">Types</p>
          </div>
          <CircleChart />
        </div>
      </GraphContext.Provider>
    </>
  );
};

export default BarView;
