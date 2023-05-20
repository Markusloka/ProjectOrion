import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import bookad from "./myCalendar";

interface Props {
  date: Date;
  tiledisabled: (args: { date: Date }) => boolean;
}

export default ({ date, tiledisabled }: Props) => {
  const x = tiledisabled({ date });

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span className="tile-content"></span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div className="Text">{x ? "hehe bokad xD" : "bokarååå"}</div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ display: "flex", gap: 5 }}></div>
                <div style={{ display: "flex", gap: 5 }}></div>
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
