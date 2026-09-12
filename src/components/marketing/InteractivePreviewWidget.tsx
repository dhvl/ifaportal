'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Calculator, MessageSquare, ShieldCheck, Sparkles, 
  ExternalLink, Award, Clock, Layers, ArrowRight, Check, Mail, CheckCircle2
} from 'lucide-react';

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
        {/* Clean Plan Switcher Tabs: Starter First, Growth Second */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-[#E2EEF5]">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#08232C]">
              {activeTier === 'starter' ? 'Starter Growth Platform' : 'Growth Platform (Wealth Pro)'}
            </h3>
            <p className="text-xs text-[#636F75] font-medium pt-0.5">
              {activeTier === 'starter' 
                ? 'Ideal for solo IFAs and boutique practices focused on direct WhatsApp consultation booking.'
                : 'Complete AI lead machine with 24/7 conversational concierge and 3 UK financial calculators.'}
            </p>
          </div>

          {/* Tab Selector: Starter First, Growth Second */}
          <div className="inline-flex items-center p-1.5 bg-[#F0F7FB] rounded-2xl border-2 border-[#D8E5EE] gap-1 shrink-0">
            <button
              onClick={() => setUserSelectedTier('starter')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap ${
                activeTier === 'starter'
                  ? 'bg-[#08232C] text-white shadow-md'
                  : 'text-[#475760] hover:text-[#08232C]'
              }`}
            >
              <Layers className="w-4 h-4 text-[#5CDFB0]" />
              <span>1. Starter Growth</span>
            </button>

            <button
              onClick={() => setUserSelectedTier('growth')}
              className={`px-5 py-2.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap ${
                activeTier === 'growth'
                  ? 'bg-[#08232C] text-white shadow-md'
                  : 'text-[#475760] hover:text-[#08232C]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#F3C044]" />
              <span>2. Growth Platform</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Starter Growth Platform (FIRST) */}
        {activeTier === 'starter' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#064E3B] text-[#5CDFB0] font-black text-lg flex items-center justify-center shadow-md border border-[#0A6B48]">
                    START
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-2xl font-black text-[#08232C]">Starter Growth Platform</h4>
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
                    STARTER GROWTH PLATFORM
                  </span>
                  <span className="text-xs font-mono text-[#5CDFB0] font-bold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5CDFB0] animate-pulse" />
                    <span>Live Setup</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-[#A7F3D0] uppercase tracking-wider font-extrabold">Commercial Terms</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-white">Bespoke Quote</span>
                  </div>
                  <p className="text-xs text-[#A7F3D0] leading-relaxed">
                    Tailored to solo advisers and boutique practices. Includes our 3-month social media growth retainer.
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Growth%20Platform"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#5CDFB0] font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#5CDFB0]" />
                      <span>Inquire: inquiry@ifamedia.co.uk</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#043327] rounded-2xl border border-[#0D7A53] space-y-2.5 text-xs">
                  <div className="font-extrabold text-[#5CDFB0]">Who This Is Perfect For:</div>
                  <ul className="space-y-2 text-[#D1FAE5] text-[12px]">
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Solo IFAs &amp; independent wealth advisers</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Firms seeking fast launch without £10k+ agency lock-in</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Direct phone and WhatsApp consultation capture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Growth%20Platform"
                  className="w-full py-4 rounded-2xl bg-[#5CDFB0] hover:bg-[#4BD2A3] text-[#064E3B] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Starter Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Growth Platform (SECOND) */}
        {activeTier === 'growth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#08232C] text-[#F3C044] font-black text-xl flex items-center justify-center shadow-md border border-[#184654]">
                    PRO
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-2xl font-black text-[#08232C]">Growth Platform (Wealth Pro)</h4>
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
                    GROWTH / WEALTH PRO PLAN
                  </span>
                  <span className="text-xs font-mono text-[#F3C044] font-bold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F3C044] animate-pulse" />
                    <span>Live Setup</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-[#AFC3C9] uppercase tracking-wider font-extrabold">Commercial Terms</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-white">Bespoke Quote</span>
                  </div>
                  <p className="text-xs text-[#AFC3C9] leading-relaxed">
                    Tailored commercial terms with built-in 3-month social growth retainer, AI concierge, and lead magnets.
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Growth%20Platform"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#F3C044] font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F3C044]" />
                      <span>Inquire: inquiry@ifamedia.co.uk</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#0E3542] rounded-2xl border border-[#1D4A59] space-y-2.5 text-xs">
                  <div className="font-extrabold text-[#F3C044]">Who This Is Perfect For:</div>
                  <ul className="space-y-2 text-[#AFC3C9] text-[12px]">
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Established practices &amp; multi-adviser firms</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Advisers seeking automated 24/7 lead qualification</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                      <span>Practices targeting high-AUM pension consolidations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Growth%20Platform"
                  className="w-full py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Growth Platform</span>
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
