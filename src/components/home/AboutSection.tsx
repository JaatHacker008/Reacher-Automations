'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Compass, Anchor, BarChart } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function AboutSection() {
  const { openBookingModal } = useBookingModal();

  const principles = [
    {
      num: '01',
      title: 'Understand the process before automating it.',
      desc: 'We never automate a broken or undocumented process. We first streamline the flow, clarify decision points, and then layer code.',
      icon: <Compass className="w-5 h-5 text-[#647C68]" />,
    },
    {
      num: '02',
      title: 'Prioritise reliability over unnecessary complexity.',
      desc: 'The best automation is boringly reliable. We favor robust webhooks, resilient error queues, and human fallback triggers over fragile agent loops.',
      icon: <Anchor className="w-5 h-5 text-[#647C68]" />,
    },
    {
      num: '03',
      title: 'Measure outcomes instead of making unsupported promises.',
      desc: 'We define quantifiable metrics—minutes saved, response speed, execution success—and verify them against active telemetry.',
      icon: <BarChart className="w-5 h-5 text-[#647C68]" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Philosophy & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider">
              About Reacher Automation
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] leading-tight">
              Technology Should Make Work Simpler.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#737373] leading-relaxed">
              <p>
                Reacher Automation helps businesses identify repetitive processes, connect their existing tools, and implement practical AI-powered systems.
              </p>
              <p>
                Our approach starts with understanding how your business operates. We then design, build, and test workflows that reduce unnecessary manual work while keeping people involved where their judgement matters.
              </p>
              <p className="font-medium text-[#171717]">
                We believe useful automation is not about adding AI everywhere. It is about creating reliable systems that solve clearly defined business problems.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#647C68] hover:text-[#526756] underline"
              >
                <span>Read Our Full Architecture Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Principles */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
              Three Non-Negotiable Engineering Principles:
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
      </div>
    </section>
  );
}
