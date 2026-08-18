'use client';

import React from 'react';
import { ShieldCheck, AlertCircle, FileText, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { IFAClient } from '@/lib/types';

interface FCABadgeFooterProps {
  client: IFAClient;
}

export const FCABadgeFooter: React.FC<FCABadgeFooterProps> = ({ client }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Firm Overview & FCA Status */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md"
                style={{ backgroundColor: client.branding.primaryColor }}
              >
                {client.firmName.charAt(0)}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">{client.firmName}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {client.isIndependent
                ? 'Authorized and Regulated Independent Financial Advisers providing whole-of-market financial solutions.'
                : 'Authorized and Regulated Financial Advisers committed to personalized wealth management.'}
            </p>
            
            {/* FCA Badge Box */}
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/60 rounded-lg px-3 py-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>FCA Regulated | FRN: <strong>{client.fcaFrn}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links / Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Advisory Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {client.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href={`#services`} className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{client.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${client.phone}`} className="hover:text-amber-400 transition-colors">{client.phone}</a>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${client.email}`} className="hover:text-amber-400 transition-colors">{client.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Regulation Badges */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              UK Compliance Standards
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Whole of Market Independent Advice</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FSCS Protection Covered up to £85,000</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chartered Financial Planning Practice</span>
              </div>
            </div>
          </div>
        </div>

        {/* FCA Regulatory Notice & Risk Warning Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 mb-8 text-xs text-slate-400 space-y-3">
          <div className="flex items-start space-x-2 text-amber-400 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Financial Conduct Authority (FCA) Regulatory Disclosure</span>
          </div>
          <p className="leading-relaxed">
            {client.firmName} is authorised and regulated by the Financial Conduct Authority (FCA Register Number: <strong>{client.fcaFrn}</strong>). 
            Registered in England & Wales. Registered Office: {client.registeredOffice}.
          </p>
          <p className="text-slate-500 leading-relaxed italic border-t border-slate-800/80 pt-2">
            <strong>Risk Warning:</strong> The value of investments and the income from them can go down as well as up and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. Tax treatment depends on individual circumstances and may be subject to change in the future. Financial guidance provided on this website is for informational purposes and does not constitute formal advice.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800/80 text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {client.firmName}. All rights reserved. Powered by UK IFA Portal Creator.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Business</a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">Cookie Notice</a>
            <a href="#fca" className="hover:text-slate-300 transition-colors">FCA Register Entry</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
