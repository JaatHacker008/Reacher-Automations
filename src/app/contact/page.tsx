'use client';

import React from 'react';
import ContactSection from '@/components/home/ContactSection';
import BookingSection from '@/components/home/BookingSection';
import { Mail, Clock, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Contact & Inquiries
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] mb-6">
            Let&apos;s Discuss Your Workflow.
          </h1>
          <p className="text-lg text-[#737373] leading-relaxed">
            Have a question about integrating your CRM, automating lead qualification, or scoping a custom AI workflow? We’re ready to assist.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] shadow-xs">
              <Mail className="w-5 h-5 text-[#647C68] mb-2" />
              <div className="text-xs text-[#737373]">Direct Email</div>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-xs font-semibold text-[#171717] hover:text-[#647C68] transition-colors"
              >
                {BRAND.email}
              </a>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] shadow-xs">
              <Clock className="w-5 h-5 text-[#647C68] mb-2" />
              <div className="text-xs text-[#737373]">Response Guarantee</div>
              <div className="text-xs font-semibold text-[#171717]">
                Within 1 business day
              </div>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#647C68] mb-2" />
              <div className="text-xs text-[#737373]">NDA & Privacy</div>
              <div className="text-xs font-semibold text-[#171717]">
                Confidential audit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Working Contact Form */}
      <div className="mb-12">
        <ContactSection />
      </div>

      {/* Discovery Booking Section */}
      <div>
        <BookingSection />
      </div>
    </div>
  );
}
