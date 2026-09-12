'use client';

import React from 'react';
import { 
  Bot, Calculator, Clock, ShieldCheck, Database, 
  Zap, TrendingUp, Sparkles, Check
} from 'lucide-react';

export const BentoFeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Friendly Agency Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span>What You Get</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
          Everything you need to turn clicks into consultations.
        </h2>
        
        <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
          No fluff, no technical headaches. Just the proven tools that help UK financial planners win high-net-worth clients.
        </p>
      </div>

      {/* 6 Chunky Box Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* Box 1: 24/7 AI Concierge */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#FDF0EC] border-2 border-[#FACBC0] text-[#B43403] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Bot className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">01</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#B43403] block">
                Growth Plan
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                24/7 AI Concierge
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Answers common pension and tax questions 24/7, qualifies portfolio size, and books discovery calls into your diary.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs flex items-center space-x-2 font-bold text-[#08232C]">
            <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
            <span>Strict information vs advice guardrails</span>
          </div>
        </div>

        {/* Box 2: 3 UK Financial Calculators */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] border-2 border-[#BFD9FE] text-[#1A56DB] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Calculator className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">02</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1A56DB] block">
                Interactive Tools
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                3 UK Wealth Calculators
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Interactive Pension Drawdown, 40% IHT, and Compound ISA calculators that keep visitors engaged and booking.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs flex items-center space-x-2 font-bold text-[#08232C]">
            <Check className="w-4 h-4 text-[#1A56DB] shrink-0" />
            <span>5x longer visitor dwell time</span>
          </div>
        </div>

        {/* Box 3: Built-in 3-Month Social Media Retainer */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#FEF8E7] border-2 border-[#FDE68A] text-[#92400E] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">03</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#92400E] block">
                Included in Both Plans
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                3-Month Social Growth Retainer
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                A great website needs eyeballs. We create and publish weekly LinkedIn thought leadership posts and client newsletters for you.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#FEF8E7] rounded-2xl border border-[#FDE68A] text-xs flex items-center space-x-2 font-bold text-[#92400E]">
            <Check className="w-4 h-4 text-[#92400E] shrink-0" />
            <span>Builds organic local advisory authority</span>
          </div>
        </div>

        {/* Box 4: FCA Compliance Engine */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F2] border-2 border-[#B4ECD6] text-[#0A6B48] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">04</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0A6B48] block">
                Compliance Built-In
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                FCA &amp; Consumer Duty Ready
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Automated FRN register verification, £85k FSCS badges, and transparent fee tables that satisfy Consumer Duty COBS 4 rules.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs flex items-center space-x-2 font-bold text-[#08232C]">
            <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
            <span>FCA Consumer Duty FG22/5 compliant</span>
          </div>
        </div>

        {/* Box 5: UK GDPR Data Sovereignty */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F0FE] border-2 border-[#E9D5FF] text-[#7E22CE] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Database className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">05</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7E22CE] block">
                Data Privacy
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                UK Hosted &amp; GDPR Certified
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                All data is encrypted and stored in UK cloud infrastructure. Your prospect leads belong 100% to your firm — never sold or pooled.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs flex items-center space-x-2 font-bold text-[#08232C]">
            <Check className="w-4 h-4 text-[#7E22CE] shrink-0" />
            <span>UK Data Protection Act 2018 standard</span>
          </div>
        </div>

        {/* Box 6: Rapid Deployment */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F7F6] border-2 border-[#A7F3D0] text-[#047857] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">06</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#047857] block">
                Fast Turnaround
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                Live in Days, Not Months
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                No 12-week agency delays. We configure your custom brand palette, adviser bios, subdomains, and lead capture tools in days.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs flex items-center space-x-2 font-bold text-[#08232C]">
            <Check className="w-4 h-4 text-[#047857] shrink-0" />
            <span>Turnkey setup &amp; zero hosting stress</span>
          </div>
        </div>
      </div>
    </section>
  );
};
