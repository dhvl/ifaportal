'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Calculator, MessageSquare, ShieldCheck, Sparkles, 
  ExternalLink, Award, Clock, ArrowRight, Check, Mail, Rocket
} from 'lucide-react';

const StepsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 20h4v-4h4v-4h4V8h4" />
  </svg>
);

interface InteractivePreviewWidgetProps {
  selectedPreset?: 'pro' | 'starter' | 'pension';
}

export const InteractivePreviewWidget: React.FC<InteractivePreviewWidgetProps> = ({ selectedPreset }) => {
  const [userSelectedTier, setUserSelectedTier] = useState<'starter' | 'growth' | null>(null);

  const activeTier: 'starter' | 'growth' = userSelectedTier ?? (selectedPreset === 'pro' || selectedPreset === 'pension' ? 'growth' : 'starter');

  return (
    <section id="demos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B45309]" />
          <span>Interactive Plan Preview</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
          Take a Look Inside Our Live Platforms
        </h2>
        
        <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
          Switch between plans below to preview features, lead capture tools, and live client demonstrations.
        </p>
      </div>

      <div className="bg-white border-2 border-[#D8E5EE] rounded-[32px] p-6 sm:p-10 shadow-sm space-y-8 max-w-6xl mx-auto transition-all">
        {/* Clean Plan Switcher Tabs: Starter Plan First, Growth Plan Second */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-[#E2EEF5]">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#08232C]">
              {activeTier === 'starter' ? 'Starter Plan' : 'Growth Plan'}
            </h3>
            <p className="text-xs text-[#636F75] font-medium pt-0.5">
              {activeTier === 'starter' 
                ? 'Ideal for solo IFAs and boutique practices focused on direct WhatsApp consultation booking.'
                : 'Complete AI lead machine with 24/7 conversational concierge and 3 UK financial calculators.'}
            </p>
          </div>

          {/* Tab Selector: Steps for Starter, Rocket for Growth */}
          <div className="inline-flex items-center p-1.5 bg-[#F0F7FB] rounded-2xl border-2 border-[#D8E5EE] gap-1 shrink-0">
            <button
              onClick={() => setUserSelectedTier('starter')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap ${
                activeTier === 'starter'
                  ? 'bg-[#08232C] text-white shadow-md'
                  : 'text-[#475760] hover:text-[#08232C]'
              }`}
            >
              <StepsIcon className="w-4 h-4 text-[#5CDFB0]" />
              <span>Starter Plan</span>
            </button>

            <button
              onClick={() => setUserSelectedTier('growth')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap ${
                activeTier === 'growth'
                  ? 'bg-[#08232C] text-white shadow-md'
                  : 'text-[#475760] hover:text-[#08232C]'
              }`}
            >
              <Rocket className="w-4 h-4 text-[#F3C044]" />
              <span>Growth Plan</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Starter Plan (FIRST) */}
        {activeTier === 'starter' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#064E3B] text-[#5CDFB0] flex items-center justify-center shadow-md border border-[#0A6B48] shrink-0">
                    <StepsIcon className="w-7 h-7 text-[#5CDFB0]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-2xl font-black text-[#08232C]">Starter Plan</h4>
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#E8F8F2] text-[#0A6B48] border border-[#B4ECD6]">
                        Direct Routing
                      </span>
                    </div>
                    <span className="text-xs text-[#636F75] font-medium block pt-0.5">
                      Live Demonstration: <span className="font-mono text-[#08232C] font-bold">Reliable Advisors</span> (FCA FRN: 592810)
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#475760] leading-relaxed">
                  A high-trust, fast, FCA-compliant presence without complicated maintenance. Prospects message your advisers directly on WhatsApp or book initial consultations in one tap.
                </p>

                {/* 4 Feature Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 bg-[#E8F8F2] border-2 border-[#B4ECD6] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#0A6B48]">
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct Booking</span>
                    </div>
                    <p className="text-[11px] text-[#064E3B] leading-relaxed">
                      Instant mobile messaging directly to your registered adviser.
                    </p>
                  </div>

                  <div className="p-4 bg-[#EEF5FF] border-2 border-[#BFD9FE] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#1A56DB]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>FCA &amp; FSCS Disclaimers</span>
                    </div>
                    <p className="text-[11px] text-[#1E40AF] leading-relaxed">
                      Auto-verified FRN details and official £85k protection badges.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FEF8E7] border-2 border-[#FDE68A] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#92400E]">
                      <Award className="w-4 h-4" />
                      <span>Consumer Duty Fee Grid</span>
                    </div>
                    <p className="text-[11px] text-[#78350F] leading-relaxed">
                      Clear initial and ongoing fee schedules fulfilling COBS 4 rules.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FDF0EC] border-2 border-[#FACBC0] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#B43403]">
                      <Clock className="w-4 h-4" />
                      <span>3-Month Social Retainer</span>
                    </div>
                    <p className="text-[11px] text-[#782302] leading-relaxed">
                      Weekly done-for-you LinkedIn authority posts and newsletters.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-[#E2EEF5]">
                <a
                  href="https://starter.ifamedia.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 border border-[#184654]"
                >
                  <span>Preview Live Starter Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5CDFB0]" />
                </a>

                <div className="flex items-center space-x-2 text-xs font-mono text-[#636F75]">
                  <span>Live URL:</span>
                  <a
                    href="https://starter.ifamedia.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-[#F0F7FB] hover:bg-[#E2EEF5] border border-[#D8E5EE] font-bold text-[#08232C] transition-colors inline-flex items-center gap-1"
                  >
                    starter.ifamedia.co.uk
                    <span className="text-[10px] text-[#0A6B48]">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 bg-[#064E3B] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-md border-2 border-[#0A6B48]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#043327] text-[#5CDFB0] font-extrabold border border-[#0D7A53]">
                    STARTER PLAN
                  </span>
                  <span className="text-xs font-mono text-[#5CDFB0] font-bold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5CDFB0] animate-pulse" />
                    <span>Live Setup</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#A7F3D0] uppercase tracking-wider font-extrabold block">
                    Unrivalled Entry Value
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-white leading-snug">
                    More features out-of-the-box than competitors&apos; top plans.
                  </div>
                  <p className="text-xs text-[#A7F3D0] leading-relaxed">
                    Full website build, Consumer Duty compliance engine, and 3-month done-for-you social retainer included as standard.
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Plan%20Scope%20and%20Pricing"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#5CDFB0] font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#5CDFB0]" />
                      <span>Request Package Scope &amp; Fixed Fee</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#043327] rounded-2xl border border-[#0D7A53] space-y-2.5 text-xs">
                  <div className="font-extrabold text-[#5CDFB0]">Who This Is Perfect For:</div>
                  <ul className="space-y-2 text-[#D1FAE5] text-[12px]">
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">Solo IFAs &amp; boutique wealth advisers</span>
                    </li>
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">Rapid launch with zero agency lock-in</span>
                    </li>
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">Direct WhatsApp &amp; phone lead capture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Plan"
                  className="w-full py-4 rounded-2xl bg-[#5CDFB0] hover:bg-[#4BD2A3] text-[#064E3B] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Starter Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Growth Plan (SECOND) */}
        {activeTier === 'growth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#08232C] text-[#F3C044] flex items-center justify-center shadow-md border border-[#184654] shrink-0">
                    <Rocket className="w-7 h-7 text-[#F3C044]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-2xl font-black text-[#08232C]">Growth Plan</h4>
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FEF8E7] text-[#92400E] border border-[#FDE68A]">
                        Full AI Engine
                      </span>
                    </div>
                    <span className="text-xs text-[#636F75] font-medium block pt-0.5">
                      Live Demonstration: <span className="font-mono text-[#08232C] font-bold">Trustworthy Advisors</span> (FCA FRN: 419203)
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#475760] leading-relaxed">
                  Our flagship solution for ambitious practices and multi-adviser firms. Comes with our conversational 24/7 AI concierge, interactive pension drawdown tools, and multi-adviser routing.
                </p>

                {/* 4 Feature Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 bg-[#FDF0EC] border-2 border-[#FACBC0] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#B43403]">
                      <Bot className="w-4 h-4" />
                      <span>24/7 Conversational AI Concierge</span>
                    </div>
                    <p className="text-[11px] text-[#782302] leading-relaxed">
                      Pre-qualifies prospects, answers FAQs, and books consultations.
                    </p>
                  </div>

                  <div className="p-4 bg-[#EEF5FF] border-2 border-[#BFD9FE] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#1A56DB]">
                      <Calculator className="w-4 h-4" />
                      <span>3 Financial Calculators</span>
                    </div>
                    <p className="text-[11px] text-[#1E40AF] leading-relaxed">
                      Drawdown, 40% Inheritance Tax (IHT), and Compound ISA models.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FEF8E7] border-2 border-[#FDE68A] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#92400E]">
                      <Clock className="w-4 h-4" />
                      <span>3-Month Social Media Retainer</span>
                    </div>
                    <p className="text-[11px] text-[#78350F] leading-relaxed">
                      Done-for-you LinkedIn authority articles and newsletter campaigns.
                    </p>
                  </div>

                  <div className="p-4 bg-[#E8F8F2] border-2 border-[#B4ECD6] rounded-2xl space-y-1">
                    <div className="flex items-center space-x-2 font-black text-xs text-[#0A6B48]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Multi-Adviser Directory</span>
                    </div>
                    <p className="text-[11px] text-[#064E3B] leading-relaxed">
                      Individual booking links, bios, and qualifications per adviser.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-[#E2EEF5]">
                <a
                  href="https://growth.ifamedia.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 border border-[#184654]"
                >
                  <span>Preview Live Growth Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F3C044]" />
                </a>

                <div className="flex items-center space-x-2 text-xs font-mono text-[#636F75]">
                  <span>Live URL:</span>
                  <a
                    href="https://growth.ifamedia.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-[#F0F7FB] hover:bg-[#E2EEF5] border border-[#D8E5EE] font-bold text-[#08232C] transition-colors inline-flex items-center gap-1"
                  >
                    growth.ifamedia.co.uk
                    <span className="text-[10px] text-[#0A6B48]">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 bg-[#08232C] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-md border-2 border-[#143946]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#143946] text-[#F3C044] font-extrabold border border-[#235364]">
                    GROWTH PLAN
                  </span>
                  <span className="text-xs font-mono text-[#F3C044] font-bold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F3C044] animate-pulse" />
                    <span>Live Setup</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#F3C044] uppercase tracking-wider font-extrabold block">
                    Full Acquisition Engine
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Complete 24/7 AI lead engine &amp; calculator platform.
                  </div>
                  <p className="text-xs text-[#AFC3C9] leading-relaxed">
                    Conversational AI concierge, 3 UK financial calculators, multi-adviser routing, and built-in 3-month social growth retainer.
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Growth%20Plan%20Scope%20and%20Pricing"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#F3C044] font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F3C044]" />
                      <span>Request Package Scope &amp; Fixed Fee</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#0E3542] rounded-2xl border border-[#1D4A59] space-y-2.5 text-xs">
                  <div className="font-extrabold text-[#F3C044]">Who This Is Perfect For:</div>
                  <ul className="space-y-2 text-[#AFC3C9] text-[12px]">
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">Multi-adviser practices &amp; wealth firms</span>
                    </li>
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">24/7 automated AI lead qualification</span>
                    </li>
                    <li className="flex items-center space-x-2.5 whitespace-nowrap">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span className="truncate">High-AUM pension consolidation campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
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
        )}
      </div>
    </section>
  );
};
