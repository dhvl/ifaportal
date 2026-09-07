'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, Check, Sparkles, ArrowRight
} from 'lucide-react';
import { ADDON_MARKETPLACE } from '@/lib/store';

export const CommercialPricingGrid: React.FC = () => {
  const [contractTerm, setContractTerm] = useState<'quarterly' | 'monthly'>('quarterly');

  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-200">
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span>Transparent British Commercial Terms</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
          Two Practice Plans with Built-in Social Media
        </h2>
        
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Both plans include our Done-For-You 3-Month Social Media Retainer as standard. Select a <strong>Quarterly Contract</strong> to waive all onboarding and setup fees (£0 Setup).
        </p>

        {/* Contract Duration Selector Pill (Fintuity style) */}
        <div className="pt-3 inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200/90 shadow-2xs">
          <button
            onClick={() => setContractTerm('quarterly')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              contractTerm === 'quarterly'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Quarterly (3-Mo Retainer) &bull; £0 Setup Fee</span>
          </button>

          <button
            onClick={() => setContractTerm('monthly')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              contractTerm === 'monthly'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Monthly Rolling &bull; Standard Setup Fee</span>
          </button>
        </div>
      </div>

      {/* 2 Core Plan Cards (Actuaries / Fintuity clean box cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Starter Plan */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-9 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Solo IFAs &amp; Boutique Firms
                </span>
                <h3 className="text-2xl font-black text-slate-900">Starter Growth</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-700">
                Starter Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Designed for independent advisers seeking a high-trust, FCA-compliant presence with direct WhatsApp consultation routing and organic social media authority.
            </p>

            {/* Price Box */}
            <div className="p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono">£249</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">/ month + VAT</span>
              </div>

              <div className="pt-1 text-xs">
                {contractTerm === 'quarterly' ? (
                  <div className="flex items-center space-x-1.5 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Quarterly Retainer: £0 Setup Fee (Save £200)</span>
                  </div>
                ) : (
                  <div className="text-slate-600 font-medium">
                    Monthly Rolling: <strong className="text-slate-900">£200 one-off setup fee</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 block">
                Standard Inclusions:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3-Month DFY Social Media Retainer:</strong> Weekly LinkedIn thought leadership &amp; Facebook market updates.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>WhatsApp Direct Routing:</strong> Prospects click to message your practice adviser directly on mobile.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>FCA &amp; FSCS Disclaimers:</strong> Automated FRN register verification and £85,000 protection badges.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Consumer Duty Fee Transparency:</strong> Upfront percentage tier grid fulfilling COBS 4 rules.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Subdomain &amp; Edge Hosting:</strong> Instant deployment on <code className="font-mono text-slate-900 font-bold">starter.yourdomain.com</code>.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href={`/admin/onboard?plan=starter&contract=${contractTerm}`}
              className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Onboard Starter Practice</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>

        {/* Wealth Pro Plan (Recommended) */}
        <div className="bg-white border-2 border-[#0B1B2B] rounded-3xl p-8 sm:p-9 space-y-6 shadow-xl relative flex flex-col justify-between">
          <div className="absolute -top-3.5 right-8">
            <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500 text-slate-950 shadow-md">
              Most Popular &bull; Full Lead Engine
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">
                  Established Wealth Managers
                </span>
                <h3 className="text-2xl font-black text-slate-900">Wealth Pro</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900">
                Pro Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete lead conversion suite for growing practices. Includes our <strong>24/7 AI Concierge Chatbot</strong>, <strong>3 UK financial calculators</strong>, and downloadable retirement lead magnets.
            </p>

            {/* Price Box */}
            <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/70 space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono">£599</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">/ month + VAT</span>
              </div>

              <div className="pt-1 text-xs">
                {contractTerm === 'quarterly' ? (
                  <div className="flex items-center space-x-1.5 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Quarterly Retainer: £0 Setup Fee (Save £1,000)</span>
                  </div>
                ) : (
                  <div className="text-slate-600 font-medium">
                    Monthly Rolling: <strong className="text-slate-900">£1,000 one-off setup fee</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 block">
                Everything in Starter, Plus:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>24/7 Conversational AI Concierge:</strong> Answers pension questions, qualifies client net worth, and books appointments.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3 Interactive UK Calculators:</strong> Pension Drawdown, 40% Inheritance Tax (IHT), and Compound ISA models.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Retirement Guide Lead Magnet:</strong> Gated downloadable PDF checklist for capturing prospect email addresses.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Priority Multi-Adviser Directory:</strong> Dedicated profile cards and booking routes for all registered advisers.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Subdomain &amp; Edge Hosting:</strong> Instant deployment on <code className="font-mono text-slate-900 font-bold">pro.yourdomain.com</code>.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href={`/admin/onboard?plan=pro&contract=${contractTerm}`}
              className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Onboard Wealth Pro Practice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Add-On Marketplace (Clean Modular Grid) */}
      <div className="pt-8 max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Optional Practice Expansions
          </span>
          <h3 className="text-xl font-black text-slate-900">
            Modular Add-On Marketplace
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Add specialized capabilities to either plan anytime from your Adviser Admin console.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADDON_MARKETPLACE.map((addon) => (
            <div
              key={addon.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {addon.category}
                  </span>
                  <span className="text-base font-black text-slate-900 font-mono">
                    £{addon.priceMonthly}
                    <span className="text-[10px] text-slate-400 font-sans font-normal">/mo</span>
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-slate-900">{addon.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{addon.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                <span>Configure in Onboarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
