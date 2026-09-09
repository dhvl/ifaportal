'use client';

import React from 'react';
import { ShieldCheck, Check, X, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const AgencyComparisonGrid: React.FC = () => {
  return (
    <section id="benchmark" className="py-24 bg-[#F7F4EC] border-t-2 border-[#E5DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#E5DFD1] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#B45309]" />
            <span>Commercial Value Analysis</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
            Traditional Web Agencies vs. The IFA Portal
          </h2>
          
          <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
            UK financial marketing agencies typically charge <strong>£4,000 to £12,000 upfront</strong> for static WordPress sites with 12-week backlogs. Here is how our modern platform compares on speed, lead capture, and commercial value.
          </p>
        </div>

        {/* Comparison Table / Box Matrix (Actuaries & Fintuity Style) */}
        <div className="max-w-5xl mx-auto bg-white border-2 border-[#E5DFD1] rounded-[32px] overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#08232C] text-white p-5 sm:p-6 text-xs sm:text-sm font-black items-center border-b-2 border-[#143946]">
            <div className="col-span-5 sm:col-span-4 text-[#AFC3C9] uppercase tracking-wider">
              Capability &amp; Scope
            </div>
            <div className="col-span-4 sm:col-span-4 text-center text-[#F3C044] uppercase tracking-wider font-extrabold flex items-center justify-center space-x-1.5">
              <Zap className="w-4 h-4 text-[#F3C044] hidden sm:inline" />
              <span>Our IFA Portal Platform</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-center text-[#AFC3C9] uppercase tracking-wider">
              Traditional Agency Builds
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-[#F0EBE0] text-xs sm:text-sm bg-white">
            {/* Row 1: Upfront Setup Capital */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Upfront Setup Capital</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Cash outlay required before going live</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6] font-mono">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>£0 Setup (Quarterly)</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299] font-mono">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>£4,000 – £12,000</span>
                </div>
              </div>
            </div>

            {/* Row 2: Turnaround Time */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Deployment Speed</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">From onboarding to live FCA portal</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6] font-mono">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Live in 2 Minutes</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>8 – 14 Weeks Agency Backlog</span>
                </div>
              </div>
            </div>

            {/* Row 3: 24/7 Lead Qualification */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Lead Conversion Tech</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Capturing prospects after business hours</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>24/7 AI Concierge + WhatsApp</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Static Contact Form (&gt;70% dropoff)</span>
                </div>
              </div>
            </div>

            {/* Row 4: Interactive Client Calculators */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Financial Tools</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Pension, IHT &amp; Compound calculators</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>3 Live Interactive UK Calculators</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>None (Static PDF downloads)</span>
                </div>
              </div>
            </div>

            {/* Row 5: Social Media Growth Retainer */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Social Media Retainer</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Ongoing LinkedIn and content support</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Included 3-Month DFY Retainer</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299] font-mono">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>+£800 – £1,500/mo Extra Surcharge</span>
                </div>
              </div>
            </div>

            {/* Row 6: Technology Stack */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F2] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Architecture &amp; Speed</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Hosting, security &amp; mobile performance</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Next.js 15 + Edge Serverless CDN</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Monolithic PHP / WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Takeaway Card (Unbiased & Actuaries Style) */}
        <div className="max-w-4xl mx-auto bg-[#FEF8E7] border-2 border-[#FDE68A] rounded-[32px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#92400E]">
              The Commercial Advantage
            </span>
            <h4 className="text-2xl font-black text-[#08232C]">
              Save over £8,000 in Year 1 while generating 3x more qualified leads
            </h4>
            <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
              Eliminate large upfront design fees and avoid ongoing maintenance headaches. Focus entirely on client advisory and portfolio management.
            </p>
          </div>

          <Link
            href="/admin/onboard"
            className="shrink-0 px-7 py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 border border-[#184654]"
          >
            <span>Onboard Your Practice</span>
            <ArrowRight className="w-4 h-4 text-[#F3C044]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
