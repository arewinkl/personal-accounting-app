import { useState } from "react";
import "../App.css";

function Table({ info }) {
  console.log(info);
  return (
    <div className="App">
      <h1>Monthly Expense Table</h1>
      <table>
        <tr>
          <th>Catagory</th>
          <th>Date</th>
          <th>Cost</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Description</th>
        </tr>

        {Object.values(info).map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.catagory}</td>
              <td>{value.date}</td>
              <td>{value.cost}</td>
              <td>{value.debit}</td>
              <td>{value.credit}</td>
              <td>{value.description}</td>
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
