'use client';

import React from 'react';
import { BRAND } from '@/lib/constants';
import { useBookingModal } from '@/context/BookingModalContext';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import HeroWorkflowVisual from './HeroWorkflowVisual';

export default function HeroSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#FAFAF8] border-b border-[#E8E8E5]">
      {/* Subtle organic light accent behind hero */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EEF2EC]/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small label above headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#647C68]" />
              AI Automation Studio & Systems Portfolio
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] leading-[1.08]">
              Less Manual Work.
              <span className="block text-[#647C68] mt-1">More Business Growth.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-xl">
              {BRAND.heroSupportingText}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-full transition-all duration-200 shadow-xs hover:shadow-md transform active:scale-95"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFFFFF] hover:bg-[#EEF2EC] border border-[#E8E8E5] text-[#171717] text-sm font-medium rounded-full transition-all duration-200 hover:border-[#647C68]/30 shadow-2xs"
              >
                <Layers className="w-4 h-4 text-[#647C68]" />
                <span>Explore Agency Portfolio</span>
              </a>
            </div>

            {/* Trust-oriented statement (Section 5 requirement) */}
            <div className="pt-3 flex items-center gap-2.5 text-xs text-[#737373]">
              <ShieldCheck className="w-4 h-4 text-[#647C68] shrink-0" />
              <span>{BRAND.trustStatement}</span>
            </div>

            {/* Key benefits list */}
            <div className="pt-4 border-t border-[#E8E8E5]/80 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#737373]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
                Zero code required for your team
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
                Interactive live system simulators
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
                Strict human-in-the-loop safeguards
              </span>
            </div>

            {/* Featured Portfolio Quick Pill */}
            <div className="pt-2">
              <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] text-xs text-[#737373] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#171717]">
                  Featured Systems: <strong>01 Clinical Intake</strong> · <strong>02 Support RAG</strong> · <strong>03 CRM Re-engagement</strong>
                </span>
                <a href="#portfolio" className="text-[#647C68] font-semibold hover:underline shrink-0 ml-2">
                  View All 6 →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Interactive Workflow Visual */}
          <div className="lg:col-span-6 w-full">
            <HeroWorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
