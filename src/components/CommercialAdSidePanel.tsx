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
  TrendingUp,
  Tag,
  Copy,
  Check,
  Award,
} from 'lucide-react';
import { GoogleAdUnit, DEFAULT_ADSENSE_CLIENT_ID } from './GoogleAdUnit';
import { COMMERCIAL_ADS } from '../data/commercialAds';

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
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs">
            <DollarSign className="w-4.5 h-4.5 text-amber-400" />
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
            <p className="text-[10px] text-slate-500 font-mono">ca-pub-9463525929730000</p>
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

      {/* Featured Commercial Google Ad Unit 1: UPSC Foundation & Mock Tests */}
      <div className="space-y-1">
        <GoogleAdUnit
          formatType="rectangle"
          adSlot="8492019483"
          label="Ad • Google Ads Partner"
          minHeight={250}
          initialAdIndex={0}
        />
      </div>

      {/* Featured Commercial Google Ad Unit 2: PYQ Solved Papers & Best-Seller Books */}
      <div className="space-y-1">
        <GoogleAdUnit
          formatType="rectangle"
          adSlot="7102938461"
          label="Ad • Google Shopping & Books"
          minHeight={250}
          initialAdIndex={2}
        />
      </div>

      {/* Quick Verified Commercial Partner Deals & Coupons */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-indigo-50/60 rounded-2xl border border-amber-200/90 shadow-2xs p-3.5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-amber-600" />
            <h4 className="font-bold text-xs uppercase tracking-wide text-slate-900">
              Sponsored Student Deals
            </h4>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-400/90 text-slate-950 border border-amber-300">
            Exclusive
          </span>
        </div>

        <div className="space-y-2">
          {/* Deal 1: Testbook */}
          <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-800">Testbook Pass Pro</span>
              <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                ₹299/year
              </span>
            </div>
            <p className="text-[10px] text-slate-600 line-clamp-1">
              1,500+ UPSC & State PSC full-length mock tests with All-India Rank analytics.
            </p>
            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
              <span className="text-[9px] text-slate-400">Sponsored Deal</span>
              <a
                href="https://testbook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Get Pass</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Deal 2: Unacademy Coupon */}
          <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-800">Unacademy Plus Civil Batch</span>
              <span className="text-[9px] font-mono text-amber-800 font-bold bg-amber-100 px-1.5 py-0.2 rounded border border-amber-300">
                40% OFF
              </span>
            </div>
            <p className="text-[10px] text-slate-600 line-clamp-1">
              Live mentorship batches for GS I–IV with daily answer evaluations.
            </p>
            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleCopyCode('PSCSETHU')}
                className="text-[9px] font-mono font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded border border-slate-300 flex items-center gap-1 cursor-pointer"
              >
                {copiedCode === 'PSCSETHU' ? <Check className="w-2.5 h-2.5 text-emerald-600" /> : <Copy className="w-2.5 h-2.5" />}
                <span>Code: PSCSETHU</span>
              </button>
              <a
                href="https://unacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Apply Deal</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Commercial Google Ad Unit 3: Google Cloud & Career Certifications */}
      <div className="space-y-1">
        <GoogleAdUnit
          formatType="skyscraper"
          adSlot="5829103948"
          label="Ad • Google Cloud & Career"
          minHeight={480}
          initialAdIndex={1}
        />
      </div>

      {/* Side Panel Footer & Monetization Verification */}
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
