'use client';

import React from 'react';
import Link from 'next/link';
import { PlusCircle, Lock, ArrowUpRight } from 'lucide-react';

interface MarketingHeaderProps {
  onOpenPrivacyModal?: () => void;
}

export const MarketingHeader: React.FC<MarketingHeaderProps> = ({ onOpenPrivacyModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EC]/95 backdrop-blur-md border-b-2 border-[#E5DFD1] transition-all">
      {/* Top Institutional Regulatory Bar (Actuaries & Unbiased Style) */}
      <div className="bg-[#08232C] text-[#DCE7EB] py-2 px-4 text-[11px] font-medium border-b border-[#143946]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#5CDFB0] animate-pulse" />
            <span className="text-white font-bold tracking-wide">FCA WHOLE OF MARKET READY</span>
            <span className="text-[#3C6472] hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline text-[#AFC3C9]">Consumer Duty Standard FG22/5 &bull; COBS 4 Compliance</span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-[#5CDFB0] flex items-center space-x-1.5 transition-colors cursor-pointer text-[#C7D7DC]"
            >
              <Lock className="w-3 h-3 text-[#5CDFB0]" />
              <span>UK GDPR Encrypted</span>
            </button>
            <span className="text-[#204754]">|</span>
            <Link 
              href="/admin" 
              className="hover:text-white transition-colors flex items-center space-x-1 text-[#AFC3C9]"
            >
              <span>Adviser Console</span>
              <ArrowUpRight className="w-3 h-3 text-[#E4A853]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean British FinTech Typography) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-[#08232C] text-[#F3C044] flex items-center justify-center font-extrabold text-xl shadow-sm border border-[#184654] group-hover:scale-105 transition-transform">
            IFA
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-[#08232C] tracking-tight leading-none">
                IFA Portal
              </span>
              <span className="text-[10px] bg-[#E8F8F2] text-[#0A6B48] border border-[#B4ECD6] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                UK PLATFORM
              </span>
            </div>
            <span className="text-[11px] text-[#636F75] font-bold uppercase tracking-wider block pt-1">
              Client Acquisition &amp; Practice Builder
            </span>
          </div>
        </Link>

        {/* Navigation Anchors (Plus Jakarta Sans Bold) */}
        <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-extrabold text-[#1E2E35]">
          <Link href="#templates" className="hover:text-[#007B81] transition-colors">
            Flagship Demos
          </Link>
          <Link href="#features" className="hover:text-[#007B81] transition-colors">
            AI &amp; Calculators
          </Link>
          <Link href="#roi-calculator" className="hover:text-[#007B81] transition-colors flex items-center space-x-1.5">
            <span>Practice Economics</span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FEF8E7] text-[#92400E] border border-[#FDE68A] font-black uppercase">
              ROI
            </span>
          </Link>
          <Link href="#pricing" className="hover:text-[#007B81] transition-colors">
            Plans &amp; Retainers
          </Link>
          <Link href="#benchmark" className="hover:text-[#007B81] transition-colors">
            Agency Benchmark
          </Link>
        </nav>

        {/* Action CTAs (Unbiased Golden & Deep Navy Buttons) */}
        <div className="flex items-center space-x-3">
          <Link
            href="/admin"
            className="hidden sm:inline-flex px-4 py-2.5 rounded-2xl text-xs font-black text-[#08232C] hover:bg-[#ECE6D8] border border-[#DBD4C3] transition-all"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/onboard"
            className="px-5 py-3 rounded-2xl bg-[#08232C] hover:bg-[#0E3542] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2 border border-[#184654]"
          >
            <PlusCircle className="w-4 h-4 text-[#F3C044]" />
            <span>Launch Practice</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
