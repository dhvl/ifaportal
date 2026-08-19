'use client';

import React from 'react';
import { Check, X, ShieldCheck, FileCheck } from 'lucide-react';

interface FeeTransparencyProps {
  firmName: string;
  isIndependent: boolean;
  feeSummary?: string;
}

export const FeeTransparencyModule: React.FC<FeeTransparencyProps> = ({
  firmName,
  isIndependent = true,
  feeSummary,
}) => {
  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">UK Fee Disclosure</span>
          <h2 className="text-3xl font-extrabold text-white">Transparent Advice Fees &amp; Whole of Market Standard</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            At {firmName}, we believe in 100% upfront fee transparency. No hidden exit penalties, no bank commission traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Independent Advice Card */}
          <div className="bg-slate-950 border-2 border-emerald-500/80 rounded-3xl p-7 space-y-5 relative shadow-2xl">
            <div className="absolute -top-3.5 right-6 bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
              OUR STANDARD ({firmName})
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Independent Financial Advice</span>
              </h3>
              <p className="text-xs text-slate-400">Whole of Market & Unbiased Selection</p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                <span>Considers all UK investment platforms, pensions, SIPPs &amp; provider funds.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                <span>Upfront agreed fee structure (No work starts without your prior written approval).</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                <span>Full FSCS compensation coverage up to £85,000.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                <span>Dedicated Chartered Individual Financial Adviser (IRN verified).</span>
              </li>
            </ul>

            {feeSummary && (
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-emerald-300">
                <strong className="block text-white mb-1">Fee Disclosure:</strong>
                {feeSummary}
              </div>
            )}
          </div>

          {/* Restricted Bank Advice Card */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-7 space-y-5">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-400 flex items-center space-x-2">
                <X className="w-5 h-5 text-rose-400" />
                <span>Restricted / Bank Advice</span>
              </h3>
              <p className="text-xs text-slate-500">Limited Provider Panel</p>
            </div>

            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-start space-x-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Restricted to a single bank's own products or a limited panel of 2-3 providers.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Opaque product charges bundled into fund fees.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>High exit penalties or lock-in periods on older pension schemes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
