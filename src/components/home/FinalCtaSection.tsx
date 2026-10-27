'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function FinalCtaSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-24 sm:py-32 bg-[#171917] text-[#F5F5F0] relative overflow-hidden">
      {/* Subtle background workflow nodes & connector lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-6xl"
        >
          <path
            d="M50 200 H350 Q400 200 450 150 T550 150 Q600 150 650 250 T750 250 Q800 250 850 200 H1150"
            stroke="#647C68"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle cx="200" cy="200" r="5" fill="#81C784" />
          <circle cx="500" cy="150" r="5" fill="#81C784" />
          <circle cx="700" cy="250" r="5" fill="#81C784" />
          <circle cx="1000" cy="200" r="5" fill="#81C784" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202420] border border-[#647C68]/30 text-[#81C784] text-xs font-semibold uppercase tracking-wider mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#81C784] animate-ping" />
          Operational Transformation
        </div>

        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#F5F5F0]">
          Ready to Work Smarter?
        </h2>

        <p className="text-base sm:text-lg text-[#A0A09A] max-w-xl mx-auto leading-relaxed">
          Let&apos;s identify the repetitive tasks your business no longer needs to handle manually.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform active:scale-95"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#202420] hover:bg-[#2C332C] border border-[#2C332C] text-[#F5F5F0] text-sm font-medium rounded-full transition-colors"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A0A09A]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
            Practical 30-minute workflow review
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
            Custom architecture recommendations
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#647C68]" />
            No pushy sales tactics
          </span>
        </div>
      </div>
    </section>
  );
}
