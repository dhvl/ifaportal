'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Calculator, MessageSquare, ShieldCheck, Sparkles, 
  ExternalLink, Award, Clock, Layers, ArrowRight, CheckCircle2
} from 'lucide-react';

export const InteractivePreviewWidget: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'pro' | 'starter'>('pro');

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8 max-w-5xl mx-auto">
      {/* Top Header & Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Flagship Demos</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Explore Our Two UK Practice Tier Demos
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 pt-0.5">
            Click between tiers to view the live client-facing templates and conversion features.
          </p>
        </div>

        {/* Toggle Pills (Fintuity style) */}
        <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 w-full sm:w-auto">
          <button
            onClick={() => setActiveTier('pro')}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
              activeTier === 'pro'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Client 1: Wealth Pro (£599/mo)</span>
          </button>

          <button
            onClick={() => setActiveTier('starter')}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
              activeTier === 'starter'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Client 2: Starter (£249/mo)</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      {activeTier === 'pro' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1B2B] text-amber-400 font-serif font-black text-2xl flex items-center justify-center shadow-md">
                  H
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xl font-black text-slate-900">Heritage &amp; Trust Financial</h4>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                      Wealth Pro
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    FCA FRN: 419203 &bull; St. Peter Square, Manchester
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for multi-adviser wealth management firms managing private client portfolios. Includes the <strong>24/7 AI Concierge Chatbot</strong>, <strong>3 UK financial calculators</strong>, and downloadable retirement guides with automated lead capture.
              </p>

              {/* Feature Grid Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-amber-950">
                    <Bot className="w-4 h-4 text-amber-700" />
                    <span>24/7 AI Lead Concierge</span>
                  </div>
                  <p className="text-[11px] text-amber-900/80">
                    Trained on UK pensions &amp; FCA COBS 4 rules to pre-qualify HNW visitors.
                  </p>
                </div>

                <div className="p-3.5 bg-blue-50/70 border border-blue-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-blue-950">
                    <Calculator className="w-4 h-4 text-blue-700" />
                    <span>3 UK Financial Calculators</span>
                  </div>
                  <p className="text-[11px] text-blue-900/80">
                    Interactive Pension Drawdown, 40% IHT Tax, and Compound Growth models.
                  </p>
                </div>

                <div className="p-3.5 bg-purple-50/70 border border-purple-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-purple-950">
                    <Award className="w-4 h-4 text-purple-700" />
                    <span>Lead Magnet Guide</span>
                  </div>
                  <p className="text-[11px] text-purple-900/80">
                    High-converting HNW retirement checklist for building email lists.
                  </p>
                </div>

                <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-emerald-950">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>3-Month Social Retainer</span>
                  </div>
                  <p className="text-[11px] text-emerald-900/80">
                    DFY LinkedIn thought leadership and newsletters to drive traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/portal/heritage-trust"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
              >
                <span>Launch Live Pro Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </Link>

              <span className="text-xs text-slate-500 font-mono">
                Subdomain Alias: <code className="text-slate-800 font-bold">pro.ifaportal.com</code>
              </span>
            </div>
          </div>

          {/* Right Visual Card (Unbiased / Actuaries style box) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0B1B2B] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                  Client 1: Pro Tier
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Live</span>
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Commercial Tier</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-white font-mono">£599</span>
                  <span className="text-xs text-slate-400 font-bold uppercase">/ month + VAT</span>
                </div>
                <span className="text-xs text-emerald-400 font-bold block pt-1">
                  &bull; £0 Setup Fee on 3-Month Retainer Contract
                </span>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-2 text-xs">
                <div className="font-extrabold text-amber-300">Target IFA Practice Profile:</div>
                <ul className="space-y-1.5 text-slate-300 text-[12px]">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Practices with £30M–£250M AUM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Average client portfolio &gt;£250k</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Requiring 24/7 lead capture and qualification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/admin/onboard?plan=pro&template=heritage-trust"
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Onboard with Pro Template</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-emerald-300 font-serif font-black text-2xl flex items-center justify-center shadow-md">
                  M
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xl font-black text-slate-900">MLP Wealth Management</h4>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                      Starter Growth
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    FCA FRN: 582194 &bull; Church Road, Hove, East Sussex
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Designed for boutique and solo advisers who need an authoritative, FCA-compliant presence without complex chatbot maintenance. Comes with direct WhatsApp consultation booking, upfront fee transparency, and our DFY 3-month social growth retainer.
              </p>

              {/* Feature Grid Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-emerald-950">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>WhatsApp Consultation Routing</span>
                  </div>
                  <p className="text-[11px] text-emerald-900/80">
                    High-trust direct messaging for immediate prospect connection.
                  </p>
                </div>

                <div className="p-3.5 bg-blue-50/70 border border-blue-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-blue-950">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>FCA FRN &amp; FSCS Badges</span>
                  </div>
                  <p className="text-[11px] text-blue-900/80">
                    Automated regulatory disclosure and £85,000 FSCS deposit badges.
                  </p>
                </div>

                <div className="p-3.5 bg-purple-50/70 border border-purple-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-purple-950">
                    <Award className="w-4 h-4 text-purple-700" />
                    <span>Consumer Duty Fee Grid</span>
                  </div>
                  <p className="text-[11px] text-purple-900/80">
                    Upfront clear disclosure of initial &amp; ongoing percentage tiers.
                  </p>
                </div>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-xs text-amber-950">
                    <Clock className="w-4 h-4 text-amber-700" />
                    <span>3-Month Social Retainer</span>
                  </div>
                  <p className="text-[11px] text-amber-900/80">
                    DFY social media posts included to build organic local reputation.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/portal/mlp-wealth"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
              >
                <span>Launch Live Starter Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </Link>

              <span className="text-xs text-slate-500 font-mono">
                Subdomain Alias: <code className="text-slate-800 font-bold">starter.ifaportal.com</code>
              </span>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-emerald-900/80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">
                  Client 2: Starter Tier
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Live</span>
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-emerald-200 uppercase tracking-widest font-extrabold">Commercial Tier</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-white font-mono">£249</span>
                  <span className="text-xs text-slate-300 font-bold uppercase">/ month + VAT</span>
                </div>
                <span className="text-xs text-emerald-300 font-bold block pt-1">
                  &bull; £0 Setup Fee on 3-Month Retainer Contract
                </span>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-emerald-800/60 space-y-2 text-xs">
                <div className="font-extrabold text-emerald-300">Target IFA Practice Profile:</div>
                <ul className="space-y-1.5 text-slate-300 text-[12px]">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Solo IFAs &amp; Boutique Advisers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Focus on direct client conversations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Requires zero upfront design sunk cost</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/admin/onboard?plan=starter&template=mlp-wealth"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Onboard with Starter Template</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
