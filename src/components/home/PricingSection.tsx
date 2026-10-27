'use client';

import React from 'react';
import { PRICING_TIERS } from '@/lib/constants';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function PricingSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Engagement Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Start With the Right Level of Automation.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Transparent, scope-based engagements without arbitrary licensing markups or hidden fees.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? 'bg-[#FFFFFF] border-2 border-[#647C68] shadow-lg ring-1 ring-[#647C68]/20'
                  : 'bg-[#FFFFFF] border border-[#E8E8E5] hover:border-[#647C68]/40 shadow-xs'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-8 px-3 py-1 bg-[#647C68] text-[#FFFFFF] text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-xs">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#171717]">{tier.name}</h3>
                  {!tier.featured && (
                    <span className="text-[10px] font-mono text-[#737373] bg-[#FAFAF8] px-2.5 py-1 rounded border border-[#E8E8E5]">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="mb-6 pb-6 border-b border-[#E8E8E5]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
                    {tier.price}
                  </div>
                  <div className="text-xs text-[#737373] mt-1 font-mono">
                    {tier.priceSub}
                  </div>
                </div>

                {/* Scope Inclusions */}
                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#737373] block mb-3">
                    Scope Inclusions:
                  </span>
                  {tier.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#171717]/80">
                      <div className="w-4 h-4 rounded-full bg-[#EEF2EC] text-[#647C68] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-[#E8E8E5]">
                <button
                  type="button"
                  onClick={() => openBookingModal(tier.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-xs ${
                    tier.featured
                      ? 'bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF]'
                      : 'bg-[#EEF2EC] hover:bg-[#647C68] text-[#171717] hover:text-[#FFFFFF]'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 15 Required Disclaimer */}
        <div className="mt-12 p-5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-xs text-[#737373] flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#647C68] shrink-0" />
          <span>
            Final pricing depends on workflow complexity, integration requirements, third-party usage costs, and ongoing support. We do not invent artificial discounts, countdown timers, or vanity guarantees.
          </span>
        </div>
      </div>
    </section>
  );
}
