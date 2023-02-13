import { useState, useEffect } from "react";
import Mycalendar from "../components/myCalendar";
import supabase from "../database/supabase.js";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";

export const bookDate = () => {
  const [bookingDates, setBookingDates] = useState([]);
  const [bookingDate, setBookingDate] = useState({ Date });
  const {} = bookingDate;
};

useEffect(() => {
  fetchbookingDates();
}, []);

async function fetchbookingDates() {
  const { data } = await supabase.from("bookning").select();

  setBookingDate(data);
}

async function createBooking() {
  await supabase.from("bookning").insert([{ Date }]).single();

  setbookingDate({ Date });
  fetchbookingDates();
}

function Home() {
  return (
    <div className="Home">
      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
        <h1 className="homeTitle">Parkering</h1>
      </div>

      <div className="card">
        <Mycalendar></Mycalendar>
      </div>
      <button className="button" onClick={createBooking}>
        Boka parkering
      </button>
    </div>
  );
}

export default Home;
