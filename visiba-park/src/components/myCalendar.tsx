import { useEffect, useState } from "react";
import supabase from "../database/supabase.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { toast } from "react-toastify";
import { User } from "@supabase/supabase-js";
import HoverCard from "./hoverCard.js";

interface Props {
  user: User | null;
}

export default function Mycalendar({ user }: Props) {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));
  const [bookedDates, setBookedDates] = useState<
    { date: Date; namn: string }[]
  >([]);

  useEffect(() => {
    fetchBookings();
  }, []);
  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookning")
      .select("datum, Namn")
      .gte("datum", new Date().toDateString())
      .order("datum");

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      const dates = data.map((booking: { datum: string; Namn: string }) => {
        return { date: new Date(booking.datum), namn: booking.Namn };
      });
      setBookedDates(dates);
    }
  }

  async function createBooking() {
    if (!user)
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
      return;
    }

    await supabase
      .from("bookning")
      .insert([
        { datum: date.toDateString(), Namn: user.user_metadata.full_name },
      ]);
    toast.success("Booking successful!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      hideProgressBar: true,
      autoClose: 3000,
    });
  }

  async function isBooked(date: Date): Promise<boolean> {
    const {
      data: booking,
      error,
      status,
    } = await supabase
      .from("bookning")
      .select("datum")
      .eq("datum", date.toDateString())
      .maybeSingle();

    if (error) {
      console.error(error);
      return false;
    }

    return booking !== null;
  }

  function tileDisabled({ date }: { date: Date }): boolean {
    return bookedDates.some(
      (bookedDate) => bookedDate.date.toDateString() === date.toDateString()
    );
  }

  function getName(date: Date): string {
    console.log(bookedDates);

    return (
      bookedDates.find((x) => x.date.toDateString() === date.toDateString())
        ?.namn ?? ""
    );
  }

  return (
    <div className="styleCalendar">
      <Calendar
        onChange={setDate}
        value={date}
        maxDate={maxDate}
        minDate={new Date()}
        tileDisabled={tileDisabled}
        tileContent={(date) => {
          console.log(date.date);
          return (
            <div className="tile-content">
              <HoverCard
                tiledisabled={tileDisabled}
                date={date.date}
                namn={getName(date.date)}
              ></HoverCard>
            </div>
          );
        }}
      />

      <button className="buttonBook" onClick={createBooking}>
        Boka
      </button>
    </div>
  );
}
