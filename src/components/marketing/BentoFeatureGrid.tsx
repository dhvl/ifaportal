'use client';

import React from 'react';
import { 
  Bot, Calculator, Clock, ShieldCheck, Database, 
  Zap, TrendingUp, Sparkles, Check
} from 'lucide-react';

export const BentoFeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#E5DFD1] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span>FCA-Compliant Architecture</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
          Purpose-Built Technology to Attract &amp; Convert HNW Clients
        </h2>
        
        <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
          Traditional agency websites treat your portal as a passive digital brochure. We engineer an active client acquisition engine that pre-qualifies visitors and builds your practice pipeline 24/7.
        </p>
      </div>

      {/* Chunky Box Architecture Grid (Actuaries & Fintuity Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* Box 1: 24/7 AI Concierge (Warm Coral Peach) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#FDF0EC] border-2 border-[#FACBC0] text-[#B43403] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Bot className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">01</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#B43403] block">
                Wealth Pro Feature
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                24/7 AI Concierge &amp; Lead Qualifier
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Trained on UK financial regulations and FCA COBS 4 rules. Answers pension, tax, and drawdown questions 24/7, qualifies asset levels, and books initial consultations directly into your calendar.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#08232C]">
              <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
              <span>Zero Regulatory Advice Risk</span>
            </div>
            <p className="text-[11px] text-[#636F75] leading-relaxed">
              Pre-programmed with strict disclaimers clarifying financial information vs regulated advice.
            </p>
          </div>
        </div>

        {/* Box 2: 3 UK Financial Calculators (Sky Topaz) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] border-2 border-[#BFD9FE] text-[#1A56DB] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Calculator className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">02</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1A56DB] block">
                High-Dwell Tools
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                3 Interactive UK Financial Calculators
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Give prospective clients immediate clarity on their wealth. Interactive modeling for <strong>Pension Drawdown</strong>, <strong>40% Inheritance Tax (IHT)</strong>, and <strong>Compound Growth</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#08232C]">
              <TrendingUp className="w-4 h-4 text-[#1A56DB] shrink-0" />
              <span>5x Higher Engagement</span>
            </div>
            <p className="text-[11px] text-[#636F75] leading-relaxed">
              Prospects spend an average of 3.8 minutes on calculators vs 45 seconds on static brochures.
            </p>
          </div>
        </div>

        {/* Box 3: Built-in 3-Month Social Media Retainer (Golden Topaz) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#FEF8E7] border-2 border-[#FDE68A] text-[#92400E] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">03</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#92400E] block">
                Standard on Both Plans
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                Built-in 3-Month Social Growth Retainer
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                A great practice website needs qualified inbound traffic. Both plans include a default 3-month Done-For-You (DFY) social media retainer covering weekly LinkedIn thought leadership and newsletters.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FEF8E7] rounded-2xl border border-[#FDE68A] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#92400E]">
              <Check className="w-4 h-4 text-[#92400E] shrink-0" />
              <span>£0 Setup on Quarterly Contract</span>
            </div>
            <p className="text-[11px] text-[#78350F] leading-relaxed">
              Commit to 3 months of consistent authority building and waive all upfront onboarding fees.
            </p>
          </div>
        </div>

        {/* Box 4: FCA Compliance Engine (Eucalyptus Mint) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F2] border-2 border-[#B4ECD6] text-[#0A6B48] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">04</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0A6B48] block">
                Regulatory Assurance
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                FCA Compliance &amp; Consumer Duty
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Automated FRN register verification, mandatory FSCS £85k protection badges, Whole of Market declarations, and Consumer Duty fee transparency modules pre-configured on every portal.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#08232C]">
              <Check className="w-4 h-4 text-[#0A6B48] shrink-0" />
              <span>Consumer Duty FG22/5 Ready</span>
            </div>
            <p className="text-[11px] text-[#636F75] leading-relaxed">
              Transparent charging tiers eliminate client misunderstanding and fulfill strict FCA rules.
            </p>
          </div>
        </div>

        {/* Box 5: UK GDPR Data Sovereignty (Soft Mauve) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F0FE] border-2 border-[#E9D5FF] text-[#7E22CE] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Database className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">05</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7E22CE] block">
                UK Data Protection Act 2018
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                UK Data Sovereignty &amp; Encryption
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                256-bit TLS encryption in transit and AES-256 at rest. All prospect lead data is hosted within UK cloud infrastructure with explicit opt-in consent checkboxes and right-to-erasure workflows.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#08232C]">
              <Check className="w-4 h-4 text-[#7E22CE] shrink-0" />
              <span>Strict Fiduciary Protection</span>
            </div>
            <p className="text-[11px] text-[#636F75] leading-relaxed">
              Your client leads belong 100% to your firm; never shared, sold, or pooled into broker networks.
            </p>
          </div>
        </div>

        {/* Box 6: 2-Minute Onboarding Wizard (Waterspout Teal) */}
        <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-colors duration-150 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F7F6] border-2 border-[#A7F3D0] text-[#047857] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-black text-[#C4BCAB]">06</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#047857] block">
                Rapid Deployment
              </span>
              <h3 className="text-xl font-black text-[#08232C] tracking-tight">
                Live in 2 Minutes (Not 12 Weeks)
              </h3>
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Say goodbye to 8 to 14 week agency backlogs. Our automated onboarding wizard provisions your practice subdomain, branding palette, team directory, and FCA tools in under 120 seconds.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-[#08232C]">
              <Check className="w-4 h-4 text-[#047857] shrink-0" />
              <span>Automated Subdomains &amp; SSL</span>
            </div>
            <p className="text-[11px] text-[#636F75] leading-relaxed">
              Instant routing for starter and pro domains with zero server maintenance required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
