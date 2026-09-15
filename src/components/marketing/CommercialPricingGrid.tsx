'use client';

import React from 'react';
import { Check, Globe, TrendingUp, ExternalLink } from 'lucide-react';

export const CommercialPricingGrid: React.FC = () => {
  return (
    <section id="pricing" className="pt-6 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      {/* Desktop Header with Branching Divider Lines to Plan 1 & Plan 2 */}
      <div className="hidden lg:block relative max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center h-24">
          {/* SVG Branching Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 96" fill="none" preserveAspectRatio="none">
            {/* Left line curving down to Plan 1 */}
            <path
              d="M 370 48 H 260 Q 240 48 240 68 V 96"
              stroke="rgba(8, 35, 44, 0.6)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Right line curving down to Plan 2 */}
            <path
              d="M 630 48 H 740 Q 760 48 760 68 V 96"
              stroke="rgba(8, 35, 44, 0.6)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Centered 2 Plans Title with background mask */}
          <h2 className="relative z-10 px-8 bg-[#F0F7FB] text-2xl xs:text-[28px] sm:text-4xl lg:text-[48px] xl:text-[52px] font-semibold text-[#08232C] tracking-tight leading-[1.2]">
            2 Plans
          </h2>
        </div>
      </div>

      {/* Mobile Header with Flanking Horizontal Dividers */}
      <div className="lg:hidden flex items-center justify-center max-w-sm mx-auto px-4 gap-4 py-2">
        <div className="h-[2px] flex-1 bg-[#08232C]/60 rounded-full" />
        <h2 className="text-2xl xs:text-[28px] font-semibold text-[#08232C] tracking-tight leading-[1.2] shrink-0">
          2 Plans
        </h2>
        <div className="h-[2px] flex-1 bg-[#08232C]/60 rounded-full" />
      </div>

      {/* 2 Core Plan Cards with Mobile-Responsive Directional Arrows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start pt-1">
        {/* Plan 1 Column */}
        <div className="space-y-3">
          {/* Plan 1 Directional Arrow */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#08232C]/60">Plan 1</span>
            <svg className="w-5 h-7 sm:w-6 sm:h-8 text-[#08232C] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Starter Plan (Compact, natural height) */}
          <div className="bg-white border-2 border-[#D8E5EE] rounded-[32px] p-6 sm:p-10 space-y-6 shadow-sm flex flex-col justify-start">
            <div className="space-y-6">
              {/* Title only */}
              <div className="pb-4 border-b-2 border-[#E2EEF5]">
                <h3 className="text-2xl sm:text-3xl font-black text-[#08232C] tracking-tight">Starter Plan</h3>
              </div>

              {/* Feature Boxes */}
              <div className="space-y-5">
                {/* Light Yellow Box: Website Features */}
                <div className="bg-[#FFFDE7] border-2 border-[#FEF08A] rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-2 text-[#854D0E]">
                    <Globe className="w-5 h-5 text-[#B45309]" />
                    <h4 className="text-sm font-black uppercase tracking-wider">Website Features</h4>
                  </div>
                  <ul className="space-y-3.5 text-sm font-medium text-[#713F12] leading-relaxed">
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Modern bespoke Next.js responsive website</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Direct WhatsApp consultation &amp; click-to-call routing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>FCA Consumer Duty, FRN verification &amp; FSCS disclaimers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Dedicated adviser bios, qualifications &amp; team sections</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>High-speed UK cloud hosting with SSL security</span>
                    </li>
                  </ul>
                </div>

                {/* Light Sky Blue Box: Digital Marketing Features */}
                <div className="bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-2 text-[#0369A1]">
                    <TrendingUp className="w-5 h-5 text-[#0284C7]" />
                    <h4 className="text-sm font-black uppercase tracking-wider">Digital Marketing Features</h4>
                  </div>
                  <ul className="space-y-3.5 text-sm font-medium text-[#0C4A6E] leading-relaxed">
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span><strong>3-Month DFY Social Media Retainer:</strong> Included on contract</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Weekly financial thought-leadership LinkedIn &amp; X content</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Monthly branded client email newsletter template</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Google Business Profile setup &amp; local search optimisation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA: Preview Starter Template */}
            <div className="pt-4 border-t-2 border-[#E2EEF5]">
              <a
                href="https://starter.ifamedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 border border-[#184654] group"
              >
                <span>Preview Starter Template</span>
                <ExternalLink className="w-4 h-4 text-[#F3C044] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Plan 2 Column */}
        <div className="space-y-3">
          {/* Plan 2 Directional Arrow */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#08232C]/60">Plan 2</span>
            <svg className="w-5 h-7 sm:w-6 sm:h-8 text-[#08232C] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Growth Plan (Longer card displaying rich extra feature depth) */}
          <div className="bg-white border-2 border-[#08232C] rounded-[32px] p-6 sm:p-10 space-y-6 shadow-xl flex flex-col justify-start relative">
            <div className="space-y-6">
              {/* Title only */}
              <div className="pb-4 border-b-2 border-[#E2EEF5]">
                <h3 className="text-2xl sm:text-3xl font-black text-[#08232C] tracking-tight">Growth Plan</h3>
              </div>

              {/* Subtitle / Header */}
              <div className="text-xs font-black uppercase tracking-widest text-[#08232C] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#0A6B48]" />
                <span>All of Starter Plan features, plus:</span>
              </div>

              {/* Feature Boxes */}
              <div className="space-y-5">
                {/* Light Yellow Box: Additional Website Features */}
                <div className="bg-[#FFFDE7] border-2 border-[#FEF08A] rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-2 text-[#854D0E]">
                    <Globe className="w-5 h-5 text-[#B45309]" />
                    <h4 className="text-sm font-black uppercase tracking-wider">Website Features</h4>
                  </div>
                  <ul className="space-y-3.5 text-sm font-medium text-[#713F12] leading-relaxed">
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span><strong>24/7 Conversational AI Concierge:</strong> Answers questions &amp; qualifies wealth prospects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span><strong>3 Interactive UK Wealth Calculators:</strong> Pension Drawdown, 40% IHT &amp; Compound ISA</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Gated downloadable retirement &amp; wealth lead magnet guide</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Multi-adviser booking calendar integration (Calendly / HubSpot)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Client portal login integration (moneyinfo / Intelliflo)</span>
                    </li>
                  </ul>
                </div>

                {/* Light Sky Blue Box: Additional Digital Marketing Features */}
                <div className="bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-2 text-[#0369A1]">
                    <TrendingUp className="w-5 h-5 text-[#0284C7]" />
                    <h4 className="text-sm font-black uppercase tracking-wider">Digital Marketing Features</h4>
                  </div>
                  <ul className="space-y-3.5 text-sm font-medium text-[#0C4A6E] leading-relaxed">
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Expanded multi-channel social media campaigns &amp; bespoke visual assets</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Automated high-intent email lead capture &amp; nurturing sequences</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Quarterly UK local search authority building &amp; citation management</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-4.5 h-4.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>Dedicated monthly lead acquisition &amp; engagement reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA: Preview Growth Template */}
            <div className="pt-4 border-t-2 border-[#E2EEF5]">
              <a
                href="https://growth.ifamedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 group"
              >
                <span>Preview Growth Template</span>
                <ExternalLink className="w-4 h-4 text-[#08232C] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
