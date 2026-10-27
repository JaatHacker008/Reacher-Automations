'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight, Sparkles, Building, Mail, User, Globe, Briefcase } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    website: '',
    industry: 'Education',
    businessSize: '1–10 employees',
    automationGoal: '',
    preferredContact: 'Email',
    budgetRange: 'To be determined',
    honeypot: '', // anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const industries = [
    'Education',
    'Healthcare',
    'Beauty & Wellness',
    'Professional Services',
    'E-commerce',
    'Other',
  ];

  const businessSizes = [
    '1–10 employees',
    '11–50 employees',
    '51–200 employees',
    '200+ employees',
  ];

  const contactMethods = [
    'Email',
    'WhatsApp / Message',
    'Video Discovery Call',
  ];

  const budgetRanges = [
    'Flexible / Scoped during audit',
    'Starter Project (< $3,000)',
    'Multi-System Automation ($3,000 – $8,000)',
    'Advanced Enterprise Architecture ($8,000+)',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim() || !formData.businessEmail.trim() || !formData.companyName.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, business email, and company.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.businessEmail.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (!formData.automationGoal.trim()) {
      setStatus('error');
      setErrorMessage('Please briefly describe what you would like to automate.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setReferenceId(data.referenceId || 'RCH-SUBMITTED');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('A network error occurred. Please try again.');
      }
    }
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 bg-[#FAFAF8] relative border-b border-[#E8E8E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E8E8E5] rounded-3xl p-6 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2EC] border border-[#647C68]/20 text-[#647C68] text-xs font-semibold uppercase tracking-wider">
                Let&apos;s Build Your System
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] leading-tight">
                Which Part of Your Business Should Run Automatically?
              </h2>

              <p className="text-base text-[#737373] leading-relaxed">
                Tell us about the repetitive tasks slowing your team down. We&apos;ll discuss the workflow, integrations, and practical next steps.
              </p>

              {/* What happens next */}
              <div className="pt-6 border-t border-[#E8E8E5] space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] block">
                  What Happens After Submission:
                </span>

                <div className="space-y-3 text-xs text-[#737373]">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF2EC] text-[#647C68] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span>
                      <strong className="text-[#171717]">Initial Scope Review:</strong> We review your business tools and process requirements.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF2EC] text-[#647C68] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span>
                      <strong className="text-[#171717]">Architecture Blueprint:</strong> We draft a preliminary workflow map connecting your tools.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF2EC] text-[#647C68] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span>
                      <strong className="text-[#171717]">Discovery Call:</strong> 30-minute practical session with zero sales pressure.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs text-[#737373]">
                <ShieldCheck className="w-4 h-4 text-[#647C68]" />
                <span>Your information is strictly confidential. Never shared or sold.</span>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7 bg-[#FAFAF8] rounded-2xl border border-[#E8E8E5] p-6 sm:p-8">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-[#EEF2EC] text-[#647C68] rounded-full flex items-center justify-center mx-auto border border-[#647C68]/30">
                    <CheckCircle2 className="w-10 h-10 text-[#647C68]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#647C68] bg-[#EEF2EC] px-3 py-1 rounded-full uppercase font-semibold">
                      Reference: {referenceId}
                    </span>
                    <h3 className="text-2xl font-semibold text-[#171717] mt-3">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#737373] mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#171717]">{formData.fullName}</span>. We have logged your automation requirements and will review your workflow.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] max-w-md mx-auto text-left text-xs space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase text-[#737373] pb-1 border-b border-[#E8E8E5]">
                      Submission Summary
                    </div>
                    <div><span className="text-[#737373]">Company:</span> <span className="font-medium text-[#171717]">{formData.companyName}</span></div>
                    <div><span className="text-[#737373]">Sector:</span> <span className="font-medium text-[#171717]">{formData.industry}</span></div>
                    <div><span className="text-[#737373]">Method:</span> <span className="font-medium text-[#171717]">{formData.preferredContact}</span></div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        fullName: '',
                        businessEmail: '',
                        companyName: '',
                        website: '',
                        industry: 'Education',
                        businessSize: '1–10 employees',
                        automationGoal: '',
                        preferredContact: 'Email',
                        budgetRange: 'To be determined',
                        honeypot: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#647C68] hover:bg-[#526756] text-[#FFFFFF] text-xs font-medium rounded-xl transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam prevention */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#647C68]" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rachel Chen"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#647C68]" /> Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        required
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="rachel@company.com"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      />
                    </div>
                  </div>

                  {/* Company and Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-[#647C68]" /> Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Chen Health Group"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-[#647C68]" /> Website (Optional)
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://company.com"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      />
                    </div>
                  </div>

                  {/* Industry & Business Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      >
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Business Size (Optional)
                      </label>
                      <select
                        name="businessSize"
                        value={formData.businessSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      >
                        {businessSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Automation Goal */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                      What Would You Like to Automate? *
                    </label>
                    <textarea
                      name="automationGoal"
                      required
                      rows={3}
                      value={formData.automationGoal}
                      onChange={handleChange}
                      placeholder="e.g. We want to automatically capture inquiries from our landing page, score them based on service needs, and route them to our CRM with automated calendar booking links."
                      className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all resize-none"
                    />
                  </div>

                  {/* Preferred Contact & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      >
                        {contactMethods.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Estimated Budget (Optional)
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#E8E8E5] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#647C68] focus:ring-1 focus:ring-[#647C68] transition-all"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 bg-[#647C68] hover:bg-[#526756] disabled:opacity-60 text-[#FFFFFF] text-sm font-medium rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing Request...
                        </>
                      ) : (
                        <>
                          <span>Request a Discovery Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#737373] mt-2.5">
                      No pressure. Just a practical conversation about your workflow.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
