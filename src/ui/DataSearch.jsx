import React from 'react'
import LineChart from "../components/LineChart";

const DataSearch = () => {
  return (
    <>
      <div className="w-full bg-[#ffccd5] rounded-2xl px-8 pb-8 pt-4">
        <p className="text-xl font-semibold pb-2 text-[#800f2f]">
          Search Expenses For
        </p>
        <div className="w-full flex justify-start items-center gap-2 pb-6">
          <input
            type="date"
            className="w-auto border-2 border-[#800f2f] rounded-xl py-1 px-2 bg-[#fff0f3] text-[#800f2f] outline-none"
          />
          <button className="w-auto border-2 border-transparent rounded-xl py-1 px-2 bg-[#800f2f] hover:bg-[#fff0f3]  text-[#fff0f3] hover:text-[#800f2f] hover:border-[#800f2f]">
            Search
          </button>
        </div>
        <LineChart />
      </div>
    </>
  );
}

export default DataSearch