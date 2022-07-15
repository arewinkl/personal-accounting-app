import { useState } from "react";
import "../App.css";

function Table({ info }) {
  console.log(info);
  return (
    <div className="App">
      <h1>Monthly Expense Table</h1>
      <table>
        <tr className="table-row">
          <th className="table-header">Catagory</th>
          <th className="table-header">Date</th>
          <th className="table-header">Cost</th>
          <th className="table-header">Debit</th>
          <th className="table-header">Credit</th>
          <th className="table-header">Description</th>
        </tr>

        {Object.values(info).map((value, key) => {
          return (
            <tr key={key}>
              <td className="table-data">{value.catagory}</td>
              <td className="table-data">{value.date}</td>
              <td className="table-data">{value.cost}</td>
              <td className="table-data">{value.debit}</td>
              <td className="table-data">{value.credit}</td>
              <td className="table-data">{value.description}</td>
            </tr>
          );
        })}
      </table>
      {/* <h2>{info[0].catagory}</h2> */}
    </div>
  );
}

export default Table;

//data is stored in info, need to figure out how to map through the data and pass it into the table tha you created, you are able to print the data, just need to get the map to work.
