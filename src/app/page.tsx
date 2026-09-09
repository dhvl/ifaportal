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
    <div className="min-h-screen bg-[#F7F4EC] text-[#121C22] font-sans antialiased selection:bg-[#FEF8E7] selection:text-[#92400E]">
      {/* 1. Institutional British Header */}
      <MarketingHeader onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 2. Hero with Unbiased Interactive Practice Matcher & Dual Flagship Previews */}
        <MarketingHero />

        {/* 3. Actuaries & Fintuity Style Chunky Feature Box Grid */}
        <BentoFeatureGrid />

        {/* 4. Interactive Practice ROI Economics Calculator (IBM Plex Mono Figures) */}
        <RoiCommercialCalculator />

        {/* 5. Commercial Pricing Grid (Starter £249 vs Pro £599 & Modular Add-Ons) */}
        <CommercialPricingGrid />

        {/* 6. Agency Value Benchmark (Traditional Web Agencies vs IFA Portal) */}
        <AgencyComparisonGrid />

        {/* 7. Dual UK GDPR & FCA Compliance Architecture */}
        <GdprComplianceSection onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

        {/* 8. Bottom Practice Launch Banner (Chunky Deep British Pine Container) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#08232C] text-white rounded-[36px] p-8 sm:p-16 text-center space-y-8 shadow-xl border-2 border-[#143946] relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 bg-[#143946] text-[#F3C044] border border-[#235364] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F3C044]" />
              <span>Instant Multitenant Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] max-w-4xl mx-auto">
              Ready to Launch Your High-Converting UK IFA Practice Portal?
            </h2>

            <p className="text-base sm:text-xl text-[#AFC3C9] max-w-2xl mx-auto leading-relaxed font-normal">
              Join leading UK independent advisers using modern Next.js and conversational AI to win qualified high-net-worth clients without £12k agency lock-ins.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                href="/admin/onboard"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <PlusCircle className="w-5 h-5 text-[#08232C]" />
                <span>Start Practice Onboarding (2 Mins)</span>
              </Link>

              <Link
                href="/admin"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#0E3542] border-2 border-[#1D4A59] hover:bg-[#143946] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-[#F3C044]" />
                <span>Access Adviser Dashboard</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modern High-Trust British Footer */}
      <footer className="bg-white border-t-2 border-[#E5DFD1] py-14 text-xs text-[#636F75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#F0EBE0]">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#08232C] text-[#F3C044] flex items-center justify-center font-black text-lg shadow-sm border border-[#184654]">
                IFA
              </div>
              <div>
                <span className="font-extrabold text-[#08232C] text-base block">UK IFA Portal</span>
                <span className="text-[11px] text-[#636F75] font-medium block">FCA-Compliant Client Acquisition Engine</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-7 text-xs font-bold text-[#1E2E35]">
              <Link href="#templates" className="hover:text-[#007B81] transition-colors">Flagship Demos</Link>
              <Link href="#features" className="hover:text-[#007B81] transition-colors">AI &amp; Calculators</Link>
              <Link href="#roi-calculator" className="hover:text-[#007B81] transition-colors">Practice ROI</Link>
              <Link href="#pricing" className="hover:text-[#007B81] transition-colors">Plans &amp; Retainers</Link>
              <Link href="#benchmark" className="hover:text-[#007B81] transition-colors">Agency Benchmark</Link>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-[#007B81] transition-colors cursor-pointer"
              >
                UK Privacy &amp; GDPR
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#869299]">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#0A6B48]" />
              <span>FCA COBS 4 Standard Disclosures &bull; Consumer Duty FG22/5 Ready &bull; UK GDPR Fiduciary Safeguards</span>
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
