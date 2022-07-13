import { useState } from "react";
import "../App.css";

function Table({ info }) {
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
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
