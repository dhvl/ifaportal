'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const RoiCommercialCalculator: React.FC = () => {
  const [portfolioSize, setPortfolioSize] = useState<number>(250000);
  const [initialFeePercent, setInitialFeePercent] = useState<number>(2.0);
  const [ongoingFeePercent, setOngoingFeePercent] = useState<number>(0.75);

  // Mathematics
  const upfrontRevenue = portfolioSize * (initialFeePercent / 100);
  const ongoingAnnualRevenue = portfolioSize * (ongoingFeePercent / 100);
  const tenYearLtv = upfrontRevenue + ongoingAnnualRevenue * 10;

  const annualProCost = 599 * 12; // £7,188

  // 1 Client ROI
  const netLtvFromOneClient = tenYearLtv - annualProCost;

  // 3 Clients ROI
  const netLtvFromThreeClients = tenYearLtv * 3 - annualProCost;
  const netYearOneThreeClients = (upfrontRevenue + ongoingAnnualRevenue) * 3 - annualProCost;

  const formatGbp = (val: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Commercial Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Calculate Your Practice ROI from 1 Single Client
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            UK Independent Financial Advisers operate with exceptionally high client Lifetime Value (LTV). Adjust the parameters below to verify the mathematical return on our Pro Plan.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Inputs Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Practice Fee Parameters</h3>
                  <span className="text-xs text-slate-500">Based on standard UK IFA charging models</span>
                </div>
              </div>

              {/* Slider 1: Average Client Portfolio Size */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Average Client Portfolio Size (AUM)
                  </label>
                  <span className="text-base font-black text-amber-700 font-mono">
                    {formatGbp(portfolioSize)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={1000000}
                  step={25000}
                  value={portfolioSize}
                  onChange={(e) => setPortfolioSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>£100,000</span>
                  <span>£500,000</span>
                  <span>£1,000,000</span>
                </div>
              </div>

              {/* Slider 2: Initial Advice Fee % */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Initial Advice Fee
                  </label>
                  <span className="text-base font-black text-slate-900 font-mono">
                    {initialFeePercent.toFixed(2)}% ({formatGbp(upfrontRevenue)} upfront)
                  </span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={3.0}
                  step={0.25}
                  value={initialFeePercent}
                  onChange={(e) => setInitialFeePercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>1.0% (Fixed SIPP)</span>
                  <span>2.0% (UK Average)</span>
                  <span>3.0% (Complex Estate)</span>
                </div>
              </div>

              {/* Slider 3: Ongoing Annual Fee % */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Ongoing Annual Advisory Fee
                  </label>
                  <span className="text-base font-black text-slate-900 font-mono">
                    {ongoingFeePercent.toFixed(2)}% ({formatGbp(ongoingAnnualRevenue)} / year)
                  </span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={1.25}
                  step={0.05}
                  value={ongoingFeePercent}
                  onChange={(e) => setOngoingFeePercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0.50% p.a.</span>
                  <span>0.75% (UK Median)</span>
                  <span>1.00% p.a.</span>
                </div>
              </div>
            </div>

            {/* Micro benchmark badge */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                10-Year Client Lifetime Value (LTV): <strong className="text-slate-900">{formatGbp(tenYearLtv)}</strong> per client.
              </span>
            </div>
          </div>

          {/* Right Results Card */}
          <div className="lg:col-span-6 bg-[#0B1B2B] text-white border border-slate-800 rounded-3xl p-7 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  Calculated Practice Payback
                </span>
                <span className="text-xs text-slate-400">Pro Plan (£599/mo)</span>
              </div>

              {/* Scenario 1: Just 1 Client */}
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-slate-300">If you convert just 1 client:</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {formatGbp(netLtvFromOneClient)}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Annual Pro Investment: {formatGbp(annualProCost)}</span>
                  <span className="text-emerald-400 font-bold">
                    Net Lifetime Gain: +{((netLtvFromOneClient / annualProCost) * 100).toFixed(0)}% ROI
                  </span>
                </div>
              </div>

              {/* Scenario 2: 3 Clients (Realistic with AI + Calculators + Social Media) */}
              <div className="p-4 bg-gradient-to-r from-emerald-950/60 to-slate-900 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-emerald-300 block">
                      Realistic Scenario (3 Clients in Year 1):
                    </span>
                    <span className="text-[10px] text-slate-400">With AI Concierge &amp; Built-in Social Media</span>
                  </div>
                  <span className="text-3xl font-black text-emerald-400 font-mono">
                    {formatGbp(netLtvFromThreeClients)}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center justify-between pt-1 border-t border-slate-800/80">
                  <span>Year 1 Net Profit (Cash in Bank):</span>
                  <span className="font-bold text-white font-mono">{formatGbp(netYearOneThreeClients)}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Your entire year of technology &amp; marketing pays for itself from 1 client.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>No £4,000 - £12,000 upfront sunk costs like legacy agencies require.</span>
                </div>
              </div>
            </div>

            <Link
              href="/admin/onboard"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all shadow-lg flex items-center justify-center space-x-2 mt-4"
            >
              <span>Launch Practice on Pro Plan (£0 Setup on Quarterly)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
