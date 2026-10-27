'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useBookingModal } from '@/context/BookingModalContext';
import { BRAND } from '@/lib/constants';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Services & Features', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E8E8E5] shadow-xs py-3.5'
          : 'bg-[#FAFAF8]/70 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#647C68] rounded-lg"
          >
            {/* Minimal abstract connected system logo: stylized R with connected nodes */}
            <div className="relative w-9 h-9 rounded-xl bg-[#171917] text-[#F5F5F0] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-xs">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#647C68]"
              >
                {/* Connected nodes geometry */}
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
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-[#171717] group-hover:text-[#647C68] transition-colors">
                {BRAND.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#737373] -mt-1 font-medium">
                Systems & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/80 border border-[#E8E8E5] px-3 py-1.5 rounded-full shadow-xs">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-[#EEF2EC] text-[#171717] font-semibold'
                      : 'text-[#737373] hover:text-[#171717] hover:bg-[#FAFAF8]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-full transition-all duration-200 shadow-xs hover:shadow-sm transform active:scale-95"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              className="px-3 py-1.5 bg-[#647C68] text-[#FFFFFF] text-xs font-medium rounded-full"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 text-[#171717] bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-[#FFFFFF] border border-[#E8E8E5] rounded-2xl shadow-xl space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#171717] hover:bg-[#EEF2EC] transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#737373]" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8E8E5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-3 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
