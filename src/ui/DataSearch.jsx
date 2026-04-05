import React, { useState } from "react";
import LineChart from "../components/LineChart";
import { SearchContext } from "../context/context";
import { Temporal } from "@js-temporal/polyfill";

const DataSearch = () => {
  const thisDay = Temporal.Now.plainDateISO().toString();
  const [search, setSearch] = useState(thisDay);
  const [btnInput, setBtnInput] = useState(thisDay);

  const handleSearchFocus = (e) => {
    setSearch(e.target.value);
  };
  const handleEnter = () => {
    setBtnInput(search);
  };

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const targetDate = expenses.filter((item) => item.date === btnInput);
  const merged = targetDate.map((t) => {
    const entriesArr = t.entries.reduce((acc, item) => {
      const existing = acc.find((i) => i.type === item.type);

      if (existing) {
        existing.amount = Number(existing.amount) + Number(item.amount);
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return { date: t.date, entries: entriesArr };
  });

  let labels;
  let amounts;
  if (targetDate.length > 0) {
    labels = merged.flatMap((i) => i.entries.map((e) => e.type));
    amounts = merged.flatMap((i) => i.entries.map((e) => e.amount));
  } else {
    labels = merged.flatMap((item) => item.entries.map((i) => i.type));
    amounts = merged.flatMap((item) => item.entries.map((i) => i.amount));
  }

  return (
    <>
      <SearchContext.Provider value={{ labels, amounts }}>
        <div className="w-full bg-[#ffccd5] rounded-2xl p-4">
          <p className="text-md font-semibold pb-2 text-[#800f2f] md:text-xl xl:text-2xl">
            Search Expenses For
          </p>
          <div className="w-full flex justify-start items-center gap-2 pb-6">
            <input
              value={search}
              onChange={handleSearchFocus}
              type="date"
              className="w-auto border-2 border-[#800f2f] rounded-xl py-1 px-1 md:px-2 bg-[#fff0f3] text-[#800f2f] outline-none"
            />
            <button
              onClick={handleEnter}
              className="w-auto border-2 border-transparent rounded-xl py-1 px-1 md:px-2 bg-[#800f2f] hover:bg-[#fff0f3]  text-[#fff0f3] hover:text-[#800f2f] hover:border-[#800f2f] text-sm md:text-[1rem]"
            >
              Search
            </button>
          </div>
          <LineChart />
        </div>
      </SearchContext.Provider>
    </>
  );
};

export default DataSearch;
