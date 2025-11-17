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
        { type: "heading", text: "⚙️ Activation Mapper — Q3 2025 Analysis", level: 2 },
        { type: "text", text: "I analyzed all Q3 2025 accounts, segmented by ICP tier (Enterprise / Mid-Market / SMB)." },
        { type: "text", text: "Defined true activation as reaching month 4+ with ≥80% user retention and no downgrade signals." },
        {
          type: "list",
          items: [
            "I identified the minimal sequences (3–7 actions) that ≥70% of truly activated accounts completed.",
            "Focus: behavioral depth, not surface-level touches."
          ]
        }
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
        { type: "heading", text: "🏢 Enterprise — True Activation Path (73% coverage)", level: 2 },
        {
          type: "list",
          items: [
            "Connected 2+ data sources",
            "Created at least 1 Data Model with custom fields",
            "Ran 3–5 Data Marts using advanced filters or parameters",
            "Scheduled automated refreshes",
            "Embedded outputs into downstream tools (Looker Studio / Sheets)"
          ]
        },
        { type: "text", text: "Silent blocker → Teams that skip model customization (use defaults only) churn later despite completing the onboarding checklist." },
        { type: "text", text: "Drop-off point (look-activated but later churn) → Step 3: they run only 1 generic Data Mart and never use parameters." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "3",
      sender: "OWOX",
      timestamp: "9:03 AM",
      content: [
        { type: "heading", text: "🏬 Mid-Market — True Activation Path (71% coverage)", level: 2 },
        {
          type: "list",
          items: [
            "Connected 1 primary data source",
            "Published at least 1 custom metric",
            "Ran 2+ Data Marts pulling multi-table joins",
            "Set up alerts or scheduled reports",
            "Invited teammates (≥3 active)"
          ]
        },
        { type: "text", text: "Silent blocker → Accounts that invite teammates early but never publish a custom metric look healthy for 2–3 months, then stall and churn." }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "4",
      sender: "OWOX",
      timestamp: "9:03 AM",
      content: [
        { type: "heading", text: "💼 SMB — True Activation Path (75% coverage)", level: 2 },
        {
          type: "list",
          items: [
            "Connected 1 data source",
            "Ran multiple prebuilt templates",
            "Customized filters or dimensions",
            "Configured one recurring export (Sheets / Slack)"
          ]
        },
        { type: "text", text: "Silent blocker → SMBs that never configure a recurring export look activated but after the first dashboard 'wow moment', they stop returning." },
        { type: "text", text: "📄 Updated Data Sheet: Activation Paths by ICP + Silent Blockers" }
      ]
    }
  },
  { type: "reaction", data: { id: "r1", messageId: "4", sender: "Sarah", emoji: "👏" } },
  {
    type: "message",
    data: {
      id: "5",
      sender: "Sarah",
      timestamp: "9:18 AM",
      content: [
        { type: "text", text: "@OWOX can you show drop-off % at each node for Enterprise accounts? I want to see where the pseudo-activated ones diverge. 📊" }
      ]
    }
  },
  { type: "reaction", data: { id: "r2", messageId: "5", sender: "David", emoji: "📊" } },
  {
    type: "message",
    data: {
      id: "6",
      sender: "OWOX",
      timestamp: "9:18 AM",
      content: [
        { type: "text", text: "Computing node-level drop-offs… (working…) ⚙️" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "7",
      sender: "OWOX",
      timestamp: "9:20 AM",
      content: [
        { type: "heading", text: "🏢 Enterprise — Activation Graph (Drop-off %)", level: 2 },
        {
          type: "list",
          items: [
            "Connected ≥2 sources → 100% start",
            "Built custom model → drop to 82%",
            "Ran 3–5 advanced Data Marts → drop to 61%",
            "Scheduled refreshes → drop to 49%",
            "Embedded outputs → final: 42% true activation"
          ]
        },
        { type: "text", text: "Pseudo-activated accounts → Most diverge at step 3 – they run one generic report then stop." },
        { type: "text", text: "📄 Open Data Sheet: Enterprise Activation DAG" }
      ]
    }
  },
  { type: "reaction", data: { id: "r3", messageId: "7", sender: "Sarah", emoji: "👀" } },
  { type: "reaction", data: { id: "r4", messageId: "7", sender: "David", emoji: "👏" } },
  {
    type: "message",
    data: {
      id: "8",
      sender: "David",
      timestamp: "9:44 AM",
      content: [
        { type: "text", text: "Nice. @OWOX – can you compare the churned vs activated accounts for Mid-Market and show the single earliest divergence action? 💡" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "9",
      sender: "OWOX",
      timestamp: "9:44 AM",
      content: [
        { type: "text", text: "Analyzing earliest divergence… (working…) 🧠" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "10",
      sender: "OWOX",
      timestamp: "9:47 AM",
      content: [
        { type: "heading", text: "🏬 Mid-Market — Earliest Divergence (Day 7–12)", level: 2 },
        {
          type: "list",
          items: [
            "Activated: 68% publish at least one custom metric",
            "Later-churn: only 22% publish any metric"
          ]
        },
        { type: "text", text: "This is the first measurable fork in the path. 📄 Updated in Data Sheet: Mid-Market Early Divergence" }
      ]
    }
  },
  { type: "reaction", data: { id: "r5", messageId: "10", sender: "David", emoji: "💡" } },
    { type: "reaction", data: { id: "r6", messageId: "10", sender: "Sarah", emoji: "👀" } },
  {
    type: "message",
    data: {
      id: "11",
      sender: "Sarah",
      timestamp: "10:11 AM",
      content: [
        { type: "text", text: "Good. @OWOX can you check whether SMBs who fail on recurring export ever compensate with high in-app engagement? Or is export truly the mandatory milestone?" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "12",
      sender: "OWOX",
      timestamp: "10:11 AM",
      content: [
        { type: "text", text: "Checking engagement substitutes… (working…) ⚙️" }
      ]
    }
  },
  {
    type: "message",
    data: {
      id: "13",
      sender: "OWOX",
      timestamp: "10:13 AM",
      content: [
        { type: "heading", text: "📊 SMB – Is In-App Engagement a Substitute?", level: 2 },
        {
          type: "list",
          items: [
            "Across churned SMBs: even high in-app usage (≥12 sessions in month 1) does NOT correlate with retention unless at least one recurring export is active.",
            "So recurring exports are a hard activation milestone, not optional."
          ]
        },
        { type: "text", text: "📄 Added New Data Sheet: SMB Activation – Export as Non-Negotiable" }
      ]
    }
  },
  { type: "reaction", data: { id: "r7", messageId: "13", sender: "Sarah", emoji: "📈" } },
 { type: "reaction", data: { id: "r8", messageId: "13", sender: "David", emoji: "📊" } },
  {
    type: "message",
    data: {
      id: "14",
      sender: "David",
      timestamp: "10:36 AM",
      content: [
        { type: "text", text: "Perfect – keep it compact like this. Let’s prioritize: (1) Enterprise: push depth in step 3 (advanced Data Marts). (2) Mid-Market: early custom metric nudges. (3) SMB: automated exports surfaced earlier in onboarding. 🚀" }
      ]
    }
  }
]
