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
        { type: "text", text: "Here’s your daily campaign performance scan 👇" },
        { type: "text", text: "I reviewed all campaigns with ≥ 10 clicks and compared yesterday vs 7-day baseline." }
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
        { type: "heading", text: "⚠️ 3 Campaigns Showed Meaningful Efficiency Decline", level: 2 },
        { type: "text", text: "(≥ 2 of 3 metrics triggered)" },
        { type: "heading", text: "1️⃣ Meta – Lookalike 3%", level: 3 },
        { type: "metric", label: "Orders", value: "21 vs 32 avg", change: "↓34%", trend: "down" },
        { type: "metric", label: "CR", value: "1.1% vs 1.8% avg", change: "↓39%", trend: "down" },
        { type: "metric", label: "ROAS", value: "1.6 vs 2.3 avg", change: "↓30%", trend: "down" },
        { type: "metric", label: "CPO", value: "$41 vs $28 avg", change: "↑46%", trend: "up" },

        { type: "heading", text: "2️⃣ Google Search – Mid-Intent", level: 3 },
        { type: "metric", label: "Orders", value: "18 vs 25 avg", change: "↓28%", trend: "down" },
        { type: "metric", label: "CR", value: "2.2% vs 3.1% avg", change: "↓29%", trend: "down" },
        { type: "metric", label: "ROAS", value: "2.4 vs 3.5 avg", change: "↓31%", trend: "down" },
        { type: "metric", label: "CPO", value: "$54 vs $40 avg", change: "↑35%", trend: "up" },

        { type: "heading", text: "3️⃣ TikTok – Interest Stack #2", level: 3 },
        { type: "metric", label: "Orders", value: "9 vs 15 avg", change: "↓40%", trend: "down" },
        { type: "metric", label: "CR", value: "0.6% vs 1.1% avg", change: "↓45%", trend: "down" },
        { type: "metric", label: "ROAS", value: "1.3 vs 2.0 avg", change: "↓35%", trend: "down" },
        { type: "metric", label: "CPO", value: "$63 vs $39 avg", change: "↑62%", trend: "up" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r1", messageId: "2", sender: "James", emoji: "😬" }
  },
  {
    type: "reaction",
    data: { id: "r2", messageId: "2", sender: "Aaron", emoji: "📉" }
  },
  {
    type: "message",
    data: {
      id: "3",
      sender: "OWOX",
      timestamp: "9:03 AM",
      content: [
        { type: "heading", text: "✅ Recommended Actions for Today", level: 2 },
        {
          type: "list",
          items: [
            "Meta – Lookalike 3% → Scale back 20–25% and shift budget to Meta Retargeting (still stable).",
            "Search – Mid-Intent → Reduce bids ~10–15%, re-allocate to High-Intent Search Terms.",
            "TikTok – Interest Stack #2 → Pause creatives with low CTR and refresh variants."
          ]
        },
        { type: "text", text: "Open Data Sheet: Campaign Performance Overview 📄" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r3", messageId: "3", sender: "James", emoji: "✅" }
  },
  {
    type: "reaction",
    data: { id: "r4", messageId: "3", sender: "Aaron", emoji: "👍" }
  },
  {
    type: "message",
    data: {
      id: "4",
      sender: "James",
      timestamp: "9:08 AM",
      content: [
        { type: "text", text: "@Aaron let’s start by pulling back Mid-Intent Search and shifting ~20% to High-Intent. I’m okay tightening bids today." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "5",
      sender: "Aaron",
      timestamp: "9:12 AM",
      content: [
        { type: "text", text: "Got it. Before reallocating spend → @OWOX can you confirm High-Intent Search is still holding efficiency?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "6",
      sender: "OWOX",
      timestamp: "9:12 AM",
      content: [
        { type: "text", text: "Yes – High-Intent Search remains strong:" },
        { type: "metric", label: "Orders", value: "+12% vs 7-day avg", trend: "up" },
        { type: "metric", label: "CR", value: "4.9%", trend: "steady" },
        { type: "metric", label: "CPO", value: "$24–$26", trend: "steady" },
        { type: "metric", label: "ROAS", value: "3.8x", trend: "steady" },
        { type: "text", text: "Open Data Sheet: High Intent Search Breakdown 🔎" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r5", messageId: "6", sender: "James", emoji: "📊" }
  },
  {
    type: "reaction",
    data: { id: "r6", messageId: "6", sender: "Aaron", emoji: "✅" }
  },
  {
    type: "message",
    data: {
      id: "7",
      sender: "Aaron",
      timestamp: "9:18 AM",
      content: [
        { type: "text", text: "Great. @OWOX break down High-Intent by ad group — which ones should we actually send the additional spend to?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "8",
      sender: "OWOX",
      timestamp: "9:18 AM",
      content: [
        { type: "text", text: "Analyzing ad group-level efficiency… (working…)" }
      ]
    }
  }
,
  {
    type: "message",
    data: {
      id: "9",
      sender: "OWOX",
      timestamp: "9:20 AM",
      content: [
        { type: "heading", text: "High-Intent Search – Ad Group Performance", level: 2 },
        {
          type: "list",
          items: [
            "Brand Core – CPO $18, CR 5.5%",
            "High Intent | Product Fit – CPO $22, CR 5.0%",
            "Competitor Defender – CPO $31, CR 3.7%"
          ]
        },
        { type: "text", text: "Recommendation → Shift spend toward Brand Core + Product Fit, cut Competitor Defender by ~30%." },
        { type: "text", text: "Open Data Sheet: Ad Group View 📄" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r7", messageId: "9", sender: "James", emoji: "🎯" }
  },
  {
    type: "reaction",
    data: { id: "r8", messageId: "9", sender: "Aaron", emoji: "📈" }
  },
  {
    type: "message",
    data: {
      id: "10",
      sender: "James",
      timestamp: "9:22 AM",
      content: [
        { type: "text", text: "Perfect. Let’s roll that reallocation today." },
        { type: "text", text: "Also, @OWOX show me TikTok – Interest Stack #2. I want to confirm the drop isn’t caused by creative fatigue." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "11",
      sender: "OWOX",
      timestamp: "9:23 AM",
      content: [
        { type: "text", text: "Checking TikTok creative-level performance…" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "12",
      sender: "OWOX",
      timestamp: "9:25 AM",
      content: [
        { type: "heading", text: "Creative Performance – TikTok Interest Stack #2", level: 2 },
        {
          type: "list",
          items: [
            "Creative A (UGC Product Demo) – CR 0.9%, CTR stable",
            "Creative B (Static Image) – CR 0.4%, CTR ↓ 27%",
            "Creative C (Lifestyle) – CR 0.6%, CTR ↓ 15%"
          ]
        },
        { type: "text", text: "Most decline driven by Creative B fatigue → rotate out or refresh variant." },
        { type: "text", text: "Open Data Sheet: TikTok Creative Breakdown 📄" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r9", messageId: "12", sender: "James", emoji: "👀" }
  },
  {
    type: "reaction",
    data: { id: "r10", messageId: "12", sender: "Aaron", emoji: "💡" }
  },
  {
    type: "message",
    data: {
      id: "13",
      sender: "Aaron",
      timestamp: "9:27 AM",
      content: [
        { type: "text", text: "Got it. I’ll pause Creative B and prep two new UGC versions with updated hooks." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "14",
      sender: "James",
      timestamp: "9:29 AM",
      content: [
        { type: "text", text: "Awesome. Once live, we’ll check ROAS tomorrow." },
        { type: "text", text: "@John please make sure tomorrow’s report compares old vs new creatives so we can measure lift." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "15",
      sender: "John",
      timestamp: "9:30 AM",
      content: [
        { type: "text", text: "On it. I’ll update the Data Mart filters to tag new creatives and capture ROAS delta automatically." },
        { type: "text", text: "Tomorrow’s dashboard will include side-by-side comparison for quick review." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r11", messageId: "15", sender: "James", emoji: "🎉" }
  },
  {
    type: "reaction",
    data: { id: "r12", messageId: "15", sender: "Aaron", emoji: "🚀" }
  },
  {
    type: "message",
    data: {
      id: "16",
      sender: "OWOX",
      timestamp: "9:32 AM",
      content: [
        { type: "text", text: "Thanks team! I’ll keep monitoring the efficiency metrics post-creative update." },
        { type: "text", text: "If ROAS stabilizes or rises by ≥10%, I’ll flag it in tomorrow’s summary automatically." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r13", messageId: "16", sender: "James", emoji: "🙌" }
  },
  {
    type: "reaction",
    data: { id: "r14", messageId: "16", sender: "Aaron", emoji: "🔥" }
  },
  {
    type: "message",
    data: {
      id: "17",
      sender: "James",
      timestamp: "9:35 AM",
      content: [
        { type: "text", text: "Perfect work everyone. Let’s review the updated results in tomorrow’s report." }
      ]
    }
  }
]
