'use client';

import React from 'react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] pt-20 pb-10 sm:pt-28 sm:pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Unified Headline with Tag Styled Keywords & No Divider */}
        <h1 className="text-3xl sm:text-[42px] lg:text-[48px] font-black text-[#08232C] tracking-tight leading-[1.35] max-w-4xl mx-auto text-center">
          We only know one thing and that is creating websites for{' '}
          <span className="inline-block px-3.5 py-0.5 mx-1 my-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] align-baseline">
            Financial Advisors
          </span>
          ,{' '}
          <span className="inline-block px-3.5 py-0.5 mx-1 my-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] align-baseline">
            Financial Planners
          </span>{' '}
          and{' '}
          <span className="inline-block px-3.5 py-0.5 mx-1 my-1 rounded-2xl bg-white border-2 border-[#D8E5EE] shadow-2xs text-[#08232C] align-baseline">
            Wealth Managers
          </span>
          .
        </h1>

      </div>
    </section>
  );
};
