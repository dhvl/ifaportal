'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'ifa_cookie_consent_v1';

interface CookieConsentBannerProps {
  onOpenPrivacyPolicy?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onOpenPrivacyPolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false,
    timestamp: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setIsVisible(true);
      } else {
        try {
          setPreferences(JSON.parse(saved));
        } catch {
          setIsVisible(true);
        }
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const newPrefs: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    saveAndClose(newPrefs);
  };

  const handleRejectNonEssential = () => {
    const newPrefs: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    saveAndClose(newPrefs);
  };

  const handleSaveCustom = () => {
    const newPrefs: CookiePreferences = {
      ...preferences,
      essential: true, // Always true
      timestamp: new Date().toISOString(),
    };
    saveAndClose(newPrefs);
  };

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <>
      {/* Floating Re-Open Pill (Always accessible in bottom-left if banner closed) */}
      {!isVisible && (
        <button
          onClick={() => {
            setShowPreferences(true);
            setIsVisible(true);
          }}
          className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-md hover:shadow-lg transition-colors text-xs flex items-center space-x-2 group"
          title="Manage Cookie Preferences (UK GDPR)"
          aria-label="Cookie Settings"
        >
          <Cookie className="w-4 h-4 text-amber-600 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline font-bold text-[11px] text-slate-700">Cookie Settings</span>
        </button>
      )}

      {/* Main Consent Banner */}
      {isVisible && !showPreferences && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-2xl space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 text-sm">
                  UK GDPR &amp; Cookie Consent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We use strictly necessary cookies to ensure secure operations, and optional analytical cookies to measure UK practice engagement.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <span>Read our</span>
              <button
                onClick={onOpenPrivacyPolicy}
                className="font-bold text-amber-700 underline hover:text-amber-800"
              >
                Privacy Notice
              </button>
              <span>for full UK data governance details.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-xs"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                title="Customize Settings"
                aria-label="Customize Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Preferences Modal */}
      {isVisible && showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <Cookie className="w-5 h-5 text-amber-600" />
                <h3 className="font-extrabold text-slate-900 text-base">
                  Cookie &amp; Tracking Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Customize how we store and process data on your browser in accordance with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-3 text-xs">
              {/* Essential */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start justify-between space-x-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-slate-900">
                    <span>Essential &amp; Security Cookies</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase">
                      Always Active
                    </span>
                  </div>
                  <p className="text-slate-500 leading-normal">
                    Required for core system security, multitenant portal routing, and session integrity. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="w-4 h-4 rounded text-slate-400 mt-1 cursor-not-allowed"
                />
              </div>

              {/* Analytics */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start justify-between space-x-3">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">
                    Analytics &amp; Performance
                  </span>
                  <p className="text-slate-500 leading-normal">
                    Helps us understand how IFAs explore templates and calculator tools using aggregated, anonymized metrics.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 mt-1 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start justify-between space-x-3">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">
                    Marketing &amp; Personalization
                  </span>
                  <p className="text-slate-500 leading-normal">
                    Enables tailored onboarding suggestions and saves customized branding palettes between sessions.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 mt-1 cursor-pointer"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={handleRejectNonEssential}
                className="text-xs text-slate-500 hover:text-slate-800 font-bold underline"
              >
                Reject All Non-Essential
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSaveCustom}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-xs flex items-center space-x-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Save Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
