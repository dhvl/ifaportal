'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-20 pb-8 sm:pt-28 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Spread Out Headline with Shimmering Keyword Tag Boxes */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#08232C] tracking-tight leading-[1.35] max-w-6xl mx-auto text-center">
          <span className="block mb-2 sm:mb-3">
            We only know one thing and that is creating websites for
          </span>
          <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 align-middle">
            {/* Tag 1: Financial Advisors with Shine */}
            <span className="relative overflow-hidden inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              <span className="relative z-10">Financial Advisors</span>
              <span className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-tag-shimmer pointer-events-none" />
            </span>
            <span className="text-[#08232C] font-black -ml-1">,</span>

            {/* Tag 2: Financial Planners with Staggered Shine */}
            <span className="relative overflow-hidden inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              <span className="relative z-10">Financial Planners</span>
              <span 
                className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-tag-shimmer pointer-events-none" 
                style={{ animationDelay: '0.4s' }}
              />
            </span>
            <span className="text-[#08232C] font-bold px-0.5">and</span>

            {/* Tag 3: Wealth Managers with Staggered Shine */}
            <span className="relative overflow-hidden inline-block px-4 py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C]">
              <span className="relative z-10">Wealth Managers</span>
              <span 
                className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-tag-shimmer pointer-events-none" 
                style={{ animationDelay: '0.8s' }}
              />
            </span>
            <span className="text-[#08232C] font-black -ml-1">.</span>
          </span>
        </h1>

      </div>
    </section>
  );
};
