import * as HoverCard from '@radix-ui/react-hover-card';


export default () => (
    <HoverCard.Root>
      <HoverCard.Trigger />
      <HoverCard.Portal>
        <HoverCard.Content>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
  