import { useState } from "react";
import "../App.css";

function InputFields({ handleData }) {
  //   const [data, setData] = useState("");
  const [dataEntry, setDataEntry] = useState({
    catagory: "",
    date: "",
    cost: "",
    debit: false,
    credit: false,
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setData([...data, dataEntry]);
    handleData(dataEntry);
    setDataEntry({
      catagory: "",
      date: "",
      cost: "",
      debit: false,
      credit: false,
      description: "",
    });
  };
  //   console.log(data);
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
            name="catagory"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: e.target.value })
            }
            value={dataEntry.catagory}
          ></input>
          Date:
          <input
            className="money-inputs"
            type="date"
            name="date"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: e.target.value })
            }
            value={dataEntry.date}
          ></input>
          Cost:
          <input
            className="money-inputs"
            type="number"
            name="cost"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: e.target.value })
            }
            value={dataEntry.cost}
          ></input>
          Debit:
          <input
            className="money-inputs"
            type="checkbox"
            name="debit"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: !dataEntry.debit })
            }
            value={dataEntry.debit}
          ></input>
          Credit:
          <input
            className="money-inputs"
            type="checkbox"
            name="credit"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: !dataEntry.credit })
            }
            value={dataEntry.credit}
          ></input>
          Description:
          <input
            className="money-inputs"
            type="text"
            name="description"
            onChange={(e) =>
              setDataEntry({ ...dataEntry, [e.target.name]: e.target.value })
            }
            value={dataEntry.description}
          ></input>
          <input className="money-inputs" type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default InputFields;
