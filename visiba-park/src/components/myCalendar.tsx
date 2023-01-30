import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";

export function Mycalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="styleCalendar">
      <Calendar onChange={setDate} value={date} />
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
