'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-20 pb-8 sm:pt-28 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Spread Out Headline with Vivid Gold Shimmering Tag Boxes on a Single Line */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#08232C] tracking-tight leading-[1.35] max-w-6xl mx-auto text-center">
          <span className="block mb-3 sm:mb-4">
            We only know one thing and that is creating websites for
          </span>
          <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 align-middle">
            {/* Tag 1: Financial Advisors with Vivid Gold Shimmer */}
            <span className="relative overflow-hidden inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] hover:border-amber-400 shadow-2xs text-[#08232C] text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black transition-all">
              <span className="relative z-10">Financial Advisors</span>
              <span className="absolute inset-0 w-full h-full shimmer-gold-beam animate-tag-shimmer pointer-events-none" />
            </span>
            <span className="text-[#08232C] font-black -ml-0.5">,</span>

            {/* Tag 2: Financial Planners with Staggered Gold Shimmer */}
            <span className="relative overflow-hidden inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] hover:border-amber-400 shadow-2xs text-[#08232C] text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black transition-all">
              <span className="relative z-10">Financial Planners</span>
              <span 
                className="absolute inset-0 w-full h-full shimmer-gold-beam animate-tag-shimmer pointer-events-none" 
                style={{ animationDelay: '0.45s' }}
              />
            </span>
            <span className="text-[#08232C] font-bold px-0.5 text-lg sm:text-xl md:text-2xl lg:text-[30px]">and</span>

            {/* Tag 3: Wealth Managers with Staggered Gold Shimmer */}
            <span className="relative overflow-hidden inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] hover:border-amber-400 shadow-2xs text-[#08232C] text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black transition-all">
              <span className="relative z-10">Wealth Managers</span>
              <span 
                className="absolute inset-0 w-full h-full shimmer-gold-beam animate-tag-shimmer pointer-events-none" 
                style={{ animationDelay: '0.9s' }}
              />
            </span>
            <span className="text-[#08232C] font-black -ml-0.5">.</span>
          </span>
        </h1>

      </div>
    </section>
  );
};
