'use client';

import React from 'react';
import { WHY_US_POINTS, BRAND } from '@/lib/constants';
import { CheckCircle2, Target, Cpu, GitMerge, BarChart2 } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function WhyReacherSection() {
  const { openBookingModal } = useBookingModal();

  const getPointIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-5 h-5 text-[#647C68]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#647C68]" />;
      case 2:
        return <GitMerge className="w-5 h-5 text-[#647C68]" />;
      case 3:
        return <BarChart2 className="w-5 h-5 text-[#647C68]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#647C68]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#171917] text-[#F5F5F0] relative border-b border-[#2C332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202420] border border-[#647C68]/30 text-[#81C784] text-xs font-semibold uppercase tracking-wider mb-4">
              Why Reacher
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F0] mb-4">
              Automation Should Solve Real Problems.
            </h2>
            <p className="text-base sm:text-lg text-[#A0A09A] max-w-2xl leading-relaxed">
              We focus on measurable business bottlenecks rather than superficial AI novelties.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block p-4 rounded-2xl bg-[#202420] border border-[#2C332C] text-left">
              <span className="text-[11px] font-mono text-[#647C68] uppercase block mb-1">
                Core Philosophy
              </span>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F0]">
                &ldquo;{BRAND.closingStatement}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4 Value Proposition Cards in Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_US_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#202420]/70 border border-[#2C332C] hover:border-[#647C68]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#171917] border border-[#2C332C] flex items-center justify-center mb-6">
                  {getPointIcon(idx)}
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F0] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A0A09A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2C332C] flex items-center justify-between text-xs text-[#647C68]">
                <span className="font-mono">Principle #{idx + 1}</span>
                <span>Operational Discipline</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 pt-10 border-t border-[#2C332C] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#A0A09A]">
            Ready to replace manual spreadsheets and forgotten inboxes with reliable automation?
          </p>
          <button
            onClick={() => openBookingModal()}
            className="shrink-0 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
          >
            Start With an Audit
          </button>
        </div>
      </div>
    </section>
  );
}
