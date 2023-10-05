import toast from "react-hot-toast";

export default function GetTableInfo(data) {
  let infoStore = null;
  if (data === 1) {
    infoStore = require("./DataSet/customers.json");
  } else if (data === 2) {
    infoStore = require("./DataSet/suppliers.json");
  } else if (data === 3) {
    infoStore = require("./DataSet/products.json");
  } else if (data === 4) {
    infoStore = require("./DataSet/select_customer.json");
  } 
  let tableHeaders = [];
  let tableRows = [];
  console.log(infoStore);
  if (infoStore == null) {
    toast.error("Invalid Query");
    return "";
    
  } else {
    for (var i = 0; i < infoStore.length; i++) {
      const row = infoStore[i];

      if (i === 0) {
        for (const item in row) {
          tableHeaders.push(row[item]);
        }
      } else {
        let temp = [];
        for (const item in row) {
          temp.push(row[item]);
        }
        tableRows.push(temp);
      }
    }
  }
  return { tableHeaders, tableRows };
}
