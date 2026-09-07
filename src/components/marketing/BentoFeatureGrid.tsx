'use client';

import React from 'react';
import { 
  Bot, Calculator, Clock, ShieldCheck, Database, 
  Zap, Lock, CheckCircle2, TrendingUp, Sparkles
} from 'lucide-react';

export const BentoFeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Engineered for UK Financial Advisers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Purpose-Built Technology to Attract &amp; Convert HNW Clients
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Legacy agency sites treat your website as a static brochure. We transform your practice portal into an active client acquisition engine with built-in social media and AI.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: 24/7 AI Concierge (Peach Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FDE8E1] text-[#D9532F] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D9532F]">
                Available on Pro Plan
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                24/7 AI Concierge &amp; Lead Qualifier
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trained on UK financial regulations and FCA COBS 4 rules. Answers pension, tax, and drawdown questions 24/7, qualifies asset levels, and books initial consultations directly into your calendar.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Compliance Risk</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Pre-programmed with strict disclaimers clarifying information vs personal advice.
            </p>
          </div>
        </div>

        {/* Card 2: Interactive UK Financial Calculators (Sky Blue Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E3EEFC] text-[#1E60C6] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <Calculator className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1E60C6]">
                Interactive Tools
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                3 Interactive UK Financial Calculators
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Give prospective clients immediate clarity on their wealth. Interactive modeling for <strong>Pension Drawdown</strong>, <strong>40% Inheritance Tax (IHT)</strong>, and <strong>Compound Growth</strong> that gate summary reports for lead capture.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>5x Higher Engagement</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Visitors spend 3.8 minutes interacting with calculators vs 45 seconds on static pages.
            </p>
          </div>
        </div>

        {/* Card 3: Built-in 3-Month Social Media Retainer (Topaz / Amber Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FEF3D6] text-[#B47806] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#B47806]">
                Standard on Both Plans
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Built-in 3-Month Social Media Retainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A great website needs qualified traffic. Both plans include a default 3-month Done-For-You (DFY) social media retainer covering weekly LinkedIn thought leadership posts and Facebook content.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/70 text-xs text-amber-950 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-amber-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
              <span>£0 Setup Fee on Quarterly</span>
            </div>
            <p className="text-[11px] text-amber-900/80">
              Commit to 3 months to see organic growth and pay exactly £0 in upfront setup fees.
            </p>
          </div>
        </div>

        {/* Card 4: FCA Compliance Engine (Eucalyptus / Emerald Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#15803D]">
                Regulatory Assurance
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Automated FCA Compliance Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stay compliant effortlessly. Automated FRN register verification, mandatory FSCS £85k protection badges, Whole of Market declarations, and Consumer Duty fee transparency modules.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Consumer Duty Ready</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Upfront fee breakdown eliminates client misunderstanding and fulfills FCA standards.
            </p>
          </div>
        </div>

        {/* Card 5: UK GDPR Data Sovereignty (Mauve / Purple Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-purple-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7E22CE]">
                UK Data Protection Act 2018
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Built-in UK GDPR &amp; Data Sovereignty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                256-bit TLS encryption in transit and AES-256 at rest. All client lead data is hosted within UK-based cloud infrastructure with explicit opt-in consent checkboxes and right-to-erasure workflows.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <Database className="w-3.5 h-3.5 text-purple-600" />
              <span>Zero 3rd-Party Selling</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Your practice client data belongs solely to you; never shared or sold to broker networks.
            </p>
          </div>
        </div>

        {/* Card 6: 2-Minute Onboarding Wizard (Teal / Waterspout Pastel) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-5 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0369A1]">
                Rapid Deployment
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Live in 2 Minutes (Not 12 Weeks)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Say goodbye to 8 to 14 week agency backlogs. Our automated 6-step onboarding wizard provisions your practice domain, branding colors, FCA disclaimers, team directory, and tools in under 120 seconds.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Zero Technical Setup</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Includes automated SSL, CDN edge caching, and mobile responsiveness out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
