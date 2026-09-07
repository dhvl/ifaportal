'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const AgencyComparisonGrid: React.FC = () => {
  return (
    <section id="benchmark" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-200">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Commercial Value Analysis</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Traditional Web Agencies vs. The IFA Portal
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            UK financial marketing agencies typically charge <strong>£4,000 to £12,000 upfront</strong> for static WordPress sites with 12-week turnaround times. Here is how our modern platform compares on speed, lead capture, and commercial value.
          </p>
        </div>

        {/* Comparison Table / Box Matrix (Actuaries & Fintuity Style) */}
        <div className="max-w-5xl mx-auto bg-[#FDFCF9] border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0B1B2B] text-white p-5 sm:p-6 text-xs sm:text-sm font-black items-center">
            <div className="col-span-5 sm:col-span-4 text-slate-300 uppercase tracking-wider">
              Capability &amp; Scope
            </div>
            <div className="col-span-4 sm:col-span-4 text-center text-amber-400 uppercase tracking-wider font-extrabold flex items-center justify-center space-x-1.5">
              <Zap className="w-4 h-4 text-amber-400 hidden sm:inline" />
              <span>Our IFA Portal</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-center text-slate-400 uppercase tracking-wider">
              Traditional Agency Builds
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-200/80 text-xs sm:text-sm bg-white">
            {/* Row 1: Upfront Setup Capital */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Upfront Setup Capital</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">Cash outlay required before going live</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>£0 Setup (Quarterly)</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600 font-mono">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>£4,000 – £12,000</span>
                </div>
              </div>
            </div>

            {/* Row 2: Turnaround Time */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Deployment Speed</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">From onboarding to live FCA portal</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live in 2 Minutes</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>8 – 14 Weeks Agency Backlog</span>
                </div>
              </div>
            </div>

            {/* Row 3: 24/7 Lead Qualification */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Lead Conversion Tech</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">Capturing prospects after business hours</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 AI Concierge + WhatsApp</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>Static Contact Form (&gt;70% dropoff)</span>
                </div>
              </div>
            </div>

            {/* Row 4: Interactive Client Calculators */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Financial Tools</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">Pension, IHT &amp; Compound calculators</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3 Live Interactive UK Calculators</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>None (Static PDF downloads)</span>
                </div>
              </div>
            </div>

            {/* Row 5: Social Media Growth Retainer */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Social Media Retainer</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">Ongoing LinkedIn and content support</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Included 3-Month DFY Retainer</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600 font-mono">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>+£800 – £1,500/mo Extra Surcharge</span>
                </div>
              </div>
            </div>

            {/* Row 6: Technology Stack */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-50/60 transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-extrabold text-slate-900 block">Architecture &amp; Speed</span>
                <span className="text-[11px] text-slate-500 hidden sm:block">Hosting, security &amp; mobile speed</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Next.js 15 + Edge Serverless CDN</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 hidden sm:inline" />
                  <span>Monolithic PHP / WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Takeaway Card (Unbiased / Fintuity style) */}
        <div className="max-w-4xl mx-auto bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-800">
              The Commercial Advantage
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">
              Save over £8,000 in Year 1 while generating 3x more qualified leads
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Eliminate large upfront design fees and avoid ongoing maintenance headaches. Focus entirely on client advisory and portfolio management.
            </p>
          </div>

          <Link
            href="/admin/onboard"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
          >
            <span>Onboard Your Practice</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
