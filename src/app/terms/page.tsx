import React from 'react';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service | Reacher Automation',
  description: 'Standard operational terms, scope boundaries, deliverables, and service provisions for Reacher Automation engagements.',
};

export default function TermsPage() {
  const lastUpdated = 'October 26, 2026';

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#E8E8E5]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Service Terms & Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] mb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-[#737373]">
            Last updated: {lastUpdated} · Effective for all client engagements
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E8E8E5] space-y-8 text-sm text-[#737373] leading-relaxed shadow-xs">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">1. Engagement Overview</h2>
            <p>
              These Terms of Service govern all consulting, automation design, API integration, and ongoing support services provided by Reacher Automation (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) to business clients (&ldquo;Client&rdquo;). By scheduling a discovery session, approving a project proposal, or utilizing our services, you agree to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">2. Project Scoping & Deliverables</h2>
            <p>
              Each project begins with a discovery audit and a written Specification Document defining the exact workflows, third-party software integrations, and triggers to be implemented.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-[#171717]">Deliverables:</strong> Include configured automation scenarios (e.g. n8n / Make workflows), webhook listeners, custom prompt templates, testing logs, and video handover documentation.</li>
              <li><strong className="text-[#171717]">Scope Adjustments:</strong> Any integrations, data migrations, or new systems requested beyond the agreed Specification Document will be scoped and quoted separately.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">3. Third-Party Platforms & Service Fees</h2>
            <p>
              Automation workflows rely upon external platforms (including CRM software, messaging APIs like WhatsApp Business, OpenAI API usage, calendar systems, and hosting providers).
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The Client is solely responsible for maintaining active subscriptions and paying all direct platform usage fees (e.g. LLM token costs, WhatsApp message delivery charges, CRM licensing).</li>
              <li>Reacher Automation is an independent systems integrator and does not control third-party platform API uptime, policy changes, rate limits, or external server outages.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">4. Intellectual Property & Workflow Ownership</h2>
            <p>
              Upon receipt of final payment for a project:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-[#171717]">Client Ownership:</strong> The Client retains 100% ownership of their proprietary business data, customer records, and the custom automation configurations deployed in their accounts.</li>
              <li><strong className="text-[#171717]">Agency Pre-Existing IP:</strong> The Agency retains ownership of general proprietary libraries, standard reusable connectors, boilerplate orchestration patterns, and non-client-specific templates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">5. Warranties, Safeguards & Human-in-the-Loop</h2>
            <p>
              We engineer workflows with error-handling logic, rate-limiting protections, and human-in-the-loop fallback gates. However, no AI or automated software system should be treated as universally autonomous or error-free.
            </p>
            <p>
              The Client is responsible for exercising reasonable business judgment, reviewing escalated exceptions, and maintaining appropriate oversight of automated outbound communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">6. Ongoing Support & Hypercare</h2>
            <p>
              Standard projects include a post-launch hypercare period (14 to 30 days depending on the engagement tier) to resolve edge cases and monitor webhook reliability. Ongoing support, proactive observability, and workflow expansions are provided under dedicated retainer agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#171717]">7. Contact</h2>
            <p>
              For legal inquiries regarding terms and agreements, contact us at:
            </p>
            <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] font-mono text-xs text-[#171717]">
              Reacher Automation<br />
              Email: {BRAND.email}<br />
              Subject: Terms & Engagement Agreement
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
