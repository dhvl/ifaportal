'use client';

import React, { useState } from 'react';
import { 
  FileText, Download, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Award, Lock, BookOpen, Clock, HelpCircle, X 
} from 'lucide-react';
import { IFAClient } from '@/lib/types';

interface LeadMagnetSectionProps {
  client: IFAClient;
}

const GUIDES = [
  {
    id: 'retirement-guide',
    title: 'The 2026 UK Retirement & Pension Freedom Guide',
    tag: 'Pensions & Drawdown',
    pages: '28 Pages • PDF',
    description: 'A comprehensive roadmap to consolidating legacy pensions, maximizing £60k annual allowances, and structuring tax-free cash with sustainable drawdown.',
    highlights: ['Consolidating high-fee workplace schemes', 'SIPP vs. Workplace comparisons', 'Avoiding the 55% emergency tax trap on lump sums'],
  },
  {
    id: 'iht-playbook',
    title: 'The 40% Inheritance Tax (IHT) Mitigation Playbook',
    tag: 'Estate & Trust Planning',
    pages: '34 Pages • PDF',
    description: 'Expert strategies for UK families to protect their multi-generational legacy, utilize Business Property Relief (BPR), and reduce 40% inheritance tax exposure.',
    highlights: ['Residence nil-rate band rules explained', 'Trusts vs. Gifting strategies', 'Protecting family wealth from probate delays'],
  },
  {
    id: 'hnw-tax-matrix',
    title: 'High-Net-Worth UK Tax Minimisation Matrix',
    tag: 'Tax & Investment',
    pages: '22 Pages • PDF',
    description: 'Proven strategies for business directors, landlords, and senior executives to shield income and capital gains from escalating UK tax thresholds.',
    highlights: ['Director pension profit extraction', 'Dividend vs. Salary optimization', 'Maximizing £20,000 ISA allowances across family'],
  },
];

export const LeadMagnetSection: React.FC<LeadMagnetSectionProps> = ({ client }) => {
  const plan = client.planTier || 'pro';
  const [selectedGuideIndex, setSelectedGuideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  
  // Lead form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Scorecard Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    pensionAge: '',
    ihtWorried: '',
    feeChecked: '',
  });
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const activeGuides = plan === 'starter' ? [GUIDES[0]] : GUIDES;
  const currentGuide = activeGuides[selectedGuideIndex] || activeGuides[0];

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Calculate a score between 70 and 95
    setQuizScore(82);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FCA-Compliant Advisory Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complimentary UK Wealth &amp; Retirement Guides
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Download our expert briefings or take our 2-minute Financial Readiness Scorecard to benchmark your financial position.
          </p>
        </div>

        {/* Tab Selector (for Pro & Elite) */}
        {activeGuides.length > 1 && (
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700 max-w-full">
              {activeGuides.map((guide, idx) => (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuideIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedGuideIndex === idx
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {guide.tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Guide Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/50 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400">
              <BookOpen className="w-4 h-4" />
              <span>{currentGuide.pages}</span>
              <span>&bull;</span>
              <span>Updated for 2026 Tax Year</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {currentGuide.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentGuide.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">What is inside:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentGuide.highlights.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setDownloadSuccess(false);
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Instant Download (PDF)</span>
              </button>

              {plan !== 'starter' && (
                <button
                  onClick={() => {
                    setQuizStep(1);
                    setQuizScore(null);
                    setQuizModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-2xl bg-slate-700/70 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 transition-all flex items-center space-x-2"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>2-Min Financial Scorecard</span>
                </button>
              )}
            </div>
          </div>

          {/* Guide Visual Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-950 border-2 border-amber-500/30 rounded-2xl p-6 shadow-2xl flex flex-col justify-between group transform group-hover:scale-105 transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  <span>{client.firmName}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="h-0.5 w-12 bg-amber-500"></div>
                <h4 className="text-base font-extrabold text-white leading-snug">
                  {currentGuide.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-4">
                  {currentGuide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>FCA FRN: {client.fcaFrn}</span>
                <span className="font-bold text-amber-400">Free Copy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in font-sans">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {downloadSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-white">Your Guide Is On Its Way!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  We have sent <b>{currentGuide.title}</b> directly to <b>{email}</b>.
                </p>
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-[11px] text-slate-300">
                  Need personalized advice? Our team is available on WhatsApp or via our booking calendar.
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider"
                >
                  Close &amp; Continue
                </button>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Instant PDF Access</div>
                  <h4 className="text-lg font-bold text-white">{currentGuide.title}</h4>
                  <p className="text-xs text-slate-400">Enter your details to receive the complete guide.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Harrison"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david@example.co.uk"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-300 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07123 456789"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Your information is strictly protected under UK GDPR rules.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Send My Free PDF Guide</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2-Minute Financial Health Scorecard Quiz Modal */}
      {quizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in font-sans">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setQuizModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {quizScore ? (
              <div className="text-center py-6 space-y-5 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex flex-col items-center justify-center mx-auto shadow-2xl">
                  <span className="text-2xl font-black">{quizScore}%</span>
                  <span className="text-[9px] uppercase font-bold tracking-tighter">Readiness</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-extrabold text-white">Your Financial Health Breakdown</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    You have strong foundational planning, but optimizing your pension drawdown tax brackets and lifetime allowances could unlock additional growth.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Tax Efficiency Potential:</span>
                    <span className="font-bold text-emerald-400">High (+12-18% net)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Estate IHT Exposure:</span>
                    <span className="font-bold text-amber-400">Action Recommended</span>
                  </div>
                </div>

                <button
                  onClick={() => setQuizModalOpen(false)}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider"
                >
                  Book Free 1-on-1 Review with Senior IFA
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Interactive Assessment</div>
                  <h4 className="text-lg font-extrabold text-white">2-Minute Financial Readiness Scorecard</h4>
                  <p className="text-xs text-slate-400">Answer 3 quick questions to receive your tailored index.</p>
                </div>

                {quizStep === 1 && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-200">1. When are you looking to retire or access your pension?</label>
                    <div className="grid grid-cols-1 gap-2">
                      {['Within the next 2 years', 'In 3 to 7 years', 'In 8 to 15+ years', 'Already retired & in drawdown'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, pensionAge: opt });
                            setQuizStep(2);
                          }}
                          className="p-3 text-left rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 text-xs font-medium text-slate-200 transition-all flex justify-between items-center"
                        >
                          <span>{opt}</span>
                          <ArrowRight className="w-4 h-4 text-slate-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-200">2. Are you concerned about 40% Inheritance Tax on your estate?</label>
                    <div className="grid grid-cols-1 gap-2">
                      {['Yes, our family estate exceeds £1,000,000', 'Somewhat, need to review property & assets', 'Not sure of current nil-rate allowance thresholds'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, ihtWorried: opt });
                            setQuizStep(3);
                          }}
                          className="p-3 text-left rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 text-xs font-medium text-slate-200 transition-all flex justify-between items-center"
                        >
                          <span>{opt}</span>
                          <ArrowRight className="w-4 h-4 text-slate-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <form onSubmit={handleQuizSubmit} className="space-y-3">
                    <label className="block text-xs font-bold text-slate-200">3. Where should we send your full Scorecard Diagnostic?</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
                    >
                      Calculate My Financial Readiness Score
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
