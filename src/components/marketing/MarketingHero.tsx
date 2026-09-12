'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FB] border-b-2 border-[#D8E5EE] pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Friendly Agency Pill */}
        <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs px-4 py-2 rounded-full font-bold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#0A6B48] animate-pulse" />
          <span className="font-extrabold uppercase tracking-wide text-[#08232C]">UK Specialist Web Studio</span>
          <span className="text-[#D8E5EE]">•</span>
          <span className="text-[#636F75] font-semibold">IFA Media</span>
        </div>

        {/* Simplified Title as Requested */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#08232C] tracking-tight leading-[1.08] max-w-4xl mx-auto">
          We only know one thing
        </h1>

        {/* Subtitle as Requested */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#334D5C] max-w-3xl mx-auto leading-snug font-medium">
          and that is creating websites for Financial Advisors, Financial Planners and Wealth Managers.
        </p>

        {/* Friendly Agency Value Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-[#08232C]">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E5EE] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
            <span>Modern Next.js &amp; AI Concierge</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E5EE] shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A6B48]" />
            <span>Includes 3-Month Social Media Retainer</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E5EE] shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>FCA Consumer Duty &amp; GDPR Built-In</span>
          </span>
        </div>

        {/* Friendly Agency CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-4">
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
