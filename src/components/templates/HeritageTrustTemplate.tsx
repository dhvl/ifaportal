'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ArrowRight, Phone, Mail, 
  PiggyBank, TrendingUp, Star, Building, Lock
} from 'lucide-react';
import { IFAClient } from '@/lib/types';
import { FCABadgeFooter } from '@/components/common/FCABadgeFooter';
import { PensionCalculator } from '@/components/calculators/PensionCalculator';
import { ConsultationModal } from '@/components/modals/ConsultationModal';

interface TemplateProps {
  client: IFAClient;
}

export const HeritageTrustTemplate: React.FC<TemplateProps> = ({ client }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { branding } = client;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-serif antialiased">
      {/* Top Banner */}
      <div className="bg-stone-900 border-b border-stone-800 text-xs py-2 px-6 flex justify-between items-center text-stone-300 font-sans">
        <div className="flex items-center space-x-3">
          <Building className="w-3.5 h-3.5 text-amber-500" />
          <span>FCA Authorised Independent Firm: FRN <strong>{client.fcaFrn}</strong></span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Tel: <a href={`tel:${client.phone}`} className="text-white font-bold hover:text-amber-400">{client.phone}</a></span>
        </div>
      </div>

      {/* Main Bright Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-sans">
          <div className="flex items-center space-x-4">
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-stone-900 tracking-wide block leading-tight">{client.firmName}</span>
              <span className="block text-[10px] text-amber-700 uppercase tracking-widest font-bold">
                Independent Wealth &amp; Estate Counsel
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-stone-600">
            <a href="#services" className="hover:text-stone-900 transition-colors">Our Practice</a>
            <a href="#pension" className="hover:text-stone-900 transition-colors">Pension Forecasting</a>
            <a href="#testimonials" className="hover:text-stone-900 transition-colors">Governance</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-widest font-sans shadow-md hover:shadow-lg transition-all border border-amber-500/20"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Arrange Consultation
          </button>
        </div>
      </header>

      {/* Heritage Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f7f4ef] to-[#faf8f5] border-b border-stone-200 relative">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-amber-100/80 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs font-sans font-bold text-amber-900">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Chartered Financial Planning Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-tight">
            {branding.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
            {branding.heroSubheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 font-sans">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all"
              style={{ backgroundColor: branding.primaryColor }}
            >
              Book Executive Review
            </button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-6 font-sans">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">Specialist Disciplines</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">Independent Advisory Practice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {client.services.map((svc) => (
            <div key={svc.id} className="bg-white border border-stone-200 p-8 rounded-2xl space-y-4 hover:border-stone-400 shadow-xs transition-all">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: branding.primaryColor }}
              >
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 font-bold">{svc.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{svc.fullDescription}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pension Calculator */}
      <section id="pension" className="py-16 bg-slate-900 text-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <PensionCalculator primaryColor={branding.primaryColor} onOpenConsultation={() => setIsModalOpen(true)} />
        </div>
      </section>

      <FCABadgeFooter client={client} themeMode="bright" />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} client={client} />
    </div>
  );
};
