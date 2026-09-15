'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-16 pb-8 sm:pt-28 sm:pb-10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Headline: Mobile 4 Lines & Desktop Single Row */}
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black text-[#08232C] tracking-tight leading-[1.35] max-w-6xl mx-auto text-center">
          {/* Mobile Line 1 */}
          <span className="block mb-1 sm:mb-2">
            We only know one thing and that is
          </span>
          {/* Mobile Line 2 */}
          <span className="block mb-3 sm:mb-4">
            creating websites for
          </span>
          
          {/* Mobile Lines 3 & 4 | Desktop Single Row */}
          <span className="flex flex-col sm:inline-flex sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-2.5 align-middle">
            {/* Mobile Line 3: Financial Advisors, Financial Planners */}
            <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5">
              <span className="whitespace-nowrap inline-flex items-center">
                <span className="relative overflow-hidden inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-[13px] xs:text-[15px] sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                  <span className="relative z-10">Financial Advisors</span>
                  <span 
                    className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                    style={{ animationDelay: '0s' }}
                  />
                </span>
                <span className="text-[#08232C] font-black ml-0.5">,</span>
              </span>

              <span className="whitespace-nowrap inline-flex items-center">
                <span className="relative overflow-hidden inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-[13px] xs:text-[15px] sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                  <span className="relative z-10">Financial Planners</span>
                  <span 
                    className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                    style={{ animationDelay: '0.1s' }}
                  />
                </span>
              </span>
            </span>

            {/* Mobile Line 4: and Wealth Managers. */}
            <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5">
              <span className="text-[#08232C] font-bold px-0.5 text-xs xs:text-sm sm:text-xl lg:text-[26px]">and</span>
              <span className="whitespace-nowrap inline-flex items-center">
                <span className="relative overflow-hidden inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] text-[13px] xs:text-[15px] sm:text-2xl lg:text-[30px] xl:text-[34px] font-black">
                  <span className="relative z-10">Wealth Managers</span>
                  <span 
                    className="absolute -inset-full diagonal-shine-beam animate-diagonal-shine pointer-events-none" 
                    style={{ animationDelay: '0.2s' }}
                  />
                </span>
                <span className="text-[#08232C] font-black ml-0.5">.</span>
              </span>
            </span>
          </span>
        </h1>

      </div>
    </section>
  );
};
