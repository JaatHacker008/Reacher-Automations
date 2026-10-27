'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ClientCollaborationSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-sm relative overflow-hidden">
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EEF2EC] rounded-full blur-3xl -z-10 opacity-70" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mx-auto">
            Client Collaboration
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] max-w-2xl mx-auto">
            Let&apos;s Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-[#737373] max-w-xl mx-auto leading-relaxed">
            Tell us which part of your business takes too much time. We&apos;ll help you explore whether automation is the right solution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Workflow Feasibility Discussion')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-full transition-colors shadow-xs"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#contact-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EEF2EC] hover:bg-[#E8E8E5] text-[#171717] text-sm font-medium rounded-full transition-colors"
            >
              <span>Submit Workflow Inquiry</span>
            </a>
          </div>

          {/* Authentic Transparency Note */}
          <div className="pt-6 border-t border-[#E8E8E5] flex items-center justify-center gap-2 text-xs text-[#737373]">
            <ShieldCheck className="w-4 h-4 text-[#647C68]" />
            <span>Honest partnership · No fabricated reviews or vanity claims</span>
          </div>
        </div>
      </div>
    </section>
  );
}
