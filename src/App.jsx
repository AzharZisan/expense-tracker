import "./App.css";
import DataSearch from "./ui/DataSearch";
import BarView from "./ui/BarView";
import AddButton from "./components/AddButton";
import Nav from "./ui/Nav";
import TotalExpenses from "./ui/TotalExpenses";
import TableView from "./ui/TableView";

function App() {
  const handleClear = () => {
   const updated = []
   localStorage.setItem("expenses", JSON.stringify(updated))
   localStorage.setItem("expenseType", JSON.stringify(updated))
  }

  return (
    <>
      <Nav />
      {/* section for total expenses */}
      <section className="w-full h-auto p-4 mt-18">
        <div className="w-full h-auto flex justify-center items-between flex-col gap-4 rounded-xl p-3 bg-[#800f2f]   sm:justify-between sm:items-center sm:gap-0 sm:flex-row lg:py-2 lg:px-4 xl:py-2 xl:pl-4 xl:pr-5">
          <TotalExpenses />
          {/* duration filter */}
          <AddButton />
        </div>
      </section>

      <section className="w-full h-auto p-4">
        <div className="w-full h-auto flex justify-center items-center flex-col md:flex-row gap-4">
          <TableView />
          <BarView />
        </div>
      </section>

      <section className="w-full h-auto p-4">
        <DataSearch />
      </section>
      <div className="w-full h-auto p-4">
        <div className="w-full p-2 bg-[#ff758f] text-[#800f2f] flex justify-center items-start flex-col gap-1 rounded-2xl">
          <p className="italic">
            *Disclaimer: The expense tracker has no database and it is storing
            data in your browser cache. If having trouble while browsing, please
            click "Clear Cache" button below and refresh the page.
          </p>
          <p className="italic">
            *Note that: By clearing cache your data will be deleted.
          </p>
          <button
            onClick={handleClear}
            className="text-md bg-[#800f2f] text-[#fff0f3] hover:bg-[#fff0f3] hover:text-[#800f2f] cursor-pointer py-1 px-3 rounded-xl"
          >
            Clear Cache
          </button>
          <p className="text-[#590d22]">
            Custom database will be added soon. Stay updated!
          </p>
        </div>
      </div>
      <div className="w-full h-auto bg-[#ffb3c1] text-[#800f2f] text-center p-2">
        Made with ☕ and ❤️ by{" "}
        <a
          href="https://github.com/AzharZisan"
          target="_blank"
          className="hover:underline hover:text-[#590d22]"
        >
          Azhar Zisan
        </a>
      </div>
    </>
  );
}

export default App;
