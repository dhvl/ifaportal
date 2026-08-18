import React from 'react';
import Link from 'next/link';
import { 
  Building2, PlusCircle, ExternalLink, ShieldCheck, Sparkles, 
  Layers, Calculator, CheckCircle2, ArrowRight, Star, Compass
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK IFA Portal Creator | Multitenant Client Practice Builder',
  description: 'Create FCA-compliant Independent Financial Adviser website portals with custom branding, interactive pension tools, and pre-designed templates.',
};

export default function RootHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Utility Nav */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-lg">
              IFA
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">UK IFA Portal Creator</span>
              <span className="block text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                Multitenant Practice Onboarding Engine
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-lg flex items-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Admin Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs px-4 py-1.5 rounded-full font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>FCA FRN Compliant & Whole of Market Ready</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Bespoke UK IFA Website Creator & Client Onboarding Platform
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empowering UK Independent Financial Advisers with instant practice onboarding, FCA regulation compliance, interactive pension pot calculators, and high-conversion pre-designed templates.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="/admin/onboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-2xl flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Onboard New Client Practice</span>
            </Link>

            <Link
              href="/admin"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore Admin Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reference Demos Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Pre-configured Demos</span>
          <h2 className="text-3xl font-extrabold text-white">Live IFA Client Portals</h2>
          <p className="text-sm text-slate-400">
            Select a live practice website generated using our onboarding templates (inspired by <em>MLP Wealth</em> &amp; <em>Agile IFA</em>).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MLP Wealth Demo */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 hover:border-amber-400/50 transition-all flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#0f2744] text-white flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">MLP Wealth Management</h3>
                  <span className="text-xs text-amber-400 font-mono block">FCA FRN: 592810</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navy &amp; gold modern wealth layout featuring fee transparency, whole-of-market disclosures, and VouchedFor verified reviews.
              </p>
            </div>

            <Link
              href="/portal/mlp-wealth"
              target="_blank"
              className="py-3 px-4 bg-amber-400 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center space-x-2"
            >
              <span>View MLP Wealth Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Agile IFA Demo */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 hover:border-emerald-400/50 transition-all flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#064e3b] text-white flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Agile Financial Advice</h3>
                  <span className="text-xs text-emerald-400 font-mono block">FCA FRN: 684201</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modern emerald glassmorphism layout with live interactive UK pension pot forecasts and 2-minute booking widget.
              </p>
            </div>

            <Link
              href="/portal/agile-ifa"
              target="_blank"
              className="py-3 px-4 bg-emerald-400 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-colors flex items-center justify-center space-x-2"
            >
              <span>View Agile IFA Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Heritage Trust Demo */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-500 flex items-center justify-center font-serif font-bold text-lg">
                  H
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Heritage &amp; Trust Financial</h3>
                  <span className="text-xs text-amber-500 font-mono block">FCA FRN: 419203</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Classic executive serif template highlighting multi-generational wealth preservation, pension consolidations, and trusts.
              </p>
            </div>

            <Link
              href="/portal/heritage-trust"
              target="_blank"
              className="py-3 px-4 bg-slate-800 border border-slate-700 text-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>View Heritage Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} UK IFA Portal Creator. Built for UK Independent Financial Advisers.
      </footer>
    </div>
  );
}
