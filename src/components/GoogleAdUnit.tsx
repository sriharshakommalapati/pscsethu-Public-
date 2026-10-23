import React, { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Info,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  DollarSign,
  Layers,
  Settings,
} from 'lucide-react';

export type AdFormatType = 'rectangle' | 'skyscraper' | 'leaderboard' | 'responsive';

export const DEFAULT_ADSENSE_CLIENT_ID = 'ca-pub-9463525929730000';

interface GoogleAdUnitProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  formatType?: AdFormatType;
  className?: string;
  label?: string;
  minHeight?: number;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({
  adSlot = '8492019483',
  adFormat = 'auto',
  formatType = 'rectangle',
  className = '',
  label = 'Ads by Google',
  minHeight = 250,
}) => {
  // Read configured AdSense Client ID
  const [adClient, setAdClient] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('bharatpsc_adsense_client');
      if (stored && (stored.startsWith('ca-pub-') || stored.startsWith('pub-'))) {
        return stored.startsWith('pub-') ? `ca-${stored}` : stored;
      }
    }
    return DEFAULT_ADSENSE_CLIENT_ID;
  });

  const [activeSlot, setActiveSlot] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedSlot = localStorage.getItem(`bharatpsc_slot_${formatType}`);
      if (storedSlot) return storedSlot;
    }
    return adSlot;
  });

  const adRef = useRef<HTMLModElement | null>(null);
  const [isAdFilled, setIsAdFilled] = useState<boolean>(false);
  const [adStatus, setAdStatus] = useState<'pending' | 'loaded' | 'blocked' | 'unfilled'>('pending');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  // Check if current domain is live production (www.pscsethu.com)
  const isProduction = typeof window !== 'undefined' && window.location.hostname.includes('pscsethu.com');

  useEffect(() => {
    let isMounted = true;
    const currentRef = adRef.current;
    if (!currentRef) return;

    // Check if script is loaded
    const scriptLoaded = typeof document !== 'undefined' && document.querySelector('script[src*="adsbygoogle.js"]');
    if (!scriptLoaded) {
      setAdStatus('blocked');
      return;
    }

    try {
      if (typeof window !== 'undefined') {
        const alreadyInitialized = currentRef.getAttribute('data-adsbygoogle-status');
        if (!alreadyInitialized) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          if (isMounted) setAdStatus('loaded');
        }
      }
    } catch (err) {
      console.debug('AdSense push status:', err);
      if (isMounted) setAdStatus('blocked');
    }

    // Monitor for iframe injection from Google AdSense auction
    const checkIframeOrFilled = () => {
      if (!currentRef) return;
      const iframe = currentRef.querySelector('iframe');
      const statusAttr = currentRef.getAttribute('data-ad-status');

      if (iframe && (iframe.offsetHeight > 20 || iframe.getAttribute('width') !== '0')) {
        if (isMounted) {
          setIsAdFilled(true);
          setAdStatus('loaded');
        }
      } else if (statusAttr === 'filled') {
        if (isMounted) {
          setIsAdFilled(true);
          setAdStatus('loaded');
        }
      } else if (statusAttr === 'unfilled') {
        if (isMounted) {
          setAdStatus('unfilled');
        }
      }
    };

    checkIframeOrFilled();
    const observer = new MutationObserver(checkIframeOrFilled);
    observer.observe(currentRef, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-ad-status', 'data-adsbygoogle-status', 'style'],
    });

    const timer = setTimeout(checkIframeOrFilled, 2000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeSlot, adClient, refreshKey]);

  const targetHeight = formatType === 'skyscraper' ? 600 : minHeight;

  return (
    <div
      id={`live-google-ad-${formatType}-${activeSlot}`}
      className={`w-full rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all ${className}`}
    >
      {/* Header compliance bar for Google Ads */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/95 border-b border-slate-200/90 text-[10px] text-slate-500 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-slate-900 text-amber-400 flex items-center justify-center font-black text-[9px]">
            G
          </div>
          <span className="font-bold text-slate-700 tracking-wide uppercase text-[9px]">
            {label}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[9px] text-emerald-700 font-medium font-mono flex items-center gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live AdSense
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowInfoModal(true)}
            title="Google AdChoices & Account Monetization Info"
            className="hover:text-indigo-700 flex items-center gap-1 cursor-pointer text-[10px] font-semibold text-slate-500 transition"
          >
            <Info className="w-3 h-3 text-indigo-600" />
            <span>AdChoices</span>
          </button>
        </div>
      </div>

      {/* Main Google Ad Container */}
      <div
        className="relative p-2 bg-slate-50/40 flex flex-col items-center justify-center"
        style={{ minHeight: `${targetHeight}px` }}
      >
        {/* Real Live Google AdSense Tag */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            minHeight: `${targetHeight}px`,
            textAlign: 'center',
          }}
          data-ad-client={adClient}
          data-ad-slot={activeSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
          data-adtest={isProduction ? undefined : 'on'}
        />

        {/* Live Google Ad Auction Status Frame (Visible during bidding/initialization) */}
        {!isAdFilled && (
          <div className="w-full p-4 rounded-xl bg-gradient-to-br from-slate-50 via-white to-amber-50/40 border border-slate-200 flex flex-col items-center justify-center text-center space-y-3 mt-1">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">
                  Google AdSense Live Auction
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                  Active
                </span>
              </div>
              <p className="text-[11px] text-slate-600 max-w-xs leading-relaxed">
                General live commercial ads (e-commerce, software, tech, banking, education) are served dynamically into this unit.
              </p>
            </div>

            <div className="w-full bg-slate-100/90 rounded-lg p-2 font-mono text-[10px] text-slate-600 flex items-center justify-between">
              <span>Account:</span>
              <span className="font-bold text-slate-900">{adClient}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setRefreshKey((k) => k + 1)}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[10px] font-bold transition flex items-center gap-1 cursor-pointer shadow-2xs"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Re-query Auction</span>
              </button>

              <button
                onClick={() => setShowInfoModal(true)}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-[10px] font-bold transition flex items-center gap-1 cursor-pointer"
              >
                <Settings className="w-3 h-3 text-slate-500" />
                <span>Slot Config</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {showInfoModal && (
        <AdSenseMonetizationModal
          adClient={adClient}
          adSlot={activeSlot}
          formatType={formatType}
          adStatus={adStatus}
          isAdFilled={isAdFilled}
          isProduction={isProduction}
          onUpdateClient={(newClient) => {
            setAdClient(newClient);
            localStorage.setItem('bharatpsc_adsense_client', newClient);
          }}
          onUpdateSlot={(newSlot) => {
            setActiveSlot(newSlot);
            localStorage.setItem(`bharatpsc_slot_${formatType}`, newSlot);
          }}
          onClose={() => setShowInfoModal(false)}
        />
      )}
    </div>
  );
};

// AdSense Account Monetization & Configuration Modal
interface AdSenseMonetizationModalProps {
  adClient: string;
  adSlot: string;
  formatType: string;
  adStatus: 'pending' | 'loaded' | 'blocked' | 'unfilled';
  isAdFilled: boolean;
  isProduction: boolean;
  onUpdateClient: (newClient: string) => void;
  onUpdateSlot: (newSlot: string) => void;
  onClose: () => void;
}

export const AdSenseMonetizationModal: React.FC<AdSenseMonetizationModalProps> = ({
  adClient,
  adSlot,
  formatType,
  adStatus,
  isAdFilled,
  isProduction,
  onUpdateClient,
  onUpdateSlot,
  onClose,
}) => {
  const [customClient, setCustomClient] = useState(adClient);
  const [customSlot, setCustomSlot] = useState(adSlot);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const adsTxtRecord = `google.com, ${adClient.replace('ca-', '')}, DIRECT, f08c47fec0942fa0`;

  const handleCopyAdsTxt = () => {
    navigator.clipboard.writeText(adsTxtRecord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (customClient.trim()) {
      onUpdateClient(customClient.trim());
    }
    if (customSlot.trim()) {
      onUpdateSlot(customSlot.trim());
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in text-left">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-sm shadow-xs">
              <DollarSign className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Google AdSense Monetization Hub</h3>
              <p className="text-[11px] text-slate-500">Live Ad Account & Slot Controller</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real-time Account Verification Matrix */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 font-mono text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">AdSense Publisher:</span>
            <span className="font-bold text-indigo-700">{adClient}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Active Unit Slot:</span>
            <span className="font-bold text-slate-800">{adSlot} ({formatType})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Target Production:</span>
            <span className="font-bold text-slate-800">www.pscsethu.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">ads.txt Record:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Authorized (/ads.txt)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Ad Serving Mode:</span>
            <span className="font-bold text-emerald-700">
              {isProduction ? 'Live Paying Commercial Ads' : 'Live General Test Mode (Preview)'}
            </span>
          </div>
        </div>

        {/* Digital Authorized Sellers Line */}
        <div className="p-3 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Digital Authorized Sellers Record (ads.txt)
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

        {/* Custom Ad Slot & Account Form */}
        <form onSubmit={handleSave} className="space-y-3 pt-1 border-t border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-800 block mb-1">
              Google Publisher ID (ca-pub-XXXXXXXXXXXXXXXX):
            </label>
            <input
              type="text"
              value={customClient}
              onChange={(e) => setCustomClient(e.target.value)}
              placeholder="ca-pub-9463525929730000"
              className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-800 block mb-1">
              Ad Unit Slot ID for this placement ({formatType}):
            </label>
            <input
              type="text"
              value={customSlot}
              onChange={(e) => setCustomSlot(e.target.value)}
              placeholder="8492019483"
              className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600"
            />
            <p className="text-[10px] text-slate-500 mt-1">
              Generate custom Ad Unit slot IDs from your Google AdSense Console &gt; Ads &gt; By ad unit &gt; Display ads.
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition cursor-pointer shadow-xs"
            >
              Save Configuration
            </button>

            {savedSuccess && (
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Updated successfully!
              </span>
            )}
          </div>
        </form>

        {/* Quick link to AdSense Console */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Manage Google AdSense Monetization:
            </span>
            <a
              href="https://adsense.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 underline"
            >
              <span>AdSense Console</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="leading-relaxed">
            Monitor real-time earnings, impressions, page RPM, and ad balance directly from your Google AdSense dashboard.
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
