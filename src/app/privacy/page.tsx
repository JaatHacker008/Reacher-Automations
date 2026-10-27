import React from 'react';
import { BRAND } from '@/lib/constants';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Reacher Automation',
  description: 'How Reacher Automation collects, protects, and handles business information and client data.',
};

export default function PrivacyPage() {
  const lastUpdated = 'October 26, 2026';

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#E8E8E5]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Legal & Data Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#737373]">
            Last updated: {lastUpdated} · Effective immediately
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E8E8E5] space-y-8 text-sm text-[#737373] leading-relaxed shadow-xs">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">1. Introduction & Scope</h2>
            <p>
              Reacher Automation (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to handling client information and business inquiry data with integrity, confidentiality, and technical discipline. This Privacy Policy details our practices concerning data collection, transmission, storage, and retention when you visit our website (reacherautomation.com) or engage our automation consulting services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">2. Information We Collect</h2>
            <p>We only collect information directly necessary for operational scoping, communication, and system configuration:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-[#171717]">Contact Information:</strong> Full name, business email address, company name, website URL, and preferred contact method provided via forms or scheduling requests.</li>
              <li><strong className="text-[#171717]">Workflow & Operational Details:</strong> Descriptions of your current business tools, repetitive processes, estimated inquiry volume, and automation goals submitted for project scoping.</li>
              <li><strong className="text-[#171717]">Technical Telemetry:</strong> Standard HTTP request logs, browser type, and timestamps used solely for site reliability, security, and spam prevention. We do not use third-party behavioral advertising trackers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">3. How We Use Collected Data</h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Review your business workflows and conduct 30-minute discovery consultations.</li>
              <li>Draft technical workflow blueprints, architecture diagrams, and customized engagement quotes.</li>
              <li>Communicate regarding scheduled appointments, deliverables, and system handovers.</li>
              <li>Maintain audit records of system executions and client authorizations.</li>
            </ul>
            <p>We do not sell, rent, or trade your contact or business data to data brokers or advertising networks under any circumstances.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">4. Client Data & Third-Party Integrations</h2>
            <p>
              When engineering automation workflows for clients, we connect compatible third-party platforms (including but not limited to HubSpot, n8n, Make, OpenAI, Calendly, and Google Workspace) via official APIs.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Client credentials, API tokens, and database access are encrypted at rest and in transit.</li>
              <li>We configure AI models strictly to adhere to customer privacy settings, ensuring private company data is never used to train public foundation models without explicit authorization.</li>
              <li>Clients retain 100% ownership of their proprietary business data and customer records.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">5. Data Retention & Erasure</h2>
            <p>
              Inquiry submissions and scoping notes are retained for up to 12 months for active collaboration and audit purposes, after which unengaged records are securely deleted. Clients may request full erasure of their contact records at any time by contacting our team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">6. Contact & Data Protection Inquiries</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to request data verification or deletion, please reach out to our privacy coordinator at:
            </p>
            <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] font-mono text-xs text-[#171717]">
              Reacher Automation<br />
              Email: {BRAND.email}<br />
              Subject Line: Privacy & Data Request
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
