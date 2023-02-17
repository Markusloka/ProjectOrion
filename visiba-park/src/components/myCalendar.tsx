import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";

export default function Mycalendar() {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));

  function createBooking() {
    const pickedDate = date.toUTCString();
    console.log(pickedDate);
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
        <span className="bold">Selected Date:</span> {date.toUTCString()}
      </p>
      <button className="button" onClick={createBooking}>
        Boka parkering
      </button>
    </div>
  );
}
