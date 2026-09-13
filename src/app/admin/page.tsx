'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, PlusCircle, ExternalLink, Trash2, ShieldCheck, 
  Sparkles, Layers, Eye, Users, RefreshCw, CheckCircle2, ChevronRight, 
  Award, FileText, TrendingUp, MessageCircle, Bot, Zap, ArrowUpRight, Mail
} from 'lucide-react';
import { IFAClient, PlanTier } from '@/lib/types';
import { getClients, deleteClient, saveClient, PLAN_DETAILS, ADDON_MARKETPLACE } from '@/lib/store';

export default function AdminDashboardPage() {
  const [clients, setClients] = useState<IFAClient[]>([]);
  const [activeTab, setActiveTab] = useState<'clients' | 'templates'>('clients');

  useEffect(() => {
    const timer = setTimeout(() => {
      setClients(getClients());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove ${name}?`)) {
      const updated = deleteClient(id);
      setClients(updated);
    }
  };

  const handlePlanChange = (client: IFAClient, newPlan: PlanTier) => {
    const updatedClient: IFAClient = {
      ...client,
      planTier: newPlan,
      calculatorsEnabled: {
        pension: newPlan === 'pro',
        inheritanceTax: newPlan === 'pro',
        investmentGrowth: newPlan === 'pro',
      },
      updatedAt: new Date().toISOString(),
    };
    const updatedList = saveClient(updatedClient);
    setClients(updatedList);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bright Glass Navigation Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-amber-500/20">
              IFA
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">IFA Media</span>
              <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block">
                Practice Onboarding &amp; Regulatory Management
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin/onboard"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Onboard New Practice</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Warm & Inviting Hero Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs px-4 py-1.5 rounded-full font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>2 Streamlined Growth Platforms &bull; Built-in Social Media Retainer &bull; Modular Add-ons</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Practice Management &amp; Adviser Console
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-normal">
              Manage client practices across <b>Starter Plan</b> and <b>Growth Plan</b> platforms. Both platforms include built-in social media management on a 3-month retainer. For custom practice pricing, drop an inquiry to <a href="mailto:inquiry@ifamedia.co.uk" className="text-amber-400 underline">inquiry@ifamedia.co.uk</a>.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-900 border-t border-slate-800">
              <div className="bg-white px-4 py-2.5 rounded-2xl shadow-md flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Pricing Inquiries: <a href="mailto:inquiry@ifamedia.co.uk" className="text-emerald-700 font-bold hover:underline">inquiry@ifamedia.co.uk</a></span>
              </div>
              <div className="bg-white px-4 py-2.5 rounded-2xl shadow-md flex items-center space-x-2.5">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Active Practices: <strong>{clients.length} Firms</strong></span>
              </div>
              <div className="bg-white px-4 py-2.5 rounded-2xl shadow-md flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>FCA Compliance Engine: <strong>Active</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bright Tab Switcher */}
        <div className="flex border-b border-slate-200/90 space-x-4">
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-3 px-6 font-extrabold text-xs uppercase tracking-wider border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'clients'
                ? 'border-amber-500 text-slate-900 bg-white shadow-xs rounded-t-xl'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-500" />
            <span>Onboarded Practices ({clients.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`py-3 px-6 font-extrabold text-xs uppercase tracking-wider border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'templates'
                ? 'border-amber-500 text-slate-900 bg-white shadow-xs rounded-t-xl'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Pre-designed Templates (3)</span>
          </button>
        </div>

        {/* CLIENTS TAB */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">Active IFA Client Portals</h2>
              <Link
                href="/admin/onboard"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center space-x-1"
              >
                <span>+ Onboard New Practice</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => {
                const plan = client.planTier === 'starter' ? 'starter' : 'pro';
                const planMeta = PLAN_DETAILS[plan] || PLAN_DETAILS.pro;

                return (
                  <div
                    key={client.id}
                    className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-5 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between group relative"
                  >
                    {/* Top Tier Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                        plan === 'starter'
                          ? 'bg-slate-100 text-slate-800 border-slate-300'
                          : 'bg-indigo-100 text-indigo-950 border-indigo-300'
                      }`}>
                        {planMeta.name}
                      </span>

                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {client.contractDuration === 'monthly'
                          ? 'Monthly Rolling'
                          : '3-Mo Retainer (DFY Social)'}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md shrink-0"
                          style={{ backgroundColor: client.branding.primaryColor }}
                        >
                          {client.firmName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                            {client.firmName}
                          </h3>
                          <span className="text-[11px] text-amber-600 font-mono font-bold block">
                            FCA FRN: {client.fcaFrn} &bull; {client.isIndependent ? 'Independent' : 'Restricted'}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                          <span className="font-medium text-slate-500">Active Template:</span>
                          <span className="font-bold text-slate-900 capitalize">
                            {client.templateId === 'modern-wealth' ? 'Reliable Advisors' : client.templateId === 'heritage-trust' ? 'Trustworthy Advisors' : client.templateId.replace('-', ' ')}
                          </span>
                        </div>

                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                          <span className="font-medium text-slate-500">Lead Bot Type:</span>
                          <span className="font-bold text-emerald-700 flex items-center space-x-1">
                            {plan === 'starter' && <span>WhatsApp Direct Button</span>}
                            {plan === 'pro' && <span>24/7 AI Concierge Bot</span>}
                          </span>
                        </div>

                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                          <span className="font-medium text-slate-500">Calculators &amp; Guides:</span>
                          <span className="font-bold text-slate-800">
                            {plan === 'starter' ? 'Disabled (Starter)' : 'Full Suite (Pension, IHT, ISA)'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                          <span className="font-medium text-slate-500">Social Media Retainer:</span>
                          <span className="font-bold text-emerald-700">Built-in (3-Month)</span>
                        </div>

                        {client.selectedAddons && client.selectedAddons.length > 0 && (
                          <div className="flex items-center justify-between bg-amber-50/60 p-2 rounded-xl border border-amber-200/60">
                            <span className="font-medium text-amber-800">Active Add-ons:</span>
                            <span className="font-bold text-amber-900">{client.selectedAddons.length} Selected</span>
                          </div>
                        )}
                      </div>

                      {/* Instant Plan Tier Switcher */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Switch Plan Tier:</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                          {(['starter', 'pro'] as PlanTier[]).map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handlePlanChange(client, t)}
                              className={`py-1.5 rounded-lg border uppercase transition-all ${
                                plan === t
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {t === 'starter' ? 'Starter Plan' : 'Growth Plan'}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <Link
                        href={`/portal/${client.slug}`}
                        target="_blank"
                        className="flex-1 py-2.5 px-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center space-x-1.5 shadow-xs"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>View Live Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => handleDelete(client.id, client.firmName)}
                        className="p-2.5 bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200/80 rounded-xl transition-colors"
                        title="Remove Client"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TEMPLATES TAB */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-lg transition-all">
              <div className="w-full h-40 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-400 font-bold shadow-inner">
                Reliable Advisors Layout
              </div>
              <h3 className="text-lg font-bold text-slate-900">Reliable Advisors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Navy &amp; gold modern wealth layout featuring fee transparency, whole-of-market disclosures, 4-stage advice journey, lead magnets, and VouchedFor reviews.
              </p>
              <Link
                href="/portal/reliable-advisors"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template (Starter Plan)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Template 2 */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-lg transition-all">
              <div className="w-full h-40 bg-[#faf8f5] border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 font-serif font-bold">
                Trustworthy Advisors (Executive Classic)
              </div>
              <h3 className="text-lg font-bold text-slate-900">Trustworthy Advisors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executive classic serif typography for established practices with 24/7 AI wealth concierge, client portal gateway, and IHT calculations.
              </p>
              <Link
                href="/portal/trustworthy-advisors"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template (Growth Plan)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Template 3 */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-lg transition-all">
              <div className="w-full h-40 bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-400 font-black shadow-inner">
                Agile Dynamic (Agile IFA Inspired)
              </div>
              <h3 className="text-lg font-bold text-slate-900">Agile Dynamic</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tech-forward glassmorphism style featuring interactive UK pension pot calculators, retirement lead magnet, and direct WhatsApp button.
              </p>
              <Link
                href="/portal/agile-ifa"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template (Interactive Demo)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
