'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ArrowRight, CheckCircle2, Phone, Mail, 
  PiggyBank, TrendingUp, Home, HeartHandshake, Briefcase, Star, Building, Lock
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
    <div className="min-h-screen bg-stone-950 text-stone-100 font-serif">
      {/* Top Banner */}
      <div className="bg-stone-900 border-b border-stone-800 text-xs py-2 px-6 flex justify-between items-center text-stone-400 font-sans">
        <div className="flex items-center space-x-3">
          <Building className="w-3.5 h-3.5 text-amber-500" />
          <span>FCA Authorised Independent Firm: FRN <strong>{client.fcaFrn}</strong></span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Tel: <a href={`tel:${client.phone}`} className="text-stone-200 font-bold hover:text-amber-400">{client.phone}</a></span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-stone-950 border-b border-stone-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between font-sans">
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">{client.firmName}</span>
              <span className="block text-[10px] text-amber-500 uppercase tracking-widest font-semibold font-sans">
                Independent Financial Advisers & Estate Counsel
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-stone-300">
            <a href="#services" className="hover:text-amber-500 transition-colors">Our Practice</a>
            <a href="#pension" className="hover:text-amber-500 transition-colors">Pension Forecasting</a>
            <a href="#advisers" className="hover:text-amber-500 transition-colors">Senior Partners</a>
            <a href="#testimonials" className="hover:text-amber-500 transition-colors">Client Governance</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-widest font-sans shadow-lg hover:brightness-110 transition-all border border-amber-500/30"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Arrange Consultation
          </button>
        </div>
      </header>

      {/* Heritage Hero Section */}
      <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800 relative">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-sans font-semibold text-amber-400">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Independent Financial Advisory Standards</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-100 leading-tight">
            {branding.heroHeadline}
          </h1>

          <p className="text-lg text-stone-400 max-w-3xl mx-auto font-sans leading-relaxed">
            {branding.heroSubheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 font-sans">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-lg text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all"
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
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Specialist Disciplines</span>
          <h2 className="text-3xl font-serif font-bold text-white">Independent Advisory Practice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {client.services.map((svc) => (
            <div key={svc.id} className="bg-stone-900 border border-stone-800 p-8 rounded-xl space-y-4 hover:border-amber-500/40 transition-colors">
              <div 
                className="w-10 h-10 rounded-md flex items-center justify-center text-white"
                style={{ backgroundColor: branding.primaryColor }}
              >
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif text-white font-bold">{svc.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed">{svc.fullDescription}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pension Calculator */}
      <section id="pension" className="py-16 bg-stone-900/60 border-t border-b border-stone-800 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <PensionCalculator primaryColor={branding.primaryColor} onOpenConsultation={() => setIsModalOpen(true)} />
        </div>
      </section>

      <FCABadgeFooter client={client} />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} client={client} />
    </div>
  );
};
