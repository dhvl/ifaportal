'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PlusCircle, ArrowRight, Bot, Calculator, Clock, Lock
} from 'lucide-react';
import { InteractivePreviewWidget } from './InteractivePreviewWidget';

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F4EE] via-[#FAF9F6] to-white border-b border-slate-200/80 pt-16 pb-20">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(245,158,11,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Main Editorial Hero Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Regulatory Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200/90 text-slate-800 text-xs px-4 py-2 rounded-full font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-extrabold text-slate-900">FCA Whole of Market Compliant</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-600">Built-in UK GDPR &bull; Consumer Duty Standard</span>
          </div>

          {/* Punchy Editorial Headline (Unbiased style) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Bespoke UK IFA Websites with Built-in Social Media &amp; AI
          </h1>

          {/* High-credibility Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Turn passive web traffic into high-net-worth pension and investment consultations. High-performance Next.js portals equipped with a <strong>24/7 AI Concierge</strong>, <strong>interactive financial calculators</strong>, and a <strong>default 3-month social media growth retainer</strong>.
          </p>

          {/* Quick Pillar Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1 text-xs text-slate-700 font-bold">
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-1.5">
              <Bot className="w-4 h-4 text-amber-600" />
              <span>24/7 AI Lead Qualifier</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-1.5">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Pension &amp; IHT Calculators</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>3-Month Social Media Retainer</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-1.5">
              <Lock className="w-4 h-4 text-purple-600" />
              <span>UK GDPR Encrypted</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4">
            <Link
              href="/admin/onboard"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-5 h-5 text-amber-400" />
              <span>Onboard New Practice (2 Mins)</span>
            </Link>

            <Link
              href="#roi-calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-300 text-slate-800 font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xs flex items-center justify-center space-x-2"
            >
              <span>Calculate Practice ROI</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </Link>
          </div>
        </div>

        {/* Interactive Live Benchmark Widget */}
        <div id="templates" className="pt-6">
          <InteractivePreviewWidget />
        </div>
      </div>
    </section>
  );
};
