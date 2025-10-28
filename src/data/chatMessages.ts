import { Message } from "@/types/chat";

export const chatMessages: Message[] = [
  {
    id: "1",
    sender: "OWOX",
    timestamp: "9:00 AM",
    content: [
      { type: "text", text: "Hey team — here are your daily sales insights for Monday, Oct 27, 2025 💼" },
      { type: "heading", text: "Summary:", level: 2 },
      { 
        type: "list", 
        items: [
          "3 regions exceeded revenue targets 🎯",
          "2 regions showed below-average conversion rates",
          "Overall pipeline coverage: 92% of monthly goal"
        ]
      }
    ]
  },
  {
    id: "2",
    sender: "OWOX",
    timestamp: "9:00 AM",
    content: [
      { type: "heading", text: "Top 5 Highlights:", level: 2 },
      { type: "heading", text: "1. North America — Enterprise Deals", level: 3 },
      { type: "metric", label: "Revenue", value: "$482K", change: "+16% vs prev week", trend: "up" },
      { type: "metric", label: "Conversion rate", value: "28%", trend: "up" },
      { type: "text", text: "✅ Average deal size up 11%." },
      { type: "heading", text: "2. EMEA — Mid-Market", level: 3 },
      { type: "metric", label: "Revenue", value: "$265K", change: "–12%", trend: "down" },
      { type: "text", text: "⚠️ Win rate down 9% due to slower proposal response times." },
      { type: "heading", text: "3. APAC — SMB Accounts", level: 3 },
      { type: "metric", label: "Revenue", value: "$187K", change: "+8%", trend: "up" },
      { type: "text", text: "Consistent close rate (19%)." },
      { type: "heading", text: "4. LatAm — Distributors", level: 3 },
      { type: "metric", label: "Revenue", value: "$78K", change: "–22%", trend: "down" },
      { type: "text", text: "Forecast accuracy gap widened –15%." },
      { type: "heading", text: "5. Online Trials → Paid Conversions", level: 3 },
      { type: "metric", label: "Conversion", value: "13%", change: "Drop from 17%", trend: "down" },
      { type: "text", text: "📉 Trial-to-paid conversion decline by 24%." }
    ]
  },
  {
    id: "3",
    sender: "OWOX",
    timestamp: "9:00 AM",
    content: [
      { type: "heading", text: "4 attention items detected this morning:", level: 2 },
      {
        type: "list",
        items: [
          "Low proposal turnaround (EMEA)",
          "LatAm - Pipeline stagnation - no new deals added for 7 days",
          "Spike in enterprise-level discounts (+18%)",
          "Drop in trial-to-paid conversions (–24%)"
        ]
      }
    ]
  },
  {
    id: "4",
    sender: "Anna",
    timestamp: "9:01 AM",
    content: [
      { type: "text", text: "@OWOX, can you show me more details on EMEA's pipeline stagnation and which reps are affected?" }
    ]
  },
  {
    id: "5",
    sender: "OWOX",
    timestamp: "9:02 AM",
    content: [
      { type: "text", text: "Sure thing! Fetching CRM data from HubSpot and linking to pipeline metrics..." },
      { type: "heading", text: "EMEA Pipeline Overview — last 14 days", level: 3 },
      {
        type: "list",
        items: [
          "2 reps haven't added new opportunities since Oct 14.",
          "Median deal velocity: 5.3 days → now 9.1 days (+71%).",
          "Top delayed stages: Proposal Sent, Contract Review.",
          "Avg. response time to client messages: 18 hrs → 32 hrs."
        ]
      },
      { type: "text", text: "Would you like me to pull rep-level details next?" }
    ]
  },
  {
    id: "6",
    sender: "Anna",
    timestamp: "9:03 AM",
    content: [
      { type: "text", text: "Yes, please — show me which reps are behind and if delays correlate with discount approvals." }
    ]
  },
  {
    id: "7",
    sender: "OWOX",
    timestamp: "9:03 AM",
    content: [
      { type: "text", text: "Got it. Correlating discount usage vs deal velocity for EMEA reps..." },
      { type: "text", text: "✅ Analysis ready:" },
      {
        type: "table",
        headers: ["Reps", "Avg. discount", "Velocity"],
        rows: [
          ["Ethan Brown", "14%", "11.2 days"],
          ["Laura Voss", "11%", "9.8 days"]
        ]
      },
      { type: "text", text: "⚠️ Possible pattern: over-discounting might not be speeding up closes – only lowering margins." }
    ]
  },
  {
    id: "8",
    sender: "Anna",
    timestamp: "9:05 AM",
    content: [
      { type: "text", text: "@Ethan, can you double-check discount thresholds in HubSpot and sync them with our pricing rules? I want to be sure the auto-approval logic is working correctly." }
    ]
  },
  {
    id: "9",
    sender: "Ethan",
    timestamp: "9:05 AM",
    content: [
      { type: "text", text: "On it, @Anna. I'll review discount logic in the CRM. Looks like some custom rules were bypassed last week — I'll confirm." }
    ]
  },
  {
    id: "10",
    sender: "Anna",
    timestamp: "9:06 AM",
    content: [
      { type: "text", text: "@OWOX, what about forecast accuracy in LatAm? You mentioned a 15% gap – what's causing it?" }
    ]
  },
  {
    id: "11",
    sender: "OWOX",
    timestamp: "9:07 AM",
    content: [
      { type: "heading", text: "Analyzing forecast-to-actual variance for LatAm...", level: 3 },
      { type: "text", text: "📊 Result:" },
      {
        type: "list",
        items: [
          "Total variance: –15.2%",
          "Reason: 60% of expected Q4 deals are still in early-stage pipeline.",
          "Median deal age: 24 days (vs target 15).",
          "No new deals added since Oct 18."
        ]
      },
      { type: "text", text: "💡 Recommendation: Rebalance target coverage or adjust weighting on stage probability." }
    ]
  },
  {
    id: "12",
    sender: "Anna",
    timestamp: "9:08 AM",
    content: [
      { type: "text", text: "@John, could you please check if LatAm's forecast model is using the latest opportunity scoring logic? We changed it two weeks ago." }
    ]
  },
  {
    id: "13",
    sender: "John",
    timestamp: "9:09 AM",
    content: [
      { type: "text", text: "Yep, I'll verify that, @Anna. I suspect LatAm Data Mart might still use the old probability curve. Give me 10 minutes — I'll refresh the model and let you know." }
    ]
  },
  {
    id: "14",
    sender: "OWOX",
    timestamp: "9:09 AM",
    content: [
      { type: "text", text: "Perfect! Once @John updates the scoring logic, I'll re-sync and recalculate forecast accuracy automatically 🚀" }
    ]
  },
  {
    id: "15",
    sender: "John",
    timestamp: "9:18 AM",
    content: [
      { type: "text", text: "All done ✅ The model now reflects the updated scoring. Pipeline probabilities look good again." }
    ]
  },
  {
    id: "16",
    sender: "OWOX",
    timestamp: "9:18 AM",
    content: [
      { type: "text", text: "Awesome 🙌 Thanks, @John!" },
      { type: "text", text: "✅ Updating forecast…" },
      { type: "metric", label: "New accuracy", value: "96.3%", trend: "up" },
      { type: "text", text: "LatAm variance closed from –15% → –3.7%." },
      { type: "text", text: "All dashboards and reports refreshed in Sheets and Looker Studio 📊" }
    ]
  },
  {
    id: "17",
    sender: "Anna",
    timestamp: "9:20 AM",
    content: [
      { type: "text", text: "Fantastic work, team! 🎉 This is exactly why we invested in @OWOX. The real-time insights and collaboration are game-changers." },
      { type: "text", text: "Let's keep this momentum going. I'll schedule a quick sync for tomorrow to review the EMEA action items." }
    ]
  }
];
