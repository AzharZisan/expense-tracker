import React from "react";

const TableView = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full h-[300px] flex flex-col justify-start items-center border-2 border-[#800f2f] rounded-xl">
          {/* data heads */}
          <div className="w-full h-auto flex justify-around items-center rounded-t-xl border-b-2 border-[#800f2f] bg-[#ffb3c1] text-[#800f2f]">
            <p className="">Date</p>
            <p className="">Amount</p>
            <p className="">Type</p>
          </div>
          {/* data values */}
        </div>
      </div>
    </>
  );
};

export default TableView;
