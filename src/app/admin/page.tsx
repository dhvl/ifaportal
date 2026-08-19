'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, PlusCircle, ExternalLink, Trash2, ShieldCheck, 
  Sparkles, Layers, Eye, Users, RefreshCw, CheckCircle2, ChevronRight, Award, FileText
} from 'lucide-react';
import { IFAClient } from '@/lib/types';
import { getClients, deleteClient } from '@/lib/store';

export default function AdminDashboardPage() {
  const [clients, setClients] = useState<IFAClient[]>([]);
  const [activeTab, setActiveTab] = useState<'clients' | 'templates'>('clients');

  useEffect(() => {
    setClients(getClients());
  }, []);

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove ${name}?`)) {
      const updated = deleteClient(id);
      setClients(updated);
    }
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
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">UK IFA Portal Creator</span>
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
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-200" />
              <span>FCA Regulated Client Onboarding Engine</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Practice Management Dashboard
            </h1>

            <p className="text-amber-50 text-sm leading-relaxed max-w-2xl font-medium">
              Create, customize, and publish high-conversion UK IFA client portals in minutes. Complete with whole-of-market FCA disclaimers, pension calculators, and fee transparency disclosures.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-900 border-t border-white/20">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xs flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Onboarded Practices: <strong>{clients.length} Active</strong></span>
              </div>
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xs flex items-center space-x-2">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>FCA Compliant Templates: <strong>3 Available</strong></span>
              </div>
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Regulatory Engine: <strong>Active</strong></span>
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
              <h2 className="text-xl font-bold text-slate-900">Active IFA Client Roster</h2>
              <Link
                href="/admin/onboard"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center space-x-1"
              >
                <span>+ Onboard Practice</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-5 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md"
                          style={{ backgroundColor: client.branding.primaryColor }}
                        >
                          {client.firmName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                            {client.firmName}
                          </h3>
                          <span className="text-[11px] text-amber-600 font-mono font-bold block">
                            FCA FRN: {client.fcaFrn}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <span className="font-medium text-slate-500">Template Style:</span>
                        <span className="font-bold text-slate-900 capitalize">
                          {client.templateId.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <span className="font-medium text-slate-500">Contact Tel:</span>
                        <span className="font-semibold text-slate-800">{client.phone}</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <span className="font-medium text-slate-500">Advice Services:</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {client.services.length} Active
                        </span>
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
              ))}
            </div>
          </div>
        )}

        {/* TEMPLATES TAB */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-lg transition-all">
              <div className="w-full h-40 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-400 font-bold shadow-inner">
                Modern Wealth Layout (MLP Inspired)
              </div>
              <h3 className="text-lg font-bold text-slate-900">Modern Wealth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Navy &amp; gold modern wealth layout featuring fee transparency, whole-of-market disclosures, 4-stage advice journey, and VouchedFor reviews.
              </p>
              <Link
                href="/portal/mlp-wealth"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Template 2 */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-xs hover:shadow-lg transition-all">
              <div className="w-full h-40 bg-[#faf8f5] border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 font-serif font-bold">
                Heritage &amp; Trust (Executive Classic)
              </div>
              <h3 className="text-lg font-bold text-slate-900">Heritage &amp; Trust</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executive classic serif typography for established practices focusing on pension consolidations &amp; estate trusts.
              </p>
              <Link
                href="/portal/heritage-trust"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template</span>
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
                Tech-forward glassmorphism style featuring interactive UK pension pot calculators and 2-minute booking widget.
              </p>
              <Link
                href="/portal/agile-ifa"
                target="_blank"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Preview Template</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
