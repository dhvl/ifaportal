'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, ArrowRight, Phone, Mail, 
  PiggyBank, TrendingUp, Sparkles, CheckCircle2, Zap
} from 'lucide-react';
import { IFAClient } from '@/lib/types';
import { FCABadgeFooter } from '@/components/common/FCABadgeFooter';
import { PensionCalculator } from '@/components/calculators/PensionCalculator';
import { ConsultationModal } from '@/components/modals/ConsultationModal';

interface TemplateProps {
  client: IFAClient;
}

export const AgileDynamicTemplate: React.FC<TemplateProps> = ({ client }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { branding } = client;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Modern Top Nav */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">{client.firmName}</span>
              <span className="block text-[10px] text-emerald-400 font-semibold tracking-wide">
                FCA Regulated Independent Financial Planning
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">Pension Forecasting</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
            style={{ backgroundColor: branding.primaryColor }}
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Book Meeting</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Inspired by Agile IFA */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>FCA FRN: {client.fcaFrn} &bull; Whole of Market IFA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            {branding.heroHeadline}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {branding.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide uppercase shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
              style={{ backgroundColor: branding.primaryColor }}
            >
              <span>Get Started In 2 Minutes</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-sm hover:border-emerald-500/50 transition-colors"
            >
              Try Interactive Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Services</span>
            <h2 className="text-3xl font-extrabold text-white">Transparent Financial Advisory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {client.services.map((svc) => (
              <div key={svc.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-emerald-500/50 transition-colors">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{svc.fullDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pension Calculator */}
      <section id="calculator" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PensionCalculator primaryColor={branding.primaryColor} onOpenConsultation={() => setIsModalOpen(true)} />
        </div>
      </section>

      <FCABadgeFooter client={client} />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} client={client} />
    </div>
  );
};
