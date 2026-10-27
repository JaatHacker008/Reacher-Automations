'use client';

import React from 'react';
import { Calendar, Clock, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function BookingSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="book-discovery" className="py-20 sm:py-24 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-3xl p-8 sm:p-14 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider">
              Discovery Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717]">
              Let&apos;s Find Your Best Automation Opportunity.
            </h2>

            <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
              Choose a convenient time to discuss your current workflow, challenges, and automation goals with our systems team.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#737373]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#647C68]" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-[#647C68]" />
                <span>Google Meet / Zoom</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#647C68]" />
                <span>Zero sales pressure</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#FAFAF8] p-6 rounded-2xl border border-[#E8E8E5] space-y-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2EC] text-[#647C68] flex items-center justify-center mx-auto border border-[#647C68]/20">
              <Calendar className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#171717]">
                Live Schedule Calendar
              </h3>
              <p className="text-xs text-[#737373] mt-1">
                Select your preferred business day and time slot instantly
              </p>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="w-full py-3 px-4 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <span className="block text-[11px] text-[#737373]">
              Can&apos;t find a slot?{' '}
              <a href="#contact-form" className="text-[#647C68] underline hover:text-[#526756]">
                Message us directly
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
