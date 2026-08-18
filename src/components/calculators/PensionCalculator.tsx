'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface PensionCalculatorProps {
  primaryColor?: string;
  onOpenConsultation?: () => void;
}

export const PensionCalculator: React.FC<PensionCalculatorProps> = ({
  primaryColor = '#0f2744',
  onOpenConsultation,
}) => {
  const [currentAge, setCurrentAge] = useState<number>(38);
  const [targetRetirementAge, setTargetRetirementAge] = useState<number>(65);
  const [currentPensionPot, setCurrentPensionPot] = useState<number>(85000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(450);
  const [assumedGrowthRate, setAssumedGrowthRate] = useState<number>(5.5);

  // Calculation formulas
  const yearsToRetirement = Math.max(1, targetRetirementAge - currentAge);
  const months = yearsToRetirement * 12;
  const monthlyRate = assumedGrowthRate / 100 / 12;

  // Future Value of initial pot
  const futureValueOfInitial = currentPensionPot * Math.pow(1 + monthlyRate, months);

  // Future Value of monthly contributions
  const futureValueOfContributions =
    monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

  const totalProjectedPot = Math.round(futureValueOfInitial + futureValueOfContributions);

  // Est 25% Tax Free Lump Sum allowance under UK tax rules (up to £268,275 LSDBA cap)
  const taxFreeLumpSum = Math.min(Math.round(totalProjectedPot * 0.25), 268275);
  const estimatedAnnualRetirementIncome = Math.round((totalProjectedPot - taxFreeLumpSum) * 0.045); // 4.5% sustainable drawdown rate

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <div 
          className="p-3 rounded-xl text-white shadow-lg"
          style={{ backgroundColor: primaryColor }}
        >
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">UK Pension Pot & Retirement Forecast</h3>
          <p className="text-xs text-slate-400">Estimate your projected retirement fund and 25% tax-free lump sum</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Ages */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Current Age: <span className="text-amber-400 font-bold">{currentAge} yrs</span>
              </label>
              <input
                type="range"
                min="20"
                max="70"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Retirement Age: <span className="text-amber-400 font-bold">{targetRetirementAge} yrs</span>
              </label>
              <input
                type="range"
                min={currentAge + 1}
                max="75"
                value={targetRetirementAge}
                onChange={(e) => setTargetRetirementAge(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Current Pension Pot */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Current Existing Pension Pot
              </label>
              <span className="text-sm font-bold text-amber-400">£{currentPensionPot.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000000"
              step="5000"
              value={currentPensionPot}
              onChange={(e) => setCurrentPensionPot(Number(e.target.value))}
              className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Monthly Contribution */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Monthly Contribution (Inc Tax Relief)
              </label>
              <span className="text-sm font-bold text-amber-400">£{monthlyContribution.toLocaleString()}/mo</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Investment Growth Rate */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Assumed Annual Investment Growth
              </label>
              <span className="text-sm font-bold text-amber-400">{assumedGrowthRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="2"
              max="10"
              step="0.5"
              value={assumedGrowthRate}
              onChange={(e) => setAssumedGrowthRate(Number(e.target.value))}
              className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right Output Column */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
              Estimated Outcome at Age {targetRetirementAge}
            </span>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">Total Projected Pension Pot</span>
              <span className="text-3xl font-extrabold text-white tracking-tight">
                £{totalProjectedPot.toLocaleString()}
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center mt-1">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> Over {yearsToRetirement} years of compounding
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-lg">
                <span className="text-slate-400 block mb-1">25% Tax-Free Cash</span>
                <span className="font-bold text-amber-400 text-base">£{taxFreeLumpSum.toLocaleString()}</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-lg">
                <span className="text-slate-400 block mb-1">Est. Annual Drawdown</span>
                <span className="font-bold text-emerald-400 text-base">£{estimatedAnnualRetirementIncome.toLocaleString()}/yr</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <p className="text-[11px] text-slate-400 leading-snug">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 inline mr-1" />
              Projections are for illustrative guidance. Actual pension returns depend on portfolio asset allocation and UK tax laws.
            </p>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 rounded-xl text-white font-semibold text-xs tracking-wide uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                style={{ backgroundColor: primaryColor }}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Get Personalized Pension Review</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
