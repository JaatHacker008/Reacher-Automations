'use client';

import React, { useState } from 'react';
import { INDUSTRIES } from '@/lib/constants';
import { GraduationCap, Stethoscope, Sparkles, TrendingUp, Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const { openBookingModal } = useBookingModal();

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#647C68]" />;
      case 'healthcare':
        return <Stethoscope className="w-5 h-5 text-[#647C68]" />;
      case 'beauty-wellness':
        return <Sparkles className="w-5 h-5 text-[#647C68]" />;
      case 'growing-businesses':
        return <TrendingUp className="w-5 h-5 text-[#647C68]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#647C68]" />;
    }
  };

  const active = INDUSTRIES[selectedIndustry];

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Who We Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Automation That Fits Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Every sector has distinct operational workflows. We engineer systems customized to your industry’s communication rules and tools.
          </p>
        </div>

        {/* 4 Industry Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {INDUSTRIES.map((industry, idx) => {
            const isSelected = selectedIndustry === idx;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#647C68] shadow-sm ring-1 ring-[#647C68]/20'
                    : 'bg-[#FFFFFF]/70 border-[#E8E8E5] text-[#737373] hover:text-[#171717] hover:bg-[#FFFFFF]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-[#EEF2EC]' : 'bg-[#E8E8E5]/50'
                  }`}
                >
                  {getIndustryIcon(industry.id)}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#171717]">
                    {industry.name}
                  </div>
                  <div className="text-[10px] text-[#737373] hidden sm:block">
                    {industry.subtitle.slice(0, 32)}...
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Industry Card & Live Simulation Preview */}
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Problem & Solutions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center">
                {getIndustryIcon(active.id)}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#647C68] tracking-wider font-semibold">
                  Tailored Sector Blueprint
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#171717]">
                  {active.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#737373] leading-relaxed">
              {active.description}
            </p>

            {/* Implemented Solutions List */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-3">
                Pre-Configured Automation Solutions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {active.solutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#171717]/80">
                    <div className="w-4 h-4 rounded-full bg-[#EEF2EC] text-[#647C68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`/solutions#${active.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-full transition-colors shadow-xs"
              >
                <span>Explore {active.name} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => openBookingModal(active.name)}
                className="text-xs font-medium text-[#737373] hover:text-[#171717] underline transition-colors"
              >
                Discuss Practice Setup
              </button>
            </div>
          </div>

          {/* Right: Operational Workflow Mockup Card */}
          <div className="lg:col-span-5 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]">
              <span className="text-[11px] font-mono text-[#737373] uppercase">
                Example Workflow Architecture
              </span>
              <span className="text-[10px] font-mono bg-[#EEF2EC] text-[#647C68] px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5]">
                <span className="text-[10px] uppercase font-mono text-[#737373] block mb-1">
                  1. Inbound Trigger
                </span>
                <span className="font-medium text-[#171717]">
                  {active.workflowExample.input}
                </span>
              </div>

              <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5]">
                <span className="text-[10px] uppercase font-mono text-[#647C68] block mb-1">
                  2. AI Processing & Routing
                </span>
                <span className="font-medium text-[#171717]">
                  {active.workflowExample.aiProcessing}
                </span>
              </div>

              <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5]">
                <span className="text-[10px] uppercase font-mono text-[#737373] block mb-1">
                  3. System Sync
                </span>
                <span className="font-medium text-[#171717]">
                  {active.workflowExample.destination}
                </span>
              </div>

              <div className="p-3 bg-[#EEF2EC] rounded-lg border border-[#647C68]/30">
                <span className="text-[10px] uppercase font-mono text-[#647C68] block mb-1">
                  4. Business Outcome
                </span>
                <span className="font-semibold text-[#171717]">
                  {active.workflowExample.outcome}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
