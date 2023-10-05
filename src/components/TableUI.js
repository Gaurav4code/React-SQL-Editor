import React from "react";

function TableUI({ headers, rows }) {
  return (
    <div className="w-full overflow-auto h-80 scrollbar-hide">
      <table className="w-full text-left whitespace-no-wrap table-auto">
        <thead>
          <tr>
            { headers?.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 rounded-tl rounded-bl title-font"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="px-4 py-2 text-sm border-t-2 border-gray-200"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
