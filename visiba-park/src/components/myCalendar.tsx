import { useEffect, useState } from "react";
import supabase from "../database/supabase.jsx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";

export default function Mycalendar() {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data } = await supabase.from("bookning").select();
    setDate(date);
  }

  async function createBooking() {
    await supabase
      .from("bookning")
      .insert([{ datum: selectDate(), Namn: "xd" }]);

    setDate(date);
    fetchBookings();
  }

  function selectDate() {
    const pickedDate = date.toDateString();
    console.log(pickedDate);
    return pickedDate;
  }

  return (
    <div className="styleCalendar">
      <Calendar
        onChange={setDate}
        value={date}
        maxDate={maxDate}
        minDate={new Date()}
      />
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
      <button className="button" onClick={createBooking}>
        Boka parkering
      </button>
    </div>
  );
}
