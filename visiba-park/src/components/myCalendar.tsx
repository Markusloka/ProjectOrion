import React, { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";

export function Mycalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="styleCalendar">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
