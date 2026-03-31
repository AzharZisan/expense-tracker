import "./App.css";
import { IoMdAdd } from "react-icons/io";
import LineChart from "./components/LineChart";

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

      

      {/* section for charts and bars */}
      {/* <section className="w-screen p-4">
        <div className="w-full h-auto flex justify-between items-center gap-4">
          <div className="w-[40vw] h-auto flex justify-center items-end border-2 border-[#800f2f] rounded-xl p-2">
            <LineChart />
          </div>
          <div className="w-[50%]"></div>
        </div>
      </section> */}
    </>
  );
}

export default App;
