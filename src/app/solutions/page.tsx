'use client';

import React from 'react';
import { INDUSTRIES } from '@/lib/constants';
import { useBookingModal } from '@/context/BookingModalContext';
import { GraduationCap, Stethoscope, Sparkles, TrendingUp, Check, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function SolutionsPage() {
  const { openBookingModal } = useBookingModal();

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'education':
        return <GraduationCap className="w-6 h-6 text-[#647C68]" />;
      case 'healthcare':
        return <Stethoscope className="w-6 h-6 text-[#647C68]" />;
      case 'beauty-wellness':
        return <Sparkles className="w-6 h-6 text-[#647C68]" />;
      case 'growing-businesses':
        return <TrendingUp className="w-6 h-6 text-[#647C68]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#647C68]" />;
    }
  };

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Industry Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] mb-6">
            Engineered For Your Specific Sector.
          </h1>
          <p className="text-lg text-[#737373] leading-relaxed">
            Generic automation tools fail because every industry operates under distinct compliance, scheduling, and communication rules. We design systems customized to your exact operational reality.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            id={ind.id}
            className="p-8 sm:p-12 bg-[#FFFFFF] rounded-3xl border border-[#E8E8E5] shadow-xs hover:border-[#647C68]/30 transition-all scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Context & Solutions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2EC] flex items-center justify-center">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#647C68] uppercase font-semibold">
                      Sector Blueprint
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]">
                      {ind.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                  {ind.description}
                </p>

                {/* Specific Challenges */}
                <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-2">
                    Common Operational Bottlenecks We Eliminate:
                  </span>
                  <div className="space-y-1.5 text-xs text-[#737373]">
                    {ind.challenges.map((ch, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2">
                        <span className="text-[#647C68] font-bold">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions List */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-3">
                    Configured Automation Workflows:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#171717]/80">
                        <div className="w-4 h-4 rounded-full bg-[#EEF2EC] text-[#647C68] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openBookingModal(ind.name)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
                  >
                    <span>Discuss {ind.name} System</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Flow Architecture */}
              <div className="lg:col-span-5 bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E5]">
                  <span className="text-xs font-semibold text-[#171717]">
                    End-to-End Workflow Diagram
                  </span>
                  <span className="text-[10px] font-mono text-[#647C68] bg-[#EEF2EC] px-2 py-0.5 rounded">
                    Architecture
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5]">
                    <span className="text-[10px] uppercase font-mono text-[#737373] block mb-1">
                      1. Inbound Ingestion
                    </span>
                    <span className="font-medium text-[#171717]">
                      {ind.workflowExample.input}
                    </span>
                  </div>

                  <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5]">
                    <span className="text-[10px] uppercase font-mono text-[#647C68] block mb-1">
                      2. AI Qualification & Validation
                    </span>
                    <span className="font-medium text-[#171717]">
                      {ind.workflowExample.aiProcessing}
                    </span>
                  </div>

                  <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5]">
                    <span className="text-[10px] uppercase font-mono text-[#737373] block mb-1">
                      3. Operational Action
                    </span>
                    <span className="font-medium text-[#171717]">
                      {ind.workflowExample.destination}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#EEF2EC] rounded-xl border border-[#647C68]/30">
                    <span className="text-[10px] uppercase font-mono text-[#647C68] block mb-1">
                      4. Measured Result
                    </span>
                    <span className="font-semibold text-[#171717]">
                      {ind.workflowExample.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
