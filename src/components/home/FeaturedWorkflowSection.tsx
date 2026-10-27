'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Clock, Sparkles, Database, Send, Calendar, ShieldAlert, ArrowRight, Activity, Terminal } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function FeaturedWorkflowSection() {
  const { openBookingModal } = useBookingModal();

  const [activeStage, setActiveStage] = useState(3);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const stages = [
    { id: 1, title: 'Form / Enquiry Submission', desc: 'Customer submits web form or sends WhatsApp enquiry.', system: 'Web Ingest' },
    { id: 2, title: 'Capture Contact Details', desc: 'System parses payload, sanitizes inputs, checks duplicates.', system: 'n8n Ingestion' },
    { id: 3, title: 'AI Categorisation & Scoring', desc: 'LLM evaluates ICP fit, budget requirements, and urgency.', system: 'OpenAI Classifier' },
    { id: 4, title: 'CRM Record Ingestion', desc: 'Creates contact and active deal card in HubSpot / Postgres.', system: 'CRM Webhook' },
    { id: 5, title: 'Instant Acknowledgement', desc: 'Sends immediate branded email/WhatsApp response in < 30s.', system: 'Messaging Engine' },
    { id: 6, title: 'Smart Booking Dispatch', desc: 'Qualified leads receive direct calendar link; others routed to review.', system: 'Dynamic Router' },
    { id: 7, title: 'Appointment Confirmation', desc: 'Customer selects slot; calendar syncs and locks video room.', system: 'Google Calendar' },
    { id: 8, title: 'Automated Reminders', desc: 'Dispatches 24-hour and 1-hour SMS / WhatsApp notification.', system: 'Scheduler Cron' },
    { id: 9, title: 'Post-Call Follow-Up', desc: 'Triggers summary email and next milestone task for sales rep.', system: 'Task Automation' },
    { id: 10, title: 'Reporting & Attribution', desc: 'Records conversion velocity, channel source, and logs health.', system: 'BI / Database' },
  ];

  // Run simulation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating && simStep < stages.length) {
      timer = setTimeout(() => {
        setActiveStage(simStep + 1);
        setSimStep((prev) => prev + 1);
      }, 700);
    } else if (isSimulating && simStep >= stages.length) {
      setIsSimulating(false);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simStep, stages.length]);

  const startSimulation = () => {
    setSimStep(0);
    setActiveStage(1);
    setIsSimulating(true);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimStep(0);
    setActiveStage(4);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Featured Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            An AI-Powered Lead-to-Appointment System.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            One connected workflow to manage new enquiries, qualify potential customers, and keep the sales process moving.
          </p>
        </div>

        {/* Prototype Disclaimer Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-xs text-[#737373] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#647C68]" />
          <span className="font-semibold text-[#171717]">Interactive Demonstration:</span>
          <span>Click any stage below or run the live test simulation.</span>
        </div>

        {/* Main Dashboard Window */}
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl shadow-sm overflow-hidden">
          {/* Dashboard Topbar */}
          <div className="bg-[#171917] text-[#F5F5F0] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C332C]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#202420] text-[#647C68] border border-[#647C68]/30 flex items-center justify-center font-mono text-xs">
                R:SYS
              </div>
              <div>
                <div className="text-xs font-mono text-[#F5F5F0] font-semibold">
                  Lead-to-Appointment Engine · v2.4
                </div>
                <div className="text-[10px] font-mono text-[#A0A09A]">
                  Pipeline ID: #wf-lead-qual-live · Status: Active
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={startSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#647C68] hover:bg-[#526756] disabled:opacity-50 text-[#FFFFFF] text-xs font-medium rounded-lg transition-colors shadow-xs"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isSimulating ? `Running (${simStep}/${stages.length})...` : 'Run Test Simulation'}</span>
              </button>

              <button
                type="button"
                onClick={resetSimulation}
                className="p-1.5 text-[#A0A09A] hover:text-[#F5F5F0] rounded-lg hover:bg-[#202420] transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 10-Stage Pipeline Progress Strip */}
          <div className="p-4 bg-[#FAFAF8] border-b border-[#E8E8E5] overflow-x-auto">
            <div className="flex items-center min-w-[850px] gap-1.5">
              {stages.map((stage) => {
                const isPassed = stage.id < activeStage;
                const isCurrent = stage.id === activeStage;
                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setIsSimulating(false);
                      setActiveStage(stage.id);
                    }}
                    className={`flex-1 p-2 rounded-lg text-left transition-all text-xs border ${
                      isCurrent
                        ? 'bg-[#FFFFFF] border-[#647C68] shadow-xs text-[#171717] ring-1 ring-[#647C68]/20'
                        : isPassed
                        ? 'bg-[#EEF2EC]/60 border-[#647C68]/30 text-[#171717]'
                        : 'bg-[#FFFFFF]/60 border-[#E8E8E5] text-[#737373] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={isCurrent ? 'text-[#647C68] font-bold' : ''}>
                        #{stage.id.toString().padStart(2, '0')}
                      </span>
                      {isPassed && <CheckCircle2 className="w-3 h-3 text-[#647C68]" />}
                    </div>
                    <div className="font-medium truncate text-[11px]">{stage.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Live Dashboard Panels */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Columns: Active Stage Inspector & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#EEF2EC] text-[#647C68]">
                    Stage {activeStage} of 10
                  </span>
                  <h3 className="text-base font-semibold text-[#171717]">
                    {stages[activeStage - 1].title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#737373]">
                  System: {stages[activeStage - 1].system}
                </span>
              </div>

              <p className="text-sm text-[#737373] leading-relaxed">
                {stages[activeStage - 1].desc}
              </p>

              {/* Real-time Stage Log Box */}
              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] font-mono text-xs space-y-2">
                <div className="text-[10px] uppercase text-[#737373] pb-1 border-b border-[#E8E8E5] flex items-center justify-between">
                  <span>Execution Audit Log</span>
                  <span className="text-[#647C68]">Telemetry 200 OK</span>
                </div>
                <div className="text-[#171717] space-y-1 text-[11px]">
                  <div>[timestamp: 2026-10-26 14:22:01.482Z]</div>
                  <div>[event: lead_transition_step_{activeStage}]</div>
                  <div>[handler: {stages[activeStage - 1].system}] Payload valid; schema compliant.</div>
                  <div className="text-[#647C68] font-semibold">
                    ✓ Action verified. Zero human intervention needed for this transition.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openBookingModal('Lead-to-Appointment System Build')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-full transition-colors shadow-xs"
                >
                  <span>Discuss a Similar System for My Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Live Lead Status Cards */}
            <div className="lg:col-span-5 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E5]">
                <span className="text-xs font-semibold text-[#171717]">
                  Sample Inbound Record
                </span>
                <span className="text-[10px] font-mono text-[#647C68] bg-[#EEF2EC] px-2 py-0.5 rounded font-semibold">
                  Active In Pipeline
                </span>
              </div>

              {/* Mock Record Fields */}
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">Lead:</span>
                  <span className="font-medium text-[#171717]">Dr. Elena Rostova</span>
                </div>
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">Company:</span>
                  <span className="font-medium text-[#171717]">Horizon Dental Clinics</span>
                </div>
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">Qualification Score:</span>
                  <span className="font-semibold text-[#647C68]">96/100 (Tier 1 Priority)</span>
                </div>
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">CRM Deal Stage:</span>
                  <span className="font-medium text-[#171717]">Qualified Discovery</span>
                </div>
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">Appointment Status:</span>
                  <span className="font-semibold text-[#171717] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#647C68]" /> Confirmed (Tomorrow 11 AM)
                  </span>
                </div>
                <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] flex justify-between">
                  <span className="text-[#737373]">Next Scheduled Action:</span>
                  <span className="text-[#647C68] font-medium">Auto WhatsApp Reminder (-2h)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
