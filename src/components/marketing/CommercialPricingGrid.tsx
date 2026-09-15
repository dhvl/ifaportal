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
    title: 'Modern Bespoke Responsive Website',
    explainer: 'Design tailored to your advisory firm, fully responsive across mobile, tablet, and desktop.',
    growth: true,
    scale: true,
  },
  {
    id: 'whatsapp-call',
    title: 'Direct WhatsApp & Call Routing',
    explainer: 'One-tap instant WhatsApp consultation trigger and click-to-call routing for immediate prospect contact.',
    growth: true,
    scale: true,
  },
  {
    id: 'fca-consumer-duty',
    title: 'FCA Consumer Duty & FRN Verification',
    explainer: 'Embedded regulatory compliance, FCA registration validation badge, and statutory FSCS disclaimers.',
    growth: true,
    scale: true,
  },
  {
    id: 'adviser-directory',
    title: 'Adviser Bio & Qualifications Directory',
    explainer: 'Professional adviser profiles showcasing SPS credentials, Chartered status, specialisms, and experience.',
    growth: true,
    scale: true,
  },
  {
    id: 'uk-cloud-ssl',
    title: 'High-Speed UK Cloud Hosting & SSL',
    explainer: 'Ultra-fast UK-based cloud infrastructure with automatic SSL certification, DDoS defense, and 99.9% uptime.',
    growth: true,
    scale: true,
  },
  {
    id: 'gdpr-cookie',
    title: 'UK GDPR & Cookie Consent Management',
    explainer: 'Compliant granular cookie consent banner, audit-ready data privacy architecture, and regulatory policy pages.',
    growth: true,
    scale: true,
  },
  {
    id: 'contact-forms',
    title: 'Secure SSL Contact & Inquiry Forms',
    explainer: 'Encrypted lead inquiry forms delivering instant notifications directly to your primary practice inbox.',
    growth: true,
    scale: true,
  },
  {
    id: 'ai-concierge',
    title: '24/7 Conversational AI Concierge',
    explainer: 'Trained UK wealth assistant that greets visitors, answers practice FAQs, and pre-qualifies high-net-worth leads.',
    growth: false,
    scale: true,
  },
  {
    id: 'pension-calc',
    title: 'Pension Drawdown Calculator',
    explainer: 'Interactive tool allowing prospects to simulate tax-free cash lump sums and retirement income sustainability.',
    growth: false,
    scale: true,
  },
  {
    id: 'iht-calc',
    title: 'Inheritance Tax (40% IHT) Calculator',
    explainer: 'Engaging tool calculating potential estate tax liability above nil-rate bands to prompt wealth transfer planning.',
    growth: false,
    scale: true,
  },
  {
    id: 'isa-calc',
    title: 'Compound ISA / Wealth Calculator',
    explainer: 'Visual investment growth calculator demonstrating long-term tax-efficient compounding returns.',
    growth: false,
    scale: true,
  },
  {
    id: 'gated-guide',
    title: 'Gated Retirement Guide Lead Magnet',
    explainer: 'High-value downloadable wealth & retirement guide designed to capture verified prospect emails.',
    growth: false,
    scale: true,
  },
  {
    id: 'booking-calendar',
    title: 'Adviser Booking Calendar Integration',
    explainer: 'Seamless real-time appointment booking synced with Calendly, HubSpot, or Microsoft Outlook calendars.',
    growth: false,
    scale: true,
  },
  {
    id: 'client-portal',
    title: 'Client Portal Login Integration',
    explainer: 'Direct single-click client portal access gateway for moneyinfo, Intelliflo, Transact, or standard platforms.',
    growth: false,
    scale: true,
  },
];

const marketingFeatures: FeatureItem[] = [
  {
    id: 'dfy-social',
    title: '3-Month DFY Social Media Retainer',
    explainer: 'Comprehensive 90-day Done-For-You social media strategy, scheduling, and execution included with launch.',
    growth: true,
    scale: true,
  },
  {
    id: 'weekly-content',
    title: 'Weekly LinkedIn & X Financial Content',
    explainer: 'Curated weekly thought-leadership posts to build trust and authority among local and corporate clients.',
    growth: true,
    scale: true,
  },
  {
    id: 'client-newsletter',
    title: 'Monthly Branded Client Newsletter',
    explainer: 'Professionally formatted email newsletter template with timely market updates for client retention.',
    growth: true,
    scale: true,
  },
  {
    id: 'local-seo',
    title: 'Google Business Profile & Local SEO',
    explainer: 'Full setup, category optimization, and local map-pack targeting for regional search dominance.',
    growth: true,
    scale: true,
  },
  {
    id: 'multichannel-campaigns',
    title: 'Expanded Multi-Channel Social Campaigns',
    explainer: 'Tailored multi-platform campaigns with custom infographic assets, infographics, and carousel posts.',
    growth: false,
    scale: true,
  },
  {
    id: 'email-nurture',
    title: 'Automated Email Lead Nurture Funnel',
    explainer: 'Automated multi-touch email drip sequence warming cold inquiries into committed booked consultations.',
    growth: false,
    scale: true,
  },
  {
    id: 'local-citations',
    title: 'UK Local Search Citation Building',
    explainer: 'High-authority UK financial directory and citation syndication to maximize organic local search ranking.',
    growth: false,
    scale: true,
  },
  {
    id: 'monthly-analytics',
    title: 'Monthly Performance & ROI Analytics',
    explainer: 'Executive monthly reporting dashboard detailing traffic volume, lead conversion rates, and acquisition ROI.',
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
        <td className="py-4 px-3 sm:px-6 text-center align-middle w-28 sm:w-44 lg:w-56 border-l border-[#E2EEF5]/70 transition-colors group-hover:bg-[#F0F7FB]">
          {feature.growth ? (
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6F4EA] text-[#0A6B48]">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          ) : (
            <span className="text-gray-300 font-bold text-lg select-none">—</span>
          )}
        </td>

        {/* Column 3: Scale Plan (Plan 2) - Full row hover enabled */}
        <td className="py-4 px-3 sm:px-6 text-center align-middle w-28 sm:w-44 lg:w-56 border-l border-[#E2EEF5]/70 transition-colors group-hover:bg-[#F0F7FB]">
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
    <section id="pricing" className="pt-6 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      {/* Desktop Header: 2 Plans with Branching Lines Positioned Over the 2 Plan Columns on the Right */}
      <div className="hidden lg:grid grid-cols-12 max-w-5xl mx-auto items-end">
        {/* Left Side (Over Features & Services column) - Empty space */}
        <div className="lg:col-span-6 xl:col-span-7" />

        {/* Right Side (Directly over Plan 1 and Plan 2 columns) */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center h-16">
            {/* SVG Branching Lines: Left line to Plan 1 (x=25%), Right line to Plan 2 (x=75%) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 64" fill="none" preserveAspectRatio="none">
              {/* Left branch curving down to Plan 1 center */}
              <path
                d="M 38 28 H 27 Q 25 28 25 40 V 64"
                stroke="rgba(8, 35, 44, 0.6)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Right branch curving down to Plan 2 center */}
              <path
                d="M 62 28 H 73 Q 75 28 75 40 V 64"
                stroke="rgba(8, 35, 44, 0.6)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Centered Smaller "2 Plans" Title with Background Mask */}
            <span className="relative z-10 px-4 bg-[#F0F7FB] text-xl sm:text-2xl font-bold text-[#08232C] tracking-tight leading-none">
              2 Plans
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Header with Flanking Horizontal Dividers */}
      <div className="lg:hidden flex items-center justify-center max-w-xs mx-auto px-4 gap-3 py-2">
        <div className="h-[2px] flex-1 bg-[#08232C]/60 rounded-full" />
        <h2 className="text-xl sm:text-2xl font-bold text-[#08232C] tracking-tight shrink-0">
          2 Plans
        </h2>
        <div className="h-[2px] flex-1 bg-[#08232C]/60 rounded-full" />
      </div>

      {/* Main Pricing Comparison Table */}
      <div className="max-w-5xl mx-auto bg-white border-2 border-[#D8E5EE] rounded-[32px] shadow-sm overflow-hidden">
        {/* Table View with responsive horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px]">
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
                <th className="py-6 px-3 sm:px-6 text-center align-bottom w-28 sm:w-44 lg:w-56 border-l-2 border-[#E2EEF5] bg-[#FAFDFE]">
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
                      className="inline-flex items-center justify-center space-x-1 px-3 py-1.5 rounded-xl bg-[#08232C] hover:bg-[#0E3542] text-white font-bold text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3 text-[#F3C044]" />
                    </a>
                  </div>
                </th>

                {/* Column 3: Plan 2 (Scale Plan) Header */}
                <th className="py-6 px-3 sm:px-6 text-center align-bottom w-28 sm:w-44 lg:w-56 border-l-2 border-[#E2EEF5] bg-[#F7FBFD] relative">
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
                      className="inline-flex items-center justify-center space-x-1 px-3 py-1.5 rounded-xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-bold text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3 text-[#08232C]" />
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
                      — Bespoke design, regulatory compliance &amp; core infrastructure
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
                      2. Digital Marketing Features
                    </span>
                    <span className="text-xs text-[#0284C7] font-medium hidden sm:inline">
                      — DFY social authority, local SEO &amp; lead nurturing funnels
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
                  Hover or tap the <Info className="w-3.5 h-3.5 inline mx-0.5 text-[#08232C]/70" /> icon next to any feature to view its full specification.
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
