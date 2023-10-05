import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "./TableUI";

function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="pl-4 text-gray-600 body-font">
          <div className="flex justify-between w-full mt-6 lg:mt-0">
            <div className="w-40 py-4 font-bold text-center text-white bg-gray-500 bg-gray-800 rounded-tr-lg ro hover:bg-gray-900 rounded-tl-md">
              Output
            </div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
            
              
      <button  type="button" class="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 40.496 36"
                  className="fill-current"
                >
                  <path
                    id="Icon_awesome-file-export"
                    d="M27,8.571a1.682,1.682,0,0,0-.492-1.188L19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9ZM40.148,21.656,33.42,14.878a1.128,1.128,0,0,0-1.927.795V20.25h-4.5v4.5h4.5v4.584a1.128,1.128,0,0,0,1.927.795l6.729-6.785A1.2,1.2,0,0,0,40.148,21.656ZM13.5,23.625v-2.25a1.128,1.128,0,0,1,1.125-1.125H27v-9H17.438A1.692,1.692,0,0,1,15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V24.75H14.625A1.128,1.128,0,0,1,13.5,23.625Z"
                  />
                </svg>
        Export CSV</button>

             </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="flex items-center justify-center w-full px-6 font-mono text-2xl font-bold text-center text-gray-400 h-80">
         Output
        </div>
      )}
    </div>
  );
}

export default Table;
