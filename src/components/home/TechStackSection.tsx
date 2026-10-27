'use client';

import React, { useState } from 'react';
import { TECH_STACK } from '@/lib/constants';
import { Layers, ShieldCheck, Cpu, Database, MessageSquare, Calendar, Workflow } from 'lucide-react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Orchestration', 'AI & LLMs', 'CRM & Sales', 'Communication', 'Database & Storage'];

  const filteredTools =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider mb-4">
            Tools That Work Together
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
            Your Tools. Connected Intelligently.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Every system is designed around your requirements, existing tools, and workflow constraints.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#171917] text-[#F5F5F0]'
                  : 'bg-[#FFFFFF] border border-[#E8E8E5] text-[#737373] hover:text-[#171717] hover:border-[#647C68]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="p-5 bg-[#FFFFFF] rounded-2xl border border-[#E8E8E5] hover:border-[#647C68]/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] text-[#647C68] flex items-center justify-center font-mono font-semibold text-xs">
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono text-[#737373] bg-[#FAFAF8] px-2 py-0.5 rounded border border-[#E8E8E5]">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[#171717] mb-1.5">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E8E5]/70 flex items-center justify-between text-[11px] font-mono text-[#647C68]">
                <span>{tool.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Independent Integrator Disclaimer (Section 11 requirement) */}
        <div className="mt-10 p-4 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] text-xs text-[#737373] flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#647C68] shrink-0" />
          <span>
            Reacher Automation designs custom architectures connecting compatible third-party platforms via official APIs and webhooks. All product and brand names are trademarks of their respective owners.
          </span>
        </div>
      </div>
    </section>
  );
}
