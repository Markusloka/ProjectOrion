import * as HoverCard from "@radix-ui/react-hover-card";
import supabase from "../database/supabase";

interface Props {
  date: Date;
  namn: string;
  tiledisabled: (args: { date: Date }) => boolean;
}

export default ({ date, namn, tiledisabled }: Props) => {
  const x = tiledisabled({ date });

  // if (result.error) {
  //   return <p>something went wrong</p>;
  // }

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span className="tile-content"></span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div>{x ? "Bookat av " + namn : "Inte bokat"}</div>
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
