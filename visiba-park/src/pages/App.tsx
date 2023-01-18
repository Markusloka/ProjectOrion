import { useState } from "react";
import { Mycalendar } from "../components/myCalendar";
import reactLogo from "../assets/react.svg";
import "../App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Visiba Parkering!</h1>
      <div className="card">
        <Mycalendar></Mycalendar>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
