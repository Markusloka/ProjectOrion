import React, { useEffect, useState } from "react";
import "./style.scrollArea.css";
import supabase from "../database/supabase";
import { User } from "@supabase/supabase-js";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "../App.css";
import DeleteIcon from "../assets/remove.png";

interface Props {
  user: User | null;
  date: Date; // Add the 'date' property to Props
  namn: string; // Add the 'namn' property to Props
}

function deleteBooking() {
  console.log("din mamma");
}

const ScrollAreaDemo: React.FC<Props> = ({ user, date, namn }) => {
  const [mybookings, setMybookings] = useState<{ date: Date; namn: string }[]>(
    []
  );

  useEffect(() => {
    if (user) {
      getMybookings(user.user_metadata.full_name); // Pass the user's email to filter bookings
    }
  }, [user]);

  async function getMybookings(userName: string) {
    const { data, error } = await supabase
      .from("bookning")
      .select("datum, Namn")
      .eq("Namn", userName) // Filter bookings by user's name
      .gte("datum", new Date().toDateString())
      .order("datum");

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      const dates = data.map((booking: { datum: string; Namn: string }) => {
        return { date: new Date(booking.datum), namn: booking.Namn };
      });
      setMybookings(dates);
    }
  }

  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        {user ? ( // Check if user is logged in
          <div className="bookingstitle">
            My bookings
            <div>
              <div className="Text"></div>
              {mybookings.map((mybooking, index) => (
                <div className="Tag" key={index}>
                  <div className="bookingCard">
                    <h2 className="bookingTitle">{mybooking.namn}</h2>
                    <h2 className="bookingDate">
                      {mybooking.date.toLocaleDateString()}
                    </h2>
                    <button className="deleteBooking">
                      <img
                        className="deleteIcon"
                        src={DeleteIcon}
                        alt="Delete"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};

export default ScrollAreaDemo;
