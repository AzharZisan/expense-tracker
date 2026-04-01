import React from 'react'
import CircleChart from '../components/CircleChart';

const BarView = () => {
  return (
    <>
      <div className="w-full h-[300px] flex justify-center items-center relative">
        <div className="w-auto h-auto flex flex-col justify-center items-start gap-2 absolute top-0 left-4">
          <button className="py-1 px-2 text-sm rounded-xl bg-[#c9184a] text-[#fff0f3] hover:bg-[#ffb3c1] hover:text-[#a4133c]">
            This Day
          </button>
          <button className="py-1 px-2 text-sm rounded-xl bg-[#c9184a] text-[#fff0f3] hover:bg-[#ffb3c1] hover:text-[#a4133c]">
            This Week
          </button>
          <button className="py-1 px-2 text-sm rounded-xl bg-[#c9184a] text-[#fff0f3] hover:bg-[#ffb3c1] hover:text-[#a4133c]">
            This Month
          </button>
        </div>
        <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-[50%] z-0">
          <p className="text-6xl text-[#a4133c]">7</p>
          <p className="text-xl text-[#a4133c]">Types</p>
        </div>
        <CircleChart />
      </div>
    </>
  );
}

export default BarView