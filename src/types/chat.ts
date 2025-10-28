export type MessageSender = "OWOX" | "Anna" | "Ethan" | "John";

export interface Message {
  id: string;
  sender: MessageSender;
  content: MessageContent[];
  timestamp: string;
}

export type MessageContent = 
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "metric"; label: string; value: string; change?: string; trend?: "up" | "down" }
  | { type: "heading"; text: string; level: 1 | 2 | 3 };

export const SENDER_INFO: Record<MessageSender, { name: string; role: string; color: string; avatar?: string }> = {
  OWOX: { name: "OWOX", role: "AI Sales Assistant", color: "chat-owox", avatar: "owox-logo" },
  Anna: { name: "Anna", role: "Head of Sales", color: "chat-anna", avatar: "anna-avatar" },
  Ethan: { name: "Ethan", role: "Sales Operations Manager", color: "chat-ethan", avatar: "ethan-avatar" },
  John: { name: "John", role: "Data Analyst", color: "chat-john", avatar: "john-avatar" },
};
