'use client';

import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Database, FileText } from 'lucide-react';

interface GdprComplianceSectionProps {
  onOpenPrivacyModal?: () => void;
}

export const GdprComplianceSection: React.FC<GdprComplianceSectionProps> = ({ onOpenPrivacyModal }) => {
  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-purple-700" />
            <span>Fiduciary Data Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Dual UK GDPR &amp; FCA Compliance Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Financial data demands the highest regulatory diligence. Both our practice platform and your client-facing portals come equipped with enterprise-grade UK GDPR data governance.
          </p>
        </div>

        {/* 2-Column Split: Marketing Site + Client Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1: Client Portal Built-in Protection */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 space-y-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 block">
                  Built into Client Portals
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Client Portal GDPR Engine
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every practice website you onboard automatically includes compliant lead capture workflows:
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Explicit Opt-in Checkboxes:</strong> Mandatory consent triggers on consultation booking forms &amp; guide downloads.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>AI Concierge Disclaimers:</strong> Dynamic notices ensuring prospects understand automated information vs advice.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Right to Erasure Workflows:</strong> Instant client lead data deletion options fulfilling Article 17 UK GDPR.</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-[11px] text-slate-500 font-medium">
              Protects your practice against ICO penalties and client privacy disputes.
            </div>
          </div>

          {/* Pillar 2: Platform Infrastructure Security */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 space-y-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Database className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block">
                  Platform Cloud Security
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  UK Data Sovereignty &amp; Encryption
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enterprise cloud standards ensuring your financial data remains secure and UK-hosted:
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>256-Bit TLS Encryption:</strong> Bank-grade encryption across all API routes, calculators, and chat sessions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>UK Data Sovereignty:</strong> Hosted in London &amp; UK cloud regions; zero unauthorized cross-border transfers.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Selling:</strong> Strict fiduciary pledge—your client leads will never be monetized or shared.</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onOpenPrivacyModal}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 underline flex items-center space-x-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Full UK GDPR &amp; Privacy Policy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
