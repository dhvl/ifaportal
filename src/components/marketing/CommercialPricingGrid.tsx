'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, Database, Zap, Lock, Search, Check
} from 'lucide-react';
import { ADDON_MARKETPLACE } from '@/lib/store';

export const CommercialPricingGrid: React.FC = () => {
  const [contractTerm, setContractTerm] = useState<'quarterly' | 'monthly'>('quarterly');

  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-amber-700 uppercase tracking-widest block">
          Simple, Predictable Commercial Terms
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Two Growth Plans with Built-in Social Media
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Both plans include our Done-For-You 3-Month Social Media Retainer as standard. Select a <strong>Quarterly Contract</strong> to enjoy a <strong>£0 Setup Fee</strong>.
        </p>

        {/* Contract Duration Selector Pill */}
        <div className="pt-3 inline-flex items-center p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90">
          <button
            onClick={() => setContractTerm('quarterly')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
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
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              contractTerm === 'monthly'
                ? 'bg-[#0B1B2B] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Monthly Rolling &bull; Standard Setup Fee</span>
          </button>
        </div>
      </div>

      {/* 2 Core Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Starter Plan */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Solo IFAs &amp; Boutique Practices
                </span>
                <h3 className="text-2xl font-black text-slate-900">Starter Growth</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-slate-100 text-slate-700">
                Starter
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For independent advisers seeking an authoritative, FCA-compliant digital presence with direct WhatsApp consultation routing and organic social proof.
            </p>

            {/* Price Box */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black text-slate-900 font-mono">£249</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">/ month + VAT</span>
              </div>

              <div className="pt-1 text-xs">
                {contractTerm === 'quarterly' ? (
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
            <div className="space-y-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 block">
                Everything Included:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bespoke FCA-Compliant Website:</strong> Tailored typography, colors, and layout (e.g. MLP Wealth template).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct WhatsApp Inquiry Button:</strong> Frictionless mobile lead connection directly to the adviser.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Built-in Social Media:</strong> 3-Month LinkedIn &amp; Facebook content strategy included by default.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>FCA Compliance Engine:</strong> Whole of market declarations, FRN verification, and FSCS protection badge.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Social Proof &amp; Reviews:</strong> VouchedFor and Trustpilot verified testimonial integration.</span>
                </li>
                <li className="flex items-start space-x-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center font-black">&times;</span>
                  <span className="line-through">Interactive Pension &amp; IHT Calculators</span>
                </li>
                <li className="flex items-start space-x-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center font-black">&times;</span>
                  <span className="line-through">24/7 AI Concierge Chatbot</span>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/admin/onboard"
            className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider text-center transition-colors shadow-xs mt-6 block"
          >
            Get Started on Starter Plan
          </Link>
        </div>

        {/* Pro Plan (Recommended) */}
        <div className="bg-gradient-to-b from-white via-amber-50/30 to-white border-2 border-amber-500 rounded-3xl p-8 space-y-6 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative">
          <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
            Recommended for Growth
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-amber-200/80">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">
                  Established Wealth Managers &amp; Practices
                </span>
                <h3 className="text-2xl font-black text-slate-900">Client Acquisition Pro</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-amber-200 text-amber-950">
                Pro
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our flagship conversion platform. Converts qualified visitors into booked client consultations with conversational AI, live UK calculators, and gated lead magnets.
            </p>

            {/* Price Box */}
            <div className="p-5 bg-white rounded-2xl border border-amber-300 shadow-xs space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black text-amber-700 font-mono">£599</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">/ month + VAT</span>
              </div>

              <div className="pt-1 text-xs">
                {contractTerm === 'quarterly' ? (
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
            <div className="space-y-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 block">
                Everything in Starter, Plus:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-800">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>24/7 AI Concierge Chatbot:</strong> Qualifies prospects, handles common pension FAQs, and schedules consultations.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>3 Interactive UK Calculators:</strong> Pension Drawdown, 40% IHT Liability, and Compound Wealth models.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Lead Magnet Engine:</strong> Downloadable HNW retirement and tax guides with automated lead capture.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-Adviser Directory:</strong> Individual IRN credentials, personal bios, and separate booking calendars.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Client Portal Gateway:</strong> Single Sign-On link to client document vaults (moneyinfo, Transact).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Built-in Social Media:</strong> 3-Month LinkedIn thought leadership content retainer included.</span>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/admin/onboard"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg mt-6 block"
          >
            Get Started on Pro Plan
          </Link>
        </div>
      </div>

      {/* Modular Add-On Marketplace */}
      <div className="pt-8 border-t border-slate-200/80 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-amber-700 uppercase tracking-widest block">
            Frictionless Scalability
          </span>
          <h3 className="text-2xl font-black text-slate-900">Modular Add-On Marketplace</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Keep onboarding simple with our 2 core plans, then plug in advanced enterprise integrations as your practice grows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ADDON_MARKETPLACE.map((addon) => (
            <div
              key={addon.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  {addon.category === 'CRM' && <Database className="w-5 h-5 text-blue-600" />}
                  {addon.category === 'Automation' && <Zap className="w-5 h-5 text-amber-600" />}
                  {addon.category === 'Portal' && <Lock className="w-5 h-5 text-purple-600" />}
                  {addon.category === 'Marketing' && <Search className="w-5 h-5 text-emerald-600" />}
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm">{addon.title}</h4>
                  </div>
                  <span className="text-base font-black text-amber-700 font-mono">
                    +£{addon.priceMonthly} <span className="text-xs font-normal text-slate-500">/mo</span>
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {addon.description}
                </p>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-100 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero Setup Fee &bull; Cancel Anytime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
