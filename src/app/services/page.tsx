'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { useBookingModal } from '@/context/BookingModalContext';
import ServiceFeaturesDeepDive from '@/components/services/ServiceFeaturesDeepDive';
import { Check, ArrowRight, ArrowUpRight, Cpu, Layers, MessageSquare, CalendarCheck, Headphones, UserCheck, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesPage() {
  const { openBookingModal } = useBookingModal();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-lead-qualification':
        return <UserCheck className="w-6 h-6 text-[#647C68]" />;
      case 'ai-customer-support':
        return <Headphones className="w-6 h-6 text-[#647C68]" />;
      case 'whatsapp-email-automation':
        return <MessageSquare className="w-6 h-6 text-[#647C68]" />;
      case 'appointment-booking-automation':
        return <CalendarCheck className="w-6 h-6 text-[#647C68]" />;
      case 'crm-sales-automation':
        return <Layers className="w-6 h-6 text-[#647C68]" />;
      case 'custom-ai-workflows':
        return <Cpu className="w-6 h-6 text-[#647C68]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#647C68]" />;
    }
  };

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAFAF8]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Services & Engineered Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] mb-6">
            Intelligent Automation Systems.
          </h1>
          <p className="text-lg text-[#737373] leading-relaxed">
            We don’t deploy gimmicky chatbots. We engineer end-to-end operational systems connecting your inbound inquiries, communication channels, CRM, and scheduling tools into reliable pipelines.
          </p>
        </div>
      </div>

      {/* Interactive Feature Deep Dive Explorer */}
      <div className="mb-20">
        <ServiceFeaturesDeepDive />
      </div>

      {/* All 6 Services Detailed Architectural Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]">
            Comprehensive Service Catalog
          </h2>
          <p className="text-sm text-[#737373] mt-1">
            Detailed specifications, pipeline stages, and deliverables for each capability.
          </p>
        </div>

        {SERVICES.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 sm:p-12 bg-[#FFFFFF] rounded-3xl border border-[#E8E8E5] shadow-xs hover:border-[#647C68]/30 transition-all scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Service Details & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2EC] flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#647C68] uppercase font-semibold">
                      Service 0{idx + 1} · {service.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Deep Feature Highlights */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-3">
                    Engineered Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.detailedFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] space-y-1">
                        <div className="text-xs font-semibold text-[#171717] flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#647C68]" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-[11px] text-[#737373] leading-snug">
                          {feat.shortSummary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                    Common Integration Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.toolsUsed.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E8E5] rounded-lg text-[#171717]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => openBookingModal(service.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
                  >
                    <span>Scope {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Measurable Outcomes & Before/After */}
              <div className="lg:col-span-5 space-y-5">
                {/* Outcomes */}
                <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] p-6 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] flex items-center gap-1.5 pb-2 border-b border-[#E8E8E5]">
                    <Zap className="w-4 h-4 text-[#647C68]" /> Measurable Business Outcomes
                  </span>

                  <div className="space-y-2.5">
                    {service.businessOutcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] text-xs text-[#171717]/85 font-medium flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#647C68] shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E8E8E5] text-xs text-[#737373] space-y-2">
                    <span className="font-semibold text-[#171717] block">Standard Deliverables:</span>
                    <ul className="list-disc pl-4 space-y-1">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Before / After box */}
                <div className="p-4 bg-[#EEF2EC] rounded-2xl border border-[#647C68]/30 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#647C68] block">
                    Operational Shift
                  </span>
                  <div className="font-semibold text-[#171717]">
                    From: {service.beforeAfter.before.speed}
                  </div>
                  <div className="font-semibold text-[#647C68]">
                    To: {service.beforeAfter.after.speed}
                  </div>
                  <p className="text-[11px] text-[#737373] pt-1">
                    {service.beforeAfter.after.benefit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Consultation CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-[#171917] text-[#F5F5F0] rounded-3xl p-10 sm:p-14 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Not Sure Which Automation Fits Best?
          </h2>
          <p className="text-sm sm:text-base text-[#A0A09A] max-w-xl mx-auto">
            Book a 30-minute discovery consultation. We’ll audit your existing tool stack and recommend the workflow with the highest operational ROI.
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
