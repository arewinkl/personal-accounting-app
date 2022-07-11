import { useState } from "react";
import "../App.css";

function inputFields() {
  // const [data, setData] = useState("");
  // const [dataEntry, setDataEntry] = useState({
  //   catagory: ""
  //   date: "",
  //   cost: "",
  //   debit: "",
  //   credit: "",
  //   description: "",
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.cats.value);
    // datas();
  };
  const datas = (e) => {
    // setData = e.target.value;
    console.log(e.target.value);
  };
  //   console.log(dataEntry, setDataEntry);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Accounting</h1>
        <form onSubmit={handleSubmit}>
          Catagory:
          <input
            className="money-inputs"
            id="cats"
            type="text"
            name="text"
            onChange={datas}

            // value={dataEntry.text}
          ></input>
          Date:
          <input className="money-inputs" type="date" name="date"></input>
          Cost:
          <input className="money-inputs" type="number" name="cost"></input>
          Debit:
          <input className="money-inputs" type="checkbox" name="debit"></input>
          Credit:
          <input className="money-inputs" type="checkbox" name="credit"></input>
          Description:
          <input
            className="money-inputs"
            type="text"
            name="description"
          ></input>
          <input className="money-inputs" type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default inputFields;
