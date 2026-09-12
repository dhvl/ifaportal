'use client';

import React from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2, UserCheck, Database, RefreshCw } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  firmName?: string;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  firmName = 'IFA Media',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                UK GDPR &amp; Data Privacy Notice
              </h2>
              <span className="text-xs text-slate-500 block">
                Compliant with UK Data Protection Act 2018 &amp; UK GDPR
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {/* Key Principles Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-2">
            <div className="flex items-center space-x-2 font-extrabold text-xs uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Our Data Protection Commitments</span>
            </div>
            <p className="text-xs text-emerald-900">
              We treat all client and financial data with the highest fiduciary diligence. We adhere strictly to the <strong>UK Data Protection Act 2018</strong>, <strong>UK General Data Protection Regulation (UK GDPR)</strong>, and FCA regulatory principles. We will <strong>never</strong> sell, rent, or monetize personal information to third-party brokers.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
              <Database className="w-4 h-4 text-amber-600" />
              <span>1. Data Controller &amp; Scope</span>
            </h3>
            <p>
              {firmName} operates as a registered Data Controller with the UK Information Commissioner&apos;s Office (ICO). This policy covers data collected through this website, practice consultation inquiries, lead magnet guide downloads, and conversational AI concierge interactions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>2. Lawful Basis for Processing Data</span>
            </h3>
            <p>Under Article 6 of the UK GDPR, we process personal data under the following legal bases:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Explicit Consent:</strong> When you provide your contact details to schedule a financial consultation or download a wealth guide.</li>
              <li><strong>Legitimate Interests:</strong> To respond to professional inquiries, optimize platform performance, and prevent fraud.</li>
              <li><strong>Legal &amp; Regulatory Obligation:</strong> To maintain audit trails compliant with Financial Conduct Authority (FCA) record-keeping rules.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>3. Data Security &amp; UK Data Sovereignty</span>
            </h3>
            <p>
              All customer transmissions are encrypted using <strong>256-bit TLS (Transport Layer Security)</strong> encryption in transit and AES-256 at rest. Customer data is hosted on secure cloud infrastructure located within the United Kingdom and EEA, ensuring strict compliance with UK cross-border data transfer restrictions.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-amber-600" />
              <span>4. Your Statutory Individual Rights</span>
            </h3>
            <p>As a UK data subject, you hold fundamental rights under the UK GDPR:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong>Right of Access:</strong> Request a full copy of your personal data held by us.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong>Right to Rectification:</strong> Request correction of inaccurate information.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong>Right to Erasure:</strong> The &quot;Right to be Forgotten&quot; upon request.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong>Right to Data Portability:</strong> Obtain your records in a machine-readable format.
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-amber-600" />
              <span>5. Data Retention &amp; Erasure Requests</span>
            </h3>
            <p>
              Inquiry and lead data is retained only for as long as necessary to fulfill the initial advisory consultation purpose, or up to 6 years where required by FCA statutory compliance guidelines. You may request immediate data erasure at any time by contacting our Data Protection Officer at <strong>compliance@ifaportal.co.uk</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Version 2.4 &bull; Updated September 2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-xs"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
