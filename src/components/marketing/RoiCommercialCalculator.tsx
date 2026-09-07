'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const RoiCommercialCalculator: React.FC = () => {
  const [portfolioSize, setPortfolioSize] = useState<number>(250000);
  const [initialFeePercent, setInitialFeePercent] = useState<number>(2.0);
  const [ongoingFeePercent, setOngoingFeePercent] = useState<number>(0.75);

  // Financial Mathematics
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
    <section id="roi-calculator" className="py-20 bg-[#FAF9F5] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-black uppercase tracking-wider border border-emerald-200">
            <TrendingUp className="w-4 h-4 text-emerald-700" />
            <span>Adviser Economics Model</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Calculate Your Practice ROI from 1 Single Client
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            UK Independent Financial Advisers operate with exceptionally high client Lifetime Value (LTV). Adjust your practice fee parameters to see why 1 single new client pays for your entire year on the Pro Plan.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Inputs Box (Actuaries / Fintuity structured card) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3.5 pb-4 border-b border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200">
                  <Calculator className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Practice Charging Parameters</h3>
                  <span className="text-xs text-slate-500">Based on standard UK IFA fee structures</span>
                </div>
              </div>

              {/* Slider 1: Average Client Portfolio Size */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Average Client Portfolio (AUM)
                  </label>
                  <span className="text-lg font-black text-amber-800 font-mono">
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
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>£100,000</span>
                  <span>£500,000</span>
                  <span>£1,000,000</span>
                </div>
              </div>

              {/* Slider 2: Initial Advice Fee % */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Initial Advice Fee (%)
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
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1.0%</span>
                  <span>2.0%</span>
                  <span>3.0%</span>
                </div>
              </div>

              {/* Slider 3: Ongoing Annual Fee % */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Ongoing Annual Servicing Fee (%)
                  </label>
                  <span className="text-base font-black text-slate-900 font-mono">
                    {ongoingFeePercent.toFixed(2)}% ({formatGbp(ongoingAnnualRevenue)} / yr)
                  </span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={1.5}
                  step={0.05}
                  value={ongoingFeePercent}
                  onChange={(e) => setOngoingFeePercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>0.50%</span>
                  <span>0.75%</span>
                  <span>1.50%</span>
                </div>
              </div>
            </div>

            {/* Inferred Single Client LTV Pill */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs flex items-center justify-between">
              <span className="font-extrabold text-slate-700">10-Year LTV of 1 Single Client:</span>
              <span className="font-black text-slate-900 font-mono text-base">{formatGbp(tenYearLtv)}</span>
            </div>
          </div>

          {/* Right Results Box (Unbiased / Fintuity contrast card) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    Annual Platform Economics
                  </span>
                  <h3 className="text-lg font-black text-slate-900">Wealth Pro ROI Projection</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-800">
                  Annual Cost: {formatGbp(annualProCost)}
                </span>
              </div>

              {/* Scenario 1: Just 1 Client */}
              <div className="p-5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-950 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Scenario A: Acquiring Just 1 Client / Year</span>
                  </span>
                  <span className="text-xs font-mono font-black text-emerald-900 px-2 py-0.5 rounded-md bg-emerald-100">
                    Pays Platform For Life
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-emerald-800 font-mono">
                      {formatGbp(netLtvFromOneClient)}
                    </span>
                    <span className="text-xs text-emerald-900 block font-bold pt-0.5">
                      Net 10-Year Profit (after deducting annual Pro platform cost)
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-emerald-800/80 leading-relaxed pt-1">
                  Initial fee ({formatGbp(upfrontRevenue)}) covers {((upfrontRevenue / annualProCost) * 100).toFixed(0)}% of your annual software cost on Day 1.
                </p>
              </div>

              {/* Scenario 2: 3 Clients (Target) */}
              <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Scenario B: Target 3 Clients / Year</span>
                  </span>
                  <span className="text-xs font-mono font-black text-amber-900 px-2 py-0.5 rounded-md bg-amber-100">
                    High Growth
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-amber-900 font-mono">
                      {formatGbp(netLtvFromThreeClients)}
                    </span>
                    <span className="text-xs text-amber-950 block font-bold pt-0.5">
                      Net 10-Year Cumulative Practice Value
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-semibold text-amber-900 flex items-center justify-between border-t border-amber-200/60">
                  <span>Year 1 Net Cash Inflow:</span>
                  <span className="font-mono font-black text-amber-950 text-sm">+{formatGbp(netYearOneThreeClients)}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/admin/onboard?plan=pro"
                className="w-full py-4 rounded-2xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Deploy Practice on Wealth Pro</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
