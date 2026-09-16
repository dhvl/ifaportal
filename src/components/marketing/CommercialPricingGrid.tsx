'use client';

import React, { useState } from 'react';
import { Check, Info, Globe, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  explainer: string;
  growth: boolean;
  scale: boolean;
}

const websiteFeatures: FeatureItem[] = [
  {
    id: 'bespoke-website',
    title: 'Custom Mobile & Desktop Website',
    explainer: 'Designed specifically for your advisory firm. Looks clean, loads fast, and works smoothly on mobile phones, tablets, and computers.',
    growth: true,
    scale: true,
  },
  {
    id: 'whatsapp-call',
    title: 'Instant WhatsApp & Phone Contact',
    explainer: 'Lets prospective clients call or message your advisers directly with a single tap.',
    growth: true,
    scale: true,
  },
  {
    id: 'fca-consumer-duty',
    title: 'FCA & Regulatory Compliance Safeguards',
    explainer: 'Built with official FCA Firm Reference Number checks, Consumer Duty disclosures, and FSCS protection notices.',
    growth: true,
    scale: true,
  },
  {
    id: 'adviser-directory',
    title: 'Adviser Profiles & Credentials',
    explainer: 'Dedicated profile pages showcasing qualifications, specialisms, and individual contact details for each adviser.',
    growth: true,
    scale: true,
  },
  {
    id: 'uk-cloud-ssl',
    title: 'Fast UK Hosting & Bank-Grade Security',
    explainer: 'Hosted on secure UK cloud servers with SSL encryption to protect client information and guarantee fast load times.',
    growth: true,
    scale: true,
  },
  {
    id: 'gdpr-cookie',
    title: 'UK GDPR & Privacy Policy Controls',
    explainer: 'Includes compliant cookie consent banners and privacy policy pages to meet UK data protection laws.',
    growth: true,
    scale: true,
  },
  {
    id: 'contact-forms',
    title: 'Secure Client Enquiry Forms',
    explainer: 'Protected contact forms that deliver new client messages straight to your inbox without spam.',
    growth: true,
    scale: true,
  },
  {
    id: 'ai-concierge',
    title: '24/7 Virtual Client Assistant (AI Chat)',
    explainer: 'A friendly automated assistant that greets website visitors, answers common questions, and collects contact details 24/7.',
    growth: false,
    scale: true,
  },
  {
    id: 'pension-calc',
    title: 'Pension & Retirement Drawdown Calculator',
    explainer: 'An interactive tool that lets prospective clients estimate tax-free cash and sustainable retirement income.',
    growth: false,
    scale: true,
  },
  {
    id: 'iht-calc',
    title: 'Inheritance Tax (IHT) Calculator',
    explainer: 'An easy-to-use tool showing visitors their potential estate tax liability to prompt an advisory consultation.',
    growth: false,
    scale: true,
  },
  {
    id: 'isa-calc',
    title: 'ISA & Investment Growth Calculator',
    explainer: 'A visual tool showing visitors how their savings and investments could compound over time.',
    growth: false,
    scale: true,
  },
  {
    id: 'gated-guide',
    title: 'Free Retirement Guide for New Enquiries',
    explainer: 'A downloadable retirement guide that visitors can read in exchange for leaving their name and email address.',
    growth: false,
    scale: true,
  },
  {
    id: 'booking-calendar',
    title: 'Online Meeting Booking (Calendar Sync)',
    explainer: 'Connects directly to your diary (Calendly, Outlook, etc.) so clients can book consultations online.',
    growth: false,
    scale: true,
  },
  {
    id: 'client-portal',
    title: 'Client Portal Sign-In Button',
    explainer: 'A prominent button on your site where existing clients can log into their investment platform (e.g. moneyinfo, Intelliflo, Transact).',
    growth: false,
    scale: true,
  },
];

const marketingFeatures: FeatureItem[] = [
  {
    id: 'dfy-social',
    title: '3 Months of Hands-Off Social Media (Included)',
    explainer: "We write, design, and publish weekly financial posts for your practice so you don't have to lift a finger.",
    growth: true,
    scale: true,
  },
  {
    id: 'weekly-content',
    title: 'Weekly LinkedIn & Social Media Articles',
    explainer: "Timely, compliance-friendly market insights posted under your firm's name to build authority and trust.",
    growth: true,
    scale: true,
  },
  {
    id: 'client-newsletter',
    title: 'Monthly Email Newsletter for Your Clients',
    explainer: 'A professionally written email newsletter ready to send to your clients with market updates and timely advice tips.',
    growth: true,
    scale: true,
  },
  {
    id: 'local-seo',
    title: 'Google Maps & Local Search Setup',
    explainer: 'Puts your firm on Google Maps and local search results so local clients find you when searching for financial advice.',
    growth: true,
    scale: true,
  },
  {
    id: 'multichannel-campaigns',
    title: 'Advanced Social Media & Visual Graphics',
    explainer: 'Custom charts, infographics, and visual posts designed to grab attention and attract higher-value clients.',
    growth: false,
    scale: true,
  },
  {
    id: 'email-nurture',
    title: 'Automated Follow-Up Emails for New Enquiries',
    explainer: 'Automatically sends friendly, helpful follow-up emails to prospects who get in touch, helping convert them into booked calls.',
    growth: false,
    scale: true,
  },
  {
    id: 'local-citations',
    title: 'Local Business Directory Listings',
    explainer: 'Registers your firm across trusted UK financial and local business directories to improve your online presence.',
    growth: false,
    scale: true,
  },
  {
    id: 'monthly-analytics',
    title: 'Monthly Website & Enquiry Reports',
    explainer: 'A clear, simple monthly summary showing how many people visited your website and how many enquiries were generated.',
    growth: false,
    scale: true,
  },
];

export const CommercialPricingGrid: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const toggleTooltip = (id: string) => {
    setActiveTooltip((prev) => (prev === id ? null : id));
  };

  const renderFeatureRow = (feature: FeatureItem, isEven: boolean) => {
    const isTooltipOpen = activeTooltip === feature.id;

    return (
      <tr
        key={feature.id}
        className={`border-b border-[#E2EEF5]/70 transition-colors group ${
          isEven ? 'bg-[#FAFDFE]' : 'bg-white'
        } hover:bg-[#F0F7FB]`}
      >
        {/* Column 1: Feature Title & Info Tooltip */}
        <td className="py-4 px-4 sm:px-6 text-left align-middle transition-colors group-hover:bg-[#F0F7FB]">
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-[#08232C] leading-snug">
              {feature.title}
            </span>

            {/* Hover & Tap Info Tooltip */}
            <div className="relative inline-flex items-center">
              <button
                type="button"
                onClick={() => toggleTooltip(feature.id)}
                onMouseEnter={() => setActiveTooltip(feature.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                aria-label={`Information about ${feature.title}`}
                className="text-[#08232C]/40 hover:text-[#08232C] focus:outline-hidden p-0.5 rounded-full transition-colors cursor-pointer"
              >
                <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Floating Tooltip Bubble */}
              {isTooltipOpen && (
                <div className="absolute left-6 bottom-full mb-2 w-64 sm:w-72 bg-[#08232C] text-white text-xs rounded-xl p-3 shadow-2xl z-50 pointer-events-none border border-[#143946] animate-in fade-in zoom-in-95 duration-150">
                  <p className="font-normal leading-relaxed text-[#D2E4EC]">{feature.explainer}</p>
                  <div className="absolute top-full left-3 -mt-1 border-4 border-transparent border-t-[#08232C]" />
                </div>
              )}
            </div>
          </div>
        </td>

        {/* Column 2: Growth Plan (Plan 1) */}
        <td className="py-4 px-4 sm:px-6 text-center align-middle border-l border-[#E2EEF5]/70 transition-colors group-hover:bg-[#F0F7FB]">
          {feature.growth ? (
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6F4EA] text-[#0A6B48]">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          ) : (
            <span className="text-gray-300 font-bold text-lg select-none">—</span>
          )}
        </td>

        {/* Column 3: Scale Plan (Plan 2) */}
        <td className="py-4 px-4 sm:px-6 text-center align-middle border-l border-[#E2EEF5]/70 transition-colors group-hover:bg-[#F0F7FB]">
          {feature.scale ? (
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6F4EA] text-[#0A6B48]">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          ) : (
            <span className="text-gray-300 font-bold text-lg select-none">—</span>
          )}
        </td>
      </tr>
    );
  };

  return (
    <section id="pricing" className="pt-6 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
      {/* Desktop Header: 2 Plans with Branching Bracket Lines aligned directly to Plan 1 (55%) and Plan 2 (85%) */}
      <div className="hidden lg:block relative max-w-5xl mx-auto h-14">
        {/* Full-width SVG matching the 1000-unit coordinate system */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 56"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Left branching bracket curving down to center of Growth Plan column (x = 550) */}
          <path
            d="M 645 20 H 570 Q 550 20 550 38 V 56"
            stroke="#08232C"
            strokeOpacity="0.45"
            strokeWidth="1.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Right branching bracket curving down to center of Scale Plan column (x = 850) */}
          <path
            d="M 755 20 H 830 Q 850 20 850 38 V 56"
            stroke="#08232C"
            strokeOpacity="0.45"
            strokeWidth="1.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Centered 2 Plans Title directly at 70% (between Column 2 and Column 3) */}
        <div className="absolute top-2 left-[70%] -translate-x-1/2 z-10 px-4 bg-[#F0F7FB] flex items-center justify-center">
          <span className="text-base font-bold text-[#08232C] tracking-tight leading-none whitespace-nowrap">
            2 Plans
          </span>
        </div>
      </div>

      {/* Mobile Header with Flanking Horizontal Dividers */}
      <div className="lg:hidden flex items-center justify-center max-w-xs mx-auto px-4 gap-3 py-2">
        <div className="h-[1.5px] flex-1 bg-[#08232C]/30 rounded-full" />
        <h2 className="text-base sm:text-lg font-bold text-[#08232C] tracking-tight shrink-0">
          2 Plans
        </h2>
        <div className="h-[1.5px] flex-1 bg-[#08232C]/30 rounded-full" />
      </div>

      {/* Main Pricing Comparison Table */}
      <div className="max-w-5xl mx-auto bg-white border-2 border-[#D8E5EE] rounded-[32px] shadow-sm overflow-hidden">
        {/* Table View with responsive horizontal scroll and 40-30-30 proportions */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px] table-fixed">
            {/* Column Proportions: 40% - 30% - 30% */}
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[30%]" />
              <col className="w-[30%]" />
            </colgroup>

            {/* Header Columns */}
            <thead>
              <tr className="border-b-2 border-[#E2EEF5] bg-white">
                {/* Column 1: Feature Title Header */}
                <th className="py-6 px-4 sm:px-6 align-bottom">
                  <span className="text-xs font-black uppercase tracking-widest text-[#08232C]/60 block mb-1">
                    Complete Feature Breakdown
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-[#08232C] tracking-tight">
                    Features &amp; Services
                  </h3>
                </th>

                {/* Column 2: Plan 1 (Growth Plan) Header */}
                <th className="py-6 px-4 sm:px-6 text-center align-bottom border-l-2 border-[#E2EEF5] bg-[#FAFDFE]">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-[#08232C]/60">
                      Plan 1
                    </span>
                    <svg className="w-4 h-6 text-[#08232C] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <h3 className="text-base sm:text-xl font-black text-[#08232C] tracking-tight">
                      Growth Plan
                    </h3>
                    <a
                      href="https://growth.ifamedia.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-[#08232C] hover:bg-[#0E3542] text-white font-bold text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#F3C044]" />
                    </a>
                  </div>
                </th>

                {/* Column 3: Plan 2 (Scale Plan) Header */}
                <th className="py-6 px-4 sm:px-6 text-center align-bottom border-l-2 border-[#E2EEF5] bg-[#F7FBFD] relative">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#08232C] text-[#F3C044] text-[10px] font-black uppercase tracking-wider shadow-xs">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Most Popular</span>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#08232C]/60">
                      Plan 2
                    </span>
                    <svg className="w-4 h-6 text-[#08232C] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <h3 className="text-base sm:text-xl font-black text-[#08232C] tracking-tight">
                      Scale Plan
                    </h3>
                    <a
                      href="https://scale.ifamedia.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-bold text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#08232C]" />
                    </a>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* SEGMENT 1: WEBSITE FEATURES */}
              <tr className="bg-[#FFFDE7] border-y-2 border-[#FEF08A]">
                <td colSpan={3} className="py-3 px-4 sm:px-6">
                  <div className="flex items-center space-x-2 text-[#854D0E]">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#B45309]" />
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                      1. Website Features
                    </span>
                    <span className="text-xs text-[#A16207] font-medium hidden sm:inline">
                      — Fast, secure, FCA-compliant &amp; easy for clients to use
                    </span>
                  </div>
                </td>
              </tr>
              {websiteFeatures.map((feat, idx) => renderFeatureRow(feat, idx % 2 === 0))}

              {/* SEGMENT 2: DIGITAL MARKETING FEATURES */}
              <tr className="bg-[#F0F9FF] border-y-2 border-[#BAE6FD]">
                <td colSpan={3} className="py-3 px-4 sm:px-6">
                  <div className="flex items-center space-x-2 text-[#0369A1]">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7]" />
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                      2. Marketing &amp; Growth Services
                    </span>
                    <span className="text-xs text-[#0284C7] font-medium hidden sm:inline">
                      — Hands-off social posts, local Google visibility &amp; client enquiries
                    </span>
                  </div>
                </td>
              </tr>
              {marketingFeatures.map((feat, idx) => renderFeatureRow(feat, idx % 2 === 0))}
            </tbody>

            {/* Bottom Summary CTA Row */}
            <tfoot>
              <tr className="border-t-2 border-[#E2EEF5] bg-white">
                <td className="py-6 px-4 sm:px-6 text-xs text-[#08232C]/60 font-medium">
                  Hover or tap the <Info className="w-3.5 h-3.5 inline mx-0.5 text-[#08232C]/70" /> icon next to any feature to view a simple, plain-English explanation.
                </td>
                <td className="py-6 px-3 sm:px-6 text-center border-l-2 border-[#E2EEF5] bg-[#FAFDFE]">
                  <a
                    href="https://growth.ifamedia.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-1.5 group"
                  >
                    <span>Preview Growth</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F3C044] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </td>
                <td className="py-6 px-3 sm:px-6 text-center border-l-2 border-[#E2EEF5] bg-[#F7FBFD]">
                  <a
                    href="https://scale.ifamedia.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-1.5 group"
                  >
                    <span>Preview Scale</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#08232C] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};
