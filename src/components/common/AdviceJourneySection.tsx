'use client';

import React from 'react';
import { Compass, FileText, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';

interface AdviceJourneySectionProps {
  primaryColor?: string;
  firmName: string;
  onOpenConsultation?: () => void;
}

export const AdviceJourneySection: React.FC<AdviceJourneySectionProps> = ({
  primaryColor = '#0f2744',
  firmName,
  onOpenConsultation,
}) => {
  const steps = [
    {
      number: '01',
      title: 'Initial Discovery Meeting',
      description: 'A complimentary, no-obligation conversation to understand your current financial status, retirement goals, and risk profile.',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
    },
    {
      number: '02',
      title: 'Bespoke Wealth Plan Design',
      description: 'Our Chartered IFAs conduct whole-of-market analysis to build a custom financial roadmap optimizing tax allowances and investment growth.',
      icon: <FileText className="w-5 h-5 text-amber-500" />,
    },
    {
      number: '03',
      title: 'Seamless Implementation',
      description: 'We handle all paperwork, pension consolidations, and platform transfers smoothly with zero hidden fees or exit traps.',
      icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
    },
    {
      number: '04',
      title: 'Ongoing Governance & Review',
      description: 'Continuous portfolio monitoring and regular annual reviews to ensure your strategy adapts to UK tax law changes and life events.',
      icon: <RefreshCw className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">FCA Regulated Process</span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Financial Advice Journey</h2>
        <p className="text-sm text-slate-600">
          At {firmName}, we follow a structured, transparent 4-stage process ensuring complete clarity at every step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-4 hover:border-amber-400/80 hover:shadow-xl transition-all relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-300 font-mono">{step.number}</span>
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-900 text-white shadow-md"
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {onOpenConsultation && (
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all"
            style={{ backgroundColor: primaryColor }}
          >
            <span>Start Step 1: Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      )}
    </section>
  );
};
