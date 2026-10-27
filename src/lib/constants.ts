import { ServiceItem, IndustryItem, PortfolioProject, TechTool, ProcessStep, FaqItem } from '@/types';

export const BRAND = {
  name: 'Reacher Automation',
  shortName: 'Reacher',
  tagline: 'Less Manual Work. More Business Growth.',
  altHeadline: 'Your Business, Running Smarter.',
  positioning: 'AI Automation Systems for Growing Businesses',
  heroSupportingText:
    'Reacher Automation builds intelligent workflows that capture leads, automate follow-ups, simplify operations, and help your business run more efficiently.',
  trustStatement: 'Built around your business. Designed to work with your existing tools.',
  closingStatement: 'Not more software. Better systems.',
  email: 'reachermedia@gmail.com',
  bookingUrl: '#book-discovery',
  calendlyPlaceholder: 'https://calendly.com',
  linkedinUrl: 'https://linkedin.com/company/reacher-automation',
  instagramUrl: 'https://instagram.com/reacherautomation',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Services & Features', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PROBLEM_CARDS = [
  {
    id: 'missed-leads',
    title: 'Missed Leads',
    description: 'Potential customers reach out, but delayed responses mean valuable opportunities can be lost.',
    statLabel: 'Response Lag',
    impact: 'Leads cool down in minutes',
  },
  {
    id: 'manual-followups',
    title: 'Manual Follow-Ups',
    description: 'Your team spends hours remembering who to contact, when to follow up, and what to say.',
    statLabel: 'Operational Drain',
    impact: 'Manual tracking in spreadsheets',
  },
  {
    id: 'disconnected-tools',
    title: 'Disconnected Tools',
    description: 'Customer information gets scattered across spreadsheets, inboxes, messaging platforms, and CRM systems.',
    statLabel: 'Siloed Systems',
    impact: 'Information slips through cracks',
  },
  {
    id: 'repetitive-operations',
    title: 'Repetitive Operations',
    description: 'Routine administrative work takes time away from customer relationships and business growth.',
    statLabel: 'Lost Productivity',
    impact: 'Repetitive copy-paste tasks',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-lead-qualification',
    title: 'AI Lead Qualification',
    badge: 'Inbound Growth',
    shortDesc:
      'Automatically collect incoming leads, ask relevant qualifying questions, categorise prospects, and route qualified opportunities to the right team.',
    fullDesc:
      'Never let a high-value enquiry wait in an inbox. Our AI Lead Qualification systems ingest enquiries across web forms, ads, and chat, assess budget, timeline, and fit against your custom criteria, and route prioritized leads directly to your sales reps with context.',
    features: [
      'Multi-channel lead capture',
      'AI-powered qualification & scoring',
      'Instant categorization & tagging',
      'Bidirectional CRM integration',
      'Real-time sales team Slack/Email alerts',
    ],
    detailedFeatures: [
      {
        title: 'Instant Inbound Ingestion',
        shortSummary: 'Catches inquiries from forms, ads, and messaging in < 1 second.',
        howItWorks: 'Listens via encrypted webhooks across landing pages and messaging APIs, sanitizing inputs and deduplicating records immediately.',
        businessBenefit: 'Zero lost leads; prospects receive immediate confirmation while their intent is at peak.',
        technicalMechanic: 'Encrypted JSON webhooks on n8n with rate limiting and replay attack protection.',
      },
      {
        title: 'Custom ICP Evaluation Engine',
        shortSummary: 'Evaluates lead budget, authority, urgency, and need using defined rules.',
        howItWorks: 'Extracts key parameters from free-text inquiries and compares them against your Ideal Customer Profile criteria using strict structured schemas.',
        businessBenefit: 'Sales reps stop wasting 15+ hours a week talking to tire-kickers or out-of-budget inquiries.',
        technicalMechanic: 'OpenAI GPT-4o-mini structured JSON schema output with confidence scores (0–100).',
      },
      {
        title: 'Intelligent Deal & Contact Sync',
        shortSummary: 'Automatically provisions contact cards and deals in your CRM.',
        howItWorks: 'Maps structured lead fields directly to HubSpot, GoHighLevel, or Salesforce, tagging the lead source, fit score, and synthesized summary.',
        businessBenefit: 'Eliminates manual CRM data entry and keeps your pipeline 100% up to date.',
        technicalMechanic: 'REST API integration with idempotency keys to prevent duplicate contact creation.',
      },
      {
        title: 'Real-Time Rep Alert & Routing',
        shortSummary: 'Dispatches qualified lead briefs to reps on Slack or WhatsApp.',
        howItWorks: 'Routes hot prospects to the next available rep based on territory, deal size, or round-robin rules with 1-click meeting calendar links.',
        businessBenefit: 'Sub-60-second speed-to-lead boosts conversion rates by up to 300%.',
        technicalMechanic: 'Slack Block Kit interactive alert with inline buttons to claim or reschedule.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Inbound Lead Handling',
        speed: 'Avg 4.5 hours response time',
        friction: 'Inquiries sit unattended in generic info@ inbox; reps manually check spreadsheets',
        humanLabor: '12+ hours/week spent on data entry & qualification calls',
        dropoff: '35% of qualified leads engage competitors first',
      },
      after: {
        processTitle: 'Reacher Automated Inbound Pipeline',
        speed: 'Sub-60 seconds response time',
        benefit: 'Instant AI qualification, CRM creation, and WhatsApp/Email calendar booking',
        automationLevel: '95% of triage & routing handled automatically',
        reliability: 'Zero dropped inquiries; 100% pipeline visibility',
      },
    },
    businessOutcomes: [
      'Sub-minute response times for warm prospects',
      'Sales reps only spend time on verified buyers',
      'Standardized qualification criteria across all channels',
    ],
    toolsUsed: ['n8n', 'OpenAI', 'HubSpot', 'Slack', 'PostgreSQL'],
    deliverables: ['Custom qualification prompt engine', 'Webhook routing infrastructure', 'Lead scoring logic & notification flows'],
    pipelineStages: [
      { step: '01', title: 'Inbound Webhook', detail: 'Captures form or chat submission in real time', actor: 'Client / Inbound' },
      { step: '02', title: 'AI Scoring Engine', detail: 'Extracts parameters and checks ICP criteria', actor: 'AI Model' },
      { step: '03', title: 'CRM Synchronization', detail: 'Creates deal card with synthesized briefing note', actor: 'Integration Engine' },
      { step: '04', title: 'Rep Alert & Booking', detail: 'Notifies sales team and texts lead calendar link', actor: 'CRM / Team' },
    ],
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support',
    badge: 'Customer Care',
    shortDesc:
      'Build AI-powered assistants that answer frequently asked questions, retrieve approved business information, and route complex enquiries to human staff.',
    fullDesc:
      'Equip your business with an intelligent assistant anchored strictly to your verified knowledge base. It handles repetitive queries accurately around the clock, while seamlessly handing off edge cases to human staff with complete conversation history.',
    features: [
      'Website AI assistants with brand voice',
      'Strict knowledge-base grounding',
      'Instant FAQ retrieval & contextual answers',
      'Intelligent human handoff triggers',
      'Customer enquiry management & logging',
    ],
    detailedFeatures: [
      {
        title: 'Knowledge-Grounded Retrieval',
        shortSummary: 'Anchored strictly to your verified documentation with zero public hallucination.',
        howItWorks: 'Chunks and embeds your product manuals, pricing sheets, and policies. When a user asks a question, the assistant retrieves only verified excerpts.',
        businessBenefit: 'Reliable, accurate answers without risk of the AI making up policies or discounts.',
        technicalMechanic: 'Retrieval-Augmented Generation (RAG) with vector similarity search and citation verification.',
      },
      {
        title: 'Contextual Multi-Turn Conversation',
        shortSummary: 'Understands nuance, follow-up questions, and user intent across sessions.',
        howItWorks: 'Maintains short-term conversational memory to answer multi-part questions naturally in your company brand voice.',
        businessBenefit: 'Customers receive immediate, personalized help without having to re-explain their problem.',
        technicalMechanic: 'Conversation state management with token-efficient summary compression.',
      },
      {
        title: 'Failsafe Human Escalation Gate',
        shortSummary: 'Detects frustration or complex edge cases and transfers to human staff.',
        howItWorks: 'Analyzes user sentiment and query complexity. If confidence is below threshold or user asks for a human, it pings your team with full transcripts.',
        businessBenefit: 'Zero customer frustration from getting trapped in endless chatbot loops.',
        technicalMechanic: 'Sentiment classification gate triggering Slack / Zendesk ticket creation with conversation history.',
      },
      {
        title: 'Continuous Unanswered Query Logging',
        shortSummary: 'Identifies gaps in your documentation automatically.',
        howItWorks: 'Flags questions where the knowledge base lacked sufficient detail, providing your team with a weekly digest of what documentation to expand.',
        businessBenefit: 'Your support assistant continuously gets smarter every single week.',
        technicalMechanic: 'Database logging table aggregating fallback triggers and unresolved query patterns.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Traditional Support Ticket Queues',
        speed: 'Avg 6–18 hours for first response',
        friction: 'Front-line staff spend 20+ hrs/wk repeatedly answering the same 20 basic FAQs',
        humanLabor: 'High ticket backlog and staff burnout during peak hours',
        dropoff: 'Dissatisfied customers abandon carts or cancel service due to waiting',
      },
      after: {
        processTitle: 'Reacher Grounded Support Assistant',
        speed: 'Sub-2 seconds instant resolution',
        benefit: '70%+ of routine questions answered 24/7; human staff only handle complex cases',
        automationLevel: 'Automates 70–80% of tier-1 support tickets',
        reliability: 'Strict knowledge-base boundary; 1-click human escalation fallback',
      },
    },
    businessOutcomes: [
      '24/7 instant answers to 70%+ of routine inquiries',
      'Eliminate repetitive support tickets',
      'Zero hallucination risk via strict retrieval boundaries',
    ],
    toolsUsed: ['OpenAI', 'Airtable', 'Make', 'Slack', 'Zendesk/Crisp'],
    deliverables: ['Grounded knowledge base index', 'Handoff alert triggers', 'Web widget integration'],
    pipelineStages: [
      { step: '01', title: 'User Ingestion', detail: 'User asks question on web chat, email, or WhatsApp', actor: 'Client / Inbound' },
      { step: '02', title: 'Vector Search', detail: 'Retrieves relevant paragraphs from verified documentation', actor: 'AI Model' },
      { step: '03', title: 'Confidence Gate', detail: 'Answers query if confidence > 85%, otherwise routes to human', actor: 'Integration Engine' },
      { step: '04', title: 'Handoff / Logging', detail: 'Logs interaction and notifies staff on Slack if escalated', actor: 'CRM / Team' },
    ],
  },
  {
    id: 'whatsapp-email-automation',
    title: 'WhatsApp & Email Automation',
    badge: 'Omnichannel',
    shortDesc:
      'Automate customer communication using supported messaging and email integrations through official approved APIs.',
    fullDesc:
      'Deliver personalized, timely communication right where your clients are active. Using the official WhatsApp Business Platform and transactional email infrastructure, we orchestrate acknowledgement messages, reminders, and nurturing sequences.',
    features: [
      'Instant acknowledgement messages',
      'Personalised follow-ups',
      'Lead nurturing sequences',
      'Appointment reminders',
      'Customer re-engagement',
    ],
    detailedFeatures: [
      {
        title: 'Official Meta WhatsApp Business API',
        shortSummary: 'Verified green tick enterprise messaging with zero ban risk.',
        howItWorks: 'Direct connection to Meta Cloud API utilizing pre-approved message templates and dynamic variables for maximum delivery rates.',
        businessBenefit: '98% open rates and 45%+ reply rates compared to low email open rates.',
        technicalMechanic: 'Webhook listeners processing delivery receipts, read receipts, and incoming text replies.',
      },
      {
        title: 'Event-Driven Drip Sequences',
        shortSummary: 'Sends contextual follow-ups based on prospect actions, not rigid timers.',
        howItWorks: 'If a prospect clicks a link but doesn’t book, or reaches proposal stage without signing, tailored follow-ups trigger automatically.',
        businessBenefit: 'Keeps deals warm without reps having to remember manual calendar reminders.',
        technicalMechanic: 'Stateful workflow engine tracking prospect behavior with debounce windows.',
      },
      {
        title: 'Omnichannel Fallback Logic',
        shortSummary: 'Switches between WhatsApp, SMS, and Email if delivery fails.',
        howItWorks: 'If a WhatsApp message cannot be delivered within 3 minutes, the workflow automatically cascades to high-priority transactional email.',
        businessBenefit: 'Guaranteed message delivery across all primary client touchpoints.',
        technicalMechanic: 'Failover try/catch sequence across Meta API and transactional SMTP/API.',
      },
      {
        title: 'Smart Re-Engagement Triggers',
        shortSummary: 'Re-activates past clients after defined inactive periods.',
        howItWorks: 'Monitors last appointment or transaction date and sends personalized re-booking offers after 30, 60, or 90 days.',
        businessBenefit: 'Generates predictable recurring revenue from your existing customer database.',
        technicalMechanic: 'Scheduled cron query against database records with personalized promo tokens.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Messaging & Cold Emailing',
        speed: '1–2 days delay in message delivery',
        friction: 'Reps send manual WhatsApp messages from personal phones; untracked in CRM',
        humanLabor: '6+ hours/week copying links and typing repetitive reminder texts',
        dropoff: 'High no-show rates (25–35%) due to forgotten meetings',
      },
      after: {
        processTitle: 'Reacher Omnichannel Messaging Pipeline',
        speed: 'Instant automated delivery & reminders',
        benefit: 'Official Meta WhatsApp API + transactional email with 2-way CRM synchronization',
        automationLevel: '100% automated reminder and re-engagement cadence',
        reliability: 'No-show rates drop by up to 50%; all conversations logged to CRM',
      },
    },
    businessOutcomes: [
      'Higher open and response rates on direct channels',
      'Drastically reduced no-show rates for scheduled consultations',
      'Compliant, official API implementation with zero ban risk',
    ],
    toolsUsed: ['WhatsApp Business Platform', 'Make', 'Postmark/Resend', 'Google Workspace'],
    deliverables: ['Official WhatsApp template setup', 'Dynamic token personalization', 'Drip logic & fallback channels'],
    pipelineStages: [
      { step: '01', title: 'Trigger Event', detail: 'New lead, booking created, or deal stage updated', actor: 'Client / Inbound' },
      { step: '02', title: 'Token Injection', detail: 'Populates template with customer name, date, and custom links', actor: 'Integration Engine' },
      { step: '03', title: 'Dispatch', detail: 'Sends via Meta Cloud API or transactional email infrastructure', actor: 'Integration Engine' },
      { step: '04', title: 'Response Listener', detail: 'Ingests replies and updates CRM conversation timeline', actor: 'CRM / Team' },
    ],
  },
  {
    id: 'appointment-booking-automation',
    title: 'Appointment Booking Automation',
    badge: 'Scheduling',
    shortDesc:
      'Reduce scheduling friction by connecting customer enquiries directly to verified calendar availability.',
    fullDesc:
      'Eliminate the back-and-forth email tag of coordinating times. We connect your qualifying workflows directly with calendar booking engines, automated confirmation emails, calendar invite attachments, and proactive reminder triggers.',
    features: [
      'Booking links',
      'Calendar integration',
      'Appointment confirmation',
      'Rescheduling workflows',
      'Automated reminders',
      'No-show follow-ups',
    ],
    detailedFeatures: [
      {
        title: 'Dynamic Personalized Booking Routers',
        shortSummary: 'Routes prospects to the specific rep or practitioner based on service type.',
        howItWorks: 'Analyzes the qualification parameters and generates a custom booking link with pre-filled lead details so the prospect never retypes their name.',
        businessBenefit: 'Frictionless booking experience accelerates appointment conversions.',
        technicalMechanic: 'URL parameter encoding with tokenized calendar availability routers.',
      },
      {
        title: 'Two-Way Live Calendar Synchronization',
        shortSummary: 'Locks slots instantly across Google Calendar, Outlook, and CRM.',
        howItWorks: 'Verifies real-time team availability, buffer times between meetings, and locks the slot simultaneously in calendar and CRM.',
        businessBenefit: 'Zero double-booking and zero timezone confusion.',
        technicalMechanic: 'Bi-directional webhooks connected to Google Calendar API / Calendly.',
      },
      {
        title: 'Multi-Touch Reminders (-24h & -2h)',
        shortSummary: 'Dispatches automated reminders with meeting prep and direct links.',
        howItWorks: 'Schedules automated SMS, WhatsApp, and email reminders with one-click Google Meet / Zoom join links and prep checklists.',
        businessBenefit: 'Reduces appointment no-shows by 40% or more.',
        technicalMechanic: 'Scheduled delayed queue checking cancellation status prior to trigger.',
      },
      {
        title: 'Self-Serve Rescheduling & Cancellation',
        shortSummary: 'Allows clients to reschedule with 1 click without calling your front desk.',
        howItWorks: 'Provides a secure self-service link in all reminder messages, instantly freeing up canceled slots for other clients.',
        businessBenefit: 'Saves front-desk staff hours of phone tag and recovers open booking slots.',
        technicalMechanic: 'Webhook listeners receiving reschedule events and updating the CRM deal date.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Scheduling & Email Ping-Pong',
        speed: '2–3 days of back-and-forth emails to confirm a time',
        friction: 'Timezone errors, double-booked slots, forgotten calendar invites',
        humanLabor: 'Staff spend 10+ hours/week coordinating meetings and rescheduling calls',
        dropoff: '40% of interested prospects drop off before confirming a slot',
      },
      after: {
        processTitle: 'Reacher Frictionless Calendar Automation',
        speed: 'Instant slot selection in < 30 seconds',
        benefit: 'Dynamic pre-filled booking link with automated calendar invites & reminders',
        automationLevel: '100% automated booking, rescheduling, and reminder flow',
        reliability: 'No-show rates drop to under 8%; zero double-bookings',
      },
    },
    businessOutcomes: [
      'Shortened sales cycle from enquiry to meeting',
      'Average 40% reduction in appointment no-shows',
      'Zero double-booking or timezone confusion',
    ],
    toolsUsed: ['Calendly', 'Google Workspace', 'n8n', 'WhatsApp API'],
    deliverables: ['Custom booking link router', 'Automated reminder sequences', 'Post-call follow-up triggers'],
    pipelineStages: [
      { step: '01', title: 'Availability Match', detail: 'Checks rep calendars and timezones in real time', actor: 'Integration Engine' },
      { step: '02', title: 'Booking Confirmation', detail: 'Locks slot, creates calendar invite, and emails video link', actor: 'Integration Engine' },
      { step: '03', title: 'Reminder Cadence', detail: 'Dispatches SMS and WhatsApp reminders at -24h and -1h', actor: 'Integration Engine' },
      { step: '04', title: 'Post-Call Action', detail: 'Triggers summary task and deal update after meeting ends', actor: 'CRM / Team' },
    ],
  },
  {
    id: 'crm-sales-automation',
    title: 'CRM & Sales Automation',
    badge: 'Revenue Ops',
    shortDesc:
      'Connect lead generation, customer records, sales pipelines, and follow-up workflows into one unified engine.',
    fullDesc:
      'Turn your CRM into an active sales driver rather than a passive contact graveyard. We automate contact creation, pipeline stage progression, follow-up task generation, and team deal notifications.',
    features: [
      'Automatic CRM updates',
      'Lead assignment',
      'Sales pipeline management',
      'Follow-up task creation',
      'Deal status notifications',
    ],
    detailedFeatures: [
      {
        title: 'Automated Pipeline Progression',
        shortSummary: 'Advances deals automatically as milestones are completed.',
        howItWorks: 'When a contract is sent, signed, or an invoice is paid, the CRM deal automatically shifts from "Proposal" to "Closed-Won".',
        businessBenefit: 'Sales managers get real-time accurate pipeline forecasts without nagging reps.',
        technicalMechanic: 'Event-driven triggers connected to DocuSign, Stripe, or payment gateways.',
      },
      {
        title: 'Stagnant Deal Alert & Re-Engagement',
        shortSummary: 'Flags deals stuck in pipeline stages for too long.',
        howItWorks: 'Monitors deal velocity. If a deal sits in Proposal stage with no prospect activity for 5 days, it drafts a contextual check-in email.',
        businessBenefit: 'Recovers cold deals and prevents opportunities from slipping through cracks.',
        technicalMechanic: 'Scheduled query calculating days in stage and pushing reminders to Slack.',
      },
      {
        title: 'Smart Activity & Call Logging',
        shortSummary: 'Logs emails, WhatsApp chats, and call summaries to contact timelines.',
        howItWorks: 'Automatically transcribes and attaches call notes and customer communication to the CRM record.',
        businessBenefit: 'Complete institutional memory; any team member can step in with full context.',
        technicalMechanic: 'Webhook data sync with timeline event creation APIs.',
      },
      {
        title: 'Automated Sales Handoff to Ops',
        shortSummary: 'Instantly kicks off onboarding when a deal is closed.',
        howItWorks: 'When deal marks Closed-Won, it creates the project in Asana/ClickUp, invites the client to Slack, and drafts the onboarding invoice.',
        businessBenefit: 'Clients experience a white-glove onboarding experience within minutes of signing.',
        technicalMechanic: 'Multi-system webhook orchestrator provisioning project templates and client access.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual CRM Updates & Fragmented Notes',
        speed: 'Updates delayed by days or never recorded',
        friction: 'Reps hate manual data entry; deals sit stagnant; lost customer context',
        humanLabor: 'Sales reps spend 8–10 hours/week updating deal statuses and creating tasks',
        dropoff: 'Deals go cold unnoticed; inaccurate pipeline forecasts',
      },
      after: {
        processTitle: 'Reacher Autonomous CRM Engine',
        speed: 'Instant milestone-triggered synchronization',
        benefit: 'Automatic stage progression, task generation, and stagnant deal recovery',
        automationLevel: '90% of administrative CRM maintenance automated',
        reliability: '100% pipeline visibility and accurate revenue forecasting',
      },
    },
    businessOutcomes: [
      '100% accurate, up-to-date pipeline visibility',
      'No lead drops out of the pipeline unattended',
      'Hours of administrative CRM data entry saved each week',
    ],
    toolsUsed: ['HubSpot', 'GoHighLevel', 'Airtable', 'Make', 'Slack'],
    deliverables: ['Pipeline synchronization rules', 'Activity logging webhooks', 'Automated deal stage triggers'],
    pipelineStages: [
      { step: '01', title: 'Activity Ingestion', detail: 'Tracks emails, meeting completions, and contract views', actor: 'Integration Engine' },
      { step: '02', title: 'Stage Transition', detail: 'Evaluates criteria and advances deal to next pipeline stage', actor: 'Integration Engine' },
      { step: '03', title: 'Task Generation', detail: 'Creates follow-up tasks with deadlines for assigned reps', actor: 'CRM / Team' },
      { step: '04', title: 'Handoff Trigger', detail: 'Provisions onboarding workspace when deal is won', actor: 'Integration Engine' },
    ],
  },
  {
    id: 'custom-ai-workflows',
    title: 'Custom AI Workflows',
    badge: 'Tailored Systems',
    shortDesc:
      'Design tailored automation systems around specific business processes, internal document parsing, and operational pipelines.',
    fullDesc:
      'When off-the-shelf software doesn’t fit your proprietary operations, we engineer bespoke workflows. From parsing PDF invoices and extracting structured JSON to multi-step agentic pipelines connecting proprietary databases.',
    features: [
      'API integrations',
      'Document processing',
      'AI-powered data extraction',
      'Internal workflow automation',
      'Business reporting',
      'Custom multi-step AI agents',
    ],
    detailedFeatures: [
      {
        title: 'Intelligent Document & PDF Extraction',
        shortSummary: 'Transforms unstructured PDFs and invoices into clean structured data.',
        howItWorks: 'Ingests invoices, contracts, or lab reports, parses line items, totals, and dates, and validates data against business schemas.',
        businessBenefit: 'Eliminates hundreds of hours of manual copy-paste data entry and typing errors.',
        technicalMechanic: 'Vision LLM parsing with JSON Schema validation and fallback human review flags.',
      },
      {
        title: 'Multi-Step Supervised Agent Chains',
        shortSummary: 'Executes complex multi-system business tasks with deterministic controls.',
        howItWorks: 'Orchestrates step-by-step logic (e.g., Extract → Validate → Query Database → Draft Response → Request Human Approval → Send).',
        businessBenefit: 'Automates complex internal operations while keeping human approval on sensitive steps.',
        technicalMechanic: 'State-machine orchestration on n8n with checkpoint persistence.',
      },
      {
        title: 'Automated Executive KPI Digests',
        shortSummary: 'Delivers daily or weekly business health reports to your Slack or Email.',
        howItWorks: 'Queries your databases, CRMs, and ad platforms, calculates velocity and anomalies, and synthesizes a concise executive brief.',
        businessBenefit: 'Founders and managers get complete operational clarity every morning without opening 10 dashboards.',
        technicalMechanic: 'Scheduled aggregation cron writing structured summaries with chart visuals.',
      },
      {
        title: 'Custom Proprietary API Connectors',
        shortSummary: 'Bridges legacy software and custom databases with modern AI tools.',
        howItWorks: 'Builds secure REST / GraphQL middleware connecting on-premise databases or industry-specific ERPs with modern cloud workflows.',
        businessBenefit: 'Modernize operations without expensive multi-year software replacements.',
        technicalMechanic: 'Secure Node/Python webhook middleware with JWT authentication and audit trails.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Document Entry & Fragmented Operations',
        speed: 'Days of manual data entry and invoice reconciliation',
        friction: 'PDF invoices manually typed into spreadsheets; high error rates; slow approvals',
        humanLabor: '20+ hours/week spent on administrative operations and reporting',
        dropoff: 'Delayed vendor payments, lost paperwork, inaccurate records',
      },
      after: {
        processTitle: 'Reacher Custom Document & Workflow Engine',
        speed: 'Instant extraction & validation in < 5 seconds',
        benefit: 'Automated structured data extraction directly into ERP with human approval gates',
        automationLevel: '90%+ reduction in manual document handling',
        reliability: 'Validated schema accuracy; full audit trail for every processed file',
      },
    },
    businessOutcomes: [
      'Automation of complex, non-standard business processes',
      'Elimination of manual document data extraction',
      'Tailored systems that scale alongside your transaction volume',
    ],
    toolsUsed: ['n8n', 'OpenAI', 'PostgreSQL', 'Google Cloud', 'Python/Node'],
    deliverables: ['Custom orchestrator deployment', 'Data validation schemas', 'Fail-safe monitoring & alerting'],
    pipelineStages: [
      { step: '01', title: 'File Ingestion', detail: 'Monitors inbox or folder for incoming PDFs and documents', actor: 'Client / Inbound' },
      { step: '02', title: 'AI Extraction', detail: 'Parses tabular data and line items into verified JSON', actor: 'AI Model' },
      { step: '03', title: 'Validation Gate', detail: 'Cross-checks against database records and checks math', actor: 'Integration Engine' },
      { step: '04', title: 'System Dispatch', detail: 'Pushes records to ERP/accounting and notifies admin', actor: 'CRM / Team' },
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lead-to-appointment-clinical',
    title: 'Clinical Lead-to-Appointment Orchestrator',
    clientType: 'Specialized Healthcare Practice',
    category: 'Lead Systems',
    isPrototype: true,
    tagline: 'Sub-60s patient triage, calendar slot locking, and automated multi-channel reminder cadences.',
    clientContext:
      'A multi-location clinic practice was losing qualified consultation bookings because staff could not answer incoming web and WhatsApp inquiries fast enough during treatment hours.',
    problem:
      'Inquiries waited an average of 4.5 hours for front-desk response. 38% of prospective patients contacted alternative clinics, and appointment no-show rates hovered at 28%.',
    solutionOverview:
      'Engineered an automated clinical intake pipeline. When a patient submits an inquiry, an AI evaluation model assesses appointment urgency and service type, checks practitioner calendar availability, sends a personalized WhatsApp booking link, and locks the slot with automated SMS reminders.',
    architecture:
      'Inbound Webhook → n8n Intake Orchestrator → OpenAI Clinical Triage → HubSpot Practice CRM → Dynamic Calendly Router → WhatsApp Business API Reminders',
    architectureNodes: [
      { label: 'Patient Inquiry (Web/WhatsApp)', type: 'trigger', detail: 'Captures name, condition symptoms, and location preference' },
      { label: 'AI Clinical Triage Engine', type: 'ai', detail: 'Validates non-emergency category & maps doctor specialty' },
      { label: 'Practice CRM Sync', type: 'database', detail: 'Creates patient record with HIPAA/privacy safety tags' },
      { label: 'Dynamic Slot Router', type: 'action', detail: 'Generates doctor-specific calendar link with pre-filled tokens' },
      { label: 'WhatsApp Confirmation & Reminders', type: 'output', detail: 'Dispatches instant confirmation + -24h and -2h reminder sequence' },
    ],
    tools: ['n8n', 'OpenAI', 'HubSpot', 'WhatsApp Business API', 'Google Calendar'],
    coreFeaturesExplained: [
      {
        featureTitle: 'Sub-Minute Inbound Triage',
        explanation: 'Parses patient needs instantly and responds on WhatsApp or Email within 30 seconds while intent is hot.',
        technicalImplementation: 'Webhook listener triggering structured parameter extraction without clinical diagnostic claims.',
      },
      {
        featureTitle: 'Dynamic Availability Locking',
        explanation: 'Checks practitioner calendars in real time so patients only see actual available consultation slots.',
        technicalImplementation: 'Two-way calendar API integration with timezone normalization and buffer times.',
      },
      {
        featureTitle: 'Multi-Touch Reminder Cadence',
        explanation: 'Sends personalized reminders 24 hours and 2 hours before the visit with location parking instructions.',
        technicalImplementation: 'Scheduled stateful delay queue triggering Meta Cloud API with cancellation fallback.',
      },
      {
        featureTitle: '1-Click Rescheduling Workflow',
        explanation: 'Patients can reschedule with a single tap, instantly releasing the open slot for other patients.',
        technicalImplementation: 'Interactive WhatsApp quick-reply buttons connected to calendar rescheduling webhooks.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Clinic Intake',
        speed: '4.5 hours average response time',
        friction: 'Phone tag, lost inquiries during clinical treatments, untracked WhatsApp messages',
        humanLabor: '18 hours/week spent on front-desk telephone scheduling',
        dropoff: '38% lost inquiries; 28% patient no-show rate',
      },
      after: {
        processTitle: 'Reacher Clinical Orchestrator',
        speed: '42 seconds average response time',
        benefit: 'Instant qualification, direct slot locking, automated 2-step reminder sequence',
        automationLevel: '92% of appointment coordination handled autonomously',
        reliability: 'No-show rates drop to under 7%; zero double-bookings',
      },
    },
    metrics: [
      { label: 'Speed-to-Response', value: '< 60 Seconds', comparison: 'Down from 4.5 hours' },
      { label: 'Projected No-Show Reduction', value: '-72%', comparison: 'From 28% to < 8%' },
      { label: 'Front-Desk Hours Saved', value: '~18 hrs/wk', comparison: 'Redirected to in-clinic care' },
    ],
    flowSteps: [
      'Patient submits consultation request on clinic website or WhatsApp',
      'AI triage model validates service department and verifies non-emergency status',
      'Patient profile created in practice CRM with urgency tagging',
      'Patient receives WhatsApp message with personalized calendar link in 45 seconds',
      'Patient selects slot; confirmation & calendar invite dispatched automatically',
      'Automated reminders sent at -24 hours and -2 hours with clinic directions',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'Website Inbound Form',
        rawPayload: {
          patientName: 'David K.',
          service: 'Orthopedic Consultation',
          preferredTime: 'Thursday Afternoon',
          notes: 'Referred for knee pain following sports injury. Need consultation this week.',
        },
      },
      aiAnalysis: {
        confidence: '98%',
        classification: 'Qualified - Tier 1 Specialty Consultation',
        reasoning: 'Non-emergency sports orthopedic request. Matched to Dr. Aris (Sports Medicine).',
      },
      crmAction: {
        actionType: 'Create Patient Profile & Deal',
        destination: 'HubSpot Practice CRM',
        recordState: 'Stage: Qualified Booking Sent · Owner: Clinic Front Desk',
      },
      notificationOut: {
        channel: 'WhatsApp Business API',
        message: 'Hello David, Dr. Aris has 2 consultation slots open this Thursday at 2:30 PM and 4:00 PM. Tap here to lock your slot: reacher.co/book/dr-aris-thu',
      },
    },
  },
  {
    id: 'grounded-customer-support-ai',
    title: 'Grounded 24/7 Knowledge Assistant with Human Escalation',
    clientType: 'High-Volume SaaS / E-Commerce Brand',
    category: 'Customer Care AI',
    isPrototype: true,
    tagline: 'Strictly grounded RAG assistant resolving 70%+ of tier-1 inquiries with 1-click human Slack handoff.',
    clientContext:
      'A growing online business was drowning in 150+ daily repetitive support tickets regarding order shipping status, refund policies, and integration questions.',
    problem:
      'Support reps spent 70% of their workday copying and pasting standard responses. Ticket response times slipped to 14 hours on weekends, causing customer churn.',
    solutionOverview:
      'Engineered an intelligent knowledge assistant anchored strictly to verified company documentation and order status databases. Resolves routine queries in < 2 seconds while immediately routing complex questions or dissatisfied customers to Slack for human intervention.',
    architecture:
      'Customer Web/Chat Widget → Vector Knowledge Index (Pinecone) → OpenAI GPT-4o-mini → Confidence & Sentiment Gate → Slack / Zendesk Human Escalation',
    architectureNodes: [
      { label: 'Customer Inquiry', type: 'trigger', detail: 'User asks question on web chat, email, or WhatsApp' },
      { label: 'Semantic Search Vector Store', type: 'database', detail: 'Retrieves top verified policy excerpts from company KB' },
      { label: 'Grounded AI Synthesizer', type: 'ai', detail: 'Generates helpful, brand-aligned answer with zero hallucination' },
      { label: 'Confidence & Sentiment Gate', type: 'action', detail: 'Verifies confidence > 88% and sentiment is neutral/positive' },
      { label: 'Human Handoff / Slack Alert', type: 'output', detail: 'If confidence low, pushes conversation transcript to Slack team channel' },
    ],
    tools: ['OpenAI', 'Airtable', 'Make', 'Slack', 'Zendesk'],
    coreFeaturesExplained: [
      {
        featureTitle: 'Strict Knowledge Base Grounding',
        explanation: 'Only answers using approved company documentation. Will never invent discounts, policies, or product features.',
        technicalImplementation: 'Vector similarity search with cosine distance filtering and strict system prompt constraints.',
      },
      {
        featureTitle: 'Live Order Status Integration',
        explanation: 'Customers can enter order numbers to retrieve real-time tracking information directly in the chat.',
        technicalImplementation: 'Secure API lookup against Shopify / shipping carrier databases with email verification.',
      },
      {
        featureTitle: 'Sentiment-Triggered Human Escalation',
        explanation: 'Detects frustrated sentiment or complex requests and immediately routes the ticket to human staff.',
        technicalImplementation: 'Real-time sentiment classifier scoring user tone and triggering Slack webhook alerts.',
      },
      {
        featureTitle: 'Continuous Documentation Analytics',
        explanation: 'Logs questions where the knowledge base lacked clear answers, creating a priority backlog for the content team.',
        technicalImplementation: 'Analytics logging table summarizing recurring unanswered customer questions weekly.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Support Ticket Backlog',
        speed: '14 hours average weekend response time',
        friction: 'Customer service reps overwhelmed answering identical questions; high churn',
        humanLabor: '22+ hours/week spent on repetitive copy-paste answers',
        dropoff: '22% customer dissatisfaction on slow first-response times',
      },
      after: {
        processTitle: 'Reacher Grounded Support Assistant',
        speed: '1.8 seconds instant answer speed',
        benefit: '74% of tier-1 questions resolved autonomously; instant human escalation for edge cases',
        automationLevel: 'Automates 74% of routine ticket volume',
        reliability: 'Zero hallucination risk; 100% human visibility on escalations',
      },
    },
    metrics: [
      { label: 'Tier-1 Deflection Rate', value: '74%', comparison: 'Autonomous instant resolution' },
      { label: 'Average Response Speed', value: '1.8 Seconds', comparison: 'Down from 14 hours' },
      { label: 'Human Escalation Speed', value: '< 2 Minutes', comparison: 'Via real-time Slack ping' },
    ],
    flowSteps: [
      'Customer submits question regarding order status or return policy',
      'System queries vector database for matching company policy paragraphs',
      'Assistant synthesizes accurate, concise response in client brand voice',
      'If query is outside knowledge base, assistant politely transfers to human support',
      'Slack channel alerts support team with full transcript and customer context',
      'Query is logged to documentation improvement dashboard',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'Web Support Widget',
        rawPayload: {
          customerName: 'Sarah Jenkins',
          query: 'I ordered the pro kit 3 days ago. How do I track shipping, and what is your return window?',
          orderId: 'ORD-98421',
        },
      },
      aiAnalysis: {
        confidence: '96%',
        classification: 'Knowledge Query + Order Status',
        reasoning: 'Extracted order tracking request and 30-day return policy inquiry from documentation.',
      },
      crmAction: {
        actionType: 'Order Lookup & Policy Retrieval',
        destination: 'Shopify API + Internal Policy KB',
        recordState: 'Order #ORD-98421: In Transit (FedEx 9400...) · Return Window: 30 Days',
      },
      notificationOut: {
        channel: 'Chat Widget Response',
        message: 'Hello Sarah! Your Pro Kit shipped via FedEx and is scheduled for delivery tomorrow by 3 PM (Tracking: 9400...). Our return policy allows 30 days from delivery for full refunds in original packaging.',
      },
    },
  },
  {
    id: 'revflow-crm-pipeline-engine',
    title: 'Autonomous CRM Pipeline Progression & Stagnant Deal Recovery',
    clientType: 'B2B Professional Services / Agency',
    category: 'CRM & Pipelines',
    isPrototype: true,
    tagline: 'Event-driven deal stage progression, inactivity monitors, and automated contextual re-engagement.',
    clientContext:
      'A B2B agency with 6 account executives had high proposal volume but lost revenue because reps neglected follow-up cadences on stalled deals.',
    problem:
      'Over 42% of sent proposals had zero follow-up after day 3. Account executives spent 8+ hours a week manually updating CRM fields and scheduling reminders.',
    solutionOverview:
      'Engineered a revenue operations pipeline that monitors deal stages and customer engagement. Stagnant proposals trigger automated contextual check-in drafts, notify reps via Slack with 1-click approval, and automatically advance stages when contracts are opened or signed.',
    architecture:
      'HubSpot CRM Deal Event → Make Orchestration Scenario → OpenAI Contextual Drafter → Slack AE Action Ping → Gmail / Dynamic API',
    architectureNodes: [
      { label: 'Deal Milestone Trigger', type: 'trigger', detail: 'Tracks proposal sent, link opened, or inactivity days' },
      { label: 'Inactivity & Engagement Evaluator', type: 'ai', detail: 'Analyzes prospect engagement metrics and previous communication' },
      { label: 'Contextual Email Drafter', type: 'action', detail: 'Drafts tailored check-in referencing original client goals' },
      { label: 'Slack AE Approval Card', type: 'output', detail: 'Pushes draft to rep with [Send Now] or [Edit] buttons' },
      { label: 'CRM Stage Synchronizer', type: 'database', detail: 'Updates deal health score and advances pipeline stage' },
    ],
    tools: ['HubSpot', 'Make', 'OpenAI', 'Slack', 'Google Workspace'],
    coreFeaturesExplained: [
      {
        featureTitle: 'Milestone-Driven Stage Progression',
        explanation: 'Deals advance automatically when proposals are viewed, contracts are signed, or invoices are paid.',
        technicalImplementation: 'Webhook listeners receiving events from PandaDoc / DocuSign and updating HubSpot deal stages.',
      },
      {
        featureTitle: 'Stagnant Deal Inactivity Monitor',
        explanation: 'Identifies proposals with zero response for 72 hours and initiates an automated re-engagement workflow.',
        technicalImplementation: 'Scheduled daily cron querying deal stage age and contact activity logs.',
      },
      {
        featureTitle: 'Human-in-the-Loop Slack Approval',
        explanation: 'The rep receives the AI-generated follow-up draft in Slack and can approve, edit, or cancel with 1 click.',
        technicalImplementation: 'Slack Block Kit interactive buttons sending dispatch callbacks to Make orchestrator.',
      },
      {
        featureTitle: 'Comprehensive Pipeline Health Reporting',
        explanation: 'Delivers a weekly pipeline velocity and deal drop-off report directly to sales leadership.',
        technicalImplementation: 'Automated database query synthesizing deal velocity and conversion metrics into Slack digest.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Sales Tracking & Forgotten Follow-ups',
        speed: '5–10 days lag between deal follow-ups',
        friction: 'Reps forget who to contact; proposals go cold without touchpoints; stale CRM data',
        humanLabor: '8+ hours/week spent on administrative CRM updates and manual email drafting',
        dropoff: '42% of proposal deals go cold without systematic follow-ups',
      },
      after: {
        processTitle: 'Reacher Autonomous CRM Engine',
        speed: 'Systematic 72-hour automated follow-up cadence',
        benefit: 'Contextual AI drafts pushed to reps on Slack; 1-click approvals; real-time stage sync',
        automationLevel: '85% of sales pipeline administration automated',
        reliability: '100% follow-up adherence; 28% recovery of stalled proposals',
      },
    },
    metrics: [
      { label: 'Follow-Up Consistency', value: '100%', comparison: 'Up from ~58%' },
      { label: 'Stalled Deal Recovery', value: '+28%', comparison: 'Proposals saved from going cold' },
      { label: 'Rep Admin Time Saved', value: '~8 hrs/rep/wk', comparison: 'Redirected to high-value closing calls' },
    ],
    flowSteps: [
      'Account executive sends proposal to qualified prospect',
      'System monitors prospect email opens and proposal link views',
      'If no reply after 72 hours, system analyzes conversation notes and drafts check-in',
      'Sales rep receives interactive Slack card with the custom draft and 1-click [Send] button',
      'Upon rep approval, email dispatches from rep’s direct Gmail/Outlook account',
      'CRM logs activity and automatically updates deal health stage',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'CRM Deal Pipeline Webhook',
        rawPayload: {
          dealName: 'Acme Corp — Automation Audit',
          dealValue: '$7,500',
          daysInProposal: '4 days',
          lastContact: 'Proposal sent Thursday; opened twice; no reply',
        },
      },
      aiAnalysis: {
        confidence: '94%',
        classification: 'Stalled Proposal — Requires Contextual Check-In',
        reasoning: 'High intent prospect opened proposal twice. Recommended friendly milestone check-in.',
      },
      crmAction: {
        actionType: 'Generate Follow-Up Draft & Task',
        destination: 'HubSpot CRM + Slack Integration',
        recordState: 'Deal Stage: Proposal Review · Stagnant Alert Flagged',
      },
      notificationOut: {
        channel: 'Slack Rep Notification',
        message: 'Deal Alert: Acme Corp proposal has been inactive for 4 days. Drafted follow-up: "Hi Mark, following up on our workflow review last week. Did you have any questions on the third-party API scope? Let me know if you want to hop on a quick 10-min sync." [Approve & Send] [Edit]',
      },
    },
  },
  {
    id: 'enrollsmart-admissions-pipeline',
    title: 'School Admission Enquiry & Tour Scheduling Engine',
    clientType: 'Private K-12 Academy & Higher Ed',
    category: 'Scheduling & Booking',
    isPrototype: true,
    tagline: 'Instant prospect qualification, customized prospectus delivery, and campus tour coordinator sync.',
    clientContext:
      'A private academy received over 450 admission inquiries during enrollment season across web forms, ads, and WhatsApp.',
    problem:
      'The admissions office took 48+ hours to respond to inquiries, resulting in lost enrollments to competing schools and disorganized campus tour bookings.',
    solutionOverview:
      'Built an end-to-end enrollment pipeline. Parents submitting inquiries receive immediate grade-specific digital prospectuses and an interactive link to select campus tour slots. Admissions officers receive automated daily briefing digests.',
    architecture:
      'Multi-channel Ingestion (Web/WhatsApp) → n8n Pipeline → Airtable Admissions Database → Google Calendar Tour Booking → Automated Prospectus Mailer',
    architectureNodes: [
      { label: 'Parent Inbound Inquiry', type: 'trigger', detail: 'Parent submits student grade, year of entry, and contact details' },
      { label: 'Grade & Curriculum Matcher', type: 'ai', detail: 'Filters grade availability and selects appropriate digital prospectus' },
      { label: 'Admissions CRM Ingestion', type: 'database', detail: 'Creates prospective student file with priority score' },
      { label: 'Campus Tour Calendar Lock', type: 'action', detail: 'Offers self-serve tour slots with admissions coordinators' },
      { label: 'WhatsApp & Email Delivery', type: 'output', detail: 'Sends prospectus PDF + booking confirmation + campus parking pass' },
    ],
    tools: ['n8n', 'WhatsApp API', 'Airtable', 'Google Workspace'],
    coreFeaturesExplained: [
      {
        featureTitle: 'Instant Grade-Specific Prospectus Dispatch',
        explanation: 'Sends customized digital brochures matching the child’s exact age and grade within 60 seconds.',
        technicalImplementation: 'Dynamic file router mapping form grade parameters to cloud storage PDF links.',
      },
      {
        featureTitle: 'Self-Serve Campus Tour Booking',
        explanation: 'Parents pick a convenient tour date without back-and-forth phone calls with the front desk.',
        technicalImplementation: 'Calendar booking router synchronized with admissions officer availability.',
      },
      {
        featureTitle: 'Automated 24h & 2h Visitor Pass Reminders',
        explanation: 'Sends WhatsApp reminder with digital campus security pass, parking directions, and coordinator name.',
        technicalImplementation: 'Meta Cloud API template messaging with dynamic map links and visitor QR codes.',
      },
      {
        featureTitle: 'Admissions Officer Daily Digest',
        explanation: 'Sends admissions staff a consolidated morning briefing on Slack with student profiles and parent notes.',
        technicalImplementation: 'Scheduled cron querying confirmed tours for the day and generating briefing summaries.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Admissions Inquiries',
        speed: '48+ hours response time during enrollment peaks',
        friction: 'Hundreds of unorganized emails; manual brochure mailing; phone tag for campus tours',
        humanLabor: '16+ hours/week spent on manual brochure emailing and calendar coordination',
        dropoff: '30% of prospective families toured other schools due to delayed responses',
      },
      after: {
        processTitle: 'Reacher Admissions Engine',
        speed: 'Instant prospectus in < 60 seconds',
        benefit: 'Personalized grade prospectus, self-serve tour booking, and automated visitor pass',
        automationLevel: '90% of admission triage and tour scheduling automated',
        reliability: 'Zero lost inquiries; 96% tour attendance rate with automated WhatsApp reminders',
      },
    },
    metrics: [
      { label: 'Prospectus Response Speed', value: '< 60 Seconds', comparison: 'Down from 48 hours' },
      { label: 'Tour Booking Conversion', value: '+45%', comparison: 'More parent inquiries converted to tours' },
      { label: 'Admissions Team Hours Saved', value: '~16 hrs/wk', comparison: 'Redirected to parent counseling' },
    ],
    flowSteps: [
      'Parent submits inquiry for upcoming academic year with child’s age and grade',
      'System sends personalized digital prospectus via email & WhatsApp in under 60 seconds',
      'Parent selects available campus tour time slot with admissions coordinator',
      'Calendar invite issued to admissions coordinator and parent with campus map',
      '24-hour reminder dispatched with parking directions and gate pass',
      'Post-tour follow-up triggered with enrollment application link',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'Admissions Landing Page',
        rawPayload: {
          parentName: 'Jennifer & Robert Vance',
          studentName: 'Lucas Vance (Grade 6)',
          academicYear: '2027/2028',
          inquiryTopic: 'Curriculum, STEM Lab Facilities, Campus Tour Availability',
        },
      },
      aiAnalysis: {
        confidence: '99%',
        classification: 'Middle School Admission — High Priority Prospect',
        reasoning: 'Grade 6 entry requested. Matched Middle School brochure and STEM program prospectus.',
      },
      crmAction: {
        actionType: 'Create Student File & Tour Booking Slot',
        destination: 'Airtable Admissions Database',
        recordState: 'Status: Prospectus Sent · Campus Tour Offered',
      },
      notificationOut: {
        channel: 'WhatsApp & Email Dispatch',
        message: 'Dear Jennifer, thank you for your interest in our Middle School STEM program for Lucas. Here is the Grade 6 prospectus: reacher.co/brochure/grade6-stem. Tap here to select a campus tour date: reacher.co/tour/vance-family',
      },
    },
  },
  {
    id: 'luxestudio-whatsapp-booking',
    title: 'Salon & Wellness WhatsApp Conversational Booking Pipeline',
    clientType: 'Luxury Salon & Wellness Center',
    category: 'Scheduling & Booking',
    isPrototype: true,
    tagline: '24/7 conversational WhatsApp booking, station capacity routing, and post-service Google review collection.',
    clientContext:
      'A high-end wellness studio lost ~30 appointment bookings per week when staff were in treatments and unable to answer phone calls. High last-minute cancellation rate.',
    problem:
      'Unanswered phone calls during peak styling hours led clients to book competitors. Last-minute cancellations created costly empty chair hours.',
    solutionOverview:
      'Implemented a 24/7 WhatsApp booking assistant connected to the salon booking engine. Clients can check stylist availability, lock appointments, pay deposits, and reschedule seamlessly without human front-desk intervention.',
    architecture:
      'WhatsApp Inbound Message → Make Scenario Router → Stylist Calendar Engine → Stripe Deposit Link → Automated Review Sequencer',
    architectureNodes: [
      { label: 'Customer WhatsApp Message', type: 'trigger', detail: 'Captures service desired, preferred stylist, and timing' },
      { label: 'Stylist & Station Availability Check', type: 'action', detail: 'Verifies real-time calendar and station equipment slots' },
      { label: 'Deposit Collection Link', type: 'action', detail: 'Generates secure Stripe link to prevent cancellations' },
      { label: 'Booking Locked in Calendar', type: 'database', detail: 'Confirms booking and updates staff schedule' },
      { label: 'Post-Treatment Review Sequence', type: 'output', detail: 'Dispatches Google review request 2 hours after treatment' },
    ],
    tools: ['WhatsApp Business API', 'Make', 'Google Calendar', 'Stripe'],
    coreFeaturesExplained: [
      {
        featureTitle: '24/7 Conversational WhatsApp Booking',
        explanation: 'Clients can message at 11 PM or early morning to book services without waiting for salon opening hours.',
        technicalImplementation: 'Meta Cloud API webhook with conversational intent matching and appointment slot suggestions.',
      },
      {
        featureTitle: 'Stylist & Chair Coordination',
        explanation: 'Ensures the requested specialist and specific treatment room/chair are both available simultaneously.',
        technicalImplementation: 'Multi-resource calendar availability lookup preventing station scheduling conflicts.',
      },
      {
        featureTitle: 'Automated Deposit Payment Integration',
        explanation: 'Secures bookings with a dynamic Stripe deposit link, eliminating unpaid no-shows.',
        technicalImplementation: 'Stripe Checkout webhook confirming deposit payment before locking the calendar slot.',
      },
      {
        featureTitle: 'Automated Post-Treatment Review Engine',
        explanation: 'Sends a polite Google review link 2 hours after the service, boosting local search visibility.',
        technicalImplementation: 'Delayed trigger verifying appointment completion and sending review invitation.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Phone-Based Booking',
        speed: 'Unanswered calls during client treatments',
        friction: 'Clients call while stylists are busy; 30+ lost appointments every week; high cancellations',
        humanLabor: '12+ hours/week spent on phone tag and answering basic pricing inquiries',
        dropoff: '25% booking loss during busy salon hours and closed evening times',
      },
      after: {
        processTitle: 'Reacher WhatsApp Salon Pipeline',
        speed: 'Instant 24/7 self-serve booking in < 90 seconds',
        benefit: 'Clients book anytime via WhatsApp; automated deposit eliminates empty chair no-shows',
        automationLevel: '80% of routine appointment bookings handled autonomously',
        reliability: 'No-show rates drop by 80%; 4.9-star Google review volume doubles',
      },
    },
    metrics: [
      { label: 'Booking Recovery', value: '+35 Bookings/Mo', comparison: 'Captured during off-hours' },
      { label: 'No-Show Reduction', value: '-80%', comparison: 'Via automated deposit collection' },
      { label: 'Review Collection', value: '3x More Reviews', comparison: 'Automated post-treatment triggers' },
    ],
    flowSteps: [
      'Client messages WhatsApp: "Hi, do you have any balayage openings this Saturday with Maria?"',
      'System checks Maria’s calendar and styling station availability in real time',
      'System replies with 2 open slots and service pricing in 15 seconds',
      'Client selects preferred slot and pays secure 20% deposit via dynamic link',
      'Appointment locked in salon management calendar; confirmation WhatsApp issued',
      '2 hours after service completes, automated review message invites client to rate experience',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'WhatsApp Business API',
        rawPayload: {
          clientName: 'Chloe Bennett',
          incomingText: 'Hey! Looking to book a signature facial and massage this Friday after 4 PM.',
          phone: '+1 (555) 234-8901',
        },
      },
      aiAnalysis: {
        confidence: '97%',
        classification: 'Service Booking Intent — Spa & Facial',
        reasoning: 'Extracted service pair (facial + massage), requested Friday > 4 PM. Checked room availability.',
      },
      crmAction: {
        actionType: 'Check Treatment Room & Therapist Availability',
        destination: 'Salon Booking Database',
        recordState: 'Open Slot: Friday 4:30 PM (Therapist: Elena · Treatment Suite 3)',
      },
      notificationOut: {
        channel: 'WhatsApp Reply',
        message: 'Hello Chloe! Elena has a 90-minute Signature Facial & Massage opening this Friday at 4:30 PM. Tap here to confirm and reserve: reacher.co/book/luxe-friday-430',
      },
    },
  },
  {
    id: 'docuextract-ai-invoice-pipeline',
    title: 'Automated Vendor Invoice & PO Extraction Engine',
    clientType: 'E-Commerce & Multi-Vendor Distribution',
    category: 'Document AI',
    isPrototype: true,
    tagline: 'Multi-step document parsing converting PDF invoices into structured ERP records with validation gates.',
    clientContext:
      'A distribution company received 200+ vendor PDF invoices per month from diverse suppliers with inconsistent invoice formats.',
    problem:
      'Accounting staff manually typed invoice numbers, line items, tax IDs, and totals into spreadsheets and accounting software. Took 28 hours per month with frequent data entry errors.',
    solutionOverview:
      'Engineered an automated document pipeline. Invoices arriving via email are parsed by an extraction engine, converted to validated JSON, verified against vendor master tables, and pushed as draft bills into accounting software with 1-click human approval.',
    architecture:
      'Email PDF Attachment → n8n Intake → OpenAI Vision Structured Parser → Math & Tax Validation Engine → QuickBooks / Xero Draft Bill',
    architectureNodes: [
      { label: 'Incoming Invoice Email', type: 'trigger', detail: 'Monitors invoices@ inbox and extracts attached PDF documents' },
      { label: 'AI Structured Vision Parser', type: 'ai', detail: 'Extracts line items, tax ID, PO number, and line item totals into JSON' },
      { label: 'Schema & Math Validation Gate', type: 'action', detail: 'Calculates line items sum vs invoice total to ensure 100% accuracy' },
      { label: 'Vendor Master Lookup', type: 'database', detail: 'Matches vendor name to accounting ledger vendor ID' },
      { label: 'Accounting ERP Draft Bill', type: 'output', detail: 'Creates draft bill in QuickBooks with PDF link and Slack notification' },
    ],
    tools: ['n8n', 'OpenAI', 'PostgreSQL', 'Google Cloud', 'QuickBooks/Xero'],
    coreFeaturesExplained: [
      {
        featureTitle: 'Zero-Template Multi-Format PDF Extraction',
        explanation: 'Works across any invoice design or layout without needing custom brittle rules for each vendor.',
        technicalImplementation: 'Multi-modal Vision LLM with strict JSON Schema output enforcement.',
      },
      {
        featureTitle: 'Automatic Line-Item Math Verification',
        explanation: 'Verifies that item quantities multiplied by unit prices equal the subtotal and tax amounts.',
        technicalImplementation: 'Deterministic validation script flagging discrepancies before database ingestion.',
      },
      {
        featureTitle: 'Vendor Master Reconciliation',
        explanation: 'Fuzzy-matches vendor names to your existing accounting chart of accounts.',
        technicalImplementation: 'Levenshtein distance matching against database vendor tables with confidence scoring.',
      },
      {
        featureTitle: 'Human-in-the-Loop Accounting Approval',
        explanation: 'Bills are created as drafts; accounting officers review and approve with 1 click in Slack or ERP.',
        technicalImplementation: 'Slack Block Kit interactive card displaying line items and [Approve Draft Bill] button.',
      },
    ],
    beforeAfter: {
      before: {
        processTitle: 'Manual Invoice Typing & Verification',
        speed: '3–5 days to process and enter vendor invoices',
        friction: 'Manual copy-paste into spreadsheets; typos in tax IDs and totals; lost email attachments',
        humanLabor: '28 hours/month spent by finance staff on manual data entry',
        dropoff: 'Delayed vendor payments, occasional duplicate invoice payments, stressful audits',
      },
      after: {
        processTitle: 'Reacher Document Extraction Pipeline',
        speed: 'Sub-10 seconds automated extraction & ledger posting',
        benefit: 'PDF parsed into validated JSON; math verified; draft bill created in accounting software',
        automationLevel: '95% reduction in manual document entry time',
        reliability: '100% mathematical accuracy; zero duplicate payments via hash deduplication',
      },
    },
    metrics: [
      { label: 'Processing Speed', value: '< 10 Seconds', comparison: 'Down from 15 minutes per invoice' },
      { label: 'Data Accuracy Rate', value: '99.8%', comparison: 'Automated math & tax cross-checking' },
      { label: 'Monthly Finance Time Saved', value: '~28 hrs/mo', comparison: 'Redirected to financial strategy' },
    ],
    flowSteps: [
      'Vendor sends PDF invoice to accounting email inbox',
      'Extraction workflow parses document and extracts line items, quantities, and totals into JSON',
      'Validation script checks that line totals sum exactly to invoice subtotal and tax',
      'Vendor name matched against accounting chart of accounts',
      'Draft bill generated in QuickBooks / Xero with original PDF attached',
      'Slack notification alerts finance officer: "Draft bill #INV-8891 ready for 1-click review"',
    ],
    demoInteractiveData: {
      sampleInput: {
        source: 'Email Attachment (invoices@company.com)',
        rawPayload: {
          filename: 'Vendor_Invoice_88910.pdf',
          sender: 'Apex Logistics Corp',
          receivedDate: 'Today 09:15 AM',
          extractedAmount: '$4,280.00',
        },
      },
      aiAnalysis: {
        confidence: '99.8%',
        classification: 'Valid Vendor Invoice — Matched Vendor #V-402',
        reasoning: 'Extracted 4 line items. Calculated subtotal $4,000 + 7% tax ($280) = $4,280.00. Math verified.',
      },
      crmAction: {
        actionType: 'Create Draft Bill & Match PO',
        destination: 'Accounting ERP (QuickBooks / Xero)',
        recordState: 'Status: Draft Bill Created · Ready for Approval · PO #PO-1042 Linked',
      },
      notificationOut: {
        channel: 'Finance Slack Alert',
        message: 'Invoice Processed: Apex Logistics ($4,280.00) parsed in 4.2s. Math verified. Draft bill #88910 created in ERP. [View Draft Bill] [Approve Payment]',
      },
    },
  },
];

export const SYSTEM_STEPS = [
  {
    number: '01',
    name: 'Capture',
    title: 'Capture Information',
    desc: 'Collect incoming information from websites, forms, messaging platforms, emails, and connected sources in real time.',
    badge: 'Inbound Ingestion',
  },
  {
    number: '02',
    name: 'Understand',
    title: 'Understand & Classify',
    desc: 'Use defined business rules and secure AI models to classify information, extract relevant parameters, and determine the next action.',
    badge: 'AI Intelligence',
  },
  {
    number: '03',
    name: 'Connect',
    title: 'Connect Systems',
    desc: 'Sync information to the appropriate CRM, calendar, database, communication tool, or internal operations system.',
    badge: 'System Sync',
  },
  {
    number: '04',
    name: 'Execute',
    title: 'Execute Workflow',
    desc: 'Trigger the appropriate workflow: send a tailored message, schedule an appointment, create tasks, or notify a team member.',
    badge: 'Action Trigger',
  },
  {
    number: '05',
    name: 'Measure',
    title: 'Measure & Monitor',
    desc: 'Track workflow execution health, completion rates, error handling, and measurable business outcomes in real-time logs.',
    badge: 'Observability',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'education',
    name: 'Schools & Education',
    subtitle: 'Streamline admissions and parent communication',
    description:
      'Educational institutions receive hundreds of parent inquiries during peak enrollment. We automate inquiry logging, qualification, prospectus delivery, and counseling appointment scheduling.',
    challenges: [
      'High volume of seasonal admission inquiries',
      'Repetitive questions regarding fee structures and curriculum',
      'Manual scheduling of campus tours and counseling calls',
    ],
    solutions: [
      'Admission enquiry management & tracking',
      'AI-guided prospect qualification & grade matching',
      'Parent enquiry routing to admissions counselors',
      'Automated tour and interview scheduling',
      'Multi-channel follow-up reminders for required documents',
    ],
    workflowExample: {
      input: 'Parent submits admission inquiry form on website',
      aiProcessing: 'AI parses student grade, board preference, and schedules tour slot',
      destination: 'Synced to Admissions CRM + Parent receives WhatsApp prospectus',
      outcome: 'Tour booked with admissions coordinator within 90 seconds',
    },
  },
  {
    id: 'healthcare',
    name: 'Clinics & Healthcare Businesses',
    subtitle: 'Administrative and appointment automation for practices',
    description:
      'Clinics spend countless hours managing patient bookings and routine inquiries. We build compliant administrative workflows that handle appointment requests and reminders—without replacing clinical judgment.',
    challenges: [
      'High patient no-show rates for specialized consultations',
      'Front desk overwhelmed with clinic hours and prep instructions',
      'Manual phone tag for appointment confirmation and rescheduling',
    ],
    solutions: [
      'Administrative appointment enquiry handling',
      'Automated booking and calendar slot coordination',
      'Multi-step SMS/WhatsApp appointment reminders',
      'General practice FAQ routing and clinic directions',
      'Strict clinical separation: zero automated medical diagnosis',
    ],
    workflowExample: {
      input: 'Patient requests dermatology consultation online',
      aiProcessing: 'Verifies doctor availability, clinic location, and consultation fee',
      destination: 'Schedules slot in practice calendar + Sends prep guidelines',
      outcome: 'Confirmed booking with automated 24-hour reminder sequence',
    },
  },
  {
    id: 'beauty-wellness',
    name: 'Salons & Beauty Businesses',
    subtitle: 'Maximize chair occupancy and client retention',
    description:
      'Beauty studios and wellness centers lose revenue when phone calls go unanswered during treatments. Our systems capture inquiries 24/7, confirm slots, and re-engage lapsed clients.',
    challenges: [
      'Unanswered calls while stylists and therapists are serving clients',
      'Last-minute cancellations leaving empty booking slots',
      'Inconsistent client re-booking after 4–6 weeks',
    ],
    solutions: [
      '24/7 appointment booking and deposit collection links',
      'Missed-call text-back and instant inquiry capture',
      'Automated re-engagement sequences for regular treatments',
      'Review request workflows following completed appointments',
      'Client preference notes synced to booking database',
    ],
    workflowExample: {
      input: 'Client messages Instagram/WhatsApp at 10 PM for hair styling',
      aiProcessing: 'Checks stylist calendar, offers next 2 available slots',
      destination: 'Locks booking slot + Issues confirmation with cancellation policy',
      outcome: 'Zero missed booking while salon is closed',
    },
  },
  {
    id: 'growing-businesses',
    name: 'Small & Growing Businesses',
    subtitle: 'Scale operations without expanding overhead',
    description:
      'Growing businesses often experience growing pains when repetitive manual tasks pull founders and key team members away from revenue-generating strategy.',
    challenges: [
      'Founder and key staff overwhelmed by operational admin',
      'Leads slipping through disconnected inboxes and spreadsheets',
      'Inconsistent onboarding and invoice tracking workflows',
    ],
    solutions: [
      'Unified multi-channel lead capture and routing',
      'Sales pipeline automation across CRM and communication tools',
      'Knowledge-base grounded customer support assistants',
      'Automated invoice reminders and document extraction',
      'Weekly automated business KPI digests via Slack/Email',
    ],
    workflowExample: {
      input: 'New enterprise client requests pricing proposal',
      aiProcessing: 'Extracts company size, creates deal card, schedules discovery call',
      destination: 'Notifies founder on Slack with synthesized briefing sheet',
      outcome: 'Founder enters discovery call prepared within 2 hours of contact',
    },
  },
];

export const TECH_STACK: TechTool[] = [
  {
    name: 'n8n',
    category: 'Orchestration',
    description: 'Self-hosted and cloud workflow orchestration with enterprise data privacy.',
    role: 'Primary Automation Engine',
  },
  {
    name: 'Make',
    category: 'Orchestration',
    description: 'Visual integration platform for multi-app business logic execution.',
    role: 'Workflow Connector',
  },
  {
    name: 'Zapier',
    category: 'Orchestration',
    description: 'Rapid connection between thousands of legacy business applications.',
    role: 'App Integrations',
  },
  {
    name: 'OpenAI',
    category: 'AI & LLMs',
    description: 'Industry-standard language models for classification, reasoning, and synthesis.',
    role: 'Cognitive Engine',
  },
  {
    name: 'HubSpot',
    category: 'CRM & Sales',
    description: 'Full-funnel CRM for customer record synchronization and deal pipelines.',
    role: 'CRM Platform',
  },
  {
    name: 'GoHighLevel',
    category: 'CRM & Sales',
    description: 'All-in-one sales, marketing, and client pipeline management platform.',
    role: 'Agency CRM',
  },
  {
    name: 'Google Workspace',
    category: 'Communication',
    description: 'Calendar, Gmail, Sheets, and Drive integration for seamless team ops.',
    role: 'Workspace Sync',
  },
  {
    name: 'Airtable',
    category: 'Database & Storage',
    description: 'Relational database and visual interface for structured business data.',
    role: 'Structured Database',
  },
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Real-time internal team notifications, approvals, and alert routing.',
    role: 'Team Notifications',
  },
  {
    name: 'WhatsApp Business API',
    category: 'Communication',
    description: 'Official verified enterprise messaging for customer communications.',
    role: 'Official Messaging',
  },
  {
    name: 'Calendly',
    category: 'Communication',
    description: 'Automated appointment scheduling engine with calendar sync.',
    role: 'Calendar Engine',
  },
  {
    name: 'PostgreSQL',
    category: 'Database & Storage',
    description: 'High-performance relational database for secure state storage and logs.',
    role: 'Relational Store',
  },
];

export const WHY_US_POINTS = [
  {
    title: 'Business-First Thinking',
    description:
      'We begin with your operational challenges and identify where automation can create practical value, rather than forcing technology for its own sake.',
  },
  {
    title: 'Built Around Your Workflow',
    description:
      'We design systems around your established processes rather than forcing your business into a rigid, foreign software template.',
  },
  {
    title: 'Connected Systems',
    description:
      'We connect relevant tools so information moves reliably between the CRM, calendars, and messaging platforms your team already uses.',
  },
  {
    title: 'Measurable Outcomes',
    description:
      'We define clear success metrics: response time reduction, administrative hours saved, workflow completion rate, and verified qualified leads.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    summary: 'We understand your business, existing tools, repetitive tasks, and operational bottlenecks.',
    details: [
      'Comprehensive 45-minute audit of current tool stack and daily operational friction',
      'Identification of manual copy-paste loops, lead drop-offs, and delayed responses',
      'Clear definition of measurable goals (time saved, lead response speed)',
    ],
    deliverable: 'Operational Audit & Opportunity Blueprint',
  },
  {
    number: '02',
    title: 'Workflow Mapping',
    summary: 'We document the process, identify automation opportunities, and define the required integrations.',
    details: [
      'Step-by-step visual mapping of data flow from lead entry to deal close',
      'Selection of API endpoints, security authentication, and integration rules',
      'Definition of human approval checkpoints and fallback routes',
    ],
    deliverable: 'Architecture Diagram & Specification Doc',
  },
  {
    number: '03',
    title: 'Design & Build',
    summary: 'We build the automation workflow, configure integrations, and establish appropriate safeguards.',
    details: [
      'Orchestration build on n8n or Make with custom prompt engineering',
      'Configuration of webhook listeners, CRM field mappings, and alert systems',
      'Implementation of rate limiting, error handling, and security boundaries',
    ],
    deliverable: 'Configured & Encrypted Automation Workflows',
  },
  {
    number: '04',
    title: 'Testing & Launch',
    summary: 'We test expected scenarios, edge cases, failures, and human handoff before deployment.',
    details: [
      'Stress testing with realistic sample payloads and malformed inputs',
      'Validation of notification fallbacks and human handoff mechanisms',
      'Supervised soft-launch alongside your team with real-time logging',
    ],
    deliverable: 'Test Reports & Staging Validation Sign-off',
  },
  {
    number: '05',
    title: 'Optimisation',
    summary: 'We monitor performance, improve reliability, and refine the workflow based on real usage.',
    details: [
      'Continuous observability for failed webhooks or API status changes',
      'Prompt refinement based on real edge cases and conversation logs',
      'Quarterly review to add new capabilities as your business expands',
    ],
    deliverable: 'Operational Health Dashboard & Support Plan',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Workflow Starter',
    badge: 'Single Process',
    description: 'For businesses automating their first repetitive operational process.',
    price: 'Custom Quote',
    priceSub: 'Based on scoped workflow',
    cta: 'Discuss a Starter Project',
    featured: false,
    inclusions: [
      'Comprehensive workflow discovery & scope audit',
      'One clearly scoped, multi-step automation',
      'Integration between up to 3 core business tools',
      'Error handling, retry logic & alert triggers',
      'Thorough testing, video handover & documentation',
      '14-day post-launch hypercare & bug resolution',
    ],
  },
  {
    name: 'Business Automation',
    badge: 'Most Popular',
    description: 'For businesses connecting multiple tools, leads, and operational processes.',
    price: 'Custom Quote',
    priceSub: 'Tailored to multi-system scope',
    cta: 'Discuss My Requirements',
    featured: true,
    inclusions: [
      'Full operational workflow mapping & architecture',
      'Multiple connected automation flows (Lead → CRM → Booking)',
      'Advanced CRM & communication integrations (WhatsApp/Email)',
      'Custom AI prompt engineering & knowledge base grounding',
      'Robust fallback routing & human handoff protocols',
      'Comprehensive documentation, team training & handover',
      '30-day post-launch optimization & monitoring',
    ],
  },
  {
    name: 'Custom AI Systems',
    badge: 'Advanced Systems',
    description: 'For businesses needing bespoke AI workflows, proprietary logic, and continuous scaling.',
    price: "Let's Scope Your Project",
    priceSub: 'Engineered around your exact architecture',
    cta: 'Plan a Custom System',
    featured: false,
    inclusions: [
      'Bespoke workflow architecture & data pipeline design',
      'Advanced multi-step AI reasoning & document processing',
      'Custom API webhooks, proprietary database integrations',
      'Enterprise security boundaries & fail-safe mechanisms',
      'Ongoing monitoring, prompt tuning & reliability support',
      'Dedicated integration architect & SLA options',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What does Reacher Automation do?',
    answer:
      'Reacher Automation designs AI-powered workflows that connect business tools and automate repetitive tasks such as lead qualification, customer communication, appointment scheduling, CRM updates, and operational processes.',
    category: 'General',
  },
  {
    question: 'Do I need technical knowledge to use your systems?',
    answer:
      'No. We design workflows around your team’s needs and provide the documentation and handover required to use them. Your team interacts with familiar interfaces like email, your CRM, or Slack without touching complex code.',
    category: 'Implementation',
  },
  {
    question: 'Can you integrate with my existing tools?',
    answer:
      'We can assess your existing tools and connect compatible platforms through supported APIs, native integrations, or other appropriate integration methods. We build around your current stack rather than forcing you to replace everything.',
    category: 'Technology',
  },
  {
    question: 'Can AI completely run my business?',
    answer:
      'No automation system should be treated as universally autonomous. We identify which tasks can be automated safely and where human review, approval, or intervention remains necessary. Human oversight remains a core principle of reliable systems.',
    category: 'Philosophy',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Timelines depend on workflow complexity, integrations, data quality, and testing requirements. A single Starter Workflow is typically deployed and tested within 1–2 weeks, while multi-system Business Automation projects generally take 3–5 weeks. We establish a realistic scope and timeline during discovery.',
    category: 'Implementation',
  },
  {
    question: 'How much does automation cost?',
    answer:
      'Pricing depends on the number of workflows, integrations, technical complexity, and ongoing support requirements. We provide a transparent, project-specific quote after understanding your exact needs during our discovery consultation.',
    category: 'Pricing',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. Support and optimisation can be included in an engagement depending on the agreed scope, covering workflow monitoring, API updates, prompt tuning, and system expansions as your business grows.',
    category: 'Support',
  },
  {
    question: 'How do we get started?',
    answer:
      'Book a discovery call or submit the contact form. We’ll discuss your current process, identify potential automation opportunities, evaluate feasibility, and determine the clear next steps.',
    category: 'General',
  },
];

export const CASE_STUDIES = PORTFOLIO_PROJECTS;
