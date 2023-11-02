import React, { useEffect, useState } from "react";
import supabase from "../database/supabase";
import { User } from "@supabase/supabase-js";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "../App.css";

interface Props {
  user: User | null;
}

const ScrollAreaDemo: React.FC<Props> = ({ user }) => {
  const [mybookings, setMybookings] = useState<{ date: Date; namn: string }[]>(
    []
  );

  useEffect(() => {
    getMybookings();
  }, []);

  async function getMybookings() {
    const { data, error } = await supabase
      .from("bookning")
      .select("datum, Namn")
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
      <div className="bookingstitle" style={{ padding: "15px" }}>
        My bookings
        <div style={{ padding: "15px 20px" }}>
          <div className="Text"></div>
          {mybookings.map((mybooking) => (
            <div className="Tag" key={mybooking.namn}>
              {mybooking.namn}
            </div>
          ))}
        </div>
      </div>
      <ScrollArea.Viewport className="ScrollAreaViewport"></ScrollArea.Viewport>
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
