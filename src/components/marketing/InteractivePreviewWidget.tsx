'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Calculator, MessageSquare, ShieldCheck, Sparkles, 
  ExternalLink, Award, Clock, Layers, ArrowRight, Check
} from 'lucide-react';

interface InteractivePreviewWidgetProps {
  selectedPreset?: 'pro' | 'starter' | 'pension';
}

export const InteractivePreviewWidget: React.FC<InteractivePreviewWidgetProps> = ({ selectedPreset }) => {
  const [userSelectedTier, setUserSelectedTier] = useState<'pro' | 'starter' | null>(null);

  const activeTier: 'pro' | 'starter' = userSelectedTier ?? (selectedPreset === 'starter' ? 'starter' : 'pro');

  return (
    <div className="bg-white border-2 border-[#E5DFD1] rounded-[32px] p-6 sm:p-10 shadow-sm space-y-8 max-w-6xl mx-auto transition-all">
      {/* Top Header & Switcher (Actuaries & Fintuity Style) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b-2 border-[#F0EBE0]">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#B43403] bg-[#FDF0EC] px-3.5 py-1 rounded-full border border-[#FACBC0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B43403]" />
            <span>Interactive UK Practice Prototypes</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#08232C] tracking-tight">
            Explore Our Live Client Practice Portals
          </h3>
          <p className="text-xs sm:text-sm text-[#636F75] font-medium pt-1">
            Toggle between flagship practice tiers to inspect conversion features, live tools, and compliance safeguards.
          </p>
        </div>

        {/* Chunky Toggle Buttons (Fintuity & Unbiased Style) */}
        <div className="flex items-center p-1.5 bg-[#F7F4EC] rounded-2xl border-2 border-[#E5DFD1] w-full lg:w-auto">
          <button
            onClick={() => setUserSelectedTier('pro')}
            className={`flex-1 lg:flex-none px-6 py-3.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              activeTier === 'pro'
                ? 'bg-[#08232C] text-white shadow-md'
                : 'text-[#475760] hover:text-[#08232C]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F3C044]" />
            <span>Client 1: Wealth Pro (£599/mo)</span>
          </button>

          <button
            onClick={() => setUserSelectedTier('starter')}
            className={`flex-1 lg:flex-none px-6 py-3.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              activeTier === 'starter'
                ? 'bg-[#08232C] text-white shadow-md'
                : 'text-[#475760] hover:text-[#08232C]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#5CDFB0]" />
            <span>Client 2: Starter Growth (£249/mo)</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      {activeTier === 'pro' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-[#08232C] text-[#F3C044] font-serif font-black text-2xl flex items-center justify-center shadow-md border border-[#184654]">
                  H
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-2xl font-black text-[#08232C]">Heritage &amp; Trust Financial</h4>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FEF8E7] text-[#92400E] border border-[#FDE68A]">
                      Wealth Pro
                    </span>
                  </div>
                  <span className="text-xs text-[#636F75] font-mono block pt-0.5">
                    FCA FRN: 419203 &bull; St. Peter Square, Manchester
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#475760] leading-relaxed">
                Engineered for multi-adviser wealth management firms managing private client pensions and estate portfolios. Features an active <strong>24/7 AI Concierge Chatbot</strong>, <strong>3 UK financial calculators</strong>, and automated retirement lead capture.
              </p>

              {/* 4 Chunky Feature Tiles (Actuaries Box Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-[#FDF0EC] border-2 border-[#FACBC0] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#B43403]">
                    <Bot className="w-4 h-4" />
                    <span>24/7 AI Lead Concierge</span>
                  </div>
                  <p className="text-[11px] text-[#782302] leading-relaxed">
                    Trained on UK pensions &amp; FCA COBS 4 rules to pre-qualify high-net-worth visitors.
                  </p>
                </div>

                <div className="p-4 bg-[#EEF5FF] border-2 border-[#BFD9FE] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#1A56DB]">
                    <Calculator className="w-4 h-4" />
                    <span>3 UK Financial Calculators</span>
                  </div>
                  <p className="text-[11px] text-[#1E40AF] leading-relaxed">
                    Interactive Pension Drawdown, 40% IHT Tax, and Compound ISA wealth models.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F0FE] border-2 border-[#E9D5FF] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#7E22CE]">
                    <Award className="w-4 h-4" />
                    <span>Lead Magnet Guide</span>
                  </div>
                  <p className="text-[11px] text-[#581C87] leading-relaxed">
                    High-converting HNW retirement checklist for building qualified prospect lists.
                  </p>
                </div>

                <div className="p-4 bg-[#E8F8F2] border-2 border-[#B4ECD6] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#0A6B48]">
                    <Clock className="w-4 h-4" />
                    <span>3-Month Social Retainer</span>
                  </div>
                  <p className="text-[11px] text-[#064E3B] leading-relaxed">
                    DFY LinkedIn thought leadership and newsletters to drive inbound traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-[#F0EBE0]">
              <Link
                href="/portal/heritage-trust"
                target="_blank"
                className="px-6 py-3.5 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 border border-[#184654]"
              >
                <span>Launch Live Pro Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F3C044]" />
              </Link>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#636F75]">
                <span>Subdomain:</span>
                <span className="px-2 py-1 rounded-md bg-[#F7F4EC] border border-[#E5DFD1] font-bold text-[#08232C]">
                  pro.ifaportal.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Card (Deep British Pine Container with Golden Accents) */}
          <div className="lg:col-span-5 bg-[#08232C] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-md border-2 border-[#143946]">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#143946] text-[#F3C044] font-extrabold border border-[#235364]">
                  PRO TIER FLAGSHIP
                </span>
                <span className="text-xs font-mono text-[#5CDFB0] font-bold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5CDFB0] animate-pulse" />
                  <span>Interactive Live</span>
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#AFC3C9] uppercase tracking-wider font-extrabold">Commercial Investment</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-black text-white font-mono">£599</span>
                  <span className="text-xs text-[#AFC3C9] font-bold uppercase">/ month + VAT</span>
                </div>
                <span className="text-xs text-[#5CDFB0] font-bold block pt-1">
                  &bull; £0 Setup Fee on 3-Month Retainer Contract
                </span>
              </div>

              <div className="p-4 bg-[#0E3542] rounded-2xl border border-[#1D4A59] space-y-2.5 text-xs">
                <div className="font-extrabold text-[#F3C044]">Target Practice Profile:</div>
                <ul className="space-y-2 text-[#DCE7EB] text-[12px]">
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Firms with £30M–£250M AUM</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Average client portfolio &gt;£250,000</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Seeking 24/7 AI lead pre-qualification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/admin/onboard?plan=pro&template=heritage-trust"
                className="w-full py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
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
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-[#064E3B] text-[#5CDFB0] font-serif font-black text-2xl flex items-center justify-center shadow-md border border-[#0A6B48]">
                  M
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-2xl font-black text-[#08232C]">MLP Wealth Management</h4>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#E8F8F2] text-[#0A6B48] border border-[#B4ECD6]">
                      Starter Growth
                    </span>
                  </div>
                  <span className="text-xs text-[#636F75] font-mono block pt-0.5">
                    FCA FRN: 582194 &bull; Church Road, Hove, East Sussex
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#475760] leading-relaxed">
                Designed for boutique and solo advisers who need an authoritative, FCA-compliant presence without complex chatbot maintenance. Comes with direct WhatsApp consultation booking, upfront fee transparency, and our DFY 3-month social growth retainer.
              </p>

              {/* 4 Chunky Feature Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-[#E8F8F2] border-2 border-[#B4ECD6] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#0A6B48]">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Lead Routing</span>
                  </div>
                  <p className="text-[11px] text-[#064E3B] leading-relaxed">
                    Direct messaging for immediate mobile prospect booking and consultations.
                  </p>
                </div>

                <div className="p-4 bg-[#EEF5FF] border-2 border-[#BFD9FE] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#1A56DB]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>FCA FRN &amp; FSCS Badges</span>
                  </div>
                  <p className="text-[11px] text-[#1E40AF] leading-relaxed">
                    Automated regulatory disclaimers and £85,000 FSCS deposit badges.
                  </p>
                </div>

                <div className="p-4 bg-[#FEF8E7] border-2 border-[#FDE68A] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#92400E]">
                    <Award className="w-4 h-4" />
                    <span>Consumer Duty Fee Grid</span>
                  </div>
                  <p className="text-[11px] text-[#78350F] leading-relaxed">
                    Upfront clear disclosure of initial &amp; ongoing percentage tiers.
                  </p>
                </div>

                <div className="p-4 bg-[#FDF0EC] border-2 border-[#FACBC0] rounded-2xl space-y-1">
                  <div className="flex items-center space-x-2 font-black text-xs text-[#B43403]">
                    <Clock className="w-4 h-4" />
                    <span>3-Month Social Retainer</span>
                  </div>
                  <p className="text-[11px] text-[#782302] leading-relaxed">
                    DFY social media posts included to build organic local reputation.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-[#F0EBE0]">
              <Link
                href="/portal/mlp-wealth"
                target="_blank"
                className="px-6 py-3.5 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 border border-[#184654]"
              >
                <span>Launch Live Starter Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5CDFB0]" />
              </Link>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#636F75]">
                <span>Subdomain:</span>
                <span className="px-2 py-1 rounded-md bg-[#F7F4EC] border border-[#E5DFD1] font-bold text-[#08232C]">
                  starter.ifaportal.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 bg-[#064E3B] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-md border-2 border-[#0A6B48]">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#043327] text-[#5CDFB0] font-extrabold border border-[#0D7A53]">
                  STARTER TIER FLAGSHIP
                </span>
                <span className="text-xs font-mono text-[#5CDFB0] font-bold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5CDFB0] animate-pulse" />
                  <span>Interactive Live</span>
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#A7F3D0] uppercase tracking-wider font-extrabold">Commercial Investment</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-black text-white font-mono">£249</span>
                  <span className="text-xs text-[#A7F3D0] font-bold uppercase">/ month + VAT</span>
                </div>
                <span className="text-xs text-[#A7F3D0] font-bold block pt-1">
                  &bull; £0 Setup Fee on 3-Month Retainer Contract
                </span>
              </div>

              <div className="p-4 bg-[#043327] rounded-2xl border border-[#0D7A53] space-y-2.5 text-xs">
                <div className="font-extrabold text-[#5CDFB0]">Target Practice Profile:</div>
                <ul className="space-y-2 text-[#D1FAE5] text-[12px]">
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Solo IFAs &amp; Boutique Advisers</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Focus on direct WhatsApp consultations</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Zero upfront design sunk cost</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/admin/onboard?plan=starter&template=mlp-wealth"
                className="w-full py-4 rounded-2xl bg-[#5CDFB0] hover:bg-[#4BD2A3] text-[#064E3B] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
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
