'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { UserCheck, Headphones, MessageSquare, CalendarCheck, Layers, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ServicesSection() {
  const { openBookingModal } = useBookingModal();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-lead-qualification':
        return <UserCheck className="w-5 h-5 text-[#647C68]" />;
      case 'ai-customer-support':
        return <Headphones className="w-5 h-5 text-[#647C68]" />;
      case 'whatsapp-email-automation':
        return <MessageSquare className="w-5 h-5 text-[#647C68]" />;
      case 'appointment-booking-automation':
        return <CalendarCheck className="w-5 h-5 text-[#647C68]" />;
      case 'crm-sales-automation':
        return <Layers className="w-5 h-5 text-[#647C68]" />;
      case 'custom-ai-workflows':
        return <Cpu className="w-5 h-5 text-[#647C68]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#647C68]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Practical AI. Powerful Automation.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            We design connected automation systems that help businesses manage leads, communicate with customers, and streamline everyday operations.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] p-7 flex flex-col justify-between hover:border-[#647C68]/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#EEF2EC] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono text-[#647C68] bg-[#EEF2EC] px-2.5 py-1 rounded-full font-medium">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-[#171717] mb-3 group-hover:text-[#647C68] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-[#E8E8E5]/70">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#737373] block mb-2">
                    Key Capabilities:
                  </span>
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#171717]/80">
                      <div className="w-4 h-4 rounded-full bg-[#EEF2EC] text-[#647C68] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-[#E8E8E5] flex items-center justify-between">
                <a
                  href={`/services#${service.id}`}
                  className="text-xs font-semibold text-[#171717] hover:text-[#647C68] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#647C68]" />
                </a>

                <button
                  type="button"
                  onClick={() => openBookingModal(service.title)}
                  className="text-[11px] font-medium text-[#737373] hover:text-[#647C68] underline transition-colors"
                >
                  Consult Scope
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
