'use client';

import React from 'react';
import { ShieldCheck, Check, X, ArrowRight, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const AgencyComparisonGrid: React.FC = () => {
  return (
    <section id="benchmark" className="py-20 bg-[#F0F7FB] border-t-2 border-[#D8E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Friendly Agency Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#B45309]" />
            <span>The Difference</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
            Why advisers choose us over traditional design agencies.
          </h2>
          
          <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
            Old-school agencies charge £5,000–£15,000 upfront and take 12 weeks of endless Zoom calls for a static WordPress site. We build high-converting client portals in days.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="max-w-5xl mx-auto bg-white border-2 border-[#D8E5EE] rounded-[32px] overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#08232C] text-white p-5 sm:p-6 text-xs sm:text-sm font-black items-center border-b-2 border-[#143946]">
            <div className="col-span-5 sm:col-span-4 text-[#AFC3C9] uppercase tracking-wider">
              Feature
            </div>
            <div className="col-span-4 sm:col-span-4 text-center text-[#F3C044] uppercase tracking-wider font-extrabold flex items-center justify-center space-x-1.5">
              <Zap className="w-4 h-4 text-[#F3C044] hidden sm:inline" />
              <span>IFA Media</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-center text-[#AFC3C9] uppercase tracking-wider">
              Traditional Web Agency
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-[#E2EEF5] text-xs sm:text-sm bg-white">
            {/* Row 1: Upfront Cost */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Upfront Sunk Cost</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Cash needed before anything launches</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Included Onboarding</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>£5,000 – £15,000</span>
                </div>
              </div>
            </div>

            {/* Row 2: Turnaround Time */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Launch Speed</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">From onboarding to live website</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Ready in Days</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>8 – 14 Weeks</span>
                </div>
              </div>
            </div>

            {/* Row 3: 24/7 AI Lead Concierge */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">24/7 AI Concierge</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Qualifies leads and books calls</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Included in Growth</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Not Available</span>
                </div>
              </div>
            </div>

            {/* Row 4: Financial Calculators */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Wealth Calculators</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Drawdown, 40% IHT, and ISA tools</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>3 Models Included</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Static Contact Forms</span>
                </div>
              </div>
            </div>

            {/* Row 5: Social Media Growth */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">Social Media Retainer</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Weekly content to drive traffic</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>3 Months Included</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Extra £500–£1,000/mo</span>
                </div>
              </div>
            </div>

            {/* Row 6: FCA Compliance */}
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#F4F9FD] transition-colors">
              <div className="col-span-5 sm:col-span-4 pr-2">
                <span className="font-black text-[#08232C] block">FCA Compliance Ready</span>
                <span className="text-[11px] text-[#636F75] hidden sm:block">Consumer Duty &amp; FSCS disclaimers</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1.5 font-black text-[#0A6B48] bg-[#E8F8F2] px-3.5 py-1.5 rounded-xl border border-[#B4ECD6]">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
                  <span>Pre-Configured</span>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-4 text-center">
                <div className="inline-flex items-center space-x-1 font-bold text-[#869299]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 hidden sm:inline" />
                  <span>Manual DIY Copy</span>
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
