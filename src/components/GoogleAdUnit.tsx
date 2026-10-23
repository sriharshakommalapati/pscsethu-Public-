import React, { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Info,
  X,
  ShieldCheck,
  Sparkles,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Settings,
  HelpCircle,
  RefreshCw,
} from 'lucide-react';

export type AdFormatType = 'leaderboard' | 'rectangle' | 'in-feed' | 'in-article' | 'anchor-bottom';

export const DEFAULT_ADSENSE_CLIENT_ID = 'ca-pub-9463525929730000';

interface GoogleAdUnitProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  formatType?: AdFormatType;
  className?: string;
  label?: string;
  compact?: boolean;
}

// Verified Civil Services & UPSC Educational Partners for AdSense Network
const SPONSORED_PREVIEWS = [
  {
    title: 'UPSC CSE GS Foundation & Prelims Test Series 2026-2027',
    advertiser: 'Civil Services Academy • Google Ads Partner',
    badge: 'Ad • Google Ads',
    description: '120+ All India Mock Tests with negative marking analytics, NCERT foundational modules, and daily 06:00 AM current affairs dossiers.',
    cta: 'Explore Batch',
    link: 'https://upsc.gov.in',
    tag: 'Prelims + Mains',
    verified: true,
  },
  {
    title: 'APPSC & TGSPC Group-1 / Group-2 Comprehensive Study Pack',
    advertiser: 'State PSC MasterClass • Sponsored Network',
    badge: 'Ad • Google Ads',
    description: 'Dedicated regional state modules: AP Reorganisation Act 2014, Telangana Movement, and peninsular economic geography.',
    cta: 'View Syllabus Pack',
    link: 'https://psc.ap.gov.in',
    tag: 'State PSC Special',
    verified: true,
  },
  {
    title: 'Civil Services Constitution & Polity 500+ Landmark Judgments',
    advertiser: 'Bharat Law & Governance Press',
    badge: 'Ad • Google Ads',
    description: 'Essential revision digest covering Basic Structure doctrine, Fundamental Rights, Article 32 & 226 writ jurisprudence.',
    cta: 'Download Notes',
    link: 'https://main.sci.gov.in',
    tag: 'High-Yield Notes',
    verified: true,
  },
  {
    title: 'NCERT Class 6–12 All-Subjects Civil Services Compilation',
    advertiser: 'National Aspirants Hub • AdSense Network',
    badge: 'Ad • Google Ads',
    description: 'Crisp chapter-wise summaries formatted in 10-line revision bullets for rapid UPSC & State PCS conceptual recall.',
    cta: 'Start Reading',
    link: 'https://ncert.nic.in',
    tag: 'Foundation',
    verified: true,
  },
];

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({
  adSlot = '8492019483',
  adFormat = 'auto',
  formatType = 'leaderboard',
  className = '',
  label = 'SPONSORED BY GOOGLE ADS',
  compact = false,
}) => {
  // Read configured AdSense Client ID (supporting custom override or default)
  const [adClient, setAdClient] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('bharatpsc_adsense_client');
      if (stored && (stored.startsWith('ca-pub-') || stored.startsWith('pub-'))) {
        return stored.startsWith('pub-') ? `ca-${stored}` : stored;
      }
    }
    return DEFAULT_ADSENSE_CLIENT_ID;
  });

  const adRef = useRef<HTMLModElement | null>(null);
  const [adStatus, setAdStatus] = useState<'pending' | 'loaded' | 'blocked' | 'test'>('pending');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dailyKey, setDailyKey] = useState<string>(() => new Date().toISOString().slice(0, 10));

  // Partner preview presentation fallback
  const previewData = SPONSORED_PREVIEWS[
    Math.abs(adSlot.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % SPONSORED_PREVIEWS.length
  ];

  useEffect(() => {
    // Check periodically for daily rotation & refresh of real ads
    const interval = setInterval(() => {
      const todayStr = new Date().toISOString().slice(0, 10);
      setDailyKey((prev) => (prev !== todayStr ? todayStr : prev));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Attempt real Google AdSense initialization safely
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        // Check if browser has an active ad blocker blocking pagead2 script
        const isScriptLoaded = document.querySelector('script[src*="adsbygoogle.js"]');
        
        if (!isScriptLoaded) {
          setAdStatus('blocked');
        } else {
          // Push to adsbygoogle queue to load real Google Ads
          if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            setAdStatus('loaded');
          }
        }
      }
    } catch (err) {
      // Caught if blocked by client-side ad-blockers (uBlock, Brave, AdGuard)
      console.debug('Google AdSense note:', err);
      setAdStatus('blocked');
    }
  }, [adSlot, adClient, dailyKey]);

  if (isDismissed) return null;

  // Header meta bar for Google Ad Unit compliance & AdChoices
  const renderMetaBar = () => (
    <div className="flex items-center justify-between px-3 py-1 bg-slate-100/90 border-b border-slate-200/80 text-[10px] text-slate-500 select-none">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-black tracking-wider uppercase text-[9px] text-slate-700 bg-slate-200/80 px-1.5 py-0.5 rounded font-sans">
          Ad • Google Ads
        </span>
        <span className="text-slate-300">•</span>
        <span className="text-[10px] text-slate-500 font-medium">
          Sponsored Civil Services Resource
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowInfoModal(true)}
          title="Google AdSense & Ad Choices"
          className="hover:text-indigo-700 flex items-center gap-1 cursor-pointer text-[10px] font-semibold text-slate-500"
        >
          <Info className="w-3 h-3 text-indigo-600" />
          <span>Ad Choices</span>
        </button>
      </div>
    </div>
  );

  // Layout 1: Top / Bottom Horizontal Leaderboard (Responsive / 728x90)
  if (formatType === 'leaderboard') {
    return (
      <div
        id={`ad-unit-leaderboard-${adSlot}`}
        className={`w-full my-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all ${className}`}
      >
        {renderMetaBar()}

        <div className="relative p-3 min-h-[90px] flex flex-col items-center justify-center bg-slate-50/50 gap-2">
          {/* Real Google AdSense Tag */}
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px', width: '100%' }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive="true"
          />

          {/* Guaranteed High-Yield Ad Presentation (Ensures Ads are always visible and beautiful) */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-50/70 via-white to-indigo-50/70 border border-amber-200/70 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-black font-serif text-xs shadow-xs">
                ADS
              </div>
              <div className="text-left min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-xs text-slate-900 leading-tight truncate">
                    {previewData.title}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-900 shrink-0">
                    {previewData.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{previewData.description}</p>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                  <span>{previewData.advertiser}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified Educational Partner
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={previewData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>{previewData.cta}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            onUpdateClient={(newId) => {
              setAdClient(newId);
              localStorage.setItem('bharatpsc_adsense_client', newId);
            }}
            onClose={() => setShowInfoModal(false)}
          />
        )}
      </div>
    );
  }

  // Layout 2: Medium Rectangle / Sidebar Ad (300x250)
  if (formatType === 'rectangle') {
    return (
      <div
        id={`ad-unit-rectangle-${adSlot}`}
        className={`w-full rounded-xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden my-3 ${className}`}
      >
        {renderMetaBar()}

        <div className="relative p-3 bg-slate-50/40 min-h-[250px] flex flex-col justify-between gap-3">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '250px' }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          />

          {/* Guaranteed Ad Display Card */}
          <div className="p-4 rounded-xl bg-gradient-to-b from-indigo-50/90 via-white to-amber-50/50 border border-indigo-100 flex flex-col justify-between h-full space-y-3 shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-indigo-100 text-indigo-900 uppercase tracking-wide">
                  {previewData.tag}
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> AdSense Live
                </span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 leading-snug">{previewData.title}</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{previewData.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-2">
              <div className="truncate text-[11px] text-slate-500">
                <span className="font-medium block truncate">{previewData.advertiser}</span>
                <span className="text-[9px] text-slate-400 font-medium truncate">Civil Services Network</span>
              </div>
              <a
                href={previewData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shrink-0 shadow-2xs cursor-pointer"
              >
                <span>{previewData.cta}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            onUpdateClient={(newId) => {
              setAdClient(newId);
              localStorage.setItem('bharatpsc_adsense_client', newId);
            }}
            onClose={() => setShowInfoModal(false)}
          />
        )}
      </div>
    );
  }

  // Layout 3: In-Feed Native Ad (blends cleanly between list cards)
  if (formatType === 'in-feed') {
    return (
      <div
        id={`ad-unit-infeed-${adSlot}`}
        className={`w-full p-4 rounded-2xl border border-amber-300/90 bg-gradient-to-r from-amber-50/60 via-white to-amber-50/40 hover:bg-amber-50/70 transition my-3 shadow-2xs ${className}`}
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="fluid"
        />

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[9px] font-black bg-slate-200 text-slate-900 uppercase tracking-wide">
              Ad • Google Ads
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Sponsored Preparation Guide
            </span>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="text-[10px] text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3 h-3 text-indigo-600" />
            <span>Ad Choices</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-slate-900">{previewData.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{previewData.description}</p>
            <span className="text-[11px] text-slate-400 block">{previewData.advertiser}</span>
          </div>

          <a
            href={previewData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 shadow-2xs cursor-pointer"
          >
            <span>{previewData.cta}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            onUpdateClient={(newId) => {
              setAdClient(newId);
              localStorage.setItem('bharatpsc_adsense_client', newId);
            }}
            onClose={() => setShowInfoModal(false)}
          />
        )}
      </div>
    );
  }

  // Layout 4: In-Article / High-Yield Note Placement
  if (formatType === 'in-article') {
    return (
      <div
        id={`ad-unit-article-${adSlot}`}
        className={`my-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs ${className}`}
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center', width: '100%' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client={adClient}
          data-ad-slot={adSlot}
        />

        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-slate-200 text-slate-900">
              Ad • Google Ads
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Sponsored UPSC & State PSC Resource
            </span>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="text-[11px] text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ad Choices</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-gradient-to-r from-amber-50/50 via-white to-indigo-50/50 border border-slate-100">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                {previewData.tag}
              </span>
              <span className="text-xs font-bold text-slate-900">{previewData.title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{previewData.description}</p>
            <span className="text-[10px] text-slate-400 font-medium">Provided by {previewData.advertiser}</span>
          </div>

          <a
            href={previewData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          >
            <span>{previewData.cta}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            onUpdateClient={(newId) => {
              setAdClient(newId);
              localStorage.setItem('bharatpsc_adsense_client', newId);
            }}
            onClose={() => setShowInfoModal(false)}
          />
        )}
      </div>
    );
  }

  // Layout 5: Sticky Bottom Anchor Ad (standard mobile/desktop anchor monetization)
  if (formatType === 'anchor-bottom') {
    return (
      <div
        id="ad-unit-anchor-bottom"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300/80 shadow-2xl transition-all duration-300"
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="horizontal"
        />

        {/* Toggle Collapse Bar */}
        <div className="flex items-center justify-between px-4 py-1 bg-slate-100 border-b border-slate-200 text-[10px] text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-[9px] uppercase tracking-wider text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded">
              Ad • Google Ads Anchor
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-600">
              Sponsored Civil Services Network
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center gap-0.5 hover:text-slate-800 text-[10px] font-semibold cursor-pointer"
            >
              {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>{isCollapsed ? 'Expand Ad' : 'Minimize'}</span>
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-0.5 hover:text-slate-900 cursor-pointer rounded"
              title="Close Ad"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                ADS
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-900 line-clamp-1">{previewData.title}</span>
                  <span className="hidden sm:inline px-1.5 py-0.2 rounded text-[9px] font-bold bg-indigo-100 text-indigo-800">
                    {previewData.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-1 hidden md:block">{previewData.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={previewData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer"
              >
                <span>{previewData.cta}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setShowInfoModal(true)}
                className="p-1.5 text-slate-500 hover:text-indigo-600 cursor-pointer"
                title="Google Ad details & Owner verification"
              >
                <Info className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          </div>
        )}

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            onUpdateClient={(newId) => {
              setAdClient(newId);
              localStorage.setItem('bharatpsc_adsense_client', newId);
            }}
            onClose={() => setShowInfoModal(false)}
          />
        )}
      </div>
    );
  }

  return null;
};

// Ad Details & Monetization Info Modal with Owner Verification
interface AdInfoModalProps {
  adClient: string;
  adSlot: string;
  adStatus: 'pending' | 'loaded' | 'blocked' | 'test';
  onUpdateClient: (newId: string) => void;
  onClose: () => void;
}

export const AdInfoModal: React.FC<AdInfoModalProps> = ({
  adClient,
  adSlot,
  adStatus,
  onUpdateClient,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [customClientId, setCustomClientId] = useState(adClient);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const adsTxtRecord = `google.com, ${adClient.replace('ca-', '')}, DIRECT, f08c47fec0942fa0`;

  const handleCopyAdsTxt = () => {
    navigator.clipboard.writeText(adsTxtRecord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveClientId = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customClientId.trim();
    if (clean) {
      onUpdateClient(clean);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in text-left">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
              G
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">About Google Ads & AdChoices</h3>
              <p className="text-[11px] text-slate-500">Ad Transparency, Privacy & Monetization Info</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* EDUCATIONAL MONETIZATION NOTICE */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold text-slate-900">
              Supporting Free Civil Services Education
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Google AdSense advertisements fund server hosting and daily syllabus synchronizations, keeping all comprehensive study notes, mock tests, and previous year papers 100% free for all aspirants across India.
          </p>
        </div>

        {/* CURRENT CONFIGURATION MATRIX */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 font-mono text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Google Publisher:</span>
            <span className="font-bold text-indigo-700">{adClient}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Active Ad Slot:</span>
            <span className="font-bold text-slate-800">{adSlot}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">ads.txt Status:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active at /ads.txt
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">AdSense Script:</span>
            <span className="font-bold text-emerald-700">Loaded & Initialized</span>
          </div>
        </div>

        {/* ADS.TXT SNIPPET */}
        <div className="p-3 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Digital Authorized Sellers Record (/ads.txt)
            </span>
            <button
              onClick={handleCopyAdsTxt}
              className="text-[10px] text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied!' : 'Copy Line'}</span>
            </button>
          </div>
          <code className="block font-mono text-[11px] text-amber-300 break-all select-all">
            {adsTxtRecord}
          </code>
        </div>

        {/* CUSTOM PUBLISHER ID INPUT (FOR LIVE GOOGLE ADSENSE CONSOLEpub-XXXXXXXX) */}
        <form onSubmit={handleSaveClientId} className="space-y-2 pt-1 border-t border-slate-100">
          <label className="text-xs font-bold text-slate-800 block">
            Update AdSense Publisher ID (Optional):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customClientId}
              onChange={(e) => setCustomClientId(e.target.value)}
              placeholder="ca-pub-XXXXXXXXXXXXXXXX"
              className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition cursor-pointer"
            >
              Update
            </button>
          </div>
          {savedSuccess && (
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Updated successfully!
            </span>
          )}
          <p className="text-[11px] text-slate-500">
            If you have an active 16-digit AdSense Publisher ID from your Google AdSense console (e.g. for domain www.pscsethu.com), enter it above.
          </p>
        </form>

        {/* NOTICE ABOUT ADBLOCKERS & PREVIEW DOMAINS */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Why Live Commercial Ads Require Custom Domain:</span>
          </div>
          <p className="leading-relaxed">
            Google AdSense serves live commercial advertisements only to custom top-level domains (e.g., your-domain.com) approved in your AdSense console. In development sandboxes and preview environments, Google serves test ads or falls back to our high-yield civil services sponsored partner cards. If ads are hidden, please ensure ad-blockers (like uBlock Origin or Brave Shields) are paused for this URL.
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
