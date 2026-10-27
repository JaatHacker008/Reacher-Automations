'use client';

import React from 'react';
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase';
import { useBookingModal } from '@/context/BookingModalContext';
import { ShieldCheck, ArrowRight, ArrowUpRight, Cpu } from 'lucide-react';

export default function CaseStudiesPage() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Agency Systems Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] mb-6">
            Demonstration Portfolio & Case Studies.
          </h1>
          <p className="text-lg text-[#737373] leading-relaxed">
            Comprehensive reference systems illustrating how connected automation pipelines eliminate repetitive operational friction, qualify leads in sub-minute latencies, and coordinate multi-tool workflows.
          </p>

          <div className="mt-6 p-4 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] text-xs text-[#737373] flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#647C68] shrink-0" />
            <span>
              All case studies below are interactive architectural prototypes engineered around real-world business constraints. Click any system to test the interactive live simulation sandbox.
            </span>
          </div>
        </div>
      </div>

      {/* Main Portfolio Showcase with Filter Tabs & Live Interactive Sandbox */}
      <PortfolioShowcase />

      {/* Bottom Consultation Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-[#171917] text-[#F5F5F0] rounded-3xl p-10 sm:p-14 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Need a Tailored System for Your Business?
          </h2>
          <p className="text-sm sm:text-base text-[#A0A09A] max-w-xl mx-auto">
            Book a 30-minute discovery consultation. We’ll audit your operational bottlenecks and map a custom automation architecture designed around your existing tools.
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
