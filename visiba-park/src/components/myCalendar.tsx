import { useEffect, useState } from "react";
import supabase from "../database/supabase.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { toast } from "react-toastify";
import { User } from "@supabase/supabase-js";
import { userInfo } from "os";

interface Props {
  user: User | null;
}

export default function Mycalendar({ user }: Props) {
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
    if (user === null)
      return toast.error("You need to log in to book", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        hideProgressBar: true,
        autoClose: 3000,
      });

    if (await isBooked(date)) {
      toast.error("This Date is already booked!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        hideProgressBar: true,
        autoClose: 3000,
      });
      return; // TODO popup, show is already booked
    }

    await supabase
      .from("bookning")
      .insert([{ datum: date.toLocaleDateString(), Namn: user.email }]);
    toast.success("Booking successful!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      hideProgressBar: true,
      autoClose: 3000,
    });
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
