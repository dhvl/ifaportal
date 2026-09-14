'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] border-b-2 border-[#D8E5EE] pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        {/* Unified Headline: 48px matching size & style with no pillboxes */}
        <h1 className="text-3xl sm:text-[42px] lg:text-[48px] font-black text-[#08232C] tracking-tight leading-[1.2] max-w-4xl mx-auto text-center">
          We only know one thing and that is creating websites for Financial Advisors, Financial Planners and Wealth Managers.
        </h1>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-2">
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-[#184654]"
          >
            <span>See Practice Plans</span>
            <ArrowRight className="w-4 h-4 text-[#F3C044]" />
          </Link>

          <Link
            href="#demos"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-[#D8E5EE] text-[#08232C] font-black text-xs uppercase tracking-widest hover:border-[#08232C] hover:bg-[#F4F9FD] transition-all shadow-2xs flex items-center justify-center space-x-2"
          >
            <span>Explore Live Demos</span>
          </Link>

          <a
            href="mailto:inquiry@ifamedia.co.uk?subject=Website%20Inquiry%20-%20IFA%20Media"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#E8F8F2] border-2 border-[#B4ECD6] text-[#0A6B48] font-bold text-xs uppercase tracking-wider hover:bg-[#D5F3E7] transition-all flex items-center justify-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#0A6B48]" />
            <span>Drop an Inquiry</span>
          </a>
        </div>

      </div>
    </section>
  );
};
