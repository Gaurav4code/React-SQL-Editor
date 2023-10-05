import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div>
      
     <div className="text-center"><h1 className="text-3xl ">React SQL Editor</h1></div>
    <div className="flex flex-wrap items-start justify-center w-full border-red">
    <div className="w-full lg:w-3/12">
        <DataDraw />
      </div>

      <div className="w-full lg:w-9/12">
        <div className="flex flex-wrap items-start justify-center w-full">
          
          <div className="w-full lg:w-9/12">
            <div className="flex justify-between w-full">
              <div className="py-4 font-bold text-center bg-gray-200 w-28">
                Input
              </div>
              <Buttons
                className='border-4 border-red-5000 '
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            <SqlEditor value={value} setValue={setValue} />
          </div>
          <div className="w-full lg:w-3/12">
            <PredefinedQuery className='border-red-500' setValue={setValue} setDefaults={setDefaults} />
          </div>
        </div>
        <Table query={query} headers={headers} rows={rows} csvData={csvData} />
      </div>

      
      <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
          duration: 3000
        }}
      />
       </div>
    </div>
  );
}

export default App;
