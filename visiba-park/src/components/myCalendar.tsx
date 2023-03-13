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
    // TODO: Update query to only fetch today - maxDate
    const { data } = await supabase.from("bookning").select();
    // TODO: Populate calander with dates
  }

  async function createBooking() {
    if (await isBooked(date)) return; // TODO popup, show is already booked

    await supabase
      .from("bookning")
      .insert([{ datum: date.toLocaleDateString(), Namn: "lol" }]);

    await fetchBookings();
  }

  async function isBooked(date: Date): Promise<boolean> {
    const {
      data: booking,
      error,
      status,
    } = await supabase
      .from("bookning")
      .select("datum")
      .eq("datum", date.toLocaleDateString())
      .maybeSingle();

    return booking !== null;
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
