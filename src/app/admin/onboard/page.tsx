'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Building2, 
  Palette, Briefcase, Users, Layout, Eye, Sparkles, Check, Phone, Mail, MapPin, 
  AlertCircle, MessageCircle, Bot, TrendingUp, Award, Zap, FileText, CheckSquare
} from 'lucide-react';
import { IFAClient, AdminQuestionnaireFormData, PlanTier, TemplateId } from '@/lib/types';
import { DEFAULT_SERVICES, saveClient, PLAN_DETAILS } from '@/lib/store';

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
    registeredOffice: '88 Leadenhall Street, London, EC3A 3BP',
    companyRegistrationNumber: '09824102',
    mortgageWarningRequired: true,
    feeStructureSummary: 'Transparent fixed initial consultation fee + 0.50% - 0.75% p.a. ongoing discretionary management with zero exit penalties.',
    templateId: 'modern-wealth',
    planTier: 'pro',
    hasDfySocialMedia: true,
    whatsappNumber: '+44 7766 145235',
    clientPortalUrl: 'https://moneyinfo.co.uk/crown-wealth',
    primaryColor: '#0f2744',
    secondaryColor: '#c5a059',
    fontFamily: 'playfair',
    heroHeadline: 'Tailored Wealth Planning for UK Families & Directors',
    heroSubheadline: 'Independent Financial Advisers helping you build, protect, and pass on your wealth with confidence.',
    selectedServiceIds: ['retirement-planning', 'wealth-management', 'inheritance-tax', 'mortgages-property'],
  });

  const totalSteps = 6;
  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
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
      registeredOffice: formData.registeredOffice || formData.address,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      compliance: {
        fcaFrn: formData.fcaFrn,
        isIndependent: formData.isIndependent,
        registeredOffice: formData.registeredOffice || formData.address,
        companyRegistrationNumber: formData.companyRegistrationNumber || '00000000',
        fscsProtected: true,
        mortgageWarningRequired: formData.mortgageWarningRequired,
        feeStructureSummary: formData.feeStructureSummary,
        fcaStatusText: `${formData.firmName} is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference Number: ${formData.fcaFrn}).`,
      },
      branding: {
        primaryColor: formData.primaryColor,
        secondaryColor: formData.secondaryColor,
        accentColor: '#2563eb',
        fontFamily: formData.fontFamily,
        heroHeadline: formData.heroHeadline,
        heroSubheadline: formData.heroSubheadline,
      },
      templateId: formData.templateId,
      planTier: formData.planTier,
      hasDfySocialMedia: formData.hasDfySocialMedia,
      whatsappNumber: formData.whatsappNumber || formData.phone,
      clientPortalUrl: formData.clientPortalUrl,
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
        inheritanceTax: formData.planTier !== 'starter',
        investmentGrowth: formData.planTier !== 'starter',
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

  // Pricing calculations
  const planInfo = PLAN_DETAILS[formData.planTier] || PLAN_DETAILS.pro;
  const basePrice = planInfo.priceMonthly;
  const dfyPrice = formData.hasDfySocialMedia ? 169 : 0;
  const totalMonthlyPrice = basePrice + dfyPrice;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bright Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight">Practice Onboarding &amp; Plan Configuration</h1>
              <span className="text-xs text-amber-600 font-bold">Step {step} of {totalSteps} &bull; Practice &amp; Growth Plan Setup</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">Auto-Saving Form State</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Form Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Questionnaire Card */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Step Progress Bar */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-6 text-xs font-bold overflow-x-auto">
              {[
                { num: 1, label: 'Firm Details' },
                { num: 2, label: 'Branding' },
                { num: 3, label: 'Services' },
                { num: 4, label: 'Growth Plan' },
                { num: 5, label: 'Template' },
                { num: 6, label: 'Launch' },
              ].map((s) => (
                <div key={s.num} className={`flex items-center space-x-1.5 shrink-0 px-2 ${step >= s.num ? 'text-amber-600' : 'text-slate-400'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${step >= s.num ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {s.num}
                  </div>
                  <span className="hidden sm:inline text-[11px]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* STEP 1: Firm Details */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    <span>Practice Identity &amp; FCA Credentials</span>
                  </h2>
                  <p className="text-xs text-slate-500">Enter firm name, FCA FRN number, and company registration.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Practice / Firm Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        FCA Firm Reference Number (FRN) *
                      </label>
                      <input
                        type="text"
                        value={formData.fcaFrn}
                        onChange={(e) => setFormData({ ...formData, fcaFrn: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company Reg Number
                      </label>
                      <input
                        type="text"
                        value={formData.companyRegistrationNumber}
                        onChange={(e) => setFormData({ ...formData, companyRegistrationNumber: e.target.value })}
                        placeholder="e.g. 08129402"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Advice Model
                      </label>
                      <select
                        value={formData.isIndependent ? 'independent' : 'restricted'}
                        onChange={(e) => setFormData({ ...formData, isIndependent: e.target.value === 'independent' })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                      >
                        <option value="independent">Independent Financial Adviser (Whole of Market)</option>
                        <option value="restricted">Restricted Financial Adviser</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mortgage Warning Required?
                      </label>
                      <select
                        value={formData.mortgageWarningRequired ? 'yes' : 'no'}
                        onChange={(e) => setFormData({ ...formData, mortgageWarningRequired: e.target.value === 'yes' })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                      >
                        <option value="yes">Yes ("Your home may be repossessed...")</option>
                        <option value="no">No (Wealth / Pension Advice Only)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Fee Structure Summary
                    </label>
                    <input
                      type="text"
                      value={formData.feeStructureSummary}
                      onChange={(e) => setFormData({ ...formData, feeStructureSummary: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Branding & Hero */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-amber-500" />
                    <span>Branding, Colors &amp; Hero Messaging</span>
                  </h2>
                  <p className="text-xs text-slate-500">Customize client primary color and hero title.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Color
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                          className="w-12 h-10 bg-white border border-slate-200 rounded-lg cursor-pointer"
                        />
                        <span className="text-xs font-mono text-slate-800 font-bold uppercase">{formData.primaryColor}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Secondary Gold/Accent
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={formData.secondaryColor}
                          onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                          className="w-12 h-10 bg-white border border-slate-200 rounded-lg cursor-pointer"
                        />
                        <span className="text-xs font-mono text-slate-800 font-bold uppercase">{formData.secondaryColor}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Hero Headline
                    </label>
                    <input
                      type="text"
                      value={formData.heroHeadline}
                      onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Hero Subheadline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.heroSubheadline}
                      onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Services */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-amber-500" />
                    <span>Select Advisory Services</span>
                  </h2>
                  <p className="text-xs text-slate-500">Choose which financial advice areas this client provides.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEFAULT_SERVICES.map((svc) => {
                    const isSelected = formData.selectedServiceIds.includes(svc.id);
                    return (
                      <div
                        key={svc.id}
                        onClick={() => toggleService(svc.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                          isSelected
                            ? 'bg-amber-50 border-amber-500 text-slate-900 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 ${isSelected ? 'bg-amber-500 text-white' : 'border border-slate-300 bg-white'}`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{svc.title}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-1">{svc.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Choose Growth Plan & Automation Add-ons */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                    <span>Select Core Growth Plan &amp; Automation Tier</span>
                  </h2>
                  <p className="text-xs text-slate-500">Choose the feature tier and automation capabilities for this IFA firm.</p>
                </div>

                {/* 3 Plan Cards */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Plan 1: Starter */}
                  <div
                    onClick={() => setFormData({ ...formData, planTier: 'starter' })}
                    className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${
                      formData.planTier === 'starter'
                        ? 'border-amber-500 bg-amber-50/50 shadow-md'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-200 flex items-center justify-center font-bold text-slate-700">
                          1
                        </div>
                        <div>
                          <h4 className="font-extrabold text-base text-slate-900">Starter Growth</h4>
                          <span className="text-xs text-slate-500">Solo IFAs &amp; Appointed Representatives</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">£49 <span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <span className="text-[10px] text-emerald-700 font-bold">£0 Setup Fee</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                      <div>&bull; 1 High-converting Modern Theme</div>
                      <div>&bull; WhatsApp Click-to-Chat Widget</div>
                      <div>&bull; Single Pension Calculator</div>
                      <div>&bull; 1 Lead Magnet (Retirement Guide)</div>
                    </div>
                  </div>

                  {/* Plan 2: Client Acquisition Pro */}
                  <div
                    onClick={() => setFormData({ ...formData, planTier: 'pro' })}
                    className={`p-5 rounded-3xl border-2 cursor-pointer transition-all relative ${
                      formData.planTier === 'pro'
                        ? 'border-amber-500 bg-amber-50 shadow-md'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                      ⭐ Recommended • Best Value
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-extrabold text-base text-slate-900">Client Acquisition Pro</h4>
                          <span className="text-xs text-slate-500">Growing Practices &amp; Boutiques (2–5 Advisers)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">£99 <span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <span className="text-[10px] text-emerald-700 font-bold">£0 Setup Fee</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                      <div>&bull; <b>All 3 Premium Templates</b></div>
                      <div>&bull; <b>Automated WhatsApp Qualifier Bot</b></div>
                      <div>&bull; <b>Full Suite:</b> Pension + IHT + ISA</div>
                      <div>&bull; <b>3 Lead Magnets &amp; Scorecard Quiz</b></div>
                      <div>&bull; <b>Live VouchedFor Review Sync</b></div>
                      <div>&bull; Instant WhatsApp Lead Mobile Alerts</div>
                    </div>
                  </div>

                  {/* Plan 3: Elite Wealth Automation */}
                  <div
                    onClick={() => setFormData({ ...formData, planTier: 'elite' })}
                    className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${
                      formData.planTier === 'elite'
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-md'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-900 text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-extrabold text-base text-slate-900">Elite Wealth Automation</h4>
                          <span className="text-xs text-slate-500">Multi-Branch Networks &amp; Family Offices</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">£189 <span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <span className="text-[10px] text-emerald-700 font-bold">£0 Setup Fee</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                      <div>&bull; <b>24/7 AI Financial Assistant Bot</b></div>
                      <div>&bull; <b>Client Portal Gateway Integration</b></div>
                      <div>&bull; Bespoke Theme &amp; CSS Customizer</div>
                      <div>&bull; Unlimited Lead Magnets &amp; Funnels</div>
                    </div>
                  </div>
                </div>

                {/* DFY Social Media Marketing Add-On */}
                <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="dfyCheckbox"
                        checked={formData.hasDfySocialMedia}
                        onChange={(e) => setFormData({ ...formData, hasDfySocialMedia: e.target.checked })}
                        className="w-5 h-5 rounded-lg text-emerald-600 focus:ring-emerald-500 border-slate-300 mt-0.5 cursor-pointer"
                      />
                      <div>
                        <label htmlFor="dfyCheckbox" className="font-extrabold text-sm text-slate-900 cursor-pointer flex items-center space-x-1.5">
                          <span>Add Done-For-You (DFY) LinkedIn &amp; Blog Marketing</span>
                          <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Recommended</span>
                        </label>
                        <p className="text-xs text-slate-600 mt-1">
                          8-10 FCA-compliant LinkedIn posts/mo + 2 long-form SEO blog &amp; LinkedIn thought leadership articles in your firm's brand colors.
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-black text-emerald-900">+£169 <span className="text-[10px] font-normal text-slate-500">/mo</span></div>
                      <span className="text-[10px] text-slate-500 line-through">£199 /mo</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Client Portal Config */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Adviser WhatsApp Phone Number (For Alerts)
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="+447123456789"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Client Portal URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.clientPortalUrl}
                      onChange={(e) => setFormData({ ...formData, clientPortalUrl: e.target.value })}
                      placeholder="https://moneyinfo.co.uk/..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Template Selection */}
            {step === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Layout className="w-5 h-5 text-amber-500" />
                    <span>Choose Pre-designed Website Template</span>
                  </h2>
                  <p className="text-xs text-slate-500">Select the layout style for the client portal.</p>
                </div>

                <div className="space-y-4">
                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'modern-wealth' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'modern-wealth'
                        ? 'bg-amber-50 border-amber-500 text-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900">Modern Wealth (Inspired by MLP Wealth)</h4>
                      <p className="text-xs text-slate-500">Navy/Gold theme, high trust hero, 4-stage advice journey, fee transparency.</p>
                    </div>
                    {formData.templateId === 'modern-wealth' && <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />}
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'heritage-trust' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'heritage-trust'
                        ? 'bg-amber-50 border-amber-500 text-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900">Heritage &amp; Trust (Executive Classic)</h4>
                      <p className="text-xs text-slate-500">Executive serif typography, retirement planning spotlight, and legacy wealth focus.</p>
                    </div>
                    {formData.templateId === 'heritage-trust' && <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />}
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, templateId: 'agile-dynamic' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.templateId === 'agile-dynamic'
                        ? 'bg-amber-50 border-amber-500 text-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900">Agile Dynamic (Inspired by Agile IFA)</h4>
                      <p className="text-xs text-slate-500">Modern glassmorphism emerald layout with interactive planning tools &amp; instant booking.</p>
                    </div>
                    {formData.templateId === 'agile-dynamic' && <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: Review & Launch */}
            {step === 6 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>Review &amp; Deploy Client Portal</span>
                  </h2>
                  <p className="text-xs text-slate-500">Confirm practice setup details, active plan tier, and launch the live portal.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3.5 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Firm Name:</span>
                    <strong className="text-slate-900 text-sm">{formData.firmName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">FCA FRN:</span>
                    <strong className="text-amber-600 font-mono">{formData.fcaFrn}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Selected Plan Tier:</span>
                    <strong className="text-indigo-700 font-bold uppercase">{planInfo.name} (£{basePrice}/mo)</strong>
                  </div>
                  {formData.hasDfySocialMedia && (
                    <div className="flex justify-between border-b border-slate-200 pb-2.5">
                      <span className="text-slate-500">DFY Marketing Add-on:</span>
                      <strong className="text-emerald-700 font-bold">Active (+£169/mo bundled)</strong>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Total Monthly Investment:</span>
                    <strong className="text-slate-950 font-black text-sm">£{totalMonthlyPrice} / month (£0 setup fee)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Live Portal Slug:</span>
                    <strong className="text-amber-600 font-mono">
                      /portal/{formData.firmName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    </strong>
                  </div>
                </div>

                <button
                  onClick={handlePublish}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>Deploy &amp; Launch Client Portal Live</span>
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 disabled:opacity-40 transition-colors"
              >
                Back
              </button>

              {step < totalSteps && (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center space-x-1 shadow-md"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              )}
            </div>
          </div>

          {/* Right Real-Time Live Preview Pane */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center space-x-1.5">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Real-Time Practice Preview</span>
              </span>
              <span className="text-[10px] text-emerald-700 font-bold font-mono bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {planInfo.name} (£{totalMonthlyPrice}/mo)
              </span>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-6">
              {/* Header Preview */}
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm"
                  style={{ backgroundColor: formData.primaryColor }}
                >
                  {formData.firmName.charAt(0) || 'C'}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{formData.firmName}</h4>
                  <span className="text-[10px] text-amber-600 font-bold uppercase">
                    FCA FRN: {formData.fcaFrn} &bull; {formData.isIndependent ? 'Independent' : 'Restricted'}
                  </span>
                </div>
              </div>

              {/* Hero Preview */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                  {formData.heroHeadline}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {formData.heroSubheadline}
                </p>
                <div className="flex space-x-2 pt-1">
                  <span 
                    className="px-3 py-1 text-white text-[10px] font-bold rounded-lg uppercase"
                    style={{ backgroundColor: formData.primaryColor }}
                  >
                    Book Discovery
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-bold rounded-lg uppercase">
                    Planning Tools
                  </span>
                </div>
              </div>

              {/* Active Plan Modules Preview */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Included Automation Features:</span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center space-x-2 text-emerald-900 font-medium">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {formData.planTier === 'starter' && 'WhatsApp Click-to-Chat Button'}
                      {formData.planTier === 'pro' && 'Automated WhatsApp Lead Qualifier Bot'}
                      {formData.planTier === 'elite' && '24/7 AI Financial Assistant Bot + WhatsApp'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center space-x-2 text-amber-900 font-medium">
                    <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {formData.planTier === 'starter' && '1 Lead Magnet: UK Retirement Readiness'}
                      {formData.planTier !== 'starter' && '3 Lead Magnets + 2-Min Scorecard Quiz'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center space-x-2 text-blue-900 font-medium">
                    <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      {formData.planTier === 'starter' && 'Pension Calculator'}
                      {formData.planTier !== 'starter' && 'Full Suite: Pension, IHT 40% & ISA Growth'}
                    </span>
                  </div>

                  {formData.hasDfySocialMedia && (
                    <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center space-x-2 text-teal-900 font-medium">
                      <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>DFY LinkedIn &amp; Blog Thought Leadership Active</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
