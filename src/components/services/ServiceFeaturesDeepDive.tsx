'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceItem } from '@/types';
import { useBookingModal } from '@/context/BookingModalContext';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Headphones, 
  UserCheck, 
  MessageSquare, 
  CalendarCheck, 
  ArrowUpRight,
  TrendingUp,
  Workflow
} from 'lucide-react';

export default function ServiceFeaturesDeepDive() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
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
        return <Workflow className="w-5 h-5 text-[#647C68]" />;
    }
  };

  const active = SERVICES[selectedServiceIndex];

  return (
    <section id="services-breakdown" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#647C68]" />
            Complete Capabilities & Features
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] mb-4">
            How Every Automation Works.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Select any service below to explore its technical architecture, pipeline stages, detailed features, and concrete before-and-after operational impact.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {SERVICES.map((s, idx) => {
            const isSelected = selectedServiceIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#647C68] shadow-sm ring-1 ring-[#647C68]/20'
                    : 'bg-[#FFFFFF]/60 border-[#E8E8E5] text-[#737373] hover:text-[#171717] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] flex items-center justify-center mb-2.5">
                  {getServiceIcon(s.id)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171717] line-clamp-2">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-[#647C68] font-mono mt-1">
                    {s.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Showcase */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E8E8E5] p-6 sm:p-12 shadow-sm space-y-12">
          {/* Service Title & Overview */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-[#E8E8E5] gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF2EC] flex items-center justify-center">
                  {getServiceIcon(active.id)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#647C68] font-semibold uppercase">
                    Service Exploration · {active.badge}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-semibold text-[#171717]">
                    {active.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#737373] max-w-3xl leading-relaxed pt-2">
                {active.fullDesc}
              </p>
            </div>

            <button
              onClick={() => openBookingModal(active.title)}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full transition-colors shadow-xs"
            >
              <span>Scope {active.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Deeply Explained Features */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-4">
              Deep Feature Breakdown:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {active.detailedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#647C68] bg-[#EEF2EC] px-2 py-0.5 rounded">
                        Feature 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#737373] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E8E8E5]">
                        Engineered Capability
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-[#171717]">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {feat.howItWorks}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8E5]/70 space-y-1.5 text-xs">
                    <div>
                      <span className="font-semibold text-[#171717]">Client Value: </span>
                      <span className="text-[#647C68] font-medium">{feat.businessBenefit}</span>
                    </div>
                    <div className="text-[10px] font-mono text-[#737373]">
                      Mechanic: {feat.technicalMechanic}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Stage Pipeline Execution Flow */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-4">
              Step-by-Step Execution Lifecycle:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {active.pipelineStages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-5 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#647C68]">
                      Stage {stage.step}
                    </span>
                    <span className="text-[9px] font-mono uppercase bg-[#EEF2EC] text-[#647C68] px-1.5 py-0.5 rounded">
                      {stage.actor}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#171717]">
                    {stage.title}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Before vs After Operational Comparison */}
          <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block pb-2 border-b border-[#E8E8E5]">
              Real-World Process Impact: Manual vs Reacher Automation
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Card */}
              <div className="p-5 bg-red-50/40 rounded-xl border border-red-200/60 space-y-2 text-xs">
                <span className="text-[11px] uppercase font-mono font-bold text-red-600 block">
                  Without Reacher (Current Manual Friction)
                </span>
                <div className="text-sm font-semibold text-[#171717]">
                  {active.beforeAfter.before.processTitle}
                </div>
                <div className="text-red-700 font-mono">
                  Speed: {active.beforeAfter.before.speed}
                </div>
                <p className="text-[#737373] leading-relaxed">
                  Friction: {active.beforeAfter.before.friction}
                </p>
                <div className="pt-2 text-[#737373]">
                  <strong>Wasted Labor:</strong> {active.beforeAfter.before.humanLabor}
                </div>
                <div className="text-red-600 font-medium">
                  Drop-off: {active.beforeAfter.before.dropoff}
                </div>
              </div>

              {/* After Card */}
              <div className="p-5 bg-[#EEF2EC] rounded-xl border border-[#647C68]/30 space-y-2 text-xs">
                <span className="text-[11px] uppercase font-mono font-bold text-[#647C68] block">
                  With Reacher Connected Automation
                </span>
                <div className="text-sm font-semibold text-[#171717]">
                  {active.beforeAfter.after.processTitle}
                </div>
                <div className="text-[#647C68] font-mono font-bold">
                  Speed: {active.beforeAfter.after.speed}
                </div>
                <p className="text-[#171717]/80 leading-relaxed">
                  Benefit: {active.beforeAfter.after.benefit}
                </p>
                <div className="pt-2 text-[#171717]">
                  <strong>Automation Rate:</strong> {active.beforeAfter.after.automationLevel}
                </div>
                <div className="text-[#647C68] font-semibold">
                  Reliability: {active.beforeAfter.after.reliability}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                Integrated Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {active.toolsUsed.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E8E5] rounded-lg text-[#171717]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                Deployment Deliverables Included:
              </span>
              <div className="space-y-1.5 text-xs text-[#171717]/85">
                {active.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#647C68]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
