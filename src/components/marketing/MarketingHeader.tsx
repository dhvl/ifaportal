'use client';

import React from 'react';
import Link from 'next/link';
import { PlusCircle, Lock } from 'lucide-react';

interface MarketingHeaderProps {
  onOpenPrivacyModal?: () => void;
}

export const MarketingHeader: React.FC<MarketingHeaderProps> = ({ onOpenPrivacyModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Regulatory Notice Bar */}
      <div className="bg-[#0B1B2B] text-slate-300 py-1.5 px-4 text-[11px] font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-semibold">UK IFA Practice Infrastructure</span>
            <span className="text-slate-500 hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline text-slate-400">FCA FRN COBS 4 Disclosures &bull; Consumer Duty Standard</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-300">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-amber-400 flex items-center space-x-1 transition-colors"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>UK GDPR Compliant</span>
            </button>
            <span className="text-slate-600">|</span>
            <Link href="/admin" className="hover:text-white transition-colors">
              Adviser Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#0B1B2B] text-amber-400 flex items-center justify-center font-black text-xl shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
            IFA
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-black text-slate-900 tracking-tight leading-none">
                UK IFA Portal
              </span>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                V2
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest block pt-0.5">
              Client Acquisition &amp; Practice Engine
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-bold text-slate-700">
          <Link href="#templates" className="hover:text-amber-700 transition-colors">
            Flagship Portals
          </Link>
          <Link href="#features" className="hover:text-amber-700 transition-colors">
            AI &amp; Calculators
          </Link>
          <Link href="#roi-calculator" className="hover:text-amber-700 transition-colors flex items-center space-x-1">
            <span>IFA ROI Calculator</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase">Live</span>
          </Link>
          <Link href="#pricing" className="hover:text-amber-700 transition-colors">
            Pricing &amp; Retainers
          </Link>
          <Link href="#benchmark" className="hover:text-amber-700 transition-colors">
            Agency Benchmark
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center space-x-3">
          <Link
            href="/admin"
            className="hidden sm:inline-flex px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/onboard"
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
          >
            <PlusCircle className="w-4 h-4 text-amber-400" />
            <span>Onboard Practice</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
