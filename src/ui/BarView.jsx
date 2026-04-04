import React, { useState } from "react";
import CircleChart from "../components/CircleChart";
import { Temporal } from "@js-temporal/polyfill";
import { GraphContext } from "../context/context";

const BarView = () => {
  const [btnStates, setBtnStates] = useState("thisDay");
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const thisDay = Temporal.Now.plainDateISO().toString();
  const thisMonth = Temporal.Now.plainDateISO().month;
  const thisYear = Temporal.Now.plainDateISO().year;

  const merged = expenses.map((item) => {
    const mergedEntries = item.entries.reduce((acc, item) => {
      const sameType = acc.find((i) => i.type === item.type);

      if (sameType) {
        sameType.amount = Number(sameType.amount) + Number(item.amount);
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return { date: item.date, entries: mergedEntries };
  });

  const getWeekRange = (date = Temporal.Now.plainDateISO()) => {
    const startOfWeek = date.subtract({ days: date.dayOfWeek - 1 });
    const endOfWeek = date.add({ days: 7 - date.dayOfWeek });
    return { startOfWeek, endOfWeek };
  };

  const { startOfWeek, endOfWeek } = getWeekRange();
  const weekFilter = expenses.filter((item) => {
    if (!item.date) return false;
    const itemDate = Temporal.PlainDate.from(item.date);
    return (
      Temporal.PlainDate.compare(itemDate, startOfWeek) >= 0 &&
      Temporal.PlainDate.compare(itemDate, endOfWeek) <= 0
    );
  });

  const monthFilter = expenses.filter((item) => {
    if (!item.date) return false;
    const itemDate = Temporal.PlainDate.from(item.date);
    return itemDate.month === thisMonth && itemDate.year === thisYear;
  });

  let labels;
  let amounts;
  let typeLength = 0;
  if (btnStates === "thisDay") {
    labels = merged
      .flatMap((item) => item.entries.filter(() => item.date === thisDay))
      .map((it) => it.type);
    amounts = merged
      .flatMap((item) => item.entries.filter(() => item.date === thisDay))
      .map((it) => it.amount);
    typeLength = merged.flatMap((item) =>
      item.entries.filter(() => item.date === thisDay),
    ).length;
  } else if (btnStates === "thisWeek") {
    const allEntries = weekFilter.flatMap((item) => item.entries);

    const weekMerge = allEntries.reduce((acc, item) => {
      const existing = acc.find((i) => i.type === item.type);

      if (existing) {
        existing.amount = Number(existing.amount) + Number(item.amount);
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    labels = weekMerge.map((i) => i.type);
    amounts = weekMerge.map((i) => i.amount);
    typeLength = weekMerge.length
  } else if (btnStates === "thisMonth") {
    const allEntries = monthFilter.flatMap((item) => item.entries);

    const monthMerge = allEntries.reduce((acc, item) => {
      const existing = acc.find((i) => i.type === item.type);
      if (existing) {
        existing.amount = Number(existing.amount) + Number(item.amount);
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    labels = monthMerge.map((i) => i.type);
    amounts = monthMerge.map((i) => i.amount);
    typeLength = monthMerge.length
  } else {
    labels = merged.flatMap((item) => item.entries.map((i) => i.type));
    amounts = merged.flatMap((item) => item.entries.map((i) => i.amount));
  }

  return (
    <>
      <GraphContext.Provider
        value={{ labels, amounts }}
      >
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
            <p className="text-6xl text-[#a4133c]">{typeLength}</p>
            <p className="text-xl text-[#a4133c]">Types</p>
          </div>
          <CircleChart />
        </div>
      </GraphContext.Provider>
    </>
  );
};

export default BarView;
