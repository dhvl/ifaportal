import React from 'react';
import Link from 'next/link';
import { 
  Building2, PlusCircle, ExternalLink, ShieldCheck, Sparkles, 
  Layers, Calculator, CheckCircle2, ArrowRight, Star, Compass, Award
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK IFA Portal Creator | Multitenant Client Practice Builder',
  description: 'Create FCA-compliant Independent Financial Adviser website portals with custom branding, interactive pension tools, and pre-designed templates.',
};

export default function RootHomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bright Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-amber-500/20">
              IFA
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">UK IFA Portal Creator</span>
              <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block">
                Multitenant Practice Onboarding Engine
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Launch Admin Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-1.5 rounded-full font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>FCA FRN Compliant &bull; Whole of Market Standard</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Bespoke UK IFA Website Creator &amp; Practice Onboarding Engine
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Empowering UK Independent Financial Advisers with instant practice onboarding, FCA compliance disclaimers, interactive pension pot calculators, and pre-designed modern templates.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="/admin/onboard"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 text-white font-extrabold text-xs uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-5 h-5 text-amber-200" />
              <span>Onboard New Client Practice</span>
            </Link>

            <Link
              href="/admin"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-xs flex items-center justify-center space-x-2"
            >
              <span>Explore Admin Dashboard</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Demos Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Pre-configured Client Portals</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Live IFA Practice Demos</h2>
          <p className="text-sm text-slate-600">
            Select a live practice portal generated using our onboarding templates (inspired by <em>MLP Wealth</em>, <em>Agile IFA</em> &amp; <em>AFH Wealth Management</em>).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Demo 1 */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-5 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0f2744] text-white flex items-center justify-center font-bold text-lg shadow-md">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">MLP Wealth Management</h3>
                  <span className="text-xs text-amber-600 font-mono font-bold block">FCA FRN: 592810</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Navy &amp; gold modern wealth layout featuring fee transparency, whole-of-market disclosures, 4-stage advice journey, and VouchedFor reviews.
              </p>
            </div>

            <Link
              href="/portal/mlp-wealth"
              target="_blank"
              className="py-3 px-4 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 shadow-xs"
            >
              <span>View MLP Wealth Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>

          {/* Demo 2 */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-5 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#064e3b] text-white flex items-center justify-center font-bold text-lg shadow-md">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Agile Financial Advice</h3>
                  <span className="text-xs text-emerald-600 font-mono font-bold block">FCA FRN: 684201</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern emerald glassmorphism layout with live interactive UK pension pot forecasts and 2-minute booking widget.
              </p>
            </div>

            <Link
              href="/portal/agile-ifa"
              target="_blank"
              className="py-3 px-4 bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2 shadow-xs"
            >
              <span>View Agile IFA Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
            </Link>
          </div>

          {/* Demo 3 */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-5 hover:border-stone-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-500 flex items-center justify-center font-serif font-bold text-lg shadow-md">
                  H
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Heritage &amp; Trust Financial</h3>
                  <span className="text-xs text-amber-700 font-mono font-bold block">FCA FRN: 419203</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Classic executive serif template highlighting multi-generational wealth preservation, pension consolidations, and trusts.
              </p>
            </div>

            <Link
              href="/portal/heritage-trust"
              target="_blank"
              className="py-3 px-4 bg-stone-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors flex items-center justify-center space-x-2 shadow-xs"
            >
              <span>View Heritage Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} UK IFA Portal Creator. Built for UK Independent Financial Advisers.
      </footer>
    </div>
  );
}
