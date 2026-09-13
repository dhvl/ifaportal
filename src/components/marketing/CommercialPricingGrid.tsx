'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Check, Sparkles, ArrowRight, Mail, MessageSquare, Bot, Calculator, ShieldCheck
} from 'lucide-react';
import { ADDON_MARKETPLACE } from '@/lib/store';

export const CommercialPricingGrid: React.FC = () => {
  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Friendly Agency Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span>Practice Plans</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
          Two clear ways to work with us.
        </h2>
        
        <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
          Both platforms include our Done-For-You 3-Month Social Media Retainer as standard. No surprise fees, no 3-month agency delays.
        </p>

        {/* Pricing Inquiry Action Pill */}
        <div className="pt-2">
          <a
            href="mailto:inquiry@ifamedia.co.uk?subject=Practice%20Platform%20Pricing%20Inquiry%20-%20IFA%20Media"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-2xl bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs hover:shadow-md transition-all"
          >
            <Mail className="w-4 h-4 text-[#0A6B48]" />
            <span>Drop us an email: inquiry@ifamedia.co.uk</span>
          </a>
        </div>
      </div>

      {/* 2 Core Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Starter Plan */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#E2EEF5]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#636F75] block">
                  Boutique &amp; Solo IFAs
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">Starter Plan</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#E8F8F2] text-[#0A6B48] border border-[#B4ECD6]">
                Starter Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
              Fast, high-trust, and built to turn web visitors into direct phone calls and WhatsApp consultations with zero tech hassle.
            </p>

            {/* Price Box */}
            <div className="p-6 bg-[#EAF3F9] rounded-2xl border-2 border-[#D8E5EE] space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl font-black text-[#08232C]">Pricing on Request</span>
              </div>
              <div className="pt-1 text-xs text-[#475760] font-medium">
                Fixed package pricing &bull; Includes 3-month social media growth retainer
              </div>
              <div className="pt-2">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Plan"
                  className="inline-flex items-center space-x-1.5 text-xs font-black text-[#0A6B48] hover:underline"
                >
                  <Mail className="w-4 h-4 text-[#0A6B48]" />
                  <span>Inquire: inquiry@ifamedia.co.uk</span>
                </a>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#08232C] block">
                What&apos;s Included:
              </span>
              <ul className="space-y-3 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>3-Month DFY Social Media Retainer:</strong> Weekly thought leadership posts &amp; client newsletters.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>WhatsApp Lead Routing:</strong> Prospects message your advisers directly from their smartphone.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>FCA &amp; FSCS Disclaimers:</strong> Consumer Duty disclosures, FRN verification, and £85k badges.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>High-Speed UK Hosting:</strong> Ultra-fast Next.js architecture deployed in days.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-[#E2EEF5]">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Plan"
              className="w-full py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 border border-[#184654]"
            >
              <span>Inquire for Starter Plan</span>
              <ArrowRight className="w-4 h-4 text-[#5CDFB0]" />
            </a>
          </div>
        </div>

        {/* Growth Plan */}
        <div className="bg-[#08232C] text-white border-2 border-[#143946] rounded-[32px] p-8 sm:p-10 space-y-7 shadow-xl relative flex flex-col justify-between">
          <div className="absolute -top-4 right-8">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#F3C044] text-[#08232C] shadow-md border border-[#F5CA5E]">
              Most Popular &bull; Full AI Engine
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#143946]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F3C044] block">
                  Established Wealth Managers
                </span>
                <h3 className="text-2xl font-black text-white">Growth Plan</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#143946] text-[#F3C044] border border-[#235364]">
                Growth Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#AFC3C9] leading-relaxed">
              Our flagship client acquisition engine. Comes with an active 24/7 AI Concierge, 3 interactive UK financial calculators, and retirement lead magnets.
            </p>

            {/* Price Box */}
            <div className="p-6 bg-[#0E3542] rounded-2xl border-2 border-[#1D4A59] space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl font-black text-white">Pricing on Request</span>
              </div>
              <div className="pt-1 text-xs text-[#AFC3C9] font-medium">
                Fixed package pricing &bull; Includes 3-month social growth retainer, AI concierge &amp; calculators
              </div>
              <div className="pt-2">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Growth%20Plan"
                  className="inline-flex items-center space-x-1.5 text-xs font-black text-[#F3C044] hover:underline"
                >
                  <Mail className="w-4 h-4 text-[#F3C044]" />
                  <span>Inquire: inquiry@ifamedia.co.uk</span>
                </a>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#F3C044] block">
                Everything in Starter Plan, Plus:
              </span>
              <ul className="space-y-3 text-xs text-[#DCE7EB]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>24/7 Conversational AI Concierge:</strong> Answers questions, qualifies asset size, and books appointments.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>3 Interactive UK Calculators:</strong> Pension Drawdown, 40% IHT, and Compound ISA models.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>Downloadable Retirement Guide:</strong> Gated checklist for capturing high-intent email leads.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>Multi-Adviser Directory:</strong> Dedicated profile cards and individual booking routes for each partner.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#143946]">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Growth%20Plan"
              className="w-full py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Inquire for Growth Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Optional Modular Add-Ons */}
      <div className="pt-6 max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#636F75]">
            Modular Upgrades
          </span>
          <h3 className="text-2xl font-black text-[#08232C]">
            Plug In Extra Capabilities Anytime
          </h3>
          <p className="text-xs sm:text-sm text-[#636F75]">
            Add custom integrations whenever your practice is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADDON_MARKETPLACE.map((addon) => (
            <div
              key={addon.id}
              className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[28px] p-7 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#EAF3F9] border border-[#D8E5EE] text-[#08232C]">
                    {addon.category}
                  </span>
                  <span className="text-xs font-bold text-[#08232C] px-2 py-0.5 rounded-md bg-[#F0F7FB] border border-[#D8E5EE]">
                    Custom Add-On
                  </span>
                </div>

                <h4 className="text-base font-black text-[#08232C]">{addon.title}</h4>
                <p className="text-xs text-[#475760] leading-relaxed">{addon.description}</p>
              </div>

              <div className="pt-3 border-t-2 border-[#E2EEF5] flex items-center justify-between text-xs font-bold text-[#08232C]">
                <a
                  href={`mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20${encodeURIComponent(addon.title)}%20Add-On`}
                  className="hover:underline flex items-center space-x-1 text-[#0A6B48]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Inquire for Module</span>
                </a>
                <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise & Network Inquiry Card */}
      <div className="pt-4 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-[#D8E5EE] rounded-[32px] p-8 text-center space-y-3 shadow-sm">
          <h3 className="text-xl font-black text-[#08232C]">
            Have Multiple Advisers or Network Requirements?
          </h3>
          <p className="text-xs sm:text-sm text-[#636F75] max-w-2xl mx-auto leading-relaxed">
            We offer centralized group billing, shared compliance controls, and custom layouts for advisory networks and national wealth firms.
          </p>
          <div className="pt-2">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Enterprise%20Practice%20Pricing%20Inquiry%20-%20IFA%20Media"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <Mail className="w-4 h-4 text-[#F3C044]" />
              <span>Talk to Us: inquiry@ifamedia.co.uk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
