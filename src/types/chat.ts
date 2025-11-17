export type MessageSender = "OWOX" | "Anna" | "Ethan" | "John" | "James" | "Aaron" | "Julia" | "Michael" | "David" | "Sarah" | "Rachel" | "Tom";

export interface Message {
  id: string;
  sender: MessageSender;
  content: MessageContent[];
  timestamp: string;
}

export interface Reaction {
  id: string;
  messageId: string;
  sender: MessageSender;
  emoji: string;
}

export type ChatEvent = 
  | { type: "message"; data: Message }
  | { type: "reaction"; data: Reaction };

export type MessageContent = 
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "metric"; label: string; value: string; change?: string; trend?: "up" | "down" | "steady" }
  | { type: "heading"; text: string; level: 1 | 2 | 3 };

export const SENDER_INFO: Record<MessageSender, { name: string; role: string; color: string; avatar?: string }> = {
  OWOX: { name: "OWOX", role: "AI Data Insights", color: "chat-owox", avatar: "owox-logo" },
  Anna: { name: "Anna", role: "Head of Sales", color: "chat-anna", avatar: "anna-avatar" },
  Ethan: { name: "Ethan", role: "Sales Operations Manager", color: "chat-ethan", avatar: "ethan-avatar" },
  John: { name: "John", role: "Data Analyst", color: "chat-john", avatar: "john-avatar" },
  James: { name: "James", role: "Head of Marketing", color: "chat-james", avatar: "james-avatar" },
  Aaron: { name: "Aaron", role: "Marketing Manager", color: "chat-aaron", avatar: "aaron-avatar" },
  Julia: { name: "Julia", role: "Head of Finance", color: "chat-julia", avatar: "julia-avatar" },
  Michael: { name: "Michael", role: "Sales Operations Manager", color: "chat-michael", avatar: "michael-avatar" },
  David: { name: "David", role: "Head of Product", color: "chat-david", avatar: "david-avatar" },
  Sarah: { name: "Sarah", role: "Sales Operations Manager", color: "chat-sarah", avatar: "sarah-avatar" },
  Rachel: { name: "Rachel", role: "Head of Operations", color: "chat-rachel", avatar: "rachel-avatar" },
  Tom: { name: "Tom", role: "Operations Coordinator", color: "chat-tom", avatar: "tom-avatar" },
};
