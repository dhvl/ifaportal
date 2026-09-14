'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-20 pb-8 sm:pt-28 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Spread Out Headline with Smooth Flowing Diagonal Silver Shine */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black text-[#08232C] tracking-tight leading-[1.4] max-w-6xl mx-auto text-center">
          <span className="block mb-3 sm:mb-4">
            We only know one thing and that is creating websites for
          </span>
          <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 align-middle">
            {/* Tag 1: Financial Advisors (Delay: 0s) */}
            <span className="whitespace-nowrap inline-flex items-center">
              <span className="relative overflow-hidden inline-block px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                <span className="relative z-10">Financial Advisors</span>
                <span 
                  className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                  style={{ animationDelay: '0s' }}
                />
              </span>
              <span className="text-[#08232C] font-black ml-0.5">,</span>
            </span>

            {/* Tag 2: Financial Planners (Delay: 0.1s reading cascade) */}
            <span className="whitespace-nowrap inline-flex items-center">
              <span className="relative overflow-hidden inline-block px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                <span className="relative z-10">Financial Planners</span>
                <span 
                  className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                  style={{ animationDelay: '0.1s' }}
                />
              </span>
            </span>

            <span className="text-[#08232C] font-bold px-1 text-lg sm:text-xl lg:text-[26px]">and</span>

            {/* Tag 3: Wealth Managers (Delay: 0.2s reading cascade) */}
            <span className="whitespace-nowrap inline-flex items-center">
              <span className="relative overflow-hidden inline-block px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                <span className="relative z-10">Wealth Managers</span>
                <span 
                  className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                  style={{ animationDelay: '0.2s' }}
                />
              </span>
              <span className="text-[#08232C] font-black ml-0.5">.</span>
            </span>
          </span>
        </h1>

      </div>
    </section>
  );
};
