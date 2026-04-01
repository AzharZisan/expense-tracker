import "./App.css";
import DataSearch from "./ui/DataSearch";
import BarView from "./ui/BarView";
import AddButton from "./components/AddButton";

function App() {
  return (
    <>
      <nav className="w-full h-auto fixed top-0 z-10000 text-center p-4 bg-[#ffb3c1] text-[#590d22] text-4xl font-bold border-b-2 border-[#590d22] flex justify-center items-center gap-2">
        Expense Tracker
        <span className="text-sm bg-[#590d22] text-[#fff0f3] font-normal py-0.5 px-2 rounded-xl">
          BETA
        </span>
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
          <AddButton />
        </div>
      </section>

      <section className="w-full h-auto p-4">
        <BarView />
        <TableView />
      </section>

      <section className="w-full h-auto p-4">
        <DataSearch />
      </section>
    </>
  );
}

export default App;
