'use client';

import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const YARDSTICK_CLIENTS = [
  { name: 'Boolers', location: 'Leicester', niche: 'SIPP & SSAS Pensions', domain: 'boolers.co.uk' },
  { name: 'Rowley Turton', location: 'Leicester', niche: 'Award-Winning HNW Wealth', domain: 'rowleyturton.co.uk' },
  { name: 'Balance: Wealth Planning', location: 'Nottingham', niche: 'Lifestyle Financial Planning', domain: 'balancewealth.uk' },
  { name: 'Chapters Financial', location: 'Guildford', niche: 'HNW Retirement & Trusts', domain: 'chaptersfinancial.com' },
  { name: 'Pen-life Associates', location: 'York', niche: 'Wealth Preservation', domain: 'pen-life.co.uk' },
  { name: 'Informed Financial Planning', location: 'Hull / Leeds', niche: 'Corporate Pensions & Tax', domain: 'informedfinancialplanning.co.uk' },
];

export const AgencyComparisonGrid: React.FC = () => {
  return (
    <section id="benchmark" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-black uppercase tracking-wider border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>UK Agency Competitor Audit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Why Pay £4k–£12k Upfront for a WordPress Site?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Legacy agencies like The Yardstick Agency charge £4,000 to £12,000 upfront for static WordPress builds. Here is how our modern Next.js cloud platform outperforms them in lead generation, speed, and economics.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-3 bg-slate-950 p-4 sm:p-5 text-xs font-black text-center border-b border-slate-800">
            <div className="text-left pl-2 text-slate-400 uppercase tracking-wider">Capability</div>
            <div className="text-amber-400 uppercase tracking-wider">Our Next.js + AI Platform</div>
            <div className="text-slate-400 uppercase tracking-wider">Legacy Agencies (£4k–£12k)</div>
          </div>

          <div className="divide-y divide-slate-700/60 text-xs sm:text-sm">
            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Lead Conversion Tech</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                24/7 AI Concierge + WhatsApp Direct
              </div>
              <div className="text-center text-slate-400">
                Static Contact Form 7 (&gt;70% mobile bounce)
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Interactive Financial Tools</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                3 UK Calculators: Pension, IHT &amp; Growth
              </div>
              <div className="text-center text-slate-400">
                None (Static PDF brochure downloads)
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Social Media Retainer</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                Built-in 3-Month Retainer Standard
              </div>
              <div className="text-center text-slate-400">
                Separate £800 – £1,500/mo upsell retainer
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Client Turnaround Time</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                Live in 2 minutes via Onboarding Flow
              </div>
              <div className="text-center text-slate-400">
                8 to 14 weeks agency backlog
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Upfront Setup Capital</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                £0 Setup on 3-Month Commitment
              </div>
              <div className="text-center text-slate-400">
                £4,000 to £12,000 upfront sunk cost
              </div>
            </div>

            <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
              <div className="font-extrabold text-white pl-2">Hosting &amp; Architecture</div>
              <div className="text-center font-bold text-emerald-400 bg-emerald-950/50 py-2 px-3 rounded-xl border border-emerald-500/20">
                Serverless Next.js 15 + Edge CDN
              </div>
              <div className="text-center text-slate-400">
                Monolithic PHP + WordPress plugins
              </div>
            </div>
          </div>
        </div>

        {/* Live Verification Links Directory for Partner */}
        <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Verified Yardstick Agency Clients (Inspect Source Code &amp; Confirm WordPress)
            </span>
            <span className="text-[11px] text-slate-500">Audited Portfolio</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {YARDSTICK_CLIENTS.map((client) => (
              <a
                key={client.domain}
                href={`https://${client.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold text-xs text-white block group-hover:text-amber-400 transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-mono">
                    {client.domain} &bull; {client.location}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-1">
            Right-click and &quot;View Page Source&quot; on any of these domains to confirm they rely on WordPress, PHP, and standard Contact Form 7.
          </p>
        </div>
      </div>
    </section>
  );
};
