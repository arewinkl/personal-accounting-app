import "./App.css";
import InputFields from "./components/input-fields";
import Table from "./components/table";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState("");

  function handleData(e) {
    setInfo([...info, e]);
  }
  // const displayData = info.filter((data) => data.text.toLowerCase());
  // console.log(info);
  return (
    <div className="App">
      <InputFields handleData={handleData} />
      <Table info={info} />
    </div>
  );
}

export default App;
