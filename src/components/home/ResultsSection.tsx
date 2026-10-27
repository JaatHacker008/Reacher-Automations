'use client';

import React, { useState } from 'react';
import { Clock, Hourglass, CheckCircle2, Calculator, Info, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ResultsSection() {
  const { openBookingModal } = useBookingModal();

  // Interactive ROI & Time Saved Calculator
  const [weeklyInquiries, setWeeklyInquiries] = useState(60);
  const [minutesPerInquiry, setMinutesPerInquiry] = useState(25);
  const [hourlyCost, setHourlyCost] = useState(35);

  // Calculations
  const hoursSpentPerWeek = Math.round((weeklyInquiries * minutesPerInquiry) / 60);
  const hoursAutomatedPerWeek = Math.round(hoursSpentPerWeek * 0.75); // Realistic 75% automation of repetitive triage
  const annualHoursSaved = hoursAutomatedPerWeek * 50;
  const annualCostSaved = annualHoursSaved * hourlyCost;

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            What Success Looks Like
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Make Business Operations Easier to Measure.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            We establish baseline telemetry before writing a line of logic, focusing on measurable operational throughput.
          </p>
        </div>

        {/* 3 Honest Metric Cards (Metric labels, no fabricated vanity percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-8 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-[#647C68]" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] block mb-1">
                Metric 01
              </span>
              <h3 className="text-xl font-semibold text-[#171717] mb-2">
                Response Time
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Measure how quickly incoming enquiries across web forms, emails, and WhatsApp receive an appropriate, qualified response.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E8E5] text-xs font-mono text-[#647C68]">
              Target: Minutes instead of hours
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center mb-6">
                <Hourglass className="w-5 h-5 text-[#647C68]" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] block mb-1">
                Metric 02
              </span>
              <h3 className="text-xl font-semibold text-[#171717] mb-2">
                Time Saved
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Estimate administrative hours saved each week by eliminating manual data entry, calendar coordination, and follow-up tracking.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E8E5] text-xs font-mono text-[#647C68]">
              Target: 10–25 hours/rep per month
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-[#647C68]" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] block mb-1">
                Metric 03
              </span>
              <h3 className="text-xl font-semibold text-[#171717] mb-2">
                Workflow Completion
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Track successful end-to-end executions, catch edge cases, and ensure tasks complete without manual intervention.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E8E5] text-xs font-mono text-[#647C68]">
              Target: 99.5%+ execution reliability
            </div>
          </div>
        </div>

        {/* Interactive Automation Impact Estimator */}
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E8E5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#647C68]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#171717]">
                  Interactive Operational Impact Estimator
                </h3>
                <p className="text-xs text-[#737373]">
                  Simulate potential hours recovered based on your current operational volume
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[#647C68] bg-[#EEF2EC] px-3 py-1 rounded-full self-start sm:self-auto font-medium">
              Realistic Estimation Model
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#171717] mb-2">
                  <span>Weekly Inbound Leads / Inquiries</span>
                  <span className="font-mono text-[#647C68]">{weeklyInquiries} inquiries/wk</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={weeklyInquiries}
                  onChange={(e) => setWeeklyInquiries(Number(e.target.value))}
                  className="w-full accent-[#647C68] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[#171717] mb-2">
                  <span>Manual Time Spent Per Inquiry (Qualify, CRM, Calendar)</span>
                  <span className="font-mono text-[#647C68]">{minutesPerInquiry} minutes</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={minutesPerInquiry}
                  onChange={(e) => setMinutesPerInquiry(Number(e.target.value))}
                  className="w-full accent-[#647C68] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[#171717] mb-2">
                  <span>Estimated Team Hourly Rate / Value</span>
                  <span className="font-mono text-[#647C68]">${hourlyCost} / hour</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full accent-[#647C68] cursor-pointer"
                />
              </div>
            </div>

            {/* Estimated Recovered Output */}
            <div className="lg:col-span-5 bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] p-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
                Projected Recovery
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5]">
                  <span className="text-2xl font-bold text-[#171717] block">
                    ~{hoursAutomatedPerWeek} hrs
                  </span>
                  <span className="text-[11px] text-[#737373]">Saved Per Week</span>
                </div>

                <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5]">
                  <span className="text-2xl font-bold text-[#647C68] block">
                    ~{annualHoursSaved} hrs
                  </span>
                  <span className="text-[11px] text-[#737373]">Annual Hours Saved</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#EEF2EC] rounded-xl border border-[#647C68]/30">
                <span className="text-[10px] uppercase font-mono text-[#647C68] block">
                  Estimated Operational Value
                </span>
                <span className="text-xl font-bold text-[#171717]">
                  ${annualCostSaved.toLocaleString()} / year
                </span>
                <span className="text-[11px] text-[#737373] block mt-0.5">
                  Redirected into high-value sales & customer relationships
                </span>
              </div>

              <button
                onClick={() => openBookingModal('ROI Impact Assessment')}
                className="w-full py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-xs"
              >
                Discuss Tailored Savings
              </button>
            </div>
          </div>
        </div>

        {/* Section 14 mandatory notice */}
        <div className="mt-8 p-4 bg-[#EEF2EC]/60 rounded-xl border border-[#647C68]/20 text-xs text-[#737373] flex items-center gap-3">
          <Info className="w-4 h-4 text-[#647C68] shrink-0" />
          <span>
            Results depend on your starting process, workflow design, adoption, and business context. We build systems to benchmark and improve these metrics systematically.
          </span>
        </div>
      </div>
    </section>
  );
}
