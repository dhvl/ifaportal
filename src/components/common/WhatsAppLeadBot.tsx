'use client';

import React, { useState } from 'react';
import { 
  MessageCircle, Send, X, Bot, ShieldCheck, Sparkles, CheckCircle2, 
  ExternalLink, Calendar, HelpCircle, PhoneCall, ChevronRight, User
} from 'lucide-react';
import { IFAClient } from '@/lib/types';

interface WhatsAppLeadBotProps {
  client: IFAClient;
}

export const WhatsAppLeadBot: React.FC<WhatsAppLeadBotProps> = ({ client }) => {
  const [isOpen, setIsOpen] = useState(false);
  // AI bot state for Growth tier
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: `Welcome to ${client.firmName}. I am your 24/7 AI wealth concierge. How can I assist you with your pension, tax planning, or wealth strategy today?`,
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState('');

  const plan = client.planTier || 'pro';
  const rawNumber = client.whatsappNumber || '+447766145235';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');

  const handleStarterWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello ${client.firmName}, I visited your website and would like to ask a question regarding independent financial advice.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const handleAiSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuestion.trim()) return;

    const userQ = inputQuestion;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userQ }]);
    setInputQuestion('');

    setTimeout(() => {
      let botReply = `Thank you for your question. Under FCA guidelines, personalized investment advice requires reviewing your individual circumstances. ${client.firmName} provides comprehensive independent counsel.`;
      
      const qLower = userQ.toLowerCase();
      if (qLower.includes('fee') || qLower.includes('cost') || qLower.includes('charge')) {
        botReply = `${client.firmName} operates with complete fee transparency: ${client.compliance.feeStructureSummary} We offer a complimentary, no-obligation discovery consultation.`;
      } else if (qLower.includes('pension') || qLower.includes('retire')) {
        botReply = `We specialize in UK pension consolidation, annual allowance optimization (£60k standard cap), and tax-efficient flexi-access drawdown strategies.`;
      } else if (qLower.includes('inheritance') || qLower.includes('tax') || qLower.includes('iht')) {
        botReply = `Our estate planning service helps structure UK trusts, Business Property Relief (BPR), and lifetime gifting to mitigate the 40% inheritance tax rate.`;
      } else if (qLower.includes('portal') || qLower.includes('login')) {
        botReply = client.clientPortalUrl 
          ? `You can access your secure client valuation portal here: ${client.clientPortalUrl}`
          : `Please contact your adviser directly at ${client.email} for your secure client portal link.`;
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  // STARTER TIER: Direct Click-to-WhatsApp Floating Pill
  if (plan === 'starter') {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleStarterWhatsAppRedirect}
          className="flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-emerald-400/30 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white animate-bounce" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">WhatsApp Us</div>
            <div className="text-xs font-extrabold">Chat with an Adviser</div>
          </div>
        </button>
      </div>
    );
  }

  // PRO TIER (Default & Pro): 24/7 AI Financial Concierge Bot + Client Portal Gateway + Direct WhatsApp
  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center space-x-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-slate-800 hover:to-indigo-900 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-indigo-500/30"
          >
            <div className="relative w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
              <Bot className="w-5 h-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full"></span>
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-indigo-300">24/7 AI Concierge</div>
              <div className="text-xs font-black tracking-tight">Ask Advisory Assistant</div>
            </div>
          </button>
        )}
      </div>

      {/* Elite AI Assistant Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in font-sans">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{client.firmName}</h4>
                <div className="flex items-center space-x-2 text-[11px] text-indigo-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>AI Wealth Concierge (FCA Compliant)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Badges */}
          <div className="bg-slate-100/90 border-b border-slate-200 p-2.5 flex items-center justify-between text-[11px]">
            <button
              onClick={handleStarterWhatsAppRedirect}
              className="flex items-center space-x-1 text-emerald-700 font-bold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct WhatsApp</span>
            </button>
            {client.clientPortalUrl && (
              <a
                href={client.clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-indigo-700 font-bold hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Client Portal Login</span>
              </a>
            )}
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Prompts */}
          <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto text-[10px] text-slate-600">
            <button
              onClick={() => setInputQuestion('What is your advisory fee structure?')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-full whitespace-nowrap transition-colors"
            >
              Fee Structure?
            </button>
            <button
              onClick={() => setInputQuestion('How do you manage pension drawdown?')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-full whitespace-nowrap transition-colors"
            >
              Pension Drawdown?
            </button>
            <button
              onClick={() => setInputQuestion('Can you help reduce 40% Inheritance Tax?')}
              className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-full whitespace-nowrap transition-colors"
            >
              IHT Relief?
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleAiSend} className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              placeholder="Ask about pensions, fees, or wealth..."
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* UK GDPR Confidentiality Micro-badge */}
          <div className="px-3 pb-2 pt-1 bg-white text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1 border-t border-slate-50">
            <span>256-bit TLS encrypted &bull; UK GDPR Compliant &bull; FCA Guidance Safe</span>
          </div>
        </div>
      )}
    </>
  );
};
