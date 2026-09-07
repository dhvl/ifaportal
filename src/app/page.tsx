'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/MarketingHeader';
import { MarketingHero } from '@/components/marketing/MarketingHero';
import { BentoFeatureGrid } from '@/components/marketing/BentoFeatureGrid';
import { RoiCommercialCalculator } from '@/components/marketing/RoiCommercialCalculator';
import { CommercialPricingGrid } from '@/components/marketing/CommercialPricingGrid';
import { AgencyComparisonGrid } from '@/components/marketing/AgencyComparisonGrid';
import { GdprComplianceSection } from '@/components/marketing/GdprComplianceSection';
import { CookieConsentBanner } from '@/components/common/CookieConsentBanner';
import { PrivacyPolicyModal } from '@/components/modals/PrivacyPolicyModal';

export default function RootHomePage() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Top Header */}
      <MarketingHeader onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Editorial Hero with Dual Flagship Demos (Heritage & Trust + MLP Wealth) */}
        <MarketingHero />

        {/* 3. Bento Feature Grid with Structured Boxes (Actuaries & Fintuity Style) */}
        <BentoFeatureGrid />

        {/* 4. Interactive Practice ROI Calculator (IBM Plex Mono Metrics) */}
        <RoiCommercialCalculator />

        {/* 5. Commercial Pricing Grid (Starter £249 vs Pro £599 & Retainers) */}
        <CommercialPricingGrid />

        {/* 6. Agency Value Benchmark (Traditional Web Agencies vs IFA Portal) */}
        <AgencyComparisonGrid />

        {/* 7. Dual UK GDPR & FCA Compliance Architecture */}
        <GdprComplianceSection onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

        {/* 8. Bottom Practice Launch Banner (High-Trust Navy Container) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#0B1B2B] text-white rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Multitenant Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] max-w-3xl mx-auto">
              Ready to Launch Your High-Converting UK IFA Practice Portal?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Join leading UK financial advisers using modern Next.js and conversational AI to win qualified high-net-worth clients without £12k agency lock-ins.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <Link
                href="/admin/onboard"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <PlusCircle className="w-5 h-5 text-slate-950" />
                <span>Start Practice Onboarding (2 Mins)</span>
              </Link>

              <Link
                href="/admin"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Access Adviser Dashboard</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modern High-Trust British Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-[#0B1B2B] text-amber-400 flex items-center justify-center font-black text-lg">
                IFA
              </div>
              <div>
                <span className="font-extrabold text-slate-900 text-sm block">UK IFA Portal</span>
                <span className="text-[10px] text-slate-400 block">FCA-Compliant Client Acquisition Engine</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
              <Link href="#templates" className="hover:text-slate-900 transition-colors">Flagship Demos</Link>
              <Link href="#features" className="hover:text-slate-900 transition-colors">AI &amp; Calculators</Link>
              <Link href="#roi-calculator" className="hover:text-slate-900 transition-colors">Practice ROI</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Plans &amp; Retainers</Link>
              <Link href="#benchmark" className="hover:text-slate-900 transition-colors">Agency Benchmark</Link>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-slate-900 transition-colors"
              >
                UK Privacy &amp; GDPR
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>FCA COBS 4 Standard Disclosures &bull; Consumer Duty FG22/5 Ready &bull; UK GDPR Fiduciary Engine</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} UK IFA Portal Creator. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Global UK GDPR Cookie Consent Banner */}
      <CookieConsentBanner onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />

      {/* Global UK GDPR Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
