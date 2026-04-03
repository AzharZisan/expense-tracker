import React from "react";

const TableView = () => {
  const expenseData = JSON.parse(localStorage.getItem("expenses")) || [];

  return (
    <>
      <div className="w-full h-[300px] flex flex-col justify-start items-center border-2 border-[#800f2f] rounded-xl">
        {/* data heads */}
        <div className="w-full h-auto flex justify-around items-center rounded-t-xl border-b-2 border-[#800f2f] bg-[#ffb3c1] text-[#800f2f]">
          <p className="">Date</p>
          <p className="">Amount($)</p>
          <p className="">Type</p>
        </div>
        {/* data values */}
        {expenseData.length === 0 ? (
          <div className="w-full h-full flex justify-around items-center text-[#800f2f7e]">
            <p className="italic">No Expenses Added Today!</p>
          </div>
        ) : (
          expenseData.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full h-auto flex justify-around border-b-2 items-center border-[#800f2f] text-[#800f2f]"
              >
                <p className="w-full flex justify-center items-center">
                  {item.entries.map((i) => i.date)}
                </p>
                <p className="w-full flex justify-center items-center">
                  ${Number(item.entries.map((i) => i.amount))}
                </p>
                <p className="w-full flex justify-center items-center">
                  {item.type}
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default TableView;
