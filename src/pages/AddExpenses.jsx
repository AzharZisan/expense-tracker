import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const AddExpenses = () => {
  const [TypeInputValue, setTypeInputValue] = useState("");
  const [amount, setAmount] = useState(Number);
  const typeRef = useRef();
  const dateRef = useRef();

  const expenseTypeArr = {
    id: crypto.randomUUID(),
    type: TypeInputValue,
  };

  const handleTypeInputValueFocus = (e) => {
    setTypeInputValue(e.target.value);
  };

  const existingTypes = JSON.parse(localStorage.getItem("expenseType")) || [];

  const handleAddTypeOptions = () => {
    const updated = [...existingTypes, expenseTypeArr];
    localStorage.setItem("expenseType", JSON.stringify(updated));
    setTypeInputValue("");
  };

  const handleTypeFocus = () => {
    typeRef.current.value;
  };

  const handleDateFocus = () => {
    dateRef.current.value;
  };

  const handleAddExpenses = () => {
    const expenseData = {
      id: crypto.randomUUID(),
      amount: amount,
      type: typeRef.current.value,
      date: dateRef.current.value,
    };

    const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const updatedExpenses = [...existingExpenses, expenseData];
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center gap-4 flex-col">
        <h1 className="text-xl font-bold text-[#a4133c]">Add Your Expenses</h1>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-1 rounded-xl bg-[#ffccd5] p-4">
          <label htmlFor="" className="w-full text-sm text-left text-[#a4133c]">
            Amount
          </label>
          <input
            type="number"
            id="expenseAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount ($)"
            className="w-full border-2 border-[#a4133c] bg-[#fff0f3] p-2 rounded outline-none text-[#a4133c]"
          />
          <label
            htmlFor="expenseType"
            className="w-full text-sm text-left text-[#a4133c]"
          >
            Type
          </label>
          <select
            ref={typeRef}
            onChange={handleTypeFocus}
            className="w-full border-2 border-[#a4133c] bg-[#fff0f3] p-2 rounded outline-none text-[#a4133c]"
          >
            {existingTypes.length === 0 ? (
              <option value="null" defaultValue>
                No Types Added
              </option>
            ) : (
              existingTypes.map((item) => {
                return (
                  <option key={item.id} value={item.type}>
                    {item.type}
                  </option>
                );
              })
            )}
          </select>
          <label
            htmlFor="expenseDate"
            className="w-full text-sm text-left text-[#a4133c]"
          >
            Date
          </label>
          <input
            type="date"
            id="expenseDate"
            ref={dateRef}
            onChange={handleDateFocus}
            className="w-full border-2 border-[#a4133c] bg-[#fff0f3] p-2 rounded outline-none text-[#a4133c]"
          />
          <Link to={"/"}>
            <button
              onClick={handleAddExpenses}
              type="submit"
              className="w-full bg-[#a4133c] hover:bg-[#ffb3c1] py-2 px-14 rounded mt-4 text-[#fff0f3] hover:text-[#a4133c]"
            >
              Add Expense
            </button>
          </Link>
          <input
            type="text"
            id="expenseAddTypes"
            placeholder="Add a Type"
            value={TypeInputValue}
            onChange={handleTypeInputValueFocus}
            className="w-full border-2 border-[#a4133c] bg-[#fff0f3] p-2 rounded outline-none text-[#a4133c] mt-3"
          />
          <button
            onClick={handleAddTypeOptions}
            className="w-full p-2 bg-[#ff8fa3] hover:bg-[#ffb3c1] border border-[#800f2f] mt-1 rounded text-[#800f2f]"
          >
            Add Types
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpenses;
