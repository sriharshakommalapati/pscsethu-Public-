import React, { useState } from 'react';
import {
  ExternalLink,
  Info,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Tag,
  ShoppingBag,
  CheckCircle2,
  Sliders,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react';
import { GoogleAdUnit, COMMERCIAL_PARTNER_ADS } from './GoogleAdUnit';

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
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);
  const activePartner = COMMERCIAL_PARTNER_ADS[selectedPartnerIndex];

  if (!isOpen) {
    return (
      <div className={`hidden lg:flex flex-col items-center py-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs sticky top-20 w-12 hover:border-amber-400 transition-all cursor-pointer ${className}`}>
        <button
          onClick={onToggle}
          title="Expand Google Ads & Commercial Deals Side Panel"
          className="flex flex-col items-center gap-3 py-2 text-slate-600 hover:text-slate-900 w-full cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shadow-xs">
            ADS
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 [writing-mode:vertical-lr] rotate-180 py-4">
            Commercial Ads
          </span>
          <PanelRightOpen className="w-4 h-4 text-slate-500 hover:text-slate-900" />
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full lg:w-80 xl:w-88 flex flex-col gap-4 sticky top-20 transition-all ${className}`}>
      {/* Side Panel Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs">
            <DollarSign className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-xs text-slate-900 tracking-tight font-sans">
              COMMERCIAL ADS PANEL
            </h3>
            <p className="text-[10px] text-slate-500">Google Ads & Verified Partners</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggle}
            title="Minimize Side Panel for Full-Width View"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          >
            <PanelRightClose className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Primary Google Commercial Ad Unit (Medium Rectangle 300x250) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[10px] text-slate-500">
          <span className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Ad Unit 1 • Google Ads
          </span>
          <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-semibold">
            Slot: 8492019483
          </span>
        </div>

        <GoogleAdUnit
          formatType="rectangle"
          adSlot="8492019483"
          label="SPONSORED CIVIL SERVICES PARTNER • GOOGLE ADS"
        />
      </div>

      {/* Commercial Partner Deals & Discounts Showcase */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-indigo-50/70 rounded-2xl border border-amber-200/90 shadow-xs p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-amber-600" />
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">
              Commercial Partner Deals
            </h4>
          </div>
          <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
            {activePartner.discountBadge || 'Verified Deal'}
          </span>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {COMMERCIAL_PARTNER_ADS.map((partner, idx) => (
            <button
              key={partner.id}
              onClick={() => setSelectedPartnerIndex(idx)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition shrink-0 cursor-pointer ${
                selectedPartnerIndex === idx
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {partner.brand.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Selected Partner Details */}
        <div className="bg-white rounded-xl p-3 border border-slate-200/90 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                {activePartner.brand}
              </span>
              <h5 className="font-bold text-xs text-slate-900 leading-snug">
                {activePartner.headline}
              </h5>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
            {activePartner.description}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Sponsor
            </span>

            <a
              href={activePartner.targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 ${activePartner.accentBg} text-white rounded-lg text-[11px] font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer shrink-0`}
            >
              <span>{activePartner.ctaText}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Secondary Google Commercial Ad Unit (Sticky Skyscraper / Responsive) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[10px] text-slate-500">
          <span className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            Ad Unit 2 • Google Ads
          </span>
          <span className="text-[9px] text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded font-mono font-semibold">
            Slot: 5829103948
          </span>
        </div>

        <GoogleAdUnit
          formatType="rectangle"
          adSlot="5829103948"
          label="SPONSORED CIVIL SERVICES TEST PACK • GOOGLE ADS"
        />
      </div>

      {/* Side Panel Footer & Monetization Transparency */}
      <div className="bg-slate-900 text-slate-300 rounded-2xl p-3.5 space-y-2 text-[10px] border border-slate-800">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-white uppercase tracking-wider text-[9px] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Google Publisher
          </span>
          <a
            href="/ads.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline font-mono text-[9px]"
          >
            ads.txt Verified
          </a>
        </div>
        <p className="text-slate-400 leading-relaxed text-[10px]">
          Commercial ads in this side panel keep all comprehensive study materials, PYQs, and daily syllabus synchronizations 100% free for all aspirants across India.
        </p>
      </div>
    </div>
  );
};
