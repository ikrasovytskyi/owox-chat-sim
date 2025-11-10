import { Message, SENDER_INFO } from "@/types/chat";
import { cn } from "@/lib/utils";
import { MessageContent as MessageContentType } from "@/types/chat";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import owoxLogo from "@/assets/owox-logo.png";
import annaAvatar from "@/assets/anna-avatar.jpg";
import ethanAvatar from "@/assets/ethan-avatar.jpg";
import johnAvatar from "@/assets/john-avatar.jpg";

const avatarMap: Record<string, string> = {
  "owox-logo": owoxLogo,
  "anna-avatar": annaAvatar,
  "ethan-avatar": ethanAvatar,
  "john-avatar": johnAvatar,
};

interface ChatMessageProps {
  message: Message;
  isAnimating?: boolean;
  showTyping?: boolean;
}

const MessageContent = ({ content }: { content: MessageContentType }) => {
  switch (content.type) {
    case "text":
      return (
        <p className="text-sm leading-snug whitespace-pre-wrap">
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
            content.level === 1 && "text-lg font-bold mt-2 mb-1",
            (content.level === 2 || content.level === 3) && "text-sm font-bold mt-1 mb-0.5"
          )}
        >
          {content.text}
        </HeadingTag>
      );

    case "list":
      return (
        <ul className="space-y-0.5 my-1">
          {content.items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-accent mt-0.5 text-xs">●</span>
              <span className="flex-1 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto my-1.5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border/50">
                {content.headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left px-2 py-1 font-semibold text-xs text-foreground/90"
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
                    <td key={j} className="px-2 py-1 text-xs">
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
        <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5 my-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              {content.label}:
            </span>
            <span className="text-sm font-bold text-foreground">
              {content.value}
            </span>
          </div>
          {content.change && (
            <span
              className={cn(
                "text-xs font-medium px-1.5 py-0.5 rounded-full",
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

export const ChatMessage = ({ message, isAnimating, showTyping }: ChatMessageProps) => {
  const senderInfo = SENDER_INFO[message.sender];
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(!showTyping);
  
  // Get the first text content for typing animation
  const firstTextContent = message.content.find(c => c.type === "text" && "text" in c);
  const textToType = firstTextContent && "text" in firstTextContent ? firstTextContent.text : "";

  useEffect(() => {
    if (!showTyping || !textToType) {
      setIsTypingComplete(true);
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    setDisplayedText("");
    setIsTypingComplete(false);
    
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsTypingComplete(true), 300);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [showTyping, textToType, message.id]);

  return (
    <div
      className={cn(
        "flex gap-2 p-2 hover:bg-muted/30 transition-colors",
        isAnimating && "animate-slide-up"
      )}
    >
      {/* Avatar */}
      <Avatar className="w-8 h-8 flex-shrink-0 rounded-lg">
        {senderInfo.avatar && (
          <AvatarImage 
            src={avatarMap[senderInfo.avatar]} 
            alt={senderInfo.name}
            className="object-cover"
          />
        )}
        <AvatarFallback
          className="rounded-lg text-white font-bold text-xs"
          style={{
            backgroundColor: `hsl(var(--${senderInfo.color}))`,
          }}
        >
          {message.sender.slice(0, 1)}
        </AvatarFallback>
      </Avatar>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="font-semibold text-sm text-foreground">{senderInfo.name}</span>
          <span className="text-xs text-muted-foreground">{senderInfo.role}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            {message.timestamp}
          </span>
        </div>

        {/* Content */}
        <div className="text-sm text-foreground/90 space-y-1">
          {showTyping && !isTypingComplete ? (
            <p className="text-sm leading-snug whitespace-pre-wrap">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          ) : (
            message.content.map((content, i) => (
              <MessageContent key={i} content={content} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
