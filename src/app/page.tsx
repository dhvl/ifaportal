'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Compass, Sparkles, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/MarketingHeader';
import { MarketingHero } from '@/components/marketing/MarketingHero';
import { CommercialPricingGrid } from '@/components/marketing/CommercialPricingGrid';
import { InteractivePreviewWidget } from '@/components/marketing/InteractivePreviewWidget';
import { RoiCommercialCalculator } from '@/components/marketing/RoiCommercialCalculator';
import { BentoFeatureGrid } from '@/components/marketing/BentoFeatureGrid';
import { AgencyComparisonGrid } from '@/components/marketing/AgencyComparisonGrid';
import { GdprComplianceSection } from '@/components/marketing/GdprComplianceSection';
import { CookieConsentBanner } from '@/components/common/CookieConsentBanner';
import { PrivacyPolicyModal } from '@/components/modals/PrivacyPolicyModal';

export default function RootHomePage() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F7FB] text-[#121C22] font-sans antialiased selection:bg-[#D9EDF8] selection:text-[#0C4A6E]">
      {/* 1. Institutional British Header */}
      <MarketingHeader onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 1st Fold: Hero with simplified title & subtitle */}
        <MarketingHero />

        {/* 2nd Fold: Immediately followed by the pricing cards */}
        <CommercialPricingGrid />

        {/* 3rd Fold: Followed by the interactive plan preview (Starter first, Growth second) */}
        <InteractivePreviewWidget />

        {/* 4th Fold: Interactive Practice ROI Economics Calculator */}
        <RoiCommercialCalculator />

        {/* 5th Fold: Features & Capabilities (What's included) */}
        <BentoFeatureGrid />

        {/* 6th Fold: Traditional Agencies vs IFA Media Benchmark */}
        <AgencyComparisonGrid />

        {/* 7th Fold: FCA & GDPR Compliance Architecture */}
        <GdprComplianceSection onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

        {/* 8th Fold: Friendly Bottom Agency CTA Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#08232C] text-white rounded-[36px] p-8 sm:p-14 text-center space-y-6 shadow-xl border-2 border-[#143946] relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 bg-[#143946] text-[#F3C044] border border-[#235364] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F3C044]" />
              <span>Let&apos;s Work Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] max-w-3xl mx-auto">
              Ready to elevate your advisory firm&apos;s website?
            </h2>

            <p className="text-base sm:text-xl text-[#AFC3C9] max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you want a fresh digital presence or an automated AI lead acquisition engine, we&apos;re here to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href="mailto:inquiry@ifamedia.co.uk?subject=Website%20Inquiry%20-%20IFA%20Media"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4 text-[#08232C]" />
                <span>Drop Us an Email: inquiry@ifamedia.co.uk</span>
              </a>

              <Link
                href="/admin/onboard"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0E3542] border-2 border-[#1D4A59] hover:bg-[#143946] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
              >
                <PlusCircle className="w-4 h-4 text-[#5CDFB0]" />
                <span>Start Practice Onboarding</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modern High-Trust British Footer */}
      <footer className="bg-white border-t-2 border-[#D8E5EE] py-14 text-xs text-[#636F75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#E2EEF5]">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#08232C] text-[#F3C044] flex items-center justify-center font-black text-lg shadow-sm border border-[#184654]">
                IFA
              </div>
              <div>
                <span className="font-extrabold text-[#08232C] text-base block">IFA Media</span>
                <span className="text-[11px] text-[#636F75] font-medium block">Websites &amp; Growth for UK Financial Advisers</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-7 text-xs font-bold text-[#1E2E35]">
              <Link href="#pricing" className="hover:text-[#007B81] transition-colors">Practice Plans</Link>
              <Link href="#demos" className="hover:text-[#007B81] transition-colors">Live Demos</Link>
              <Link href="#roi-calculator" className="hover:text-[#007B81] transition-colors">Practice ROI</Link>
              <Link href="#features" className="hover:text-[#007B81] transition-colors">Features</Link>
              <Link href="#benchmark" className="hover:text-[#007B81] transition-colors">Why Us</Link>
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
              &copy; {new Date().getFullYear()} IFA Media. All rights reserved.
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
