'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Calculator, MessageSquare, ShieldCheck, Sparkles, 
  ExternalLink, Award, Clock, Layers
} from 'lucide-react';

export const InteractivePreviewWidget: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'pro' | 'starter'>('pro');

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 max-w-5xl mx-auto">
      {/* Tier Switcher Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 block">
            Interactive Portal Benchmark
          </span>
          <h3 className="text-xl font-extrabold text-slate-900">
            Compare Our Two Flagship Client Tiers
          </h3>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 w-full sm:w-auto">
          <button
            onClick={() => setActiveTier('pro')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
              activeTier === 'pro'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Client 1: Pro / Premium</span>
          </button>

          <button
            onClick={() => setActiveTier('starter')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
              activeTier === 'starter'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Client 2: Starter</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      {activeTier === 'pro' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1e293b] text-amber-400 font-serif font-bold text-xl flex items-center justify-center shadow-md">
                H
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-xl font-black text-slate-900">Heritage &amp; Trust Financial</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                    Pro Tier Flagship
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">FCA FRN: 419203 &bull; St. Peter Square, Manchester</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Designed for established wealth management practices managing multi-generational private clients. Converts passive visitors using an active <strong>24/7 AI Concierge Chatbot</strong>, <strong>3 UK financial calculators</strong>, and automated downloadable retirement guides.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-amber-950">
                  <Bot className="w-4 h-4 text-amber-600" />
                  <span>24/7 AI Lead Qualifier</span>
                </div>
                <p className="text-[11px] text-amber-900/80">
                  Trained on FCA COBS 4 rules; answers client pension questions &amp; routes qualified leads.
                </p>
              </div>

              <div className="p-3 bg-blue-50/60 border border-blue-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-blue-950">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span>3 Live UK Calculators</span>
                </div>
                <p className="text-[11px] text-blue-900/80">
                  Pension drawdown forecasting, 40% IHT tax liability, and compound ISA wealth models.
                </p>
              </div>

              <div className="p-3 bg-purple-50/60 border border-purple-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-purple-950">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>HNW Lead Magnets</span>
                </div>
                <p className="text-[11px] text-purple-900/80">
                  Downloadable retirement guides that automatically capture qualified prospect emails.
                </p>
              </div>

              <div className="p-3 bg-emerald-50/60 border border-emerald-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-emerald-950">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Built-in Social Retainer</span>
                </div>
                <p className="text-[11px] text-emerald-900/80">
                  3-month LinkedIn &amp; Facebook content strategy included by default.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/portal/heritage-trust"
                target="_blank"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>Launch Live Pro Portal Demo</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-500 font-medium">
                Or navigate via subdomain: <code className="text-slate-800 font-bold bg-slate-100 px-1.5 py-0.5 rounded">pro.(domain)</code>
              </span>
            </div>
          </div>

          {/* Right Simulated Interactive Mockup */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0B1B2B] rounded-3xl p-6 text-white space-y-5 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400">heritage-trust.ifaportal.co.uk</span>
            </div>

            {/* AI Bot preview snippet */}
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                  AI
                </div>
                <div className="p-3 bg-slate-800/90 rounded-2xl rounded-tl-xs text-slate-200 leading-relaxed max-w-xs">
                  Hello! I am the Heritage &amp; Trust digital concierge. Are you exploring retirement drawdown or estate tax mitigation?
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2">
                <span className="p-2.5 bg-amber-500 text-slate-950 font-bold rounded-2xl rounded-tr-xs text-xs">
                  Reviewing my £650k pension pot
                </span>
              </div>

              <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-amber-400">Estimated Annual Tax-Free Drawdown</span>
                  <span className="font-mono font-black text-white">£42,250 / yr</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[65%]" />
                </div>
              </div>
            </div>

            <div className="pt-2 text-center text-[10px] text-slate-400">
              Active on Heritage &amp; Trust &bull; 256-Bit Encrypted &bull; UK GDPR Protected
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0f2744] text-amber-400 font-bold text-xl flex items-center justify-center shadow-md">
                M
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-xl font-black text-slate-900">MLP Wealth Management</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
                    Starter Tier Flagship
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">FCA FRN: 592810 &bull; 12 Park Square, Leeds</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Designed for boutique independent advisers and solo practitioners. Delivers a clean, authoritative web presence with <strong>Direct WhatsApp Lead Routing</strong>, whole-of-market disclosures, and transparent fee schedules without complex calculators.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-emerald-50/60 border border-emerald-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-emerald-950">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp Inquiries</span>
                </div>
                <p className="text-[11px] text-emerald-900/80">
                  Frictionless floating button routing prospects directly to the adviser&apos;s WhatsApp line.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>FCA COBS 4 Compliance</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Whole of Market disclosures, FRN verification badge, and Consumer Duty statements.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-slate-900">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>VouchedFor Reviews</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Verified client ratings and testimonial showcases that establish instant trust.
                </p>
              </div>

              <div className="p-3 bg-teal-50/60 border border-teal-200/60 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 font-bold text-xs text-teal-950">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Built-in Social Retainer</span>
                </div>
                <p className="text-[11px] text-teal-900/80">
                  Done-For-You 3-month LinkedIn &amp; Facebook content retainer included as standard.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/portal/mlp-wealth"
                target="_blank"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>Launch Live Starter Portal Demo</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-500 font-medium">
                Or navigate via subdomain: <code className="text-slate-800 font-bold bg-slate-100 px-1.5 py-0.5 rounded">starter.(domain)</code>
              </span>
            </div>
          </div>

          {/* Right Simulated Interactive Mockup */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0f2744] rounded-3xl p-6 text-white space-y-5 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400">mlpwealth.ifaportal.co.uk</span>
            </div>

            {/* Starter snippet */}
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  FCA Whole of Market Guarantee
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  &quot;Transparent fixed initial consultation + 0.50% - 0.75% p.a. ongoing discretionary management with zero exit fees.&quot;
                </p>
              </div>

              <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-xs block">WhatsApp Lead Inquiry</span>
                    <span className="text-[10px] text-emerald-300">Direct connection to Senior IFA</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black uppercase">
                  Active
                </span>
              </div>
            </div>

            <div className="pt-2 text-center text-[10px] text-slate-400">
              Active on MLP Wealth &bull; UK Data Protection Act 2018 Compliant
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
