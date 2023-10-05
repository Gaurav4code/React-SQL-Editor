import React from "react";
import TableUI from "../TableUI";

function TablePopup({ trigger, setTrigger, rows, headers }) {
  return (
      trigger && (
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-25">
        <div className="relative w-9/12 p-6 mx-auto bg-white h-96 rounded-2xl">
          <button
            onClick={() => setTrigger(false)}
            className="absolute px-4 py-2 font-extrabold bg-blue-700 rounded text-whiterounded-full -top-4 -right-2 hover:bg-blue-800"
          > 
            X
          </button>
          <TableUI headers={headers} rows={rows} />
        </div>
      </div>
    )
  );
}

export default TablePopup;
