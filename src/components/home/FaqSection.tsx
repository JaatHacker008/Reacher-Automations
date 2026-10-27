'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/constants';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default
  const { openBookingModal } = useBookingModal();

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Questions About AI Automation?
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Straightforward answers regarding our implementation methodology, technical requirements, and system boundaries.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFFFFF] border-[#647C68]/40 shadow-xs ring-1 ring-[#647C68]/20'
                    : 'bg-[#FFFFFF] border-[#E8E8E5] hover:border-[#647C68]/30'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#647C68]"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#171717]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAFAF8] border border-[#E8E8E5] flex items-center justify-center text-[#737373] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#647C68]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#737373] leading-relaxed border-t border-[#E8E8E5]/60 animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#647C68]" />
            <span className="text-xs sm:text-sm font-medium text-[#171717]">
              Have a specific system integration question not covered above?
            </span>
          </div>
          <button
            onClick={() => openBookingModal('Technical Consultation')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#647C68] hover:text-[#526756] underline"
          >
            <span>Ask Our Systems Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
