'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-20 pb-8 sm:pt-28 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Spread Out Headline with Tag-Styled Keywords on a Single Line */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#08232C] tracking-tight leading-[1.35] max-w-6xl mx-auto text-center">
          <span className="block mb-2 sm:mb-3">
            We only know one thing and that is creating websites for
          </span>
          <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 align-middle">
            <span className="inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              Financial Advisors
            </span>
            <span className="text-[#08232C] font-black -ml-1">,</span>
            <span className="inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              Financial Planners
            </span>
            <span className="text-[#08232C] font-bold px-0.5">and</span>
            <span className="inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              Wealth Managers
            </span>
            <span className="text-[#08232C] font-black -ml-1">.</span>
          </span>
        </h1>

      </div>
    </section>
  );
};
