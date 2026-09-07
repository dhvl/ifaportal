'use client';

import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Database, ArrowRight } from 'lucide-react';

interface GdprComplianceSectionProps {
  onOpenPrivacyModal?: () => void;
}

export const GdprComplianceSection: React.FC<GdprComplianceSectionProps> = ({ onOpenPrivacyModal }) => {
  return (
    <section className="py-20 bg-[#FAF9F5] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-black uppercase tracking-wider border border-purple-200">
            <Lock className="w-4 h-4 text-purple-700" />
            <span>Fiduciary Data Governance</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Dual UK GDPR &amp; FCA Compliance Architecture
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Financial advice requires the highest standard of data privacy. Both our practice platform and your client-facing portals come equipped with enterprise-grade UK GDPR &amp; ICO standards out of the box.
          </p>
        </div>

        {/* 2-Column Split: Client Portals vs Platform Security (Actuaries style boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Box 1: Client Portal Built-in Protection */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-9 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold border border-purple-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 block">
                  Built into Every Practice Portal
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Client Portal GDPR Engine
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every practice website you onboard automatically includes compliant lead capture workflows:
              </p>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Explicit Opt-in Checkboxes:</strong> Mandatory consent triggers on consultation booking forms &amp; guide downloads.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>AI Concierge Boundary Disclaimers:</strong> Dynamic notices ensuring prospects understand information vs regulated advice.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Right to Erasure Workflows:</strong> Instant client lead data deletion options fulfilling Article 17 UK GDPR.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-500 font-medium">
              Eliminates ICO regulatory fines and ensures complete legal confidence with HNW clients.
            </div>
          </div>

          {/* Box 2: Platform Cloud Security */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-9 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold border border-blue-200">
                <Database className="w-6 h-6" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block">
                  Platform Cloud Security
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  UK Data Sovereignty &amp; Encryption
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enterprise cloud standards ensuring your financial practice data remains secure and UK-hosted:
              </p>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>256-Bit TLS Encryption:</strong> Bank-grade encryption across all API routes, calculators, and chat sessions.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>UK Data Sovereignty:</strong> Hosted in London &amp; UK cloud regions; zero unauthorized cross-border transfers.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Selling:</strong> Strict fiduciary pledge—your client leads will never be monetized or shared.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <button
                onClick={onOpenPrivacyModal}
                className="text-purple-700 hover:text-purple-900 flex items-center space-x-1 transition-colors"
              >
                <span>Read Full UK Privacy &amp; GDPR Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
