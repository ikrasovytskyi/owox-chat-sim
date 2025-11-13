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
        { type: "text", text: "I checked all campaigns with ≥ 20 clicks and flagged those where 2 out of 3 conditions declined (Purchases ↓, CR ↓, CPO ↑)." },
        { type: "text", text: "Here’s the purchase efficiency review from yesterday based on your detection rules 👇" }
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
        { type: "heading", text: "⚠️ 3 Campaigns With Notable Efficiency Decline", level: 2 },
        { type: "heading", text: "1️⃣ Meta – Broad Interests (TOF)", level: 3 },
        { type: "metric", label: "Purchases", value: "42 vs 68 avg", change: "↓38%", trend: "down" },
        { type: "metric", label: "CR", value: "0.9% vs 1.6% avg", change: "↓44%", trend: "down" },
        { type: "metric", label: "ROAS", value: "1.7x vs 2.4x avg", change: "↓29%", trend: "down" },
        { type: "metric", label: "CPO", value: "$38 vs $24 avg", change: "↑58%", trend: "up" },

        { type: "heading", text: "2️⃣ Google Search – Product Terms (BOF)", level: 3 },
        { type: "metric", label: "Purchases", value: "33 vs 45 avg", change: "↓27%", trend: "down" },
        { type: "metric", label: "CR", value: "2.2% vs 3.0% avg", change: "↓27%", trend: "down" },
        { type: "metric", label: "ROAS", value: "2.9x vs 4.1x avg", change: "↓30%", trend: "down" },
        { type: "metric", label: "CPO", value: "$51 vs $39 avg", change: "↑31%", trend: "up" },

        { type: "heading", text: "3️⃣ Performance Max – Retargeting", level: 3 },
        { type: "metric", label: "Purchases", value: "58 vs 72 avg", change: "↓19%", trend: "down" },
        { type: "metric", label: "CR", value: "3.6% vs 4.9% avg", change: "↓26%", trend: "down" },
        { type: "metric", label: "ROAS", value: "4.3x vs 5.2x avg", change: "↓17%", trend: "down" },
        { type: "metric", label: "CPO", value: "$28 vs $20 avg", change: "↑40%", trend: "up" }
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
        { type: "heading", text: "✅ Recommended Budget Shifts Today", level: 2 },
        {
          type: "list",
          items: [
            "Meta – Broad (TOF): Do not pause. Rotate creatives → protects retargeting pool while stabilizing ROAS.",
            "Search – Products (BOF): Reduce spend ~20–30% and shift into High-Intent Search, where ROAS remains strong.",
            "Performance Max – Retargeting: Keep spend steady – ROAS drop is linked to shrinking TOF volume, not channel inefficiency."
          ]
        },
        { type: "text", text: "Open Data Sheet: Campaign Efficiency Overview 📄" }
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
      timestamp: "9:04 AM",
      content: [
        { type: "text", text: "@Aaron let's start with Search – Products. Go ahead and pull back ~25% spend and reallocate to Brand + High-Intent." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "5",
      sender: "Aaron",
      timestamp: "9:04 AM",
      content: [
        { type: "text", text: "On it. Before I shift budget, @OWOX can you confirm High-Intent Search is still efficient?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "6",
      sender: "OWOX",
      timestamp: "9:05 AM",
      content: [
        { type: "text", text: "Yes – Search – High Intent continues to perform well:" },
        { type: "metric", label: "Purchases", value: "+9% vs 7-day avg", trend: "up" },
        { type: "metric", label: "CR", value: "4.8%", trend: "steady" },
        { type: "metric", label: "CPO", value: "$22–$24", trend: "steady" },
        { type: "text", text: "Open Data Sheet: High-Intent Search Breakdown 📄" }
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
  }
  ,
  {
    type: "message",
    data: {
      id: "7",
      sender: "Aaron",
      timestamp: "9:06 AM",
      content: [
        { type: "text", text: "Great. @OWOX break down High-Intent by ad group – which ones should receive the increased spend?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "8",
      sender: "OWOX",
      timestamp: "9:07 AM",
      content: [
        { type: "heading", text: "Strongest ad groups by lowest Cost per Order", level: 3 },
        {
          type: "list",
          items: [
            "Brand Core – CPO $18, CR 5.4%",
            "High Intent | Product Fit – CPO $21, CR 5.1%",
            "Competitor Defender – CPO $32, CR 3.9%"
          ]
        },
        { type: "text", text: "→ Recommend shifting spend toward Brand Core + Product Fit and reducing Competitor Defender for efficiency." },
        { type: "text", text: "Updated sheet: High Intent Ad Group View 📄" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r7", messageId: "8", sender: "James", emoji: "🎯" }
  },
  {
    type: "reaction",
    data: { id: "r8", messageId: "8", sender: "Aaron", emoji: "📈" }
  },
  {
    type: "message",
    data: {
      id: "9",
      sender: "James",
      timestamp: "9:10 AM",
      content: [
        { type: "text", text: "Good. Now on Meta – Broad (TOF) – @OWOX, show performance by creative groups in the US. I want to see if this is audience fatigue or specific creative decay." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "10",
      sender: "OWOX",
      timestamp: "9:11 AM",
      content: [
        { type: "text", text: "Checking creative group performance…" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "11",
      sender: "OWOX",
      timestamp: "9:12 AM",
      content: [
        { type: "heading", text: "Creative-Level Efficiency (Meta – Broad)", level: 3 },
        {
          type: "list",
          items: [
            "Creative A (UGC / Demo) – CR 1.3%, CPM stable → still viable",
            "Creative B (Static Product) – CR 0.6%, CTR down –31% → likely fatigue",
            "Creative C (Lifestyle Video) – CTR stable but CPC ↑ +25%"
          ]
        },
        { type: "text", text: "→ Efficiency loss mostly from Creative Group B underperformance." },
        { type: "text", text: "Open Data Sheet: Meta Ads Creative Analysis 🎨" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r9", messageId: "11", sender: "James", emoji: "👀" }
  },
  {
    type: "reaction",
    data: { id: "r10", messageId: "11", sender: "Aaron", emoji: "💡" }
  },
  {
    type: "message",
    data: {
      id: "12",
      sender: "Aaron",
      timestamp: "9:15 AM",
      content: [
        { type: "text", text: "Got it – I’ll rotate Creative B out and refresh that variant today." }
      ]
    }
  }         
,
  {
    type: "message",
    data: {
      id: "13",
      sender: "James",
      timestamp: "9:16 AM",
      content: [
        { type: "text", text: "Now – about Performance Max Retargeting: Before we assume the drop is TOF-driven, @OWOX can you show retargeting audience-size trend over the last 15 days?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "14",
      sender: "OWOX",
      timestamp: "9:16 AM",
      content: [
        { type: "text", text: "Pulling audience-pool trend…" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "15",
      sender: "OWOX",
      timestamp: "9:18 AM",
      content: [
        { type: "heading", text: "Audience-size trend — last 15 days (every 3)", level: 3 },
        { type: "text", text: "14.2 k → 13.9 k → 13.1 k → 12.5 k → 11.8 k" },
        { type: "text", text: "→ Retargeting pool is shrinking steadily." },
        { type: "text", text: "This aligns with the Meta Broad (TOF) decline — up-stream softness is reducing down-stream conversion efficiency." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r11", messageId: "15", sender: "James", emoji: "📉" }
  },
  {
    type: "reaction",
    data: { id: "r12", messageId: "15", sender: "Aaron", emoji: "🤔" }
  },
  {
    type: "message",
    data: {
      id: "16",
      sender: "James",
      timestamp: "9:25 AM",
      content: [
        { type: "text", text: "Makes sense. We keep PMax stable — we fix TOF first." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "17",
      sender: "Aaron",
      timestamp: "9:26 AM",
      content: [
        { type: "text", text: "@OWOX – can you give me a report showing a funnel Meta Broad (TOF) → Retargeting → Purchase so we can understand the drop rate?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "18",
      sender: "OWOX",
      timestamp: "9:27 AM",
      content: [
        { type: "text", text: "I can, but I don’t currently have the join between ad-platform audiences and remarketing pools at the product SKU level." },
        { type: "text", text: "To produce this funnel flow accurately, I’ll need the Audience-ID → Product-View Event mapping added." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r13", messageId: "18", sender: "James", emoji: "🧩" }
  },
  {
    type: "reaction",
    data: { id: "r14", messageId: "18", sender: "Aaron", emoji: "📎" }
  }
,
  {
    type: "message",
    data: {
      id: "19",
      sender: "James",
      timestamp: "9:27 AM",
      content: [
        { type: "text", text: "@John – we’ll need your help here. Can you extend the Data Mart to include the Audience ID → Product View join so we can trace TOF → Product View → Purchase properly?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "20",
      sender: "John",
      timestamp: "10:25 AM",
      content: [
        { type: "text", text: "Yep, working on it. I’ll patch the join in the Data Mart and re-publish. Give me ~30 min." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "21",
      sender: "John",
      timestamp: "10:55 AM",
      content: [
        { type: "text", text: "✅ The Data Mart has been updated." },
        { type: "text", text: "AudienceID → ProductView join is now available at the SKU level." },
        { type: "text", text: "@OWOX you should be able to run the funnel now." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r15", messageId: "21", sender: "James", emoji: "🎉" }
  },
  {
    type: "reaction",
    data: { id: "r16", messageId: "21", sender: "Aaron", emoji: "🙌" }
  },
  {
    type: "message",
    data: {
      id: "22",
      sender: "OWOX",
      timestamp: "10:56 AM",
      content: [
        { type: "text", text: "Perfect 👌 Running cross-stage funnel analysis now…" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "23",
      sender: "OWOX",
      timestamp: "10:59 AM",
      content: [
        { type: "heading", text: "TOF → Retargeting → Purchase flow (last 7 days)", level: 3 },
        { type: "text", text: "Traffic from Meta Broad decreased ~14%, leading to fewer product page views." },
        { type: "text", text: "That reduction caused the retargeting audience pool to shrink over the week." },
        { type: "text", text: "As the retargeting pool got smaller, Performance Max had fewer people to re-engage → purchase volume declined." },
        { type: "text", text: "In short: the drop in retargeting efficiency is driven upstream by weaker TOF performance — PMax itself isn’t the issue; it receives less, lower-intent traffic." },
        { type: "text", text: "Open Data Sheet: Funnel Flow Breakdown 📄" }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r17", messageId: "23", sender: "James", emoji: "🔍" }
  },
  {
    type: "reaction",
    data: { id: "r18", messageId: "23", sender: "Aaron", emoji: "📊" }
  },
  {
    type: "message",
    data: {
      id: "24",
      sender: "James",
      timestamp: "11:01 AM",
      content: [
        { type: "text", text: "Great – that confirms the dependency. Priority is stabilizing TOF and refreshing Broad creatives." }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r19", messageId: "24", sender: "Aaron", emoji: "✅" }
  },
  {
    type: "message",
    data: {
      id: "25",
      sender: "James",
      timestamp: "11:02 AM",
      content: [
        { type: "text", text: "@Aaron – let’s move ahead with replacing the fatigued creative and testing two new variants today." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "26",
      sender: "Aaron",
      timestamp: "11:05 AM",
      content: [
        { type: "text", text: "Yep. I’ll launch two new versions:" },
        {
          type: "list",
          items: [
            "UGC with a stronger product-benefit callout",
            "Lifestyle variant with clearer problem-solution framing (both live before EOD)"
          ]
        }
      ]
    }
  },
  {
    type: "reaction",
    data: { id: "r20", messageId: "26", sender: "James", emoji: "🚀" }
  }
]