'use client';

import React, { useState } from 'react';
import { SYSTEM_STEPS } from '@/lib/constants';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Filter, Link2, Play, BarChart3 } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function SystemWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const { openBookingModal } = useBookingModal();

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Filter className="w-5 h-5 text-[#647C68]" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-[#647C68]" />;
      case 2:
        return <Link2 className="w-5 h-5 text-[#647C68]" />;
      case 3:
        return <Play className="w-5 h-5 text-[#647C68]" />;
      case 4:
        return <BarChart3 className="w-5 h-5 text-[#647C68]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#647C68]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            The System
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            From First Contact to Completed Workflow.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Our systems orchestrate information reliably through five continuous stages, ensuring no lead or inquiry falls through the cracks.
          </p>
        </div>

        {/* 5-Step Connected Workflow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {SYSTEM_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#647C68] shadow-md ring-1 ring-[#647C68]/30 -translate-y-1'
                    : 'bg-[#FFFFFF]/80 border-[#E8E8E5] hover:border-[#647C68]/30 hover:bg-[#FFFFFF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#647C68] px-2 py-0.5 rounded bg-[#EEF2EC]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-[#171717] mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E8E5]/70 flex items-center justify-between text-[11px] font-mono text-[#737373]">
                  <span>{step.badge}</span>
                  {isSelected && <span className="text-[#647C68] font-bold">Active</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Note & Action */}
        <div className="mt-12 p-6 bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] text-[#647C68] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#647C68]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#171717]">
                AI handles the appropriate tasks. Your team stays in control of important decisions.
              </p>
              <p className="text-xs text-[#737373]">
                Safeguards, validation rules, and explicit human approval steps are configured on all critical business workflows.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBookingModal('End-to-End System Build')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
          >
            <span>Build My Automation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
