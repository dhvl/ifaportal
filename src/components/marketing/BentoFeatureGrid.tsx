'use client';

import React from 'react';
import { 
  Bot, Calculator, Clock, ShieldCheck, Database, 
  Zap, CheckCircle2, TrendingUp, Sparkles
} from 'lucide-react';

export const BentoFeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-black uppercase tracking-wider border border-slate-200">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Engineered Exclusively for UK Wealth Advisers</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
          Purpose-Built Technology to Win HNW Clients
        </h2>
        
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Traditional agency websites treat your portal as an online brochure. We engineer an active client acquisition engine that qualifies visitors and builds your practice pipeline.
        </p>
      </div>

      {/* Structured Content Boxes Grid (Actuaries & Fintuity Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Box 1: 24/7 AI Concierge */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200 group-hover:scale-105 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">
                Wealth Pro Feature
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                24/7 AI Concierge &amp; Lead Qualifier
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trained on UK financial regulations and FCA COBS 4 rules. Answers pension, tax, and drawdown questions 24/7, qualifies asset levels, and books consultations directly into your calendar.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Regulatory Advice Risk</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Pre-programmed with strict boundary disclaimers clarifying information versus regulated advice.
            </p>
          </div>
        </div>

        {/* Box 2: 3 UK Financial Calculators */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold border border-blue-200 group-hover:scale-105 transition-transform">
              <Calculator className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block">
                Lead Magnets Built-In
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                3 Interactive UK Financial Calculators
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Give prospective clients immediate clarity on their wealth. Interactive modeling for <strong>Pension Drawdown</strong>, <strong>40% Inheritance Tax (IHT)</strong>, and <strong>Compound Growth</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-slate-900">
              <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
              <span>5x Longer Dwell Time</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Prospects spend 3.8 minutes interacting with calculators vs 45 seconds on static brochures.
            </p>
          </div>
        </div>

        {/* Box 3: Built-in 3-Month Social Media Retainer */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 group-hover:scale-105 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">
                Standard on Both Plans
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Built-in 3-Month Social Growth Retainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A great portal needs qualified organic traffic. Both Starter and Pro plans include a Done-For-You 3-month social media growth retainer covering weekly LinkedIn thought leadership posts and newsletters.
              </p>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>£0 Setup on Quarterly Contract</span>
            </div>
            <p className="text-[11px] text-emerald-900/80 leading-relaxed">
              Commit to 3 months of consistent authority building and waive all upfront onboarding fees.
            </p>
          </div>
        </div>

        {/* Box 4: FCA Compliance Engine */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">
                Regulatory Assurance
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                FCA Compliance &amp; Consumer Duty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated FRN register verification, mandatory FSCS £85k protection badges, Whole of Market declarations, and Consumer Duty fee transparency modules pre-configured on every portal.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Consumer Duty FG22/5 Ready</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Transparent charging tiers eliminate client misunderstanding and satisfy FCA expectations.
            </p>
          </div>
        </div>

        {/* Box 5: UK GDPR Data Sovereignty */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-purple-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold border border-purple-200 group-hover:scale-105 transition-transform">
              <Database className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 block">
                UK Data Protection Act 2018
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                UK Data Sovereignty &amp; Encryption
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                256-bit TLS encryption in transit and AES-256 at rest. All prospect lead data is hosted within UK cloud infrastructure with explicit opt-in consent checkboxes and right-to-erasure workflows.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Strict Fiduciary Protection</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Your client leads belong 100% to your firm; never shared, sold, or pooled into broker networks.
            </p>
          </div>
        </div>

        {/* Box 6: 2-Minute Onboarding Wizard */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold border border-teal-200 group-hover:scale-105 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-700 block">
                Rapid Deployment
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Live in 2 Minutes (Not 12 Weeks)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Say goodbye to 8 to 14 week agency backlogs. Our automated 6-step onboarding wizard provisions your practice subdomain, branding palette, team directory, and FCA tools in under 120 seconds.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
            <div className="flex items-center space-x-2 font-black text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Automated Subdomains &amp; SSL</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Instant routing for starter and pro domains with zero server maintenance required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
