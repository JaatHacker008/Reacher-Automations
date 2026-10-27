'use client';

import React from 'react';
import { PROBLEM_CARDS } from '@/lib/constants';
import { Clock, MessageSquareX, Unplug, RefreshCcw, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ProblemSection() {
  const { openBookingModal } = useBookingModal();

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'missed-leads':
        return <MessageSquareX className="w-5 h-5 text-[#647C68]" />;
      case 'manual-followups':
        return <Clock className="w-5 h-5 text-[#647C68]" />;
      case 'disconnected-tools':
        return <Unplug className="w-5 h-5 text-[#647C68]" />;
      case 'repetitive-operations':
        return <RefreshCcw className="w-5 h-5 text-[#647C68]" />;
      default:
        return <Clock className="w-5 h-5 text-[#647C68]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Your Team Shouldn&apos;t Be Doing Everything Manually.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Repetitive tasks consume time, slow down customer responses, and create unnecessary operational friction.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="group p-6 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getProblemIcon(card.id)}
                </div>
                <div className="text-[11px] font-mono text-[#737373] mb-1">
                  Friction point: {card.statLabel}
                </div>
                <h3 className="text-lg font-semibold text-[#171717] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E8E8E5]/70 flex items-center justify-between text-xs text-[#737373]">
                <span className="font-medium text-[#171717]/80">{card.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Ending Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#EEF2EC] border border-[#647C68]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#647C68] animate-pulse" />
            <p className="text-base sm:text-lg font-medium text-[#171717]">
              Let&apos;s turn repetitive tasks into reliable systems.
            </p>
          </div>
          <button
            onClick={() => openBookingModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
          >
            <span>Audit My Business Workflows</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
