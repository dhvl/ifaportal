'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Check, Sparkles, ArrowRight, Mail
} from 'lucide-react';
import { ADDON_MARKETPLACE } from '@/lib/store';

export const CommercialPricingGrid: React.FC = () => {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span>FCA-Ready Practice Platforms</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
          Two Practice Platforms with Built-in Social Media
        </h2>
        
        <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
          Both platforms include our Done-For-You 3-Month Social Media Retainer as standard. For tailored practice pricing, bespoke enterprise setups, or network licensing, drop an inquiry to our team.
        </p>

        {/* Pricing Inquiry Action Pill */}
        <div className="pt-3">
          <a
            href="mailto:inquiry@ifamedia.co.uk?subject=Practice%20Platform%20Pricing%20Inquiry%20-%20IFA%20Media"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-2xl bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs hover:shadow-md transition-all"
          >
            <Mail className="w-4 h-4 text-[#0A6B48]" />
            <span>Drop an Inquiry: inquiry@ifamedia.co.uk</span>
          </a>
        </div>
      </div>

      {/* 2 Core Plan Cards (Actuaries & Fintuity Chunky Boxes) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Starter Plan (White Chunky Box) */}
        <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#E2EEF5]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#636F75] block">
                  Solo IFAs &amp; Boutique Firms
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">Starter Growth</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#E8F8F2] text-[#0A6B48] border border-[#B4ECD6]">
                Starter Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
              Designed for independent advisers seeking a high-trust, FCA-compliant presence with direct WhatsApp consultation routing and organic social media authority.
            </p>

            {/* Price Box */}
            <div className="p-6 bg-[#EAF3F9] rounded-2xl border-2 border-[#D8E5EE] space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl font-black text-[#08232C]">Bespoke Quote</span>
              </div>
              <div className="pt-1 text-xs text-[#475760] font-medium">
                Pricing available on request &bull; Tailored to boutique &amp; solo practices
              </div>
              <div className="pt-2">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Growth%20Platform"
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
                Standard Inclusions:
              </span>
              <ul className="space-y-3 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>3-Month DFY Social Media Retainer:</strong> Weekly LinkedIn thought leadership posts &amp; newsletters.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>WhatsApp Direct Routing:</strong> Prospects click to message your practice adviser directly on mobile.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>FCA &amp; FSCS Disclaimers:</strong> Automated FRN register verification and £85,000 protection badges.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Consumer Duty Fee Transparency:</strong> Upfront percentage tier grid fulfilling COBS 4 rules.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Subdomain &amp; Edge Hosting:</strong> Instant deployment on <code className="font-mono text-[#08232C] font-bold">starter.yourdomain.com</code>.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-[#E2EEF5]">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Growth%20Platform"
              className="w-full py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 border border-[#184654]"
            >
              <span>Inquire for Starter Platform</span>
              <ArrowRight className="w-4 h-4 text-[#5CDFB0]" />
            </a>
          </div>
        </div>

        {/* Wealth Pro Plan (Deep British Pine Box with Golden Accents) */}
        <div className="bg-[#08232C] text-white border-2 border-[#143946] rounded-[32px] p-8 sm:p-10 space-y-7 shadow-xl relative flex flex-col justify-between">
          <div className="absolute -top-4 right-8">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#F3C044] text-[#08232C] shadow-md border border-[#F5CA5E]">
              Most Popular &bull; Full Lead Engine
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#143946]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F3C044] block">
                  Established Wealth Managers
                </span>
                <h3 className="text-2xl font-black text-white">Wealth Pro</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#143946] text-[#F3C044] border border-[#235364]">
                Pro Tier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#AFC3C9] leading-relaxed">
              Complete client acquisition suite for ambitious firms. Includes our <strong>24/7 AI Concierge Chatbot</strong>, <strong>3 UK financial calculators</strong>, and downloadable retirement lead magnets.
            </p>

            {/* Price Box */}
            <div className="p-6 bg-[#0E3542] rounded-2xl border-2 border-[#1D4A59] space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl font-black text-white">Bespoke Quote</span>
              </div>
              <div className="pt-1 text-xs text-[#AFC3C9] font-medium">
                Pricing available on request &bull; Tailored for multi-adviser wealth practices
              </div>
              <div className="pt-2">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Wealth%20Pro%20Platform"
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
                Everything in Starter, Plus:
              </span>
              <ul className="space-y-3 text-xs text-[#DCE7EB]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>24/7 Conversational AI Concierge:</strong> Answers pension questions, qualifies client net worth, and books appointments.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>3 Interactive UK Calculators:</strong> Pension Drawdown, 40% Inheritance Tax (IHT), and Compound ISA models.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>Retirement Guide Lead Magnet:</strong> Gated downloadable PDF checklist for capturing prospect email addresses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>Priority Multi-Adviser Directory:</strong> Dedicated profile cards and booking routes for all registered advisers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#5CDFB0] shrink-0 mt-0.5" />
                  <span><strong>Subdomain &amp; Edge Hosting:</strong> Instant deployment on <code className="font-mono text-white font-bold">pro.yourdomain.com</code>.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#143946]">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Wealth%20Pro%20Platform"
              className="w-full py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Inquire for Wealth Pro Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Add-On Marketplace (Chunky Modular Cards) */}
      <div className="pt-10 max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#636F75]">
            Optional Practice Modules
          </span>
          <h3 className="text-2xl font-black text-[#08232C]">
            Modular Add-On Marketplace
          </h3>
          <p className="text-xs sm:text-sm text-[#636F75]">
            Add specialized capabilities to either platform anytime. Inquire for custom module packaging.
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

      {/* Enterprise & Network Inquiry Box */}
      <div className="pt-6 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-[#D8E5EE] rounded-[32px] p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-black text-[#08232C]">
            Custom Practice Pricing &amp; Enterprise Network Licensing
          </h3>
          <p className="text-xs sm:text-sm text-[#636F75] max-w-2xl mx-auto leading-relaxed">
            All practice deployments are customized to your firm&apos;s FCA permissions, adviser headcount, and integration stack. Drop us an inquiry directly for confidential terms.
          </p>
          <div className="pt-2">
            <a
              href="mailto:inquiry@ifamedia.co.uk?subject=Enterprise%20Practice%20Pricing%20Inquiry%20-%20IFA%20Media"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <Mail className="w-4 h-4 text-[#F3C044]" />
              <span>Inquire: inquiry@ifamedia.co.uk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
