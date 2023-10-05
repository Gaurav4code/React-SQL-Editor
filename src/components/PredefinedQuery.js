import React from "react";
import { useEffect,useState } from "react";




function PredefinedQuery({ setDefaults, setValue }) {
  

  
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
   

  ];
  return (
    <div>
      
      <div className="p-4 bg-blue-700 ">
        <div className="flex items-center justify-center">
          
          <p className="text-lg font-bold">Available Queries</p>
        </div>

        <div className="mb-6 overflow-auto border border-blue-500 rounded-sm h-60 lg:h-90 scrollbar-hide lg:mb-0 ">

          
          {qurtyValue.map((item, index) => (
          
            <p
              key={index}
              className="p-2 my-4 font-mono text-sm text-center bg-gray-300 rounded-sm cursor-pointer hover:bg-gray-400 hover:text-white"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
           
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;

