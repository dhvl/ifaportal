'use client';

import React from 'react';
import { ShieldCheck, Lock, Check, Database, ArrowRight } from 'lucide-react';

interface GdprComplianceSectionProps {
  onOpenPrivacyModal?: () => void;
}

export const GdprComplianceSection: React.FC<GdprComplianceSectionProps> = ({ onOpenPrivacyModal }) => {
  return (
    <section className="py-24 bg-[#F7F4EC] border-t-2 border-[#E5DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#E5DFD1] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Lock className="w-4 h-4 text-[#7E22CE]" />
            <span>Fiduciary Data Governance</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
            Dual UK GDPR &amp; FCA Compliance Architecture
          </h2>
          
          <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
            Financial advice requires the highest standard of data privacy. Both our practice platform and your client-facing portals come equipped with enterprise-grade UK GDPR &amp; ICO standards out of the box.
          </p>
        </div>

        {/* 2-Column Split: Chunky Boxes (Actuaries & Fintuity Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Box 1: Client Portal Built-in Protection (Soft Mauve) */}
          <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F0FE] border-2 border-[#E9D5FF] text-[#7E22CE] flex items-center justify-center font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#7E22CE] block">
                  Built into Every Practice Portal
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">
                  Client Portal GDPR Engine
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Every practice website you onboard automatically includes compliant lead capture workflows:
              </p>

              <ul className="space-y-3.5 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Explicit Opt-in Checkboxes:</strong> Mandatory consent triggers on consultation booking forms &amp; guide downloads.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>AI Concierge Boundary Disclaimers:</strong> Dynamic notices ensuring prospects understand information vs regulated advice.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Right to Erasure Workflows:</strong> Instant client lead data deletion options fulfilling Article 17 UK GDPR.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] text-xs text-[#636F75] font-medium">
              Eliminates ICO regulatory fines and ensures complete legal confidence with high-net-worth clients.
            </div>
          </div>

          {/* Box 2: Platform Cloud Security (Sky Topaz) */}
          <div className="bg-white border-2 border-[#E5DFD1] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] border-2 border-[#BFD9FE] text-[#1A56DB] flex items-center justify-center font-bold">
                <Database className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A56DB] block">
                  Platform Cloud Security
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">
                  UK Data Sovereignty &amp; Encryption
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#475760] leading-relaxed">
                Enterprise cloud standards ensuring your financial practice data remains secure and UK-hosted:
              </p>

              <ul className="space-y-3.5 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>256-Bit TLS Encryption:</strong> Bank-grade encryption across all API routes, calculators, and chat sessions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>UK Data Sovereignty:</strong> Hosted in London &amp; UK cloud regions; zero unauthorized cross-border transfers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Selling:</strong> Strict fiduciary pledge—your client leads will never be monetized or shared.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAF8F2] rounded-2xl border border-[#E5DFD1] flex items-center justify-between text-xs font-bold text-[#08232C]">
              <button
                onClick={onOpenPrivacyModal}
                className="text-[#007B81] hover:text-[#08232C] flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>Read Full UK Privacy &amp; GDPR Policy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
