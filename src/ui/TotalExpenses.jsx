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
        <h2 className="text-lg font-semibold text-[#ffccd5]">Total Expenses</h2>
        <p className="text-4xl text-[#fff0f3]">${totalAmount}</p>
      </div>
    </>
  );
};

export default TotalExpenses;
