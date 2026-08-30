'use client';

import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, ShieldCheck, Sparkles, ArrowRight, 
  Coins, Home, Percent, Lock, ShieldAlert 
} from 'lucide-react';
import { IFAClient } from '@/lib/types';
import { PensionCalculator } from './PensionCalculator';

interface CalculatorSuiteProps {
  client: IFAClient;
  onOpenConsultation?: () => void;
}

export const CalculatorSuite: React.FC<CalculatorSuiteProps> = ({
  client,
  onOpenConsultation,
}) => {
  const plan = client.planTier || 'pro';
  const [activeTab, setActiveTab] = useState<'pension' | 'iht' | 'growth'>('pension');

  // IHT Calculator States
  const [estateValue, setEstateValue] = useState<number>(1250000);
  const [isMarried, setIsMarried] = useState<boolean>(true);
  const [passingHomeToChildren, setPassingHomeToChildren] = useState<boolean>(true);
  const [existingGifts, setExistingGifts] = useState<number>(50000);

  // UK IHT Nil-rate allowance calculation
  // Basic NRB = £325k (single) or £650k (married couple)
  // RNRB (Residence Nil-Rate Band) = £175k (single) or £350k (married)
  const basicNRB = isMarried ? 650000 : 325000;
  const residenceNRB = passingHomeToChildren ? (isMarried ? 350000 : 175000) : 0;
  const totalTaxFreeAllowance = basicNRB + residenceNRB;
  const taxableEstate = Math.max(0, estateValue - existingGifts - totalTaxFreeAllowance);
  const estimatedIHTLiability = Math.round(taxableEstate * 0.40); // 40% UK IHT rate

  // Investment Growth States
  const [initialDeposit, setInitialDeposit] = useState<number>(50000);
  const [monthlyInvest, setMonthlyInvest] = useState<number>(750);
  const [investmentYears, setInvestmentYears] = useState<number>(15);
  const [growthReturnRate, setGrowthReturnRate] = useState<number>(6.5);

  const monthsInvest = investmentYears * 12;
  const monthlyInvestRate = growthReturnRate / 100 / 12;
  const fvInitial = initialDeposit * Math.pow(1 + monthlyInvestRate, monthsInvest);
  const fvMonthly = monthlyInvest * ((Math.pow(1 + monthlyInvestRate, monthsInvest) - 1) / monthlyInvestRate);
  const totalProjectedWealth = Math.round(fvInitial + fvMonthly);
  const totalContributions = initialDeposit + (monthlyInvest * monthsInvest);
  const totalInterestGained = Math.max(0, totalProjectedWealth - totalContributions);

  return (
    <div className="w-full space-y-6">
      {/* Tab Switcher Header (Unlocks all 3 for Pro & Elite) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab('pension')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'pension'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white bg-slate-800/60'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Pension &amp; Retirement</span>
          </button>

          {plan !== 'starter' ? (
            <>
              <button
                onClick={() => setActiveTab('iht')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                  activeTab === 'iht'
                    ? 'bg-amber-500 text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white bg-slate-800/60'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>40% Inheritance Tax (IHT)</span>
              </button>

              <button
                onClick={() => setActiveTab('growth')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                  activeTab === 'growth'
                    ? 'bg-amber-500 text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white bg-slate-800/60'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Compound ISA &amp; Growth</span>
              </button>
            </>
          ) : (
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800/40 text-slate-500 text-xs border border-slate-700/50">
              <Lock className="w-3.5 h-3.5" />
              <span>Full IHT &amp; ISA Suite unlocked on Pro plan</span>
            </div>
          )}
        </div>

        <div className="text-[11px] text-slate-400 flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>UK 2026/27 Tax Rules Configured</span>
        </div>
      </div>

      {/* TAB 1: PENSION */}
      {activeTab === 'pension' && (
        <PensionCalculator
          primaryColor={client.branding.primaryColor}
          onOpenConsultation={onOpenConsultation}
        />
      )}

      {/* TAB 2: INHERITANCE TAX (IHT) */}
      {activeTab === 'iht' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl animate-fade-in font-sans">
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="p-3 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: client.branding.primaryColor }}
            >
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">UK Inheritance Tax (IHT) Liability Calculator</h3>
              <p className="text-xs text-slate-400">
                Calculate potential 40% estate tax liabilities and available nil-rate band allowances (£325k + £175k RNRB).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Total Estimated Net Estate Value (Property + Investments + Savings)
                  </label>
                  <span className="text-sm font-bold text-amber-400">£{estateValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="300000"
                  max="3500000"
                  step="25000"
                  value={estateValue}
                  onChange={(e) => setEstateValue(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <label className="block text-xs font-bold text-slate-200 mb-2">Marital Status</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsMarried(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        isMarried ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      Married / Civil Partner
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMarried(false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        !isMarried ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      Single / Divorced
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <label className="block text-xs font-bold text-slate-200 mb-2">Passing Home to Direct Descendants?</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setPassingHomeToChildren(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        passingHomeToChildren ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      Yes (Includes RNRB)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPassingHomeToChildren(false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        !passingHomeToChildren ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Lifetime Gifts Made (Within Last 7 Years)
                  </label>
                  <span className="text-sm font-bold text-amber-400">£{existingGifts.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={existingGifts}
                  onChange={(e) => setExistingGifts(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-800/90 border border-slate-700/80 rounded-xl p-6 space-y-4 shadow-inner">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Estimated 40% IHT Tax Liability
                </span>
                <div className="text-3xl font-extrabold text-amber-400 mt-1">
                  £{estimatedIHTLiability.toLocaleString()}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {estimatedIHTLiability > 0 
                    ? `Your beneficiaries could owe £${estimatedIHTLiability.toLocaleString()} to HMRC within 6 months of death without planning.` 
                    : 'Your estate is currently covered within available nil-rate allowances.'}
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-700/80 pt-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Nil-Rate Band (NRB):</span>
                  <span className="font-bold text-white">£{basicNRB.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Residence Nil-Rate Band (RNRB):</span>
                  <span className="font-bold text-white">£{residenceNRB.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Tax-Free Threshold:</span>
                  <span className="font-bold text-emerald-400">£{totalTaxFreeAllowance.toLocaleString()}</span>
                </div>
              </div>

              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Book IHT Mitigation Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPOUND GROWTH & ISA */}
      {activeTab === 'growth' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl animate-fade-in font-sans">
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="p-3 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: client.branding.primaryColor }}
            >
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Compound Wealth &amp; Stocks &amp; Shares ISA Calculator</h3>
              <p className="text-xs text-slate-400">
                Forecast the exponential compound returns of tax-efficient UK ISA and investment portfolios.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Initial Capital
                    </label>
                    <span className="text-sm font-bold text-amber-400">£{initialDeposit.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Monthly Contribution
                    </label>
                    <span className="text-sm font-bold text-amber-400">£{monthlyInvest.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={monthlyInvest}
                    onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Investment Horizon: <span className="text-amber-400 font-bold">{investmentYears} yrs</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="35"
                    value={investmentYears}
                    onChange={(e) => setInvestmentYears(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Assumed Annual Return: <span className="text-amber-400 font-bold">{growthReturnRate}%</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="10.0"
                    step="0.5"
                    value={growthReturnRate}
                    onChange={(e) => setGrowthReturnRate(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-800/90 border border-slate-700/80 rounded-xl p-6 space-y-4 shadow-inner">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Projected Portfolio Value (After {investmentYears} Years)
                </span>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                  £{totalProjectedWealth.toLocaleString()}
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-700/80 pt-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Your Total Contributions:</span>
                  <span className="font-bold text-white">£{totalContributions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Compound Interest Growth:</span>
                  <span className="font-bold text-emerald-400">+£{totalInterestGained.toLocaleString()}</span>
                </div>
              </div>

              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Build Tailored Portfolio Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
