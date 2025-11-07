import { Reaction, SENDER_INFO } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ReactionEventProps {
  reaction: Reaction;
  isAnimating?: boolean;
}

export const ReactionEvent = ({ reaction, isAnimating }: ReactionEventProps) => {
  const senderInfo = SENDER_INFO[reaction.sender];

  return (
    <div
      className={cn(
        "flex items-center gap-2 py-1 px-2 ml-10 animate-fade-in",
        isAnimating && "animate-scale-in"
      )}
    >
      <span className="text-xs font-medium text-muted-foreground">
        {senderInfo.name} reacted
      </span>
      <span className="text-base">{reaction.emoji}</span>
    </div>
  );
};
