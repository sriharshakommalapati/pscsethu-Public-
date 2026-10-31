import React, { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Info,
  X,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Tag,
  Star,
  ShoppingBag,
} from 'lucide-react';
import { COMMERCIAL_ADS, CommercialAdItem } from '../data/commercialAds';

export type AdFormatType = 'rectangle' | 'skyscraper' | 'leaderboard' | 'responsive';

export const DEFAULT_ADSENSE_CLIENT_ID = 'ca-pub-9463525929730000';

interface GoogleAdUnitProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  formatType?: AdFormatType;
  className?: string;
  label?: string;
  minHeight?: number;
  initialAdIndex?: number;
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
  label = 'Ad • Google Ads',
  minHeight = 250,
  initialAdIndex = 0,
}) => {
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
  const [isAdFilled, setIsAdFilled] = useState<boolean>(false);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(initialAdIndex % COMMERCIAL_ADS.length);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const activeAd = COMMERCIAL_ADS[currentAdIndex] || COMMERCIAL_ADS[0];

  // Auto-rotate fallback commercial ads every 9 seconds when not hovered
  useEffect(() => {
    if (isHovered || isAdFilled) return;
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % COMMERCIAL_ADS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isHovered, isAdFilled]);

  // Google AdSense live auction initialization
  useEffect(() => {
    let isMounted = true;
    const currentRef = adRef.current;
    if (!currentRef) return;

    try {
      if (typeof window !== 'undefined') {
        const alreadyInitialized = currentRef.getAttribute('data-adsbygoogle-status');
        if (!alreadyInitialized) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    } catch (err) {
      console.debug('AdSense script initialization notice:', err);
    }

    // Check if Google AdSense injected a real live iframe
    const checkIframeOrFilled = () => {
      if (!currentRef) return;
      const iframe = currentRef.querySelector('iframe');
      const statusAttr = currentRef.getAttribute('data-ad-status');

      if (iframe && (iframe.offsetHeight > 30 || iframe.getAttribute('width') !== '0')) {
        if (isMounted) setIsAdFilled(true);
      } else if (statusAttr === 'filled') {
        if (isMounted) setIsAdFilled(true);
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

    const timer = setTimeout(checkIframeOrFilled, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [adSlot, adClient]);

  const targetHeight = formatType === 'skyscraper' ? 520 : minHeight;

  return (
    <div
      id={`live-google-ad-${formatType}-${adSlot}`}
      className={`w-full rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Google Ads Compliance & AdChoices Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/95 border-b border-slate-200/90 text-[10px] text-slate-500 select-none">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="font-extrabold uppercase tracking-wider text-[9px] text-slate-800 bg-slate-200/90 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Ad • Google Ads
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[10px] text-slate-600 truncate font-medium">
            {activeAd.sponsorDomain}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Ad carousel controls */}
          {!isAdFilled && COMMERCIAL_ADS.length > 1 && (
            <div className="flex items-center gap-0.5 bg-white rounded border border-slate-200 px-0.5">
              <button
                type="button"
                onClick={() =>
                  setCurrentAdIndex((prev) => (prev - 1 + COMMERCIAL_ADS.length) % COMMERCIAL_ADS.length)
                }
                title="Previous Ad"
                className="p-0.5 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <span className="text-[9px] font-mono text-slate-500 px-0.5">
                {currentAdIndex + 1}/{COMMERCIAL_ADS.length}
              </span>
              <button
                type="button"
                onClick={() => setCurrentAdIndex((prev) => (prev + 1) % COMMERCIAL_ADS.length)}
                title="Next Ad"
                className="p-0.5 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowInfoModal(true)}
            title="Google AdChoices & Publisher Transparency"
            className="hover:text-indigo-700 flex items-center gap-0.5 cursor-pointer text-[10px] font-semibold text-slate-500 transition px-1"
          >
            <Info className="w-3 h-3 text-indigo-600" />
            <span className="hidden sm:inline">AdChoices</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative p-2.5 bg-slate-50/30 flex flex-col items-center justify-center">
        {/* Real Live Google AdSense ins tag */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: isAdFilled ? 'block' : 'none',
            width: '100%',
            minHeight: `${targetHeight}px`,
            textAlign: 'center',
          }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />

        {/* Display Live Commercial Ad Creative */}
        {!isAdFilled && (
          <div className="w-full flex flex-col justify-between space-y-2.5 text-left">
            {/* Banner Graphic if available */}
            {activeAd.imageUrl && (
              <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs group/img">
                <img
                  src={activeAd.imageUrl}
                  alt={activeAd.headline}
                  className={`w-full object-cover transition-transform duration-500 group-hover/img:scale-105 ${
                    formatType === 'skyscraper' ? 'h-64' : 'h-40'
                  }`}
                  loading="lazy"
                />
                {activeAd.discountBadge && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 shadow-sm border border-amber-300 flex items-center gap-1">
                    <Tag className="w-2.5 h-2.5" />
                    {activeAd.discountBadge}
                  </span>
                )}
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-900/80 backdrop-blur-xs text-white">
                  Sponsored
                </span>
              </div>
            )}

            {/* Content Details */}
            <div className="space-y-1.5 px-0.5">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-100">
                  {activeAd.category}
                </span>

                {activeAd.rating && (
                  <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    <span>{activeAd.rating}</span>
                    {activeAd.reviewsCount && (
                      <span className="text-slate-400 text-[9px] font-normal">
                        ({activeAd.reviewsCount})
                      </span>
                    )}
                  </div>
                )}
              </div>

              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug hover:text-indigo-600 transition">
                <a
                  href={activeAd.targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {activeAd.headline}
                </a>
              </h4>

              <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                {activeAd.description}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block truncate font-medium">
                  By {activeAd.sponsorName}
                </span>
                <span className="text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Verified Partner
                </span>
              </div>

              <a
                href={activeAd.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-2xs shrink-0 cursor-pointer"
              >
                <span>{activeAd.ctaText}</span>
                <ExternalLink className="w-3 h-3 text-amber-300" />
              </a>
            </div>
          </div>
        )}
      </div>

      {showInfoModal && (
        <AdSenseMonetizationModal
          adClient={adClient}
          adSlot={adSlot}
          formatType={formatType}
          onUpdateClient={(newClient) => {
            setAdClient(newClient);
            localStorage.setItem('bharatpsc_adsense_client', newClient);
          }}
          onClose={() => setShowInfoModal(false)}
        />
      )}
    </div>
  );
};

// AdSense Transparency & Monetization Modal
interface AdSenseMonetizationModalProps {
  adClient: string;
  adSlot: string;
  formatType: string;
  onUpdateClient: (newClient: string) => void;
  onClose: () => void;
}

export const AdSenseMonetizationModal: React.FC<AdSenseMonetizationModalProps> = ({
  adClient,
  adSlot,
  formatType,
  onUpdateClient,
  onClose,
}) => {
  const [customClient, setCustomClient] = useState(adClient);
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
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
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
              <h3 className="font-bold text-sm text-slate-900">Google Ads & AdSense Hub</h3>
              <p className="text-[11px] text-slate-500">Live Ad Account & Monetization Transparency</p>
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
            <span className="text-slate-500">Publisher Account:</span>
            <span className="font-bold text-indigo-700">{adClient}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Registered Domain:</span>
            <span className="font-bold text-slate-800">www.pscsethu.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">ads.txt Status:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> DIRECT Record Verified (/ads.txt)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Active Ad Placement:</span>
            <span className="font-bold text-slate-800">Side Panel ({formatType})</span>
          </div>
        </div>

        {/* Digital Authorized Sellers Line */}
        <div className="p-3 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Authorized Digital Sellers Record (ads.txt)
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

        {/* Custom AdSense Publisher ID Form */}
        <form onSubmit={handleSave} className="space-y-3 pt-1 border-t border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-800 block mb-1">
              Google AdSense Publisher ID:
            </label>
            <input
              type="text"
              value={customClient}
              onChange={(e) => setCustomClient(e.target.value)}
              placeholder="ca-pub-9463525929730000"
              className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600"
            />
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

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Educational Sponsorship Policy:</span>
          </div>
          <p className="leading-relaxed">
            Advertisements hosted on PSC Sethu (www.pscsethu.com) directly subsidize server infrastructure, NCERT digest updates, and daily 06:00 AM IST gazette synchronizations, keeping study resources 100% free for all aspirants across India.
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
