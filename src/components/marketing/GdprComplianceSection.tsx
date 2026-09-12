'use client';

import React from 'react';
import { ShieldCheck, Lock, Check, Database, ArrowRight } from 'lucide-react';

interface GdprComplianceSectionProps {
  onOpenPrivacyModal?: () => void;
}

export const GdprComplianceSection: React.FC<GdprComplianceSectionProps> = ({ onOpenPrivacyModal }) => {
  return (
    <section className="py-20 bg-[#F0F7FB] border-t-2 border-[#D8E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Friendly Agency Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#D8E5EE] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Lock className="w-4 h-4 text-[#7E22CE]" />
            <span>Data Protection &amp; Trust</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
            Compliance and privacy? Completely sorted.
          </h2>
          
          <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
            As a regulated UK financial advisory practice, client trust is your biggest asset. Every portal is pre-configured to meet FCA Consumer Duty and UK GDPR standards.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Box 1: On Your Website */}
          <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F0FE] border-2 border-[#E9D5FF] text-[#7E22CE] flex items-center justify-center font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#7E22CE] block">
                  Built Into Every Portal
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">
                  On Your Website
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Explicit Opt-In Checkboxes:</strong> GDPR-compliant consent on all consultation forms and guide downloads.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Advice vs Information Guardrails:</strong> Pre-approved disclaimer notices so visitors understand the boundary before speaking with you.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Consumer Duty Fee Tables:</strong> Upfront fee schedules that fulfill COBS 4 rules with complete transparency.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] text-xs text-[#636F75] font-medium">
              Protects your firm from compliance headaches and builds instant credibility with discerning clients.
            </div>
          </div>

          {/* Box 2: Behind the Scenes */}
          <div className="bg-white border-2 border-[#D8E5EE] hover:border-[#08232C] rounded-[32px] p-8 sm:p-10 space-y-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F2] border-2 border-[#B4ECD6] text-[#0A6B48] flex items-center justify-center font-bold">
                <Database className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0A6B48] block">
                  Infrastructure &amp; Security
                </span>
                <h3 className="text-2xl font-black text-[#08232C]">
                  Behind The Scenes
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs text-[#37454D]">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>100% UK Data Hosting:</strong> All lead and customer data is securely housed in UK data centres.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Full Data Encryption:</strong> Encrypted with 256-bit TLS in transit and AES-256 at rest.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-[#0A6B48] shrink-0 mt-0.5" />
                  <span><strong>Zero Data Selling:</strong> Strict fiduciary pledge—your client leads belong 100% to you and are never shared.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#EAF3F9] rounded-2xl border border-[#D8E5EE] flex items-center justify-between text-xs font-bold text-[#08232C]">
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
