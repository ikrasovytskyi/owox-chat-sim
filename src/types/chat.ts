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

export const SENDER_INFO: Record<MessageSender, { name: string; role: string; color: string }> = {
  OWOX: { name: "OWOX", role: "AI Sales Assistant", color: "chat-owox" },
  Anna: { name: "Anna", role: "Head of Sales", color: "chat-anna" },
  Ethan: { name: "Ethan", role: "Sales Operations Manager", color: "chat-ethan" },
  John: { name: "John", role: "Data Analyst", color: "chat-john" },
};
