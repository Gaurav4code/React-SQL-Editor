import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  let customers = require("../DataSet/customers.json");
  let suppliers = require("../DataSet/suppliers.json");
  let products = require("../DataSet/products.json");
  return (
    <div className="w-full h-screen py-4 overflow-auto scrollbar-hide">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={1}
      />
      <div className="w-8/12 mx-auto mt-8 mb-4 border-b-2"></div>
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
        tableNo={2}
      />
      <div className="w-8/12 mx-auto mt-8 mb-4 border-b-2"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={3}
      />
    </div>
  );
}

export default DataDraw;
