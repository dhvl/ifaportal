'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, PlusCircle, ExternalLink, Edit3, Trash2, ShieldCheck, 
  Sparkles, Layers, Eye, Users, RefreshCw, CheckCircle, Smartphone
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Admin Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-lg">
              IFA
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">UK IFA Portal Creator</span>
              <span className="block text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                Admin Practice Generator & Client Management
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin/onboard"
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center space-x-2 shadow-lg"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Onboard New IFA Client</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Banner / Stats Overview */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Building2 className="w-64 h-64 text-amber-400" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs px-3.5 py-1.5 rounded-full font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>FCA Compliant Client Portal Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Manage Onboarded IFA Practices
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Create, customize, and publish bespoke website templates for UK Independent Financial Advisers. Choose from pre-designed templates tailored after industry references like <em>MLP Wealth</em> and <em>Agile IFA</em>.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div>Total Practices: <strong className="text-white text-base ml-1">{clients.length}</strong></div>
              <div>Active Templates: <strong className="text-amber-400 text-base ml-1">3 Available</strong></div>
              <div>FCA Compliance Engine: <strong className="text-emerald-400 text-base ml-1">Enabled</strong></div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800">
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-3 px-6 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'clients'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Onboarded Clients ({clients.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`py-3 px-6 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'templates'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Pre-designed IFA Templates (3)</span>
          </button>
        </div>

        {/* Clients Tab Content */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Client Roster</h2>
              <Link
                href="/admin/onboard"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>+ Launch Onboarding Wizard</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md"
                          style={{ backgroundColor: client.branding.primaryColor }}
                        >
                          {client.firmName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                            {client.firmName}
                          </h3>
                          <span className="text-[11px] text-amber-400 block font-mono">
                            FRN: {client.fcaFrn}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                        <span>Selected Template:</span>
                        <span className="font-semibold text-white capitalize">
                          {client.templateId.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                        <span>Phone / Contact:</span>
                        <span className="text-slate-200">{client.phone}</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                        <span>Services Onboarded:</span>
                        <span className="text-emerald-400 font-bold">{client.services.length} Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                    <Link
                      href={`/portal/${client.slug}`}
                      target="_blank"
                      className="flex-1 py-2.5 px-3 bg-amber-400 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center space-x-1.5 shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Live Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={() => handleDelete(client.id, client.firmName)}
                      className="p-2.5 bg-slate-950 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-800 rounded-xl transition-colors"
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

        {/* Templates Tab Content */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="w-full h-40 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-amber-400 font-bold">
                Modern Wealth Layout (MLP Inspired)
              </div>
              <h3 className="text-lg font-bold text-white">Modern Wealth</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navy & gold high-conversion layout with whole-of-market disclaimers, fee transparency, and VouchedFor reviews.
              </p>
              <Link
                href="/portal/mlp-wealth"
                target="_blank"
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Preview Template Demo</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Template 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="w-full h-40 bg-stone-950 border border-stone-800 rounded-xl flex items-center justify-center text-amber-500 font-serif font-bold">
                Heritage & Trust Layout (Executive)
              </div>
              <h3 className="text-lg font-bold text-white">Heritage & Trust</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Classic executive serif typography for established practices focusing on pension consolidations & estate planning.
              </p>
              <Link
                href="/portal/heritage-trust"
                target="_blank"
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Preview Template Demo</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Template 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="w-full h-40 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-emerald-400 font-black">
                Agile Dynamic Layout (Agile IFA Inspired)
              </div>
              <h3 className="text-lg font-bold text-white">Agile Dynamic</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tech-forward glassmorphism style featuring interactive UK pension pot calculators and instant meeting booking.
              </p>
              <Link
                href="/portal/agile-ifa"
                target="_blank"
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Preview Template Demo</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
