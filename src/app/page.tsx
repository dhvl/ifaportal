'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Lock, Compass, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header */}
      <MarketingHeader onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with Bold Typography & Live Flagship Switcher */}
        <MarketingHero />

        {/* 2. Bento Feature Grid with Pastel Squircles & Content Presentation */}
        <BentoFeatureGrid />

        {/* 3. Interactive Practice ROI Calculator */}
        <RoiCommercialCalculator />

        {/* 4. Commercial Pricing Grid & Add-On Marketplace */}
        <CommercialPricingGrid />

        {/* 5. Agency Competitor Benchmark (The Yardstick Agency) */}
        <AgencyComparisonGrid />

        {/* 6. Dual UK GDPR & FCA Compliance Architecture */}
        <GdprComplianceSection onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

        {/* Bottom Practice Launch Banner */}
        <section className="py-20 bg-[#0B1B2B] text-white border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Multitenant Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
              Ready to Launch Your High-Converting UK IFA Practice Portal?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
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

      {/* Modern High-Trust Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-[#0B1B2B] text-amber-400 flex items-center justify-center font-black text-lg">
                IFA
              </div>
              <div>
                <span className="font-extrabold text-slate-900 text-sm block">UK IFA Portal Creator</span>
                <span className="text-[10px] text-slate-400 block">FCA-Compliant Client Acquisition Engine</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
              <Link href="#templates" className="hover:text-slate-900 transition-colors">Flagship Demos</Link>
              <Link href="#features" className="hover:text-slate-900 transition-colors">AI &amp; Calculators</Link>
              <Link href="#roi-calculator" className="hover:text-slate-900 transition-colors">ROI Calculator</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-slate-900 transition-colors flex items-center space-x-1"
              >
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                <span>UK GDPR Privacy Notice</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} UK IFA Portal Creator. All rights reserved. Built for UK Independent Financial Advisers.
            </p>
            <p className="flex items-center space-x-1">
              <span>Hosted in the United Kingdom</span>
              <span>&bull;</span>
              <span>256-Bit TLS Encryption</span>
              <span>&bull;</span>
              <span>ICO Data Controller Registered</span>
            </p>
          </div>
        </div>
      </footer>

      {/* UK GDPR Cookie Consent Banner */}
      <CookieConsentBanner onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />

      {/* UK GDPR Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        firmName="UK IFA Portal Creator"
      />
    </div>
  );
}
