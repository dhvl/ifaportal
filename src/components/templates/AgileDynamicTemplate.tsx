'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, ArrowRight, Phone, Mail, 
  PiggyBank, TrendingUp, Sparkles, CheckCircle2, Zap, Star, Award, Check
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
    <div className="min-h-screen bg-emerald-50/40 text-slate-900 font-sans antialiased">
      {/* Top Banner */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Tech-Enabled UK Financial Advisory</span>
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="hidden sm:inline-block text-slate-300">
            FCA FRN: <strong>{client.fcaFrn}</strong>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href={`tel:${client.phone}`} className="hover:text-emerald-400 transition-colors font-medium">
            {client.phone}
          </a>
        </div>
      </div>

      {/* Modern Bright Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-500/20"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">{client.firmName}</span>
              <span className="text-[10px] text-emerald-600 font-bold tracking-wide block uppercase">
                Independent Financial Advice
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold text-slate-600 uppercase tracking-wider">
            <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-emerald-600 transition-colors">Pension Calculator</a>
            <a href="#why-us" className="hover:text-emerald-600 transition-colors">Why Us</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all flex items-center space-x-2"
            style={{ backgroundColor: branding.primaryColor }}
          >
            <Zap className="w-4 h-4 text-emerald-300" />
            <span>Book Consultation</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Bright Modern Minimalist */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-emerald-50/50 to-emerald-100/30 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/80 border border-emerald-300/80 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-900 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>FCA Regulated &bull; FRN {client.fcaFrn} &bull; Whole of Market</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            {branding.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {branding.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white font-extrabold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
              style={{ backgroundColor: branding.primaryColor }}
            >
              <span>Book Meeting In 2 Minutes</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-xs flex items-center justify-center space-x-2"
            >
              <PiggyBank className="w-4 h-4 text-emerald-600" />
              <span>Try Pension Calculator</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Tailored Solutions</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Modern Independent Advisory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {client.services.map((svc) => (
            <div key={svc.id} className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div 
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <TrendingUp className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.fullDescription}</p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center space-x-1 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pension Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PensionCalculator primaryColor={branding.primaryColor} onOpenConsultation={() => setIsModalOpen(true)} />
        </div>
      </section>

      <FCABadgeFooter client={client} themeMode="bright" />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} client={client} />
    </div>
  );
};
