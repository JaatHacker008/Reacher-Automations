'use client';

import React, { useState } from 'react';
import { CASE_STUDIES } from '@/lib/constants';
import { ArrowUpRight, CheckCircle2, Cpu, Database, Layers, Sparkles, X, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { PortfolioProject } from '@/types';

export default function CaseStudiesSection() {
  const [activeModalStudy, setActiveModalStudy] = useState<PortfolioProject | null>(null);
  const { openBookingModal } = useBookingModal();

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Systems Built to Solve Real Problems.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Architectural reference systems engineered to demonstrate practical automation patterns across core business operations.
          </p>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study: PortfolioProject) => (
            <div
              key={study.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] p-7 hover:border-[#647C68]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-[#EEF2EC] text-[#647C68]">
                    {study.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#737373] bg-[#FAFAF8] px-2 py-0.5 rounded border border-[#E8E8E5]">
                    {study.isPrototype ? 'Demonstration Prototype' : 'Production System'}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#171717] mb-3 group-hover:text-[#647C68] transition-colors">
                  {study.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373] block mb-1">
                    Operational Friction:
                  </span>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Tools Grid */}
                <div className="mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                    Integration Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tools.map((t: string) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#FAFAF8] border border-[#E8E8E5] rounded text-[#171717]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture Summary */}
                <div className="p-3 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] text-xs font-mono text-[#737373] leading-relaxed mb-6">
                  <span className="text-[#647C68] font-bold block text-[10px] uppercase mb-1">
                    System Architecture:
                  </span>
                  {study.architecture}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E8E5] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(study)}
                  className="text-xs font-semibold text-[#171717] hover:text-[#647C68] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>View Case Study Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#647C68]" />
                </button>

                <a
                  href="/case-studies"
                  className="text-[11px] font-medium text-[#737373] hover:text-[#171717] underline"
                >
                  All Prototypes
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector for Case Study */}
        {activeModalStudy && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveModalStudy(null);
            }}
          >
            <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl animate-fade-in text-[#171717]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#647C68] bg-[#EEF2EC] px-2.5 py-1 rounded-full font-semibold uppercase">
                    {activeModalStudy.category} · Demonstration Prototype
                  </span>
                  <h3 className="text-xl font-semibold text-[#171717] mt-2">
                    {activeModalStudy.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="p-1.5 text-[#737373] hover:text-[#171717] rounded-lg hover:bg-[#EEF2EC]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-1">
                  Challenge & Problem
                </span>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {activeModalStudy.problem}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                  Step-by-Step Flow Logic:
                </span>
                <div className="space-y-2">
                  {activeModalStudy.flowSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#171717]/80">
                      <span className="w-5 h-5 rounded-md bg-[#EEF2EC] text-[#647C68] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-1">
                  Implementation Summary
                </span>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {activeModalStudy.solutionOverview || activeModalStudy.implementationSummary}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E8E5]">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalStudy(null);
                    openBookingModal(activeModalStudy.title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-xs"
                >
                  <span>Build This Workflow For My Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(null)}
                  className="text-xs text-[#737373] hover:text-[#171717]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
