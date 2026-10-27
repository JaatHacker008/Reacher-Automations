'use client';

import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { PortfolioProject } from '@/types';
import { useBookingModal } from '@/context/BookingModalContext';
import { 
  Play, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  X, 
  Terminal, 
  Database, 
  Layers, 
  Send, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  FileText,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const { openBookingModal } = useBookingModal();

  const categories = [
    'All',
    'Lead Systems',
    'Customer Care AI',
    'CRM & Pipelines',
    'Scheduling & Booking',
    'Document AI',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const startModalSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(4);
      setIsSimulating(false);
    }, 2100);
  };

  const openSimulator = (project: PortfolioProject) => {
    setSelectedProject(project);
    setSimStep(4); // Default to full completed preview
    setIsSimulating(false);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#647C68]" />
              Agency Portfolio & Systems
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717] mb-4">
              Proven Automation Architectures.
            </h2>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Explore our deployed systems. Each implementation connects existing business tools into autonomous, resilient workflows with strict human oversight.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono text-[#737373]">
              Showing {filteredProjects.length} Systems
            </span>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[#E8E8E5]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#171917] text-[#F5F5F0] shadow-xs'
                  : 'bg-[#FFFFFF] border border-[#E8E8E5] text-[#737373] hover:text-[#171717] hover:border-[#647C68]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#FFFFFF] rounded-3xl border border-[#E8E8E5] p-6 sm:p-10 shadow-xs hover:border-[#647C68]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-[#E8E8E5] gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#EEF2EC] text-[#647C68]">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#737373] bg-[#FAFAF8] px-2 py-0.5 rounded border border-[#E8E8E5]">
                      Client: {project.clientType}
                    </span>
                    <span className="text-[10px] font-mono bg-[#FAFAF8] text-[#737373] px-2 py-0.5 rounded border border-[#E8E8E5]">
                      {project.isPrototype ? 'Interactive System Prototype' : 'Production Deployment'}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717]">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#647C68] mt-1">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openSimulator(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EEF2EC] hover:bg-[#647C68] text-[#171717] hover:text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-2xs group"
                  >
                    <Play className="w-3.5 h-3.5 text-[#647C68] group-hover:text-white" />
                    <span>Test Interactive Live Simulator</span>
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Problem & Deep Features Explained */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Context & Problem */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-1.5">
                      The Operational Challenge:
                    </span>
                    <p className="text-sm text-[#737373] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution Overview */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-1.5">
                      The Automated Solution Architecture:
                    </span>
                    <p className="text-sm text-[#171717] leading-relaxed font-medium">
                      {project.solutionOverview}
                    </p>
                  </div>

                  {/* Deep Features Explained */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block mb-3">
                      Core Features Engineered:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.coreFeaturesExplained.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3.5 bg-[#FAFAF8] rounded-xl border border-[#E8E8E5] space-y-1"
                        >
                          <div className="text-xs font-semibold text-[#171717] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#647C68]" />
                            {feat.featureTitle}
                          </div>
                          <p className="text-xs text-[#737373] leading-relaxed">
                            {feat.explanation}
                          </p>
                          <div className="text-[10px] font-mono text-[#647C68] pt-1">
                            {feat.technicalImplementation}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-2">
                      Connected Tool Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E8E5] rounded-lg text-[#171717]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Visual Node Architecture & Before/After Comparison */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Visual Node Diagram */}
                  <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] p-5 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E5]">
                      <span className="text-xs font-semibold text-[#171717] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#647C68]" /> Pipeline Architecture
                      </span>
                      <span className="text-[10px] font-mono bg-[#EEF2EC] text-[#647C68] px-2 py-0.5 rounded">
                        Connected End-to-End
                      </span>
                    </div>

                    <div className="space-y-2">
                      {project.architectureNodes.map((node, nIdx) => (
                        <div
                          key={nIdx}
                          className="p-2.5 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-md bg-[#EEF2EC] text-[#647C68] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                              0{nIdx + 1}
                            </span>
                            <div>
                              <span className="font-semibold text-[#171717] block">
                                {node.label}
                              </span>
                              <span className="text-[10px] text-[#737373]">
                                {node.detail}
                              </span>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#FAFAF8] text-[#737373] border border-[#E8E8E5]">
                            {node.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Before vs After Comparison Card */}
                  <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] p-5 space-y-3 shadow-2xs">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block pb-2 border-b border-[#E8E8E5]">
                      Operational Impact Comparison:
                    </span>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Before Box */}
                      <div className="p-3 bg-red-50/50 rounded-xl border border-red-200/60 space-y-1">
                        <span className="text-[10px] uppercase font-mono text-red-600 font-bold block">
                          Before (Manual)
                        </span>
                        <div className="text-[#171717] font-semibold">
                          {project.beforeAfter.before.speed}
                        </div>
                        <p className="text-[11px] text-[#737373] leading-snug">
                          {project.beforeAfter.before.friction}
                        </p>
                      </div>

                      {/* After Box */}
                      <div className="p-3 bg-[#EEF2EC] rounded-xl border border-[#647C68]/30 space-y-1">
                        <span className="text-[10px] uppercase font-mono text-[#647C68] font-bold block">
                          After (Reacher)
                        </span>
                        <div className="text-[#171717] font-semibold">
                          {project.beforeAfter.after.speed}
                        </div>
                        <p className="text-[11px] text-[#171717]/80 leading-snug">
                          {project.beforeAfter.after.benefit}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 bg-[#FAFAF8] rounded-lg border border-[#E8E8E5] text-center">
                          <span className="text-xs font-bold text-[#647C68] block">
                            {m.value}
                          </span>
                          <span className="text-[9px] text-[#737373] block mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-[#E8E8E5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#737373]">
                  <ShieldCheck className="w-4 h-4 text-[#647C68]" />
                  <span>Tested & resilient architecture · Custom integration adaptable to your stack</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => openBookingModal(`Deploy ${project.title}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-xs"
                  >
                    <span>Deploy Similar System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Live Simulator Modal */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto space-y-6 shadow-2xl text-[#171717]">
              {/* Modal Topbar */}
              <div className="flex items-start justify-between pb-4 border-b border-[#E8E8E5]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-[#647C68] bg-[#EEF2EC] px-2.5 py-0.5 rounded-full font-semibold uppercase">
                      Live Simulation Sandbox
                    </span>
                    <span className="text-[11px] font-mono text-[#737373]">
                      {selectedProject.title}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#171717]">
                    Interactive Execution Inspector
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#737373] hover:text-[#171717] rounded-xl hover:bg-[#EEF2EC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulation Controller Bar */}
              <div className="p-4 bg-[#171917] text-[#F5F5F0] rounded-2xl border border-[#2C332C] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#202420] text-[#647C68] flex items-center justify-center font-mono text-xs">
                    RUN
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#F5F5F0]">
                      System Test Runner
                    </div>
                    <div className="text-[10px] font-mono text-[#A0A09A]">
                      Latency: ~2.1s · Status: Active Simulation
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startModalSimulation}
                  disabled={isSimulating}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#647C68] hover:bg-[#526756] disabled:opacity-50 text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isSimulating ? 'Executing Pipeline...' : 'Run Fresh Test Lead'}</span>
                </button>
              </div>

              {/* Step-by-Step Flow Inspector */}
              <div className="space-y-4 text-xs font-mono">
                {/* Stage 1: Inbound Payload */}
                <div className={`p-4 rounded-xl border transition-all ${
                  simStep >= 1 ? 'bg-[#FAFAF8] border-[#E8E8E5]' : 'opacity-40 bg-[#FAFAF8] border-[#E8E8E5]'
                }`}>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E8E8E5] text-[11px]">
                    <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#647C68]" />
                      Stage 1: Inbound Webhook Payload Captured
                    </span>
                    <span className="text-[#647C68]">Source: {selectedProject.demoInteractiveData.sampleInput.source}</span>
                  </div>
                  <pre className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] overflow-x-auto text-[11px] text-[#171717]">
                    {JSON.stringify(selectedProject.demoInteractiveData.sampleInput.rawPayload, null, 2)}
                  </pre>
                </div>

                {/* Stage 2: AI Reasoning */}
                <div className={`p-4 rounded-xl border transition-all ${
                  simStep >= 2 ? 'bg-[#FAFAF8] border-[#647C68]/40' : 'opacity-40 bg-[#FAFAF8] border-[#E8E8E5]'
                }`}>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E8E8E5] text-[11px]">
                    <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#647C68]" />
                      Stage 2: AI Classification & Structured Reasoning
                    </span>
                    <span className="text-[#647C68] font-bold">Confidence: {selectedProject.demoInteractiveData.aiAnalysis.confidence}</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] space-y-1.5 text-[11px]">
                    <div><span className="text-[#737373]">Category:</span> <strong className="text-[#171717]">{selectedProject.demoInteractiveData.aiAnalysis.classification}</strong></div>
                    <div><span className="text-[#737373]">Reasoning:</span> <span className="text-[#171717]">{selectedProject.demoInteractiveData.aiAnalysis.reasoning}</span></div>
                  </div>
                </div>

                {/* Stage 3: CRM / Database Action */}
                <div className={`p-4 rounded-xl border transition-all ${
                  simStep >= 3 ? 'bg-[#FAFAF8] border-[#E8E8E5]' : 'opacity-40 bg-[#FAFAF8] border-[#E8E8E5]'
                }`}>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E8E8E5] text-[11px]">
                    <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-[#647C68]" />
                      Stage 3: Database & CRM Record Provisioning
                    </span>
                    <span className="text-[#647C68]">{selectedProject.demoInteractiveData.crmAction.destination}</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E8E8E5] text-[11px]">
                    <span className="text-[#737373]">Record Status: </span>
                    <span className="font-semibold text-[#171717]">{selectedProject.demoInteractiveData.crmAction.recordState}</span>
                  </div>
                </div>

                {/* Stage 4: Outbound Dispatch */}
                <div className={`p-4 rounded-xl border transition-all ${
                  simStep >= 4 ? 'bg-[#EEF2EC] border-[#647C68]/40' : 'opacity-40 bg-[#FAFAF8] border-[#E8E8E5]'
                }`}>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#647C68]/30 text-[11px]">
                    <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-[#647C68]" />
                      Stage 4: Outbound Customer Dispatch & Notification
                    </span>
                    <span className="text-[#647C68] font-bold">Channel: {selectedProject.demoInteractiveData.notificationOut.channel}</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#647C68]/20 text-[11px] text-[#171717]">
                    {selectedProject.demoInteractiveData.notificationOut.message}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E8E5]">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    openBookingModal(`Deploy ${title}`);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors shadow-xs"
                >
                  <span>Build This Workflow For My Agency / Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-[#737373] hover:text-[#171717]"
                >
                  Close Sandbox
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
