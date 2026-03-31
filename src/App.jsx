import "./App.css";
import { IoMdAdd } from "react-icons/io";
import LineChart from "./components/LineChart";
import CircleChart from "./components/CircleChart";

function App() {
  return (
    <>
      <nav className="w-full h-auto fixed top-0 z-10000 text-center p-4 bg-[#ffb3c1] text-[#590d22] text-4xl font-bold border-b-2 border-[#590d22]">
        Expense Tracker
      </nav>
      {/* section for total expenses */}
      <section className="w-full h-auto p-4 mt-18">
        <div className="w-full h-auto flex justify-between items-center rounded-xl bg-[#800f2f] py-2 px-4">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-lg font-semibold text-[#ffccd5]">
              Total Expenses
            </h2>
            <p className="text-4xl text-[#fff0f3]">$76749.86</p>
          </div>
          {/* duration filter */}
          <button className="w-auto h-full flex justify-center items-center gap-1 text-xl font-semibold text-[#800f2f] bg-[#ffccd5] pr-2 pl-3 py-3 rounded hover:bg-[#ff8fa3] cursor-pointer ">
            Add <IoMdAdd className="text-2xl font-semibold hover:rotate-360" />
          </button>
        </div>
      </section>

      <section className="w-full h-auto p-4">
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
            <CircleChart />
          </div>
        </div>
      </section>

      <section className="w-full h-auto p-4">
        <div className="w-full bg-[#ffccd5] rounded-2xl px-8 pb-8 pt-4">
          <p className="text-xl font-semibold pb-2 text-[#800f2f]">
            Search Expenses For
          </p>
          <div className="w-full flex justify-start items-center gap-2 pb-6">
            <input
              type="date"
              className="w-auto border-2 border-[#800f2f] rounded-xl py-1 px-2 bg-[#fff0f3] text-[#800f2f] outline-none"
            />
            <button className="w-auto border-2 border-transparent rounded-xl py-1 px-2 bg-[#800f2f] hover:bg-[#fff0f3]  text-[#fff0f3] hover:text-[#800f2f]">
              Search
            </button>
          </div>
          <LineChart />
        </div>
      </section>
    </>
  );
}

export default App;
