'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  PlusCircle, ArrowRight, Calculator, 
  Sparkles, UserCheck
} from 'lucide-react';
import { InteractivePreviewWidget } from './InteractivePreviewWidget';

export const MarketingHero: React.FC = () => {
  const [selectedPracticeType, setSelectedPracticeType] = useState<'pro' | 'starter' | 'pension'>('pro');

  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] border-b-2 border-[#E5DFD1] pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Main Editorial Hero Copy (Unbiased / Fintuity inspired) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Regulatory Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#E5DFD1] text-[#08232C] text-xs px-4 py-2 rounded-full font-bold shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A6B48] animate-pulse" />
            <span className="font-extrabold tracking-wide text-[#08232C]">FCA WHOLE OF MARKET READY</span>
            <span className="text-[#C4BCAB]">&bull;</span>
            <span className="text-[#636F75]">Consumer Duty Standard FG22/5 &bull; UK GDPR Certified</span>
          </div>

          {/* Punchy Editorial Headline (Unbiased style) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#08232C] tracking-tight leading-[1.05]">
            The Modern Practice Engine for UK Financial Advisers
          </h1>

          {/* High-credibility Subtitle */}
          <p className="text-base sm:text-xl text-[#475760] max-w-3xl mx-auto leading-relaxed font-normal">
            Transform passive web traffic into high-net-worth pension and wealth management consultations. Bespoke Next.js portals pre-configured with a <strong>24/7 AI Concierge</strong>, <strong>interactive financial calculators</strong>, and a <strong>built-in 3-month social media growth retainer</strong>.
          </p>

          {/* Unbiased-Style Interactive Practice Matcher (Chunky British Box) */}
          <div className="pt-2 max-w-3xl mx-auto">
            <div className="bg-white border-2 border-[#E5DFD1] rounded-3xl p-5 shadow-sm space-y-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#636F75] block">
                Select Your Practice Model to Preview Tailored Architecture:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Option 1: Multi-Adviser Wealth Practice */}
                <button
                  onClick={() => setSelectedPracticeType('pro')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPracticeType === 'pro'
                      ? 'border-[#08232C] bg-[#FEF8E7] shadow-xs'
                      : 'border-[#E5DFD1] hover:border-[#08232C] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-black text-xs text-[#08232C]">Multi-Adviser Practice</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                  </div>
                  <span className="text-[11px] text-[#636F75] font-medium">
                    Wealth Pro (£599/mo) &bull; AI Concierge &amp; Calculators
                  </span>
                </button>

                {/* Option 2: Solo Boutique IFA */}
                <button
                  onClick={() => setSelectedPracticeType('starter')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPracticeType === 'starter'
                      ? 'border-[#08232C] bg-[#E8F8F2] shadow-xs'
                      : 'border-[#E5DFD1] hover:border-[#08232C] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-black text-xs text-[#08232C]">Solo Boutique IFA</span>
                    <UserCheck className="w-3.5 h-3.5 text-[#0A6B48]" />
                  </div>
                  <span className="text-[11px] text-[#636F75] font-medium">
                    Starter Growth (£249/mo) &bull; Direct WhatsApp Booking
                  </span>
                </button>

                {/* Option 3: Retirement & Pension Specialist */}
                <button
                  onClick={() => setSelectedPracticeType('pension')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPracticeType === 'pension'
                      ? 'border-[#08232C] bg-[#EEF5FF] shadow-xs'
                      : 'border-[#E5DFD1] hover:border-[#08232C] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-black text-xs text-[#08232C]">Pension Specialist</span>
                    <Calculator className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  </div>
                  <span className="text-[11px] text-[#636F75] font-medium">
                    Wealth Pro (£599/mo) &bull; Drawdown &amp; IHT Calculators
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs (Unbiased Golden & Deep Navy Buttons) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4">
            <Link
              href="/admin/onboard"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-[#184654]"
            >
              <PlusCircle className="w-5 h-5 text-[#F3C044]" />
              <span>Onboard Practice (2 Mins)</span>
            </Link>

            <Link
              href="#roi-calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-[#E5DFD1] text-[#08232C] font-black text-xs uppercase tracking-widest hover:border-[#08232C] hover:bg-[#FDFBF7] transition-all shadow-2xs flex items-center justify-center space-x-2"
            >
              <span>Calculate Practice ROI</span>
              <ArrowRight className="w-4 h-4 text-[#B45309]" />
            </Link>
          </div>
        </div>

        {/* Interactive Live Benchmark Widget */}
        <div id="templates" className="pt-4">
          <InteractivePreviewWidget selectedPreset={selectedPracticeType} />
        </div>
      </div>
    </section>
  );
};
