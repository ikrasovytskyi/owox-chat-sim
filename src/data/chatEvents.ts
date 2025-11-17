import { ChatEvent } from "@/types/chat";

export const chatEvents: ChatEvent[] = 
[
  {
    type: "message",
    data: {
      id: "1",
      sender: "OWOX",
      timestamp: "9:01 AM",
      content: [
        { type: "text", text: "I reviewed all reps’ pipelines and activity from last week based on your detection rules. 📊" },
        { type: "heading", text: "Here’s the team-level summary:", level: 2 },
        {
          type: "list",
          items: [
            "Deals with meaningful activity ↓11% across the team",
            "Average deal movement ↓8% vs 4-week average",
            "Prospect engagement (reply rate + call acceptance) ↓6%",
            "7 deals across the team stalled ≥14 days"
          ]
        },
        { type: "text", text: "Please pay attention to the results for @Michael and @Sarah 👇" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "2",
      sender: "OWOX",
      timestamp: "9:02 AM",
      content: [
        { type: "heading", text: "⚠️ @Michael shows a momentum drop", level: 2 },
        { type: "text", text: "Deals with meaningful activity last week ↓27% vs 4-week average." },
        { type: "text", text: "👉 Main reason: @Michael contacted only 3 out of 7 deals at the closing stages." },
        { type: "heading", text: "4 stalled deals ≥14 days:", level: 3 },
        {
          type: "list",
          items: [
            "Acme Platform – $95K ARR → customer waiting for internal tech approval",
            "BlueFin – $40K ARR → no response after renewal terms were sent",
            "QuickShift – $70K ARR → next step missing; no follow-up logged",
            "FreightFlow – $55K ARR → customer paused communication after pricing summary"
          ]
        }
      ]
    }
  },
  { type: "reaction", data: { id: "r1", messageId: "2", sender: "Michael", emoji: "😬" } },
  {
    type: "message",
    data: {
      id: "3",
      sender: "OWOX",
      timestamp: "9:03 AM",
      content: [
        { type: "heading", text: "⚠️ @Sarah has early slowdown signals", level: 2 },
        {
          type: "list",
          items: [
            "Deals with meaningful activity last week ↓22%",
            "👉 Main reason: Sarah has 15% fewer deals in pipeline vs last week’s average."
          ]
        },
        { type: "heading", text: "2 mid-stage deals stalled:", level: 3 },
        {
          type: "list",
          items: [
            "NeuroPay, upsell – $85K ARR → champion silent after internal budget review",
            "GreenWare, upsell – $60K ARR → no confirmed next step after demo"
          ]
        },
        { type: "heading", text: "3 key prospects unresponsive ≥72h:", level: 3 },
        {
          type: "list",
          items: [
            "SignalHive – $32K ARR → waiting on requested follow-up materials",
            "CloudNest – $45K ARR → no reply after commercial proposal",
            "DataLoop – $38K ARR → procurement requested pricing breakdown; no response since"
          ]
        }
      ]
    }
  },
  { type: "reaction", data: { id: "r2", messageId: "3", sender: "Sarah", emoji: "😕" } },
  { type: "reaction", data: { id: "r3", messageId: "3", sender: "Anna", emoji: "👀" } },
  {
    type: "message",
    data: {
      id: "4",
      sender: "OWOX",
      timestamp: "9:05 AM",
      content: [
        { type: "heading", text: "Suggested Focus for Today", level: 2 },
        { type: "heading", text: "@Michael → focus on moving deals at the closing stage.", level: 3 },
        {
          type: "list",
          items: [
            "Acme → schedule the validation call",
            "QuickShift → add next step + notify champion",
            "Re-prioritize remaining closing-stage deals (BlueFin, FreightFlow)"
          ]
        },
        { type: "heading", text: "@Sarah → focus on unresponsive prospects and pipeline refill.", level: 3 },
        {
          type: "list",
          items: [
            "NeuroPay → send next-step nudge",
            "GreenWare → confirm post-demo action",
            "Add 5 new deals to the pipeline today"
          ]
        }
      ]
    }
  },
  { type: "reaction", data: { id: "r4", messageId: "4", sender: "Sarah", emoji: "💪" } },
  { type: "reaction", data: { id: "r5", messageId: "4", sender: "Michael", emoji: "👍" } },
  {
    type: "message",
    data: {
      id: "5",
      sender: "Anna",
      timestamp: "9:14 AM",
      content: [
        { type: "text", text: "@Michael, let’s unblock Acme and QuickShift today before our 4 PM sync. I’d like you to pinpoint the real reason why they’re stalled. 🔍" }
      ]
    }
  },
  { type: "reaction", data: { id: "r6", messageId: "5", sender: "Michael", emoji: "✅" } },
  {
    type: "message",
    data: {
      id: "6",
      sender: "Michael",
      timestamp: "9:27 AM",
      content: [
        { type: "text", text: "On it – updating Acme and QuickShift now. Will move to BlueFin and FreightFlow after. 🚀" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "7",
      sender: "Anna",
      timestamp: "9:28 AM",
      content: [
        { type: "text", text: "@Sarah, let's strengthen the offer for GreenWare. See if anyone on their team has tried the new AI features we showed off in the demo. 🤖" }
      ]
    }
  },
  { type: "reaction", data: { id: "r7", messageId: "7", sender: "Sarah", emoji: "👀" } },
  {
    type: "message",
    data: {
      id: "8",
      sender: "Sarah",
      timestamp: "9:33 AM",
      content: [
        { type: "text", text: "@OWOX, can you provide product activity for GreenWare users for the last month?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "9",
      sender: "OWOX",
      timestamp: "9:33 AM",
      content: [
        { type: "text", text: "Analyzing… (working…) ⚙️" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "10",
      sender: "OWOX",
      timestamp: "9:35 AM",
      content: [
        { type: "text", text: "Done. Here’s your Data Sheet with last month's activity. 📄" }
      ]
    }
  },
  { type: "reaction", data: { id: "r8", messageId: "10", sender: "Sarah", emoji: "📊" } },
  {
    type: "message",
    data: {
      id: "11",
      sender: "Sarah",
      timestamp: "9:36 AM",
      content: [
        { type: "text", text: "@John I don’t see any AI Feature activity for GreenWare. Can you confirm whether they used AI Features at all?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "12",
      sender: "John",
      timestamp: "11:32 AM",
      content: [
        { type: "text", text: "@Sarah, AI Features activity is stored in separate tables. If needed, I can extend the Activity Data Mart today and include AI Feature events. 🧠" }
      ]
    }
  },
  { type: "reaction", data: { id: "r9", messageId: "12", sender: "Sarah", emoji: "💡" } },
  {
    type: "message",
    data: {
      id: "13",
      sender: "Sarah",
      timestamp: "11:34 AM",
      content: [
        { type: "text", text: "@John yes, please – that would help a lot. 🙏" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "14",
      sender: "John",
      timestamp: "1:39 PM",
      content: [
        { type: "text", text: "@Sarah done. You can refresh your data. ✅" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "15",
      sender: "Sarah",
      timestamp: "1:40 PM",
      content: [
        { type: "text", text: "@John super quick – thank you again. 🙌" }
      ]
    }
  },
  { type: "reaction", data: { id: "r10", messageId: "15", sender: "John", emoji: "👍" } },
  {
    type: "message",
    data: {
      id: "16",
      sender: "Sarah",
      timestamp: "1:41 PM",
      content: [
        { type: "text", text: "@OWOX, please refresh the sheet with new activity fields. 📑" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "17",
      sender: "OWOX",
      timestamp: "1:42 PM",
      content: [
        { type: "text", text: "Working on it… ⚙️" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "18",
      sender: "OWOX",
      timestamp: "1:43 PM",
      content: [
        { type: "text", text: "Updated – here’s the latest Data Sheet. AI Feature activity now appears as rows with “AI” in the event name. ✅" }
      ]
    }
  },
  { type: "reaction", data: { id: "r11", messageId: "18", sender: "Sarah", emoji: "👏" } },
  { type: "reaction", data: { id: "r12", messageId: "18", sender: "Anna", emoji: "🔥" } },
  {
    type: "message",
    data: {
      id: "19",
      sender: "Sarah",
      timestamp: "1:45 PM",
      content: [
        { type: "text", text: "@Anna GreenWare did use AI Features – but only once. 🤔" }
      ]
    }
  },
  { type: "reaction", data: { id: "r13", messageId: "19", sender: "Anna", emoji: "💡" } },
  {
    type: "message",
    data: {
      id: "20",
      sender: "Anna",
      timestamp: "1:50 PM",
      content: [
        { type: "text", text: "Perfect – I’ll explain how to address this in the call during our sync today. 📞" }
      ]
    }
  }
]
