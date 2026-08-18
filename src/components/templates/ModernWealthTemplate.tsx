'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ArrowRight, CheckCircle2, Phone, Mail, 
  PiggyBank, TrendingUp, Home, HeartHandshake, Briefcase, Star, Sparkles, Building2, UserCheck
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
    PiggyBank: <PiggyBank className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Home: <Home className="w-6 h-6" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Utility Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-8 flex justify-between items-center text-slate-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FCA FRN: {client.fcaFrn}</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block">
            {client.isIndependent ? 'Independent Financial Advisers' : 'Regulated Financial Practice'}
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`tel:${client.phone}`} className="flex items-center space-x-1 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{client.phone}</span>
          </a>
          <a href={`mailto:${client.email}`} className="hidden md:flex items-center space-x-1 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{client.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {client.firmName.charAt(0)}
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">{client.firmName}</span>
              <span className="block text-[10px] text-amber-400 uppercase tracking-widest font-semibold">
                Chartered Financial Wealth Management
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">Pension Calculator</a>
            <a href="#team" className="hover:text-amber-400 transition-colors">Our Team</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Client Reviews</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition-all flex items-center space-x-2"
            style={{ backgroundColor: branding.primaryColor }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Book Consultation</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Inspired by MLP Wealth */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-70 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-semibold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>UK Chartered Independent Financial Planning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {branding.heroHeadline}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed">
                {branding.heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide uppercase shadow-2xl hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <span>Request Free Financial Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#calculator"
                  className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm tracking-wide uppercase hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <PiggyBank className="w-4 h-4 text-amber-400" />
                  <span>Try Pension Calculator</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Whole of Market Advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>No Opaque Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>FCA Registered: {client.fcaFrn}</span>
                </div>
              </div>
            </div>

            {/* Right Card Feature */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Why Choose {client.firmName}?</h3>
                    <p className="text-xs text-amber-400 font-medium">Independent vs. Restricted Advice</p>
                  </div>
                  <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                    <span className="font-bold text-white block mb-1">1. True Independent Advisory</span>
                    <p className="text-slate-400">Unlike restricted banks, we scan the entire UK market to recommend the best products for your exact circumstances.</p>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                    <span className="font-bold text-white block mb-1">2. Transparent Fixed Fee Structure</span>
                    <p className="text-slate-400">Clear upfront pricing with no hidden commissions. You always know what you are paying for quality advice.</p>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                    <span className="font-bold text-white block mb-1">3. Dedicated Chartered IFA Partner</span>
                    <p className="text-slate-400">Work directly with qualified advisers with decades of wealth management experience in the UK.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-900/50 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Our Core Expertise</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Tailored Advisory Services</h2>
            <p className="text-slate-400 text-sm">
              Whether you are planning retirement, reducing tax liabilities, or protecting your legacy, our advisers deliver whole-of-market solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {client.services.map((service) => (
              <div
                key={service.id}
                className="bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all rounded-2xl p-6 space-y-4 group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  {iconMap[service.iconName] || <ShieldCheck className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.fullDescription}
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 pt-2"
                >
                  <span>Inquire About {service.category}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pension Calculator Section */}
      <section id="calculator" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Interactive Planning Tool</span>
            <h2 className="text-3xl font-bold text-white">How Prepared Are You For Retirement?</h2>
          </div>

          <PensionCalculator 
            primaryColor={branding.primaryColor}
            onOpenConsultation={() => setIsModalOpen(true)} 
          />
        </div>
      </section>

      {/* Advisers / Team Section */}
      <section id="team" className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Expert Leadership</span>
            <h2 className="text-3xl font-extrabold text-white">Meet Our Chartered Advisers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {client.team.map((member) => (
              <div key={member.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex space-x-5 items-start">
                <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-xl shrink-0">
                  {member.name.charAt(0)}
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <span className="text-xs font-medium text-amber-400 block">{member.role}</span>
                    <span className="text-[11px] text-slate-400 block">{member.qualifications}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{member.bio}</p>
                  <div className="text-[11px] text-slate-400 pt-1 space-y-1">
                    <div>FCA IRN: <strong className="text-slate-200">{member.fcaIrn || 'Verified'}</strong></div>
                    <div>Direct: <a href={`tel:${member.phone}`} className="text-amber-400">{member.phone}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Client Success</span>
            <h2 className="text-3xl font-extrabold text-white">Trusted By Clients Across The UK</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {client.testimonials.map((test) => (
              <div key={test.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed font-serif">
                  "{test.quote}"
                </p>
                <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-800 pt-3">
                  <div>
                    <strong className="text-white block">{test.clientName}</strong>
                    <span>{test.location} &bull; {test.serviceCategory}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-800 text-amber-400 font-semibold rounded-md text-[10px]">
                    Verified {test.verifiedSource || 'Review'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCA Badge Footer */}
      <FCABadgeFooter client={client} />

      {/* Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={client}
      />
    </div>
  );
};
