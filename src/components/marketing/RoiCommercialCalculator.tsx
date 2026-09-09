'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, Sparkles, Check } from 'lucide-react';
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
    <section id="roi-calculator" className="py-24 bg-[#F7F4EC] border-y-2 border-[#E5DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#E5DFD1] text-[#08232C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <TrendingUp className="w-4 h-4 text-[#0A6B48]" />
            <span>Practice Unit Economics</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#08232C] tracking-tight leading-[1.10]">
            Calculate Your Practice ROI from 1 Single Client
          </h2>
          
          <p className="text-base sm:text-lg text-[#636F75] leading-relaxed">
            UK Independent Financial Advisers operate with exceptionally high client Lifetime Value (LTV). Adjust your practice parameters to see why 1 single new client pays for your entire year on the Pro Plan.
          </p>
        </div>

        {/* Calculator Chunky Grid (Actuaries & Fintuity Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Inputs Card (White Chunky Box) */}
          <div className="lg:col-span-6 bg-white border-2 border-[#E5DFD1] rounded-[32px] p-8 sm:p-10 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3.5 pb-4 border-b-2 border-[#F0EBE0]">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF8E7] text-[#92400E] flex items-center justify-center font-bold border-2 border-[#FDE68A]">
                  <Calculator className="w-6 h-6 text-[#92400E]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#08232C]">Practice Charging Model</h3>
                  <span className="text-xs text-[#636F75] font-medium">Standard UK IFA percentage fee schedule</span>
                </div>
              </div>

              {/* Slider 1: Average Client Portfolio Size */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#475760]">
                    Average Client Portfolio (AUM)
                  </label>
                  <span className="text-xl font-black text-[#08232C] font-mono">
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
                  className="w-full h-3 bg-[#E5DFD1] rounded-lg appearance-none cursor-pointer accent-[#08232C]"
                />
                <div className="flex justify-between text-[11px] text-[#869299] font-mono">
                  <span>£100k</span>
                  <span>£500k</span>
                  <span>£1,000,000</span>
                </div>
              </div>

              {/* Slider 2: Initial Advice Fee % */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#475760]">
                    Initial Advice Fee (%)
                  </label>
                  <span className="text-base font-black text-[#08232C] font-mono">
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
                  className="w-full h-3 bg-[#E5DFD1] rounded-lg appearance-none cursor-pointer accent-[#08232C]"
                />
                <div className="flex justify-between text-[11px] text-[#869299] font-mono">
                  <span>1.0%</span>
                  <span>2.0%</span>
                  <span>3.0%</span>
                </div>
              </div>

              {/* Slider 3: Ongoing Annual Fee % */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#475760]">
                    Ongoing Servicing Fee (%)
                  </label>
                  <span className="text-base font-black text-[#08232C] font-mono">
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
                  className="w-full h-3 bg-[#E5DFD1] rounded-lg appearance-none cursor-pointer accent-[#0A6B48]"
                />
                <div className="flex justify-between text-[11px] text-[#869299] font-mono">
                  <span>0.50%</span>
                  <span>0.75%</span>
                  <span>1.50%</span>
                </div>
              </div>
            </div>

            {/* Inferred Single Client LTV Pill */}
            <div className="p-4 bg-[#FAF8F2] rounded-2xl border-2 border-[#E5DFD1] text-xs flex items-center justify-between">
              <span className="font-extrabold text-[#08232C]">10-Year Cumulative LTV of 1 Client:</span>
              <span className="font-black text-[#0A6B48] font-mono text-lg">{formatGbp(tenYearLtv)}</span>
            </div>
          </div>

          {/* Right Results Box (Deep British Pine Container with IBM Plex Mono) */}
          <div className="lg:col-span-6 bg-[#08232C] text-white rounded-[32px] p-8 sm:p-10 space-y-6 shadow-md border-2 border-[#143946] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#143946]">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#5CDFB0]">
                    Commercial Economics
                  </span>
                  <h3 className="text-xl font-black text-white">Wealth Pro ROI Projection</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#143946] text-[#AFC3C9] border border-[#235364]">
                  Cost: {formatGbp(annualProCost)}/yr
                </span>
              </div>

              {/* Scenario 1: Just 1 Client */}
              <div className="p-5 bg-[#0E3542] border-2 border-[#1D4A59] rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#5CDFB0] flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-[#5CDFB0] shrink-0" />
                    <span>Scenario A: Winning Just 1 Client in Year 1</span>
                  </span>
                  <span className="text-xs font-mono font-black text-[#08232C] px-2 py-0.5 rounded-md bg-[#5CDFB0]">
                    100% Sunk Cost Recouped
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      {formatGbp(netLtvFromOneClient)}
                    </span>
                    <span className="text-xs text-[#AFC3C9] block font-bold pt-1">
                      Net 10-Year Profit (after deducting annual Pro platform cost)
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#AFC3C9] leading-relaxed pt-1">
                  Upfront fee of {formatGbp(upfrontRevenue)} pays for {((upfrontRevenue / annualProCost) * 100).toFixed(0)}% of your annual software cost on Day 1.
                </p>
              </div>

              {/* Scenario 2: 3 Clients (Target) */}
              <div className="p-5 bg-[#143946] border-2 border-[#235364] rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#F3C044] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-[#F3C044] shrink-0" />
                    <span>Scenario B: Target 3 New Clients in Year 1</span>
                  </span>
                  <span className="text-xs font-mono font-black text-[#08232C] px-2 py-0.5 rounded-md bg-[#F3C044]">
                    High Growth
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="text-4xl sm:text-5xl font-black text-[#F3C044] font-mono">
                      {formatGbp(netLtvFromThreeClients)}
                    </span>
                    <span className="text-xs text-[#DCE7EB] block font-bold pt-1">
                      Net 10-Year Cumulative Practice Value
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#AFC3C9] flex items-center justify-between border-t border-[#235364]">
                  <span>Year 1 Net Practice Cash Inflow:</span>
                  <span className="font-mono font-black text-[#5CDFB0] text-sm">+{formatGbp(netYearOneThreeClients)}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/admin/onboard?plan=pro"
                className="w-full py-4 rounded-2xl bg-[#F3C044] hover:bg-[#F5CA5E] text-[#08232C] font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Deploy Practice on Wealth Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
