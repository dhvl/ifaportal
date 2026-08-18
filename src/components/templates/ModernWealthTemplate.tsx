'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ArrowRight, CheckCircle2, Phone, Mail, 
  PiggyBank, TrendingUp, Home, HeartHandshake, Briefcase, Star, Sparkles, UserCheck, Check
} from 'lucide-react';
import { IFAClient } from '@/lib/types';
import { FCABadgeFooter } from '@/components/common/FCABadgeFooter';
import { PensionCalculator } from '@/components/calculators/PensionCalculator';
import { ConsultationModal } from '@/components/modals/ConsultationModal';

interface TemplateProps {
  client: IFAClient;
}

export const ModernWealthTemplate: React.FC<TemplateProps> = ({ client }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { branding } = client;

  const iconMap: Record<string, React.ReactNode> = {
    PiggyBank: <PiggyBank className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Home: <Home className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />,
    Briefcase: <Briefcase className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Utility Header */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FCA FRN: {client.fcaFrn}</span>
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="hidden sm:inline-block text-slate-300 font-medium">
            {client.isIndependent ? 'Chartered Independent Financial Practice' : 'Regulated Financial Advisory'}
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`tel:${client.phone}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors font-medium">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{client.phone}</span>
          </a>
          <a href={`mailto:${client.email}`} className="hidden md:flex items-center space-x-1.5 hover:text-amber-400 transition-colors font-medium">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{client.email}</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md transition-transform hover:scale-105"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight block leading-tight">{client.firmName}</span>
              <span className="text-[10px] text-amber-600 uppercase tracking-widest font-bold block">
                Independent Financial Wealth Management
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-slate-900 transition-colors">Why Choose Us</a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors">Pension Forecasting</a>
            <a href="#team" className="hover:text-slate-900 transition-colors">Advisers</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">Reviews</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center space-x-2"
            style={{ backgroundColor: branding.primaryColor }}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Book Initial Review</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Bright Minimalist Aesthetic */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-slate-900 text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow-xs">
                <Award className="w-4 h-4 text-amber-400" />
                <span>UK Chartered Independent Financial Practice</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                {branding.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {branding.heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <span>Request Free Wealth Audit</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>

                <a
                  href="#calculator"
                  className="px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2 shadow-xs"
                >
                  <PiggyBank className="w-4 h-4 text-amber-600" />
                  <span>Pension Calculator</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Whole of Market Advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fee Transparency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FCA FRN: {client.fcaFrn}</span>
                </div>
              </div>
            </div>

            {/* Right Card Mockup / Feature Box */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 relative">
                {/* Floating Rating Badge */}
                <div className="absolute -top-4 -right-4 bg-slate-900 text-white rounded-2xl px-4 py-2.5 shadow-lg border border-slate-800 flex items-center space-x-2 text-xs font-bold">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.9 / 5.0 VouchedFor Rating</span>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                    UK Advisory Comparison
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Why Choose Independent Advice?</h3>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
                    <span className="font-bold text-slate-900 text-sm block flex items-center space-x-1.5">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>Whole-of-Market Access</span>
                    </span>
                    <p className="text-slate-600">We scan all UK pension providers & investment platforms without restrictive bank quotas.</p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
                    <span className="font-bold text-slate-900 text-sm block flex items-center space-x-1.5">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>Transparent Agreed Fees</span>
                    </span>
                    <p className="text-slate-600">No hidden exit penalties or commission traps. You approve all costs before any work begins.</p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
                    <span className="font-bold text-slate-900 text-sm block flex items-center space-x-1.5">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>Personal Chartered Adviser</span>
                    </span>
                    <p className="text-slate-600">Direct phone and email access to dedicated qualified advisers throughout your financial journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Specialist Advisory Services</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Personalized Wealth Solutions</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our Chartered Independent Financial Advisers combine technical UK tax expertise with whole-of-market financial strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {client.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-lg transition-all rounded-3xl p-7 space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  {iconMap[service.iconName] || <ShieldCheck className="w-5 h-5 text-amber-300" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center space-x-1.5 pt-3 border-t border-slate-100"
              >
                <span>Book Consultation for {service.category}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pension Calculator Section */}
      <section id="calculator" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Interactive Planning Tool</span>
            <h2 className="text-3xl font-extrabold text-white">UK Pension Pot & Retirement Forecast</h2>
            <p className="text-xs text-slate-400">Model your projected retirement wealth, 25% tax-free lump sum, and estimated income.</p>
          </div>

          <PensionCalculator 
            primaryColor={branding.primaryColor}
            onOpenConsultation={() => setIsModalOpen(true)} 
          />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Expert Leadership</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Chartered Advisers & Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {client.team.map((member) => (
            <div key={member.id} className="bg-white border border-slate-200 rounded-3xl p-7 flex space-x-5 items-start shadow-xs">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-xl shrink-0 shadow-md"
                style={{ backgroundColor: branding.primaryColor }}
              >
                {member.name.charAt(0)}
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <span className="text-xs font-bold text-amber-600 block">{member.role}</span>
                  <span className="text-[11px] text-slate-500 block font-medium">{member.qualifications}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                <div className="text-[11px] text-slate-500 pt-1 space-y-1">
                  <div>FCA Individual Reference: <strong className="text-slate-800">{member.fcaIrn || 'Verified'}</strong></div>
                  <div>Direct Tel: <a href={`tel:${member.phone}`} className="text-amber-600 font-semibold">{member.phone}</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-100/60 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Client Reviews</span>
            <h2 className="text-3xl font-extrabold text-slate-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {client.testimonials.map((test) => (
              <div key={test.id} className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-4 shadow-xs">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed font-serif">
                  "{test.quote}"
                </p>
                <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-100 pt-4">
                  <div>
                    <strong className="text-slate-900 block">{test.clientName}</strong>
                    <span>{test.location} &bull; {test.serviceCategory}</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[11px] border border-amber-200/60">
                    Verified {test.verifiedSource || 'Review'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCA Badge Footer */}
      <FCABadgeFooter client={client} themeMode="bright" />

      {/* Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={client}
      />
    </div>
  );
};
