import React, { useState } from 'react';
import {
  ExternalLink,
  Info,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PanelRightClose,
  PanelRightOpen,
  Settings,
  TrendingUp,
} from 'lucide-react';
import { GoogleAdUnit, DEFAULT_ADSENSE_CLIENT_ID } from './GoogleAdUnit';

interface CommercialAdSidePanelProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const CommercialAdSidePanel: React.FC<CommercialAdSidePanelProps> = ({
  isOpen,
  onToggle,
  className = '',
}) => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  if (!isOpen) {
    return (
      <div className={`hidden lg:flex flex-col items-center py-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs sticky top-20 w-12 hover:border-amber-400 transition-all cursor-pointer ${className}`}>
        <button
          onClick={onToggle}
          title="Expand Live Google Ads & Monetization Panel"
          className="flex flex-col items-center gap-3 py-2 text-slate-600 hover:text-slate-900 w-full cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-xs shadow-xs">
            <DollarSign className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 [writing-mode:vertical-lr] rotate-180 py-4">
            Google Ads Live
          </span>
          <PanelRightOpen className="w-4 h-4 text-slate-500 hover:text-slate-900" />
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full lg:w-80 xl:w-88 flex flex-col gap-4 sticky top-20 transition-all ${className}`}>
      {/* Side Panel Header with Monetization Status */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs">
            <DollarSign className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-xs text-slate-900 tracking-tight font-sans">
                GOOGLE ADS PANEL
              </h3>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">pub-9463525929730000</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onToggle}
            title="Minimize Side Panel for Full-Width View"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          >
            <PanelRightClose className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Google Ad Unit 1: Top Live General Commercial Ad (300x250 Medium Rectangle) */}
      <div className="space-y-1.5">
        <GoogleAdUnit
          formatType="rectangle"
          adSlot="8492019483"
          label="Live Google Ads • Panel 1"
          minHeight={250}
        />
      </div>

      {/* Google AdSense Account Monetization Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white rounded-2xl border border-slate-800 shadow-md p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h4 className="font-bold text-xs uppercase tracking-wide text-white">
              AdSense Monetization
            </h4>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
            Active
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-slate-300 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Account:</span>
            <span className="font-bold text-amber-300">pub-9463525929730000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Domain:</span>
            <span className="font-bold text-slate-200">www.pscsethu.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">ads.txt:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> DIRECT Verified
            </span>
          </div>
        </div>

        <div className="pt-1 flex items-center justify-between gap-2">
          <a
            href="https://adsense.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Google AdSense Console</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Google Ad Unit 2: Bottom Live General Commercial Ad (300x600 Skyscraper / Half-Page) */}
      <div className="space-y-1.5">
        <GoogleAdUnit
          formatType="skyscraper"
          adSlot="5829103948"
          label="Live Google Ads • Panel 2"
          minHeight={600}
        />
      </div>

      {/* Side Panel Footer & Authorized Digital Sellers Info */}
      <div className="bg-white text-slate-600 rounded-2xl p-3.5 space-y-2 text-[10px] border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900 uppercase tracking-wider text-[9px] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Authorized Digital Seller
          </span>
          <a
            href="/ads.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline font-mono text-[9px]"
          >
            ads.txt Verified
          </a>
        </div>
        <p className="text-slate-500 leading-relaxed text-[10px]">
          Monetized directly via Google AdSense (ca-pub-9463525929730000). Commercial advertisements support 100% free UPSC & State PSC educational notes across India.
        </p>
      </div>
    </div>
  );
};
