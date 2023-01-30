import { useState } from "react";
import { Mycalendar } from "../components/myCalendar";
import reactLogo from "../assets/react.svg";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Visiba Parkering!</h1>
      <div className="card">
        <Mycalendar></Mycalendar>
      </div>
    </div>
  );
}

export default Home;
