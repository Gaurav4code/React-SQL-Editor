import React from "react";
import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);
    const temp = [];
    if ( tableHeaders!=null && tableRows!=null && tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });
      setCSVData(temp);
      if (temp.length > 0) {
        toast.success("Query run");
      } else {
        toast.error("This didn't work.");
      }
    }
    
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };
  return (
    <div className="flex ">
      <div className="p-2">
      <button
      onClick={reset}
      type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reset</button>
       
      </div>
      <div className="p-2">
      <button onClick={runQuery} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Run</button>
        
      </div>
    </div>
  );
}

export default Buttons;
