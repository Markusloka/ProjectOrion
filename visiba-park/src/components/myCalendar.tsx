import { useEffect, useState } from "react";
import supabase from "../database/supabase.js";
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
    const help = await isBooked(date);
    console.log(help);
    if (help) return;

    await supabase
      .from("bookning")
      .insert([{ datum: selectDate(), Namn: "lol" }]);

    setDate(date);
    fetchBookings();
  }

  async function isBooked(date: Date): Promise<boolean> {
    const {
      data: bookning,
      error,
      status,
    } = await supabase
      .from("bookning")
      .select("datum, Namn")
      .eq("datum", date.toISOString())
      .maybeSingle();

    if (error != null) return false;

    return status === 200;
  }

  function selectDate() {
    const pickedDate = date.toISOString();
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
      <button className="buttonBook" onClick={createBooking}>
        Boka
      </button>
    </div>
  );
}
