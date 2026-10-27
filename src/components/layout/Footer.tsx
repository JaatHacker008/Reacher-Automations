'use client';

import React, { useState, useEffect } from 'react';
import { BRAND, SERVICES } from '@/lib/constants';
import { useBookingModal } from '@/context/BookingModalContext';
import { ArrowUpRight, Mail, ShieldCheck, Cpu } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const { openBookingModal } = useBookingModal();

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#171917] text-[#F5F5F0] border-t border-[#2C332C] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#2C332C]">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#202420] text-[#647C68] border border-[#647C68]/30 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#647C68]"
                >
                  <circle cx="6" cy="6" r="2.5" fill="#647C68" />
                  <circle cx="18" cy="6" r="2.5" fill="#F5F5F0" />
                  <circle cx="18" cy="18" r="2.5" fill="#647C68" />
                  <circle cx="6" cy="18" r="2.5" fill="#F5F5F0" />
                  <path
                    d="M6 8.5V15.5M8.5 6H15.5M8.5 18H15.5M18 8.5V15.5M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg text-[#F5F5F0] tracking-tight">
                {BRAND.name}
              </span>
            </div>

            <p className="text-xs font-medium text-[#647C68] uppercase tracking-wider">
              {BRAND.tagline}
            </p>

            <p className="text-xs leading-relaxed text-[#A0A09A]">
              We design and implement connected automation systems that help businesses capture leads,
              automate repetitive follow-ups, and simplify everyday operations with human oversight.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#A0A09A]">
              <ShieldCheck className="w-4 h-4 text-[#647C68]" />
              <span>Strict data privacy · Zero public hallucinations</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F0]/60">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A0A09A]">
              <li>
                <a href="/" className="hover:text-[#F5F5F0] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F5F5F0] transition-colors">
                  About Reacher
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#F5F5F0] transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-[#F5F5F0] transition-colors">
                  Industry Solutions
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-[#F5F5F0] transition-colors">
                  Demonstration Systems
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-[#F5F5F0] transition-colors">
                  Implementation Process
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F5F5F0] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F0]/60">
              Automation Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A0A09A]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/services#${s.id}`}
                    className="hover:text-[#F5F5F0] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F0]/60">
              Connect & Engage
            </h3>
            <div className="space-y-3 text-xs text-[#A0A09A]">
              <div>
                <span className="block text-[11px] text-[#A0A09A]/80 uppercase">Business Inquiries</span>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-xs text-[#F5F5F0] hover:text-[#647C68] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#647C68]" />
                  <span>{BRAND.email}</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-[#A0A09A]/80 uppercase">Social Profiles</span>
                <div className="flex items-center gap-3 mt-1.5">
                  <a
                    href={BRAND.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#202420] text-[#A0A09A] hover:text-[#F5F5F0] hover:bg-[#2C332C] transition-colors"
                    aria-label="Reacher Automation on LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53 1.53 1.53 0 0 0-1.53-1.54 1.54 1.54 0 0 0-1.54 1.54c0 .85.69 1.53 1.54 1.53m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                    </svg>
                  </a>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#202420] text-[#A0A09A] hover:text-[#F5F5F0] hover:bg-[#2C332C] transition-colors"
                    aria-label="Reacher Automation on Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162Zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4Zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full py-2.5 px-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A09A]">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#647C68]" />
            <span>
              © {currentYear} {BRAND.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-[#F5F5F0] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#2C332C]">·</span>
            <a href="/terms" className="hover:text-[#F5F5F0] transition-colors">
              Terms of Service
            </a>
            <span className="text-[#2C332C]">·</span>
            <span className="text-[#A0A09A]/70">Built with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
