'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowDown, Sparkles, Database, Send, Calendar, Clock, ChevronRight, Activity, Terminal } from 'lucide-react';

interface WorkflowNode {
  id: string;
  stepNumber: string;
  label: string;
  system: string;
  statusText: string;
  timeAgo: string;
  icon: React.ReactNode;
  payload: {
    title: string;
    fields: { key: string; value: string }[];
  };
}

export default function HeroWorkflowVisual() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nodes: WorkflowNode[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      label: 'NEW LEAD',
      system: 'Web Inbound Webhook',
      statusText: 'Lead received',
      timeAgo: '0.2s',
      icon: <Sparkles className="w-4 h-4 text-[#647C68]" />,
      payload: {
        title: 'Incoming Inbound Payload',
        fields: [
          { key: 'Source', value: 'Website Inbound Form' },
          { key: 'Lead Name', value: 'Alex Morgan' },
          { key: 'Company', value: 'Vanguard Medical Group' },
          { key: 'Inquiry', value: 'Looking to automate patient intake & reminder sequences' },
        ],
      },
    },
    {
      id: 'step-2',
      stepNumber: '02',
      label: 'AI QUALIFICATION',
      system: 'Reasoning Engine',
      statusText: 'Qualification completed',
      timeAgo: '0.8s',
      icon: <Activity className="w-4 h-4 text-[#647C68]" />,
      payload: {
        title: 'AI Evaluation & Scoring',
        fields: [
          { key: 'Fit Score', value: '94 / 100 (Tier 1 High Intent)' },
          { key: 'Budget Status', value: 'Confirmed Enterprise Scope' },
          { key: 'Intent', value: 'Appointment Scheduling Automation' },
          { key: 'Routing Decision', value: 'Direct Priority Calendar Route' },
        ],
      },
    },
    {
      id: 'step-3',
      stepNumber: '03',
      label: 'CRM UPDATE',
      system: 'HubSpot / Postgres Sync',
      statusText: 'CRM updated',
      timeAgo: '1.1s',
      icon: <Database className="w-4 h-4 text-[#647C68]" />,
      payload: {
        title: 'Bidirectional Record Sync',
        fields: [
          { key: 'Contact Record', value: 'Created & Tagged #Healthcare' },
          { key: 'Deal Stage', value: 'Discovery Initiated' },
          { key: 'Assigned Lead Owner', value: 'Senior Automation Lead' },
          { key: 'Audit Hash', value: '0x8f2c...41b' },
        ],
      },
    },
    {
      id: 'step-4',
      stepNumber: '04',
      label: 'AUTOMATED FOLLOW-UP',
      system: 'WhatsApp & Email API',
      statusText: 'Follow-up scheduled',
      timeAgo: '1.4s',
      icon: <Send className="w-4 h-4 text-[#647C68]" />,
      payload: {
        title: 'Instant Contextual Response',
        fields: [
          { key: 'Channel', value: 'WhatsApp Business API + Email' },
          { key: 'Message Template', value: 'Personalized Intro & Direct Booking' },
          { key: 'Dynamic Link', value: 'reacher.co/book/vanguard' },
          { key: 'Delivery State', value: 'Delivered · Read in 14s' },
        ],
      },
    },
    {
      id: 'step-5',
      stepNumber: '05',
      label: 'APPOINTMENT BOOKED',
      system: 'Calendar Engine',
      statusText: 'Appointment confirmed',
      timeAgo: '2.3s',
      icon: <Calendar className="w-4 h-4 text-[#647C68]" />,
      payload: {
        title: 'Calendar Slot Locked',
        fields: [
          { key: 'Meeting Time', value: 'Tomorrow at 10:30 AM EST' },
          { key: 'Video Link', value: 'Google Meet invite generated' },
          { key: 'Reminder Trigger', value: 'Scheduled -24h and -1h' },
          { key: 'Prep Briefing', value: 'Generated for team in Slack' },
        ],
      },
    },
  ];

  // Auto cycle active step every 3 seconds if user hasn't paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % nodes.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nodes.length]);

  const activeNode = nodes[activeStepIndex];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Container Card */}
      <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:border-[#647C68]/30">
        {/* Terminal / Live Monitor Bar */}
        <div className="bg-[#171917] text-[#F5F5F0] px-4 py-3 flex items-center justify-between border-b border-[#2C332C]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
            </div>
            <span className="text-xs font-mono text-[#A0A09A] ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#647C68]" /> reacher-pipeline:active
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#647C68]/20 text-[#81C784] border border-[#647C68]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#81C784] animate-pulse" />
              LIVE ORCHESTRATION
            </span>
          </div>
        </div>

        {/* Workflow Diagram & Steps */}
        <div className="p-5 sm:p-6 bg-[#FAFAF8]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E8E5]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                Workflow Pipeline
              </span>
              <h4 className="text-sm font-semibold text-[#171717]">
                Lead-to-Appointment Automation
              </h4>
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-[#E8E8E5] bg-[#FFFFFF] text-[#737373] hover:text-[#171717] transition-colors"
            >
              {isAutoPlaying ? 'Pause Simulation' : 'Resume Flow'}
            </button>
          </div>

          {/* Connected Flow Steps */}
          <div className="space-y-2">
            {nodes.map((node, index) => {
              const isActive = index === activeStepIndex;
              const isPast = index < activeStepIndex;
              return (
                <div key={node.id} className="relative">
                  {/* Step Card */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveStepIndex(index);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#FFFFFF] border-[#647C68] shadow-xs ring-1 ring-[#647C68]/20'
                        : isPast
                        ? 'bg-[#FFFFFF]/70 border-[#E8E8E5] text-[#171717]'
                        : 'bg-[#FAFAF8] border-[#E8E8E5]/70 text-[#737373] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Indicator */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#EEF2EC] text-[#647C68] border border-[#647C68]/40'
                            : isPast
                            ? 'bg-[#EEF2EC] text-[#647C68]'
                            : 'bg-[#E8E8E5] text-[#737373]'
                        }`}
                      >
                        {isPast ? <CheckCircle2 className="w-4 h-4 text-[#647C68]" /> : node.stepNumber}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold tracking-tight text-[#171717]">
                            {node.label}
                          </span>
                          <span className="text-[10px] font-mono text-[#737373] bg-[#E8E8E5]/50 px-1.5 py-0.5 rounded">
                            {node.system}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#737373] flex items-center gap-1 mt-0.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? 'bg-[#647C68] animate-ping' : isPast ? 'bg-[#647C68]' : 'bg-[#A0A09A]'
                            }`}
                          />
                          {node.statusText}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#737373] flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" /> {node.timeAgo}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#647C68] translate-x-0.5' : 'text-[#737373]/50'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Connecting subtle line between steps */}
                  {index < nodes.length - 1 && (
                    <div className="h-2 w-0.5 bg-[#E8E8E5] mx-auto my-0.5 relative">
                      {isPast && <div className="absolute inset-0 bg-[#647C68]" />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Payload Inspector */}
          <div className="mt-4 p-3.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E8E8E5] text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#171717]">
                <Activity className="w-3.5 h-3.5 text-[#647C68]" />
                <span>Payload Inspector: {activeNode.payload.title}</span>
              </div>
              <span className="text-[10px] font-mono text-[#647C68] bg-[#EEF2EC] px-2 py-0.5 rounded">
                Status: Complete
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {activeNode.payload.fields.map((field) => (
                <div key={field.key} className="p-2 bg-[#FAFAF8] rounded-lg border border-[#E8E8E5]/60">
                  <span className="block text-[10px] uppercase font-mono text-[#737373]">
                    {field.key}
                  </span>
                  <span className="font-medium text-[#171717]">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer reassurance */}
        <div className="px-5 py-2.5 bg-[#FFFFFF] border-t border-[#E8E8E5] flex items-center justify-between text-[11px] text-[#737373]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#647C68]" />
            End-to-end execution: ~2.3 seconds
          </span>
          <span className="font-mono text-[#647C68]">100% human handoff ready</span>
        </div>
      </div>
    </div>
  );
}
