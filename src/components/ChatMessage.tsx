import { Message, SENDER_INFO } from "@/types/chat";
import { cn } from "@/lib/utils";
import { MessageContent as MessageContentType } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
  isAnimating?: boolean;
}

const MessageContent = ({ content }: { content: MessageContentType }) => {
  switch (content.type) {
    case "text":
      return (
        <p className="leading-relaxed whitespace-pre-wrap">
          {content.text.split(/(@\w+)/).map((part, i) =>
            part.startsWith("@") ? (
              <span key={i} className="font-semibold text-accent">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      );

    case "heading":
      const HeadingTag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag
          className={cn(
            "font-bold",
            content.level === 1 && "text-xl mt-4 mb-2",
            content.level === 2 && "text-lg mt-3 mb-2",
            content.level === 3 && "text-base mt-2 mb-1.5"
          )}
        >
          {content.text}
        </HeadingTag>
      );

    case "list":
      return (
        <ul className="space-y-1.5 my-2">
          {content.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">●</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border/50">
                {content.headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left px-3 py-2 font-semibold text-sm text-foreground/90"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/30">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-sm">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "metric":
      return (
        <div className="inline-flex items-center gap-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2.5 my-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              {content.label}:
            </span>
            <span className="text-lg font-bold text-foreground">
              {content.value}
            </span>
          </div>
          {content.change && (
            <span
              className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full",
                content.trend === "up"
                  ? "bg-success/20 text-success"
                  : content.trend === "down"
                  ? "bg-destructive/20 text-destructive"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {content.change}
            </span>
          )}
        </div>
      );

    default:
      return null;
  }
};

export const ChatMessage = ({ message, isAnimating }: ChatMessageProps) => {
  const senderInfo = SENDER_INFO[message.sender];

  return (
    <div
      className={cn(
        "flex gap-3 p-4 hover:bg-muted/30 transition-colors",
        isAnimating && "animate-slide-up"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
          `bg-${senderInfo.color}`
        )}
        style={{
          backgroundColor: `hsl(var(--${senderInfo.color}))`,
        }}
      >
        {message.sender.slice(0, 1)}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-semibold text-foreground">{senderInfo.name}</span>
          <span className="text-xs text-muted-foreground">{senderInfo.role}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            {message.timestamp}
          </span>
        </div>

        {/* Content */}
        <div className="text-sm text-foreground/90 space-y-2">
          {message.content.map((content, i) => (
            <MessageContent key={i} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};
