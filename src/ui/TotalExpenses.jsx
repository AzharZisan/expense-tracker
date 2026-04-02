import React from "react";

const TotalExpenses = () => {
  const expenseData = JSON.parse(localStorage.getItem("expenses")) || [];
  const totalAmount = expenseData.reduce(
    (sum, item) => sum + Number(item?.amount ?? 0),
    0,
  );

  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-lg font-semibold text-[#ffccd5] flex justify-center items-center gap-1">
          Total Expenses
          <span className="text-[10px] text-[#590d22] bg-[#fff0f3] font-bold py-0.5 px-2 rounded-xl">
            Today
          </span>
        </h2>
        <p className="text-4xl text-[#fff0f3]">${totalAmount}</p>
      </div>
    </>
  );
};

export default TotalExpenses;
