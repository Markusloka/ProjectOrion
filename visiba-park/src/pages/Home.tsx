import { useState, useEffect } from "react";
import Mycalendar from "../components/myCalendar";
import supabase from "../database/supabase.js";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
      </div>

      <div className="card">
        <Mycalendar></Mycalendar>
      </div>
    </div>
  );
}

export default Home;
