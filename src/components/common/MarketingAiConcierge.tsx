'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, Send, X, Sparkles, ArrowRight, Mail, ExternalLink, ShieldCheck, Zap 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    href: string;
  };
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'bot',
    text: "Hello! Welcome to IFA Media. I'm your practice concierge.\n\nAsk me anything about our adviser websites, FCA compliance safeguards, our built-in 3-month social media retainer, or how fast we can launch your firm.",
    timestamp: 'Just now',
  },
];

const SUGGESTED_QUESTIONS = [
  "What's included in the Starter Plan?",
  "How does Starter beat competitors' top plans?",
  "Tell me about the 3-month social retainer",
  "How fast can our firm go live?",
  "How do I request package pricing?",
];

export const MarketingAiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (query: string): { text: string; action?: { label: string; href: string } } => {
    const q = query.toLowerCase();

    if (q.includes('starter') && (q.includes('beat') || q.includes('competitor') || q.includes('more') || q.includes('difference') || q.includes('premium') || q.includes('top'))) {
      return {
        text: "Traditional agencies charge £3k–£8k just for a static WordPress shell. Our **Starter Plan** is engineered from the ground up to offer more firepower out of the box than most competitors' premium tiers:\n\n• **Built-in 3-Month Social Media Retainer**: Done-for-you weekly LinkedIn thought-leadership posts & newsletters included as standard.\n• **FCA & FSCS Compliance**: Live FRN verification & Consumer Duty COBS 4 transparent fee grids.\n• **Ultra-Fast Next.js Cloud Hosting**: Instant WhatsApp and phone routing with zero maintenance headaches.",
        action: { label: 'Explore Starter Plan Live Demo', href: 'https://starter.ifamedia.co.uk' },
      };
    }

    if (q.includes('starter') || q.includes('plan 1')) {
      return {
        text: "The **Starter Plan** is tailored for solo IFAs and boutique practices wanting a high-trust, FCA-compliant presence without tech bloat:\n\n• Turnkey Next.js practice website\n• Direct WhatsApp & phone consultation routing\n• FCA FRN & FSCS £85k protection badges\n• Transparent Consumer Duty fee schedule\n• **Includes our 3-Month DFY Social Media Retainer**",
        action: { label: 'Inquire for Starter Plan', href: 'mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Starter%20Plan' },
      };
    }

    if (q.includes('growth') || q.includes('pro') || q.includes('calculator') || q.includes('ai')) {
      return {
        text: "The **Growth Plan** is our flagship client acquisition platform for ambitious wealth managers and multi-adviser practices:\n\n• **24/7 Conversational AI Concierge** (trained on FCA advice boundaries)\n• **3 Interactive UK Calculators** (Pension Drawdown, 40% IHT, and Compound ISA)\n• **Gated High-Net-Worth Retirement Guide** for email lead capture\n• **Multi-Adviser Directory** with individual booking profiles\n• **Includes our 3-Month DFY Social Media Retainer**",
        action: { label: 'Explore Growth Plan Live Demo', href: 'https://growth.ifamedia.co.uk' },
      };
    }

    if (q.includes('social') || q.includes('retainer') || q.includes('linkedin') || q.includes('newsletter')) {
      return {
        text: "Every website build includes our **3-Month Done-For-You Social Media Growth Retainer** as standard!\n\n• **Weekly Authority Posts**: Custom-written for LinkedIn to position your advisers as trusted wealth experts.\n• **Client Newsletters**: Seasonal tax year-end guides, pension updates, and market commentaries ready to send.\n• **FCA-Compliant Copy**: Pre-vetted to respect financial promotion rules.",
        action: { label: 'Drop an Inquiry on Retainer', href: 'mailto:inquiry@ifamedia.co.uk?subject=Inquiry%20regarding%20Social%20Retainer' },
      };
    }

    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('quote') || q.includes('fee')) {
      return {
        text: "We operate with **fixed package pricing** and zero hidden agency markups. Both our Starter and Growth plans are turnkey fixed-fee investments with setup fees waived on our default 3-month agreement.\n\nDrop an email to **inquiry@ifamedia.co.uk** with your practice name, and we'll send over the complete commercial package breakdown.",
        action: { label: 'Email: inquiry@ifamedia.co.uk', href: 'mailto:inquiry@ifamedia.co.uk?subject=Commercial%20Pricing%20Inquiry%20-%20IFA%20Media' },
      };
    }

    if (q.includes('fast') || q.includes('time') || q.includes('launch') || q.includes('timeline') || q.includes('how long')) {
      return {
        text: "We typically launch new adviser platforms in **5 to 7 business days**.\n\nBecause our core FCA architecture and compliance modules are pre-engineered, you skip the painful 3-month agency design delays and go live with zero tech friction.",
        action: { label: 'Start Practice Onboarding', href: '/admin/onboard' },
      };
    }

    if (q.includes('fca') || q.includes('compliance') || q.includes('consumer duty') || q.includes('cobs')) {
      return {
        text: "Compliance is built into every pixel:\n\n• **FCA Consumer Duty (FG22/5)**: Standardized, clear fee structures and fair value disclosures.\n• **Automated Disclaimers**: COBS 4 rules, capital-at-risk notices, and FSCS £85k protection badges.\n• **UK GDPR Compliance**: Zero intrusive analytics, local hosting, and cookie preference management.",
        action: { label: 'Review Compliance Architecture', href: '#compliance' },
      };
    }

    if (q.includes('crm') || q.includes('integration') || q.includes('intelliflo') || q.includes('plannr') || q.includes('portal')) {
      return {
        text: "We offer modular plug-and-play integrations for UK practices:\n\n• **CRM Sync**: 2-way lead sync with Intelliflo Office, Plannr, Adviser Cloud, or HubSpot.\n• **Client Portal Gateway**: Single sign-on access to provider vaults (moneyinfo, Advicefront, Transact).\n• **Local SEO & Google Ads**: Targeted local search campaigns for high-net-worth inquiries.",
        action: { label: 'See Modular Add-Ons', href: '#pricing' },
      };
    }

    return {
      text: "Thanks for asking! We specialize exclusively in creating high-performance websites for UK Financial Advisors, Financial Planners, and Wealth Managers.\n\nWould you like to explore our live demos, learn about our Starter or Growth plans, or request our fixed package pricing breakdown?",
      action: { label: 'Email inquiry@ifamedia.co.uk', href: 'mailto:inquiry@ifamedia.co.uk?subject=Website%20Inquiry%20-%20IFA%20Media' },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(text);
      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: reply.text,
        timestamp: 'Just now',
        action: reply.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-full bg-[#08232C] hover:bg-[#0E3542] text-white shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-0.5 border-2 border-[#184654] cursor-pointer"
            aria-label="Open IFA Media AI Concierge"
          >
            <div className="relative w-8 h-8 rounded-full bg-[#143946] border border-[#235364] flex items-center justify-center text-[#F3C044]">
              <Bot className="w-5 h-5 text-[#F3C044] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#5CDFB0] rounded-full border-2 border-[#08232C] animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-black tracking-wider text-[#5CDFB0] flex items-center space-x-1">
                <span>AI Agency Concierge</span>
              </div>
              <div className="text-xs font-black tracking-tight text-white">Ask IFA Media</div>
            </div>
          </button>
        )}
      </div>

      {/* Concierge Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[640px] h-[85vh] bg-white rounded-[28px] shadow-2xl border-2 border-[#D8E5EE] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="bg-[#08232C] text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-[#143946] shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#143946] border border-[#235364] flex items-center justify-center text-[#F3C044] shadow-sm">
                <Bot className="w-5 h-5 text-[#F3C044]" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-black text-white">IFA Media Concierge</h4>
                  <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#043327] text-[#5CDFB0] border border-[#0D7A53]">
                    Active AI
                  </span>
                </div>
                <p className="text-[11px] text-[#AFC3C9] font-medium">
                  Instant answers on practice plans &amp; deployment
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#AFC3C9] hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Concierge"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Value Micro-Banner */}
          <div className="bg-[#E8F8F2] border-b border-[#B4ECD6] px-4 py-2 flex items-center justify-between text-[11px] text-[#0A6B48] font-bold">
            <span className="flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Even our Starter Plan beats typical agencies&apos; top packages</span>
            </span>
            <a
              href="mailto:inquiry@ifamedia.co.uk"
              className="underline text-[#0A6B48] hover:text-[#064E3B]"
            >
              Email Us
            </a>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F8FAFC]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-4 text-xs leading-relaxed shadow-2xs whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#08232C] text-white rounded-br-none'
                      : 'bg-white text-[#1E2E35] border-2 border-[#E2EEF5] rounded-bl-none'
                  }`}
                >
                  {msg.text}

                  {msg.action && (
                    <div className="pt-3 mt-2 border-t border-[#E2EEF5]">
                      <a
                        href={msg.action.href}
                        target={msg.action.href.startsWith('http') ? '_blank' : undefined}
                        rel={msg.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center space-x-1.5 text-xs font-black text-[#0A6B48] hover:underline"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-[#869299] pt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 p-3 bg-white border-2 border-[#E2EEF5] rounded-2xl w-fit">
                <div className="w-2 h-2 rounded-full bg-[#08232C] animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-[#08232C] animate-pulse delay-100" />
                <div className="w-2 h-2 rounded-full bg-[#08232C] animate-pulse delay-200" />
                <span className="text-[11px] text-[#636F75] font-medium pl-1">Concierge thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-white border-t border-[#E2EEF5] flex overflow-x-auto gap-2 no-scrollbar">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-3 py-1.5 rounded-full bg-[#F0F7FB] hover:bg-[#E2EEF5] border border-[#D8E5EE] text-[11px] font-bold text-[#08232C] whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Message Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E2EEF5] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about plans, timelines, social retainer..."
              className="flex-1 px-4 py-2.5 bg-[#F0F7FB] border border-[#D8E5EE] rounded-xl text-xs text-[#08232C] placeholder-[#869299] focus:outline-none focus:border-[#08232C]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-[#08232C] hover:bg-[#0E3542] disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shadow-sm"
              aria-label="Send question"
            >
              <Send className="w-4 h-4 text-[#5CDFB0]" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
