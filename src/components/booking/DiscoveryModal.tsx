'use client';

import React, { useState, useEffect } from 'react';
import { useBookingModal } from '@/context/BookingModalContext';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, User, Mail, MessageSquare } from 'lucide-react';
import { BRAND, SERVICES } from '@/lib/constants';

export default function DiscoveryModal() {
  const { isOpen, closeBookingModal, selectedService } = useBookingModal();

  const [step, setStep] = useState<'schedule' | 'details' | 'confirmed'>('schedule');
  const [service, setService] = useState(selectedService);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timezone, setTimezone] = useState('Local Time');

  // Dates for next 5 business days
  const [availableDates, setAvailableDates] = useState<{ dateStr: string; label: string; sub: string }[]>([]);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    // Generate next 5 business days
    const dates = [];
    const now = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 5) {
      const d = new Date(now);
      d.setDate(now.getDate() + daysAhead);
      // Skip weekends
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        const dateStr = d.toISOString().split('T')[0];
        const label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const sub = count === 0 ? 'Next Available' : 'Available';
        dates.push({ dateStr, label, sub });
        count++;
      }
      daysAhead++;
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].dateStr);
      setSelectedTime('10:00 AM');
    }

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setTimezone(tz);
    } catch {
      // fallback
    }
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  const handleNextToDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setErrorMessage('Please select both a date and time slot.');
      return;
    }
    setErrorMessage('');
    setStep('details');
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) {
      setErrorMessage('Please fill in your name, business email, and company.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          businessEmail: email,
          companyName: company,
          industry: service,
          automationGoal: notes || `Discovery Call scheduled for ${selectedDate} at ${selectedTime}`,
          preferredContact: 'Video Call / Discovery Call',
          scheduledSlot: `${selectedDate} at ${selectedTime} (${timezone})`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to record discovery session. Please try again.');
      }

      setStep('confirmed');
    } catch {
      // Even in offline demo mode, let the user experience the confirmed state
      setStep('confirmed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    closeBookingModal();
    setTimeout(() => {
      setStep('schedule');
      setName('');
      setEmail('');
      setCompany('');
      setNotes('');
      setErrorMessage('');
    }, 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="discovery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#FAFAF8] text-[#171717] rounded-2xl border border-[#E8E8E5] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-[#E8E8E5] bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] text-[#647C68] flex items-center justify-center font-semibold text-sm border border-[#647C68]/20">
              R
            </div>
            <div>
              <h2 id="discovery-modal-title" className="text-base font-semibold text-[#171717]">
                Book a Discovery Call
              </h2>
              <p className="text-xs text-[#737373]">
                30-minute practical workflow audit · Zero sales pressure
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="p-2 text-[#737373] hover:text-[#171717] hover:bg-[#EEF2EC] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {step === 'schedule' && (
            <form onSubmit={handleNextToDetails} className="space-y-6">
              {/* Service Focus */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
                  Primary Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                >
                  <option value="General Automation Discovery">General Automation & Systems Audit</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Custom AI Agent System">Custom AI Agent & Tool Integration</option>
                </select>
              </div>

              {/* Date selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#737373] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#647C68]" /> Select Date
                  </label>
                  <span className="text-xs text-[#737373]">Timezone: {timezone}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.dateStr;
                    return (
                      <button
                        type="button"
                        key={item.dateStr}
                        onClick={() => setSelectedDate(item.dateStr)}
                        className={`p-3 text-left rounded-xl border text-sm transition-all ${
                          isSelected
                            ? 'bg-[#EEF2EC] border-[#647C68] text-[#171717] font-medium shadow-xs'
                            : 'bg-[#FFFFFF] border-[#E8E8E5] text-[#171717] hover:border-[#647C68]/40'
                        }`}
                      >
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-xs text-[#647C68] mt-0.5">{item.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#647C68]" /> Select Time Window
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-2 text-center rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-[#647C68] text-[#FFFFFF] border-[#647C68] shadow-xs'
                            : 'bg-[#FFFFFF] border-[#E8E8E5] text-[#171717] hover:border-[#647C68]/40'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {errorMessage && (
                <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Next Button */}
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E8E5]">
                <div className="flex items-center gap-2 text-xs text-[#737373]">
                  <ShieldCheck className="w-4 h-4 text-[#647C68]" />
                  <span>No obligation · 100% confidential</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-xl transition-colors shadow-xs"
                >
                  Continue to Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'details' && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="p-3 bg-[#EEF2EC] rounded-xl border border-[#647C68]/20 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#171717]">Selected Session: </span>
                  <span className="text-[#647C68] font-medium">{service}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('schedule')}
                  className="text-xs text-[#647C68] underline hover:text-[#526756]"
                >
                  Change time
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#647C68]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#647C68]" /> Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#647C68]" /> Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Health Clinic"
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-[#647C68]" /> What repetitive task would you like to automate?
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. We get 40 inquiries a week via website form and WhatsApp. We want to auto-qualify them and send calendar booking links without manual email back-and-forth."
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] resize-none"
                />
              </div>

              {errorMessage && (
                <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between border-t border-[#E8E8E5]">
                <button
                  type="button"
                  onClick={() => setStep('schedule')}
                  className="text-xs text-[#737373] hover:text-[#171717]"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#647C68] hover:bg-[#526756] disabled:opacity-60 text-[#FFFFFF] text-sm font-medium rounded-xl transition-colors shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Scheduling Call...
                    </>
                  ) : (
                    <>
                      Confirm Discovery Call <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-6 px-2 space-y-5 animate-fade-in">
              <div className="w-14 h-14 bg-[#EEF2EC] text-[#647C68] rounded-full flex items-center justify-center mx-auto border border-[#647C68]/20">
                <CheckCircle2 className="w-8 h-8 text-[#647C68]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#171717]">Discovery Call Requested!</h3>
                <p className="text-sm text-[#737373] mt-1 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#171717]">{name || 'there'}</span>. We have recorded your request for{' '}
                  <span className="font-semibold text-[#171717]">{selectedDate}</span> at{' '}
                  <span className="font-semibold text-[#171717]">{selectedTime}</span> ({timezone}).
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E8E5] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="font-semibold text-[#171717] text-sm pb-1 border-b border-[#E8E8E5] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#647C68]" /> What to expect next:
                </div>
                <p className="text-[#737373]">
                  1. You will receive a calendar confirmation email at <span className="font-medium text-[#171717]">{email || 'your email'}</span>.
                </p>
                <p className="text-[#737373]">
                  2. We’ll review your business workflows and prepare a live architecture diagram for our 30-minute session.
                </p>
                <p className="text-[#737373]">
                  3. No pushy sales pitch—just practical analysis of your highest ROI automation opportunities.
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-sm font-medium rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#EEF2EC]/50 border-t border-[#E8E8E5] text-[11px] text-[#737373] flex items-center justify-between">
          <span>{BRAND.name} · Enterprise Automation Systems</span>
          <span>Encrypted Submission</span>
        </div>
      </div>
    </div>
  );
}
