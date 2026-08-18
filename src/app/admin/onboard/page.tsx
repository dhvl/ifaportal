'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Building2, 
  Palette, Briefcase, Users, Layout, Eye, Sparkles, Check, Phone, Mail, MapPin
} from 'lucide-react';
import { IFAClient, TemplateId, AdminQuestionnaireFormData } from '@/lib/types';
import { DEFAULT_SERVICES, saveClient } from '@/lib/store';

export default function OnboardingQuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<AdminQuestionnaireFormData>({
    firmName: 'Crown Independent Wealth',
    fcaFrn: '782910',
    isIndependent: true,
    phone: '020 7946 0123',
    email: 'info@crownwealth.co.uk',
    address: '88 Leadenhall Street, London, EC3A 3BP',
    templateId: 'modern-wealth',
    primaryColor: '#0f2744',
    secondaryColor: '#c5a059',
    fontFamily: 'playfair',
    heroHeadline: 'Tailored Wealth Planning for UK Families & Directors',
    heroSubheadline: 'Independent Financial Advisers helping you build, protect, and pass on your wealth with confidence.',
    selectedServiceIds: ['retirement-planning', 'wealth-management', 'inheritance-tax', 'mortgages-property'],
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handlePublish = () => {
    const slug = formData.firmName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const selectedServices = DEFAULT_SERVICES.filter((s) => formData.selectedServiceIds.includes(s.id));

    const newClient: IFAClient = {
      id: `client-${Date.now()}`,
      slug,
      firmName: formData.firmName,
      fcaFrn: formData.fcaFrn,
      isIndependent: formData.isIndependent,
      registeredOffice: formData.address,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      branding: {
        primaryColor: formData.primaryColor,
        secondaryColor: formData.secondaryColor,
        accentColor: '#2563eb',
        fontFamily: formData.fontFamily,
        heroHeadline: formData.heroHeadline,
        heroSubheadline: formData.heroSubheadline,
      },
      templateId: formData.templateId,
      services: selectedServices,
      team: [
        {
          id: 't-lead',
          name: 'David Crown',
          role: 'Managing Director & Senior IFA',
          qualifications: 'Chartered Financial Planner',
          fcaIrn: 'DCW8821',
          bio: 'Providing personal wealth governance and pension strategies for over 18 years across London and the South East.',
          phone: formData.phone,
          email: formData.email,
        },
      ],
      testimonials: [
        {
          id: 'test-crown',
          clientName: 'Jonathan Sterling',
          location: 'London',
          serviceCategory: 'Pension Consolidation',
          rating: 5,
          quote: 'Comprehensive, highly professional advice. They restructured our business pensions with complete tax efficiency.',
          date: 'August 2026',
          verifiedSource: 'VouchedFor',
        },
      ],
      calculatorsEnabled: {
        pension: true,
        inheritanceTax: true,
        investmentGrowth: true,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    saveClient(newClient);
    router.push(`/portal/${slug}`);
  };

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServiceIds.includes(id);
      return {
        ...prev,
        selectedServiceIds: exists
          ? prev.selectedServiceIds.filter((sId) => sId !== id)
          : [...prev.selectedServiceIds, id],
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Onboarding Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">IFA Client Onboarding Questionnaire</h1>
              <span className="text-xs text-amber-400 font-medium">Step {step} of 5 &bull; Practice & Branding Setup</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400 hidden sm:inline">Auto-Saving Form State</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Questionnaire Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Step Progress Tracker */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-6 text-xs font-semibold">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}>1</div>
                <span className="hidden sm:inline">Firm Info</span>
              </div>
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}>2</div>
                <span className="hidden sm:inline">Branding</span>
              </div>
              <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}>3</div>
                <span className="hidden sm:inline">Services</span>
              </div>
              <div className={`flex items-center space-x-2 ${step >= 4 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 4 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}>4</div>
                <span className="hidden sm:inline">Template</span>
              </div>
              <div className={`flex items-center space-x-2 ${step >= 5 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= 5 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}>5</div>
                <span className="hidden sm:inline">Publish</span>
              </div>
            </div>

            {/* STEP 1: Practice Details */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    <span>Practice Identity & Regulatory Information</span>
                  </h2>
                  <p className="text-xs text-slate-400">Enter the client IFA practice details and FCA Firm Reference Number.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Practice / Firm Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        FCA Firm Reference Number (FRN) *
                      </label>
                      <input
                        type="text"
                        value={formData.fcaFrn}
                        onChange={(e) => setFormData({ ...formData, fcaFrn: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Advice Model
                      </label>
                      <select
                        value={formData.isIndependent ? 'independent' : 'restricted'}
                        onChange={(e) => setFormData({ ...formData, isIndependent: e.target.value === 'independent' })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="independent">Independent Financial Adviser (Whole of Market)</option>
                        <option value="restricted">Restricted Financial Adviser</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Contact Telephone *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Primary Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Office Registered Address *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Branding & Hero Content */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-amber-400" />
                    <span>Branding, Palette & Hero Messaging</span>
                  </h2>
                  <p className="text-xs text-slate-400">Customize client colors and landing page messaging.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Primary Brand Color
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                          className="w-12 h-10 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer"
                        />
                        <span className="text-xs font-mono text-slate-300 uppercase">{formData.primaryColor}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Secondary Gold/Accent
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.secondaryColor}
                          onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                          className="w-12 h-10 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer"
                        />
                        <span className="text-xs font-mono text-slate-300 uppercase">{formData.secondaryColor}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Hero Headline
                    </label>
                    <input
                      type="text"
                      value={formData.heroHeadline}
                      onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Hero Subheadline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.heroSubheadline}
                      onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Services Selection */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-amber-400" />
                    <span>Select Advisory Services Included</span>
                  </h2>
                  <p className="text-xs text-slate-400">Choose which financial advice areas this client provides.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEFAULT_SERVICES.map((svc) => {
                    const isSelected = formData.selectedServiceIds.includes(svc.id);
                    return (
                      <div
                        key={svc.id}
                        onClick={() => toggleService(svc.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                          isSelected
                            ? 'bg-amber-400/10 border-amber-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 ${isSelected ? 'bg-amber-400 text-slate-950' : 'border border-slate-700'}`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{svc.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1">{svc.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Template Selector */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Layout className="w-5 h-5 text-amber-400" />
                    <span>Choose Pre-designed Website Template</span>
                  </h2>
                  <p className="text-xs text-slate-400">Select the layout style for the client portal.</p>
                </div>

                <div className="space-y-4">
                  {/* Option 1 */}
                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'modern-wealth' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'modern-wealth'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-white">Modern Wealth (Inspired by MLP Wealth)</h4>
                      <p className="text-xs text-slate-400">Navy/Gold theme, high trust hero, whole-of-market disclosures, VouchedFor reviews.</p>
                    </div>
                    {formData.templateId === 'modern-wealth' && <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />}
                  </div>

                  {/* Option 2 */}
                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'heritage-trust' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'heritage-trust'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-white">Heritage & Trust (Executive Classic)</h4>
                      <p className="text-xs text-slate-400">Executive serif typography, retirement planning spotlight, and legacy wealth focus.</p>
                    </div>
                    {formData.templateId === 'heritage-trust' && <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />}
                  </div>

                  {/* Option 3 */}
                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'agile-dynamic' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'agile-dynamic'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-white">Agile Dynamic (Inspired by Agile IFA)</h4>
                      <p className="text-xs text-slate-400">Modern glassmorphism emerald layout with interactive pension pot calculator & instant booking.</p>
                    </div>
                    {formData.templateId === 'agile-dynamic' && <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Final Review & Publish */}
            {step === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>Review & Deploy Client Website</span>
                  </h2>
                  <p className="text-xs text-slate-400">Confirm practice setup details and launch the live portal.</p>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Firm Name:</span>
                    <strong className="text-white text-sm">{formData.firmName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">FCA FRN:</span>
                    <strong className="text-amber-400 font-mono">{formData.fcaFrn}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Template Layout:</span>
                    <strong className="text-white capitalize">{formData.templateId.replace('-', ' ')}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Active Services:</span>
                    <strong className="text-emerald-400">{formData.selectedServiceIds.length} Selected</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Slug URL:</span>
                    <strong className="text-amber-400 font-mono">
                      /portal/{formData.firmName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    </strong>
                  </div>
                </div>

                <button
                  onClick={handlePublish}
                  className="w-full py-4 px-6 rounded-2xl bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:bg-amber-300 transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Publish & Open Client Portal</span>
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-5 py-2.5 rounded-xl border border-slate-800 text-slate-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                Back
              </button>

              {step < 5 && (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center space-x-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Live Preview Card Pane */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center space-x-1.5">
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Real-Time Practice Card Preview</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE PREVIEW</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              {/* Header Preview */}
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg"
                  style={{ backgroundColor: formData.primaryColor }}
                >
                  {formData.firmName ? formData.firmName.charAt(0) : 'I'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {formData.firmName || 'Practice Name'}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono block">
                    FCA FRN: {formData.fcaFrn || 'XXXXXX'}
                  </span>
                </div>
              </div>

              {/* Hero Banner Preview */}
              <div 
                className="p-5 rounded-2xl border border-slate-800 space-y-3"
                style={{ backgroundColor: formData.primaryColor + '20' }}
              >
                <div className="inline-flex items-center space-x-1 text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{formData.isIndependent ? 'Independent Adviser' : 'Restricted Adviser'}</span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {formData.heroHeadline || 'Hero Headline'}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {formData.heroSubheadline || 'Hero Subheadline...'}
                </p>
              </div>

              {/* Contact Information Preview */}
              <div className="space-y-2 text-xs text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{formData.email}</span>
                </div>
                <div className="flex items-start space-x-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{formData.address}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 text-center border-t border-slate-800 pt-3">
                Selected Template: <strong className="text-slate-300 capitalize">{formData.templateId.replace('-', ' ')}</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
