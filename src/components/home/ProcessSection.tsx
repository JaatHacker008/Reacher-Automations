'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ProcessSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            A Clear Path From Idea to Automation.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            We follow a structured five-stage delivery cycle to ensure reliability, security, and measurable outcomes.
          </p>
        </div>

        {/* 5-Step Timeline Accordion */}
        <div className="space-y-4">
          {PROCESS_STEPS.map((step, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={step.number}
                className={`bg-[#FFFFFF] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-[#647C68] shadow-sm'
                    : 'border-[#E8E8E5] hover:border-[#647C68]/30'
                }`}
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="w-10 h-10 rounded-xl bg-[#EEF2EC] text-[#647C68] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#647C68]/20">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#171717]">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] mt-0.5">
                        {step.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:inline-block text-[11px] font-mono text-[#647C68] bg-[#EEF2EC] px-2.5 py-1 rounded-md">
                      Deliverable: {step.deliverable}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#FAFAF8] border border-[#E8E8E5] flex items-center justify-center text-[#737373] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#647C68]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E8E8E5]/80 bg-[#FAFAF8]/50 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-3">
                      <div className="md:col-span-8 space-y-2.5">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#171717] block">
                          Phase Deliverables & Scope:
                        </span>
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#737373]">
                            <CheckCircle2 className="w-4 h-4 text-[#647C68] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="md:col-span-4 p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E8E5] flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#737373] uppercase block mb-1">
                            Phase Deliverable
                          </span>
                          <span className="text-xs font-semibold text-[#171717]">
                            {step.deliverable}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#647C68] mt-3 font-medium">
                          ✓ Thorough review & sign-off
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openBookingModal('Implementation Project Kickoff')}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-full transition-colors shadow-xs"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
