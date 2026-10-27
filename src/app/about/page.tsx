'use client';

import React from 'react';
import { BRAND } from '@/lib/constants';
import { useBookingModal } from '@/context/BookingModalContext';
import { ShieldCheck, Compass, Anchor, BarChart, ArrowRight, ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { openBookingModal } = useBookingModal();

  const principles = [
    {
      num: '01',
      title: 'Understand the process before automating it.',
      desc: 'We never automate a broken or undocumented process. We begin with operational audit: mapping every touchpoint, identifying duplicate data entry, and eliminating friction before writing code.',
      icon: <Compass className="w-5 h-5 text-[#647C68]" />,
    },
    {
      num: '02',
      title: 'Prioritise reliability over unnecessary complexity.',
      desc: 'The best automation is boringly reliable. We favor robust webhook triggers, idempotency keys, and explicit human approval steps rather than unpredictable, complex agent loops.',
      icon: <Anchor className="w-5 h-5 text-[#647C68]" />,
    },
    {
      num: '03',
      title: 'Measure outcomes instead of making unsupported promises.',
      desc: 'We define quantifiable benchmarks upfront: reduction in lead response lag, administrative hours saved, and execution accuracy. We do not make false vanity guarantees.',
      icon: <BarChart className="w-5 h-5 text-[#647C68]" />,
    },
  ];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            About Reacher Automation
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] mb-6">
            Technology Should Make Work Simpler.
          </h1>
          <p className="text-lg text-[#737373] leading-relaxed">
            We are a dedicated automation engineering agency. We connect the tools growing businesses rely on every day to eliminate manual repetition and accelerate customer response times.
          </p>
        </div>
      </div>

      {/* Editorial Story Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#737373] leading-relaxed bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E8E8E5] shadow-xs">
            <h2 className="text-2xl font-semibold text-[#171717]">
              Our Mission & Philosophy
            </h2>

            <p>
              Reacher Automation was founded on a simple observation: modern businesses use dozens of capable software tools—CRMs, calendars, messaging platforms, web forms—yet their team members spend hours each day copying information between them.
            </p>

            <p>
              When leads reach out, they frequently wait hours for a reply. When deals enter a pipeline, follow-ups slip through spreadsheets. When appointments are scheduled, staff waste time confirming details manually.
            </p>

            <p className="font-semibold text-[#171717] p-4 bg-[#EEF2EC] rounded-xl border border-[#647C68]/20">
              Useful automation is not about adding AI everywhere. It is about creating reliable, connected systems that solve clearly defined business problems.
            </p>

            <p>
              Our approach starts with understanding how your business actually operates. We design, build, and test workflows that reduce unnecessary manual work while keeping your team involved where their judgment matters.
            </p>

            <div className="pt-4 border-t border-[#E8E8E5] flex items-center gap-3 text-xs text-[#737373]">
              <ShieldCheck className="w-4 h-4 text-[#647C68]" />
              <span>Strict data privacy · Zero public hallucinations · Resilient webhooks</span>
            </div>
          </div>

          {/* Right Column: Key Tenets */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
              Our Core Principles:
            </span>

            {principles.map((p) => (
              <div
                key={p.num}
                className="p-6 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 transition-all shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#647C68] bg-[#EEF2EC] px-2 py-0.5 rounded">
                    Principle {p.num}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#171717]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Banner */}
        <div className="bg-[#171917] text-[#F5F5F0] rounded-3xl p-10 sm:p-14 text-center space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-[#202420] text-[#647C68] text-xs font-mono font-semibold uppercase">
            Let&apos;s Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to Build a Smarter Operation?
          </h2>
          <p className="text-sm sm:text-base text-[#A0A09A] max-w-xl mx-auto">
            Book a 30-minute discovery consultation. We’ll discuss your current bottlenecks and explore whether custom automation is the right investment.
          </p>
          <button
            onClick={() => openBookingModal()}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-full transition-colors shadow-xs"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
