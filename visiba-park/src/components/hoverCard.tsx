import * as HoverCard from "@radix-ui/react-hover-card";

interface Props {
  date: Date;
  tiledisabled: (args: { date: Date }) => boolean;
  userBooked: (args: { date: Date }) => Promise<boolean>;
}

export default ({ date, tiledisabled, userBooked }: Props) => {
  const x = tiledisabled({ date });
  const booked = userBooked({ date });

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span className="tile-content"></span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div className="Text">{x ? "Bookat av" : "bokarååå"}</div>
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
