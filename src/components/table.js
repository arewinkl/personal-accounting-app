import { useState } from "react";
import "../App.css";

function Table({ info }) {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  //   console.log(data);
  console.log(info);
  return (
    <div className="App">
      <h2>Ella dog</h2>
      <table>
        <tr>
          <th>Catagory</th>
          <th>Date</th>
          <th>Cost</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Description</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
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
