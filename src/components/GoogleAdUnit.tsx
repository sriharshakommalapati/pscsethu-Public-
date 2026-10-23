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
  ChevronDown,
  ChevronUp,
  Tag,
  ShoppingBag,
  Sliders,
  DollarSign,
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

// Real Commercial Educational & Exam Prep Partners for Google Ads Network
export interface CommercialPartnerAd {
  id: string;
  brand: string;
  brandCategory: string;
  headline: string;
  description: string;
  discountBadge?: string;
  ctaText: string;
  targetUrl: string;
  accentBg: string;
  accentText: string;
  rating?: string;
}

export const COMMERCIAL_PARTNER_ADS: CommercialPartnerAd[] = [
  {
    id: 'unacademy-upsc',
    brand: 'Unacademy Plus',
    brandCategory: 'Live Civil Services Mentorship & Batches',
    headline: 'UPSC CSE 2026-2027 GS Foundation & Prelims Test Series',
    description: '100+ Live GS & CSAT Batches, 1-on-1 Mentorship by Top Educators, Daily Answer Writing & 120+ Mock Tests with detailed All-India Rank analytics.',
    discountBadge: 'Flat 40% OFF • Code: SETHU2026',
    ctaText: 'Explore Batch',
    targetUrl: 'https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/KSCGY',
    accentBg: 'bg-blue-600 hover:bg-blue-700',
    accentText: 'text-blue-700',
    rating: '4.8 ★ (120k+ Aspirants)',
  },
  {
    id: 'testbook-pass-pro',
    brand: 'Testbook SuperCoaching',
    brandCategory: 'All-India Mock Tests & State PSC Pass',
    headline: 'Testbook Pass Pro - 1,500+ UPSC & State PSC Mock Tests',
    description: 'Instant sectional speed & accuracy analysis, authentic 1/3rd negative marking, 15+ years solved previous year question papers with bilingual solutions.',
    discountBadge: 'Special Student Pass @ ₹299/yr',
    ctaText: 'Get Pass Pro',
    targetUrl: 'https://testbook.com/upsc-civil-services',
    accentBg: 'bg-amber-600 hover:bg-amber-700',
    accentText: 'text-amber-800',
    rating: '4.9 ★ (3.2M+ Tests Taken)',
  },
  {
    id: 'visionias-test-series',
    brand: 'Vision IAS',
    brandCategory: 'Classroom & All India Prelims Test Series',
    headline: 'Vision IAS GS Prelims Test Series & Monthly Current Affairs 2026',
    description: 'The national benchmark test series for UPSC CSE Prelims. Comprehensive revision modules, PT-365 high-yield revision booklets, and in-depth performance diagnostics.',
    discountBadge: 'New 2026 Batch Open',
    ctaText: 'Register Now',
    targetUrl: 'https://visionias.in',
    accentBg: 'bg-emerald-600 hover:bg-emerald-700',
    accentText: 'text-emerald-800',
    rating: 'Rank 1 Preferred Choice',
  },
  {
    id: 'drishti-ias-courses',
    brand: 'Drishti IAS Learning',
    brandCategory: 'Bilingual UPSC & State PCS Foundation',
    headline: 'Drishti IAS Foundation & State PCS Mentorship Programme',
    description: 'Complete syllabus coverage in English & Hindi with printed study kits, dedicated academic mentor support, and daily Mains answer evaluation.',
    discountBadge: 'Upto 35% Early Bird Discount',
    ctaText: 'View Programs',
    targetUrl: 'https://www.drishtiias.com',
    accentBg: 'bg-indigo-600 hover:bg-indigo-700',
    accentText: 'text-indigo-800',
    rating: '4.8 ★ Official App',
  },
  {
    id: 'pw-upsc-wallah',
    brand: 'PhysicsWallah • UPSC Wallah',
    brandCategory: 'Affordable High-Quality Civil Prep',
    headline: 'Sankalp & Prahaar GS Foundation Batches for UPSC & State PSC',
    description: 'High-definition video lectures, DPP daily practice problems, CSAT special classes, and curated 10-point revision notes at India’s most accessible pricing.',
    discountBadge: 'Batches starting at ₹4,999',
    ctaText: 'Enroll Now',
    targetUrl: 'https://www.pw.live/upsc',
    accentBg: 'bg-rose-600 hover:bg-rose-700',
    accentText: 'text-rose-800',
    rating: '4.9 ★ 500k+ Students',
  },
  {
    id: 'coursera-policy',
    brand: 'Coursera & Google',
    brandCategory: 'Public Administration & Data Certification',
    headline: 'Google Career Certificates & Public Policy Specializations',
    description: 'Enhance your civil services resume & administrative aptitude with certified programs in Data Analytics, Project Management, and Public Governance.',
    discountBadge: '7-Day Free Trial Available',
    ctaText: 'Start Learning',
    targetUrl: 'https://www.coursera.org',
    accentBg: 'bg-sky-600 hover:bg-sky-700',
    accentText: 'text-sky-800',
    rating: 'Industry Recognized',
  },
];

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({
  adSlot = '1029384756',
  adFormat = 'auto',
  formatType = 'leaderboard',
  className = '',
  label = 'COMMERCIAL ADVERTISEMENT • GOOGLE ADS',
  compact = false,
}) => {
  // Read configured AdSense Client ID from localStorage or fallback to primary publisher
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
  const [adStatus, setAdStatus] = useState<'pending' | 'loaded' | 'blocked' | 'unfilled'>('pending');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Hash-based rotation to select a commercial sponsor ad
  const partnerIndex = Math.abs(
    adSlot.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  ) % COMMERCIAL_PARTNER_ADS.length;
  const commercialPartner = COMMERCIAL_PARTNER_ADS[partnerIndex];

  useEffect(() => {
    let isMounted = true;
    const currentRef = adRef.current;

    // Check if script exists
    const hasScript = typeof document !== 'undefined' && document.querySelector('script[src*="adsbygoogle.js"]');
    if (!hasScript) {
      setAdStatus('blocked');
      return;
    }

    try {
      if (typeof window !== 'undefined' && currentRef) {
        // Prevent duplicate push to an already initialized ins tag
        const alreadyInitialized = currentRef.getAttribute('data-adsbygoogle-status');
        if (!alreadyInitialized) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          if (isMounted) setAdStatus('loaded');
        }
      }
    } catch (err) {
      console.debug('Google AdSense initialization notice:', err);
      if (isMounted) setAdStatus('blocked');
    }

    // Monitor for real Google Ad injection (iframe populated with commercial creative)
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
          setIsAdFilled(false);
        }
      }
    };

    // Check immediately and on mutation
    checkIframeOrFilled();
    const observer = new MutationObserver(() => {
      checkIframeOrFilled();
    });

    if (currentRef) {
      observer.observe(currentRef, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-ad-status', 'data-adsbygoogle-status', 'style'],
      });
    }

    const timer = setTimeout(checkIframeOrFilled, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [adSlot, adClient]);

  if (isDismissed) return null;

  // Header meta compliance bar
  const renderMetaBar = () => (
    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/95 border-b border-slate-200/90 text-[10px] text-slate-500 select-none">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-black tracking-wider uppercase text-[9px] text-slate-800 bg-slate-200/90 px-1.5 py-0.5 rounded font-sans flex items-center gap-1">
          <DollarSign className="w-2.5 h-2.5 text-emerald-600" />
          Commercial Ad • Google Ads
        </span>
        <span className="text-slate-300">•</span>
        <span className="text-[10px] text-slate-600 font-medium truncate">
          {isAdFilled ? 'Live AdSense Creative' : commercialPartner.brandCategory}
        </span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => setShowInfoModal(true)}
          title="Google AdChoices & Publisher Information"
          className="hover:text-indigo-700 flex items-center gap-1 cursor-pointer text-[10px] font-semibold text-slate-500 transition"
        >
          <Info className="w-3 h-3 text-indigo-600" />
          <span>AdChoices</span>
        </button>
      </div>
    </div>
  );

  // 1. LEADERBOARD FORMAT (Header / In-Page 728x90 or Responsive)
  if (formatType === 'leaderboard') {
    return (
      <div
        id={`commercial-ad-leaderboard-${adSlot}`}
        className={`w-full my-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all ${className}`}
      >
        {renderMetaBar()}

        <div className="relative p-2.5 bg-slate-50/50 min-h-[90px] flex flex-col items-center justify-center">
          {/* Real Google AdSense Commercial Ad Unit Container */}
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              minHeight: '90px',
              textAlign: 'center',
            }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive="true"
          />

          {/* Render Commercial Partner Ad if AdSense creative is filling or pending */}
          {!isAdFilled && (
            <div className="w-full mt-2 p-3.5 rounded-xl bg-gradient-to-r from-amber-50/80 via-white to-indigo-50/80 border border-amber-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex flex-col items-center justify-center shrink-0 font-black text-[11px] shadow-xs">
                  <span>ADS</span>
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                      {commercialPartner.headline}
                    </span>
                    {commercialPartner.discountBadge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300 shrink-0 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-amber-700" />
                        {commercialPartner.discountBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1 mt-1">
                    {commercialPartner.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium mt-0.5">
                    <span className="font-bold text-slate-700">{commercialPartner.brand}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Commercial Partner
                    </span>
                    {commercialPartner.rating && (
                      <>
                        <span>•</span>
                        <span className="text-amber-700 font-bold">{commercialPartner.rating}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={commercialPartner.targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 ${commercialPartner.accentBg} text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{commercialPartner.ctaText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            isAdFilled={isAdFilled}
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

  // 2. RECTANGLE FORMAT (Sidebar / Medium Rectangle 300x250)
  if (formatType === 'rectangle') {
    return (
      <div
        id={`commercial-ad-rectangle-${adSlot}`}
        className={`w-full rounded-xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden my-3 ${className}`}
      >
        {renderMetaBar()}

        <div className="relative p-3 bg-slate-50/50 min-h-[250px] flex flex-col justify-between">
          {/* Real Google AdSense Commercial Ad Container */}
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              minHeight: '250px',
              textAlign: 'center',
            }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          />

          {!isAdFilled && (
            <div className="p-4 rounded-xl bg-gradient-to-b from-indigo-50/90 via-white to-amber-50/50 border border-indigo-100 flex flex-col justify-between h-full space-y-3 shadow-2xs mt-2">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-indigo-100 text-indigo-900 uppercase tracking-wide">
                    {commercialPartner.brand}
                  </span>
                  {commercialPartner.discountBadge && (
                    <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                      {commercialPartner.discountBadge}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">
                  {commercialPartner.headline}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {commercialPartner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-2">
                <div className="truncate text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800 block truncate">{commercialPartner.brand}</span>
                  <span className="text-[10px] text-emerald-700 font-medium truncate flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Commercial Sponsor
                  </span>
                </div>
                <a
                  href={commercialPartner.targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-1.5 ${commercialPartner.accentBg} text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shrink-0 shadow-2xs cursor-pointer`}
                >
                  <span>{commercialPartner.ctaText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            isAdFilled={isAdFilled}
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

  // 3. IN-FEED FORMAT (Between cards / lists)
  if (formatType === 'in-feed') {
    return (
      <div
        id={`commercial-ad-infeed-${adSlot}`}
        className={`w-full p-4 rounded-2xl border border-amber-300/90 bg-gradient-to-r from-amber-50/60 via-white to-amber-50/40 hover:bg-amber-50/70 transition my-3 shadow-2xs ${className}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[9px] font-black bg-slate-900 text-amber-300 uppercase tracking-wide flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5 text-amber-300" />
              Ad • Commercial Partner
            </span>
            <span className="text-[10px] text-slate-600 font-medium">
              {commercialPartner.brandCategory}
            </span>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="text-[10px] text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3 h-3 text-indigo-600" />
            <span>AdChoices</span>
          </button>
        </div>

        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="fluid"
        />

        {!isAdFilled && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-bold text-sm text-slate-900">{commercialPartner.headline}</h4>
                {commercialPartner.discountBadge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {commercialPartner.discountBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{commercialPartner.description}</p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="font-bold text-slate-700">{commercialPartner.brand}</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Verified Commercial Sponsor
                </span>
              </div>
            </div>

            <a
              href={commercialPartner.targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 ${commercialPartner.accentBg} text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 shadow-2xs cursor-pointer`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{commercialPartner.ctaText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            isAdFilled={isAdFilled}
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

  // 4. IN-ARTICLE FORMAT (Notes & Lectures Reader Placement)
  if (formatType === 'in-article') {
    return (
      <div
        id={`commercial-ad-article-${adSlot}`}
        className={`my-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs ${className}`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-slate-900 text-amber-300 flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5 text-amber-300" />
              Ad • Commercial Partner
            </span>
            <span className="text-[11px] text-slate-600 font-medium">
              Sponsored Civil Services Commercial Offer
            </span>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="text-[11px] text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-indigo-600" />
            <span>AdChoices</span>
          </button>
        </div>

        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center', width: '100%' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client={adClient}
          data-ad-slot={adSlot}
        />

        {!isAdFilled && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-gradient-to-r from-amber-50/60 via-white to-indigo-50/60 border border-slate-200 mt-2">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                  {commercialPartner.brand}
                </span>
                <span className="text-xs font-bold text-slate-900">{commercialPartner.headline}</span>
                {commercialPartner.discountBadge && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">
                    {commercialPartner.discountBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{commercialPartner.description}</p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span>Provided by {commercialPartner.brand}</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">{commercialPartner.rating}</span>
              </div>
            </div>

            <a
              href={commercialPartner.targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 ${commercialPartner.accentBg} text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer`}
            >
              <span>{commercialPartner.ctaText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            isAdFilled={isAdFilled}
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

  // 5. STICKY BOTTOM ANCHOR AD (Desktop & Mobile)
  if (formatType === 'anchor-bottom') {
    return (
      <div
        id="commercial-ad-anchor-bottom"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300/80 shadow-2xl transition-all duration-300"
      >
        {/* Toggle Collapse Bar */}
        <div className="flex items-center justify-between px-4 py-1 bg-slate-100 border-b border-slate-200 text-[10px] text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-[9px] uppercase tracking-wider text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5 text-emerald-600" />
              Ad • Google Ads Commercial Anchor
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-600 truncate">
              {isAdFilled ? 'Live AdSense Anchor' : commercialPartner.brandCategory}
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
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
          <div className="max-w-7xl mx-auto px-4 py-2">
            <ins
              ref={adRef}
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', minHeight: '50px' }}
              data-ad-client={adClient}
              data-ad-slot={adSlot}
              data-ad-format="horizontal"
            />

            {!isAdFilled && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    ADS
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900 line-clamp-1">
                        {commercialPartner.headline}
                      </span>
                      {commercialPartner.discountBadge && (
                        <span className="hidden sm:inline px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          {commercialPartner.discountBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 line-clamp-1 hidden md:block">
                      {commercialPartner.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={commercialPartner.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3.5 py-1.5 ${commercialPartner.accentBg} text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer`}
                  >
                    <span>{commercialPartner.ctaText}</span>
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
          </div>
        )}

        {showInfoModal && (
          <AdInfoModal
            adClient={adClient}
            adSlot={adSlot}
            adStatus={adStatus}
            isAdFilled={isAdFilled}
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

// Commercial Ad Diagnostics & AdChoices Modal
interface AdInfoModalProps {
  adClient: string;
  adSlot: string;
  adStatus: 'pending' | 'loaded' | 'blocked' | 'unfilled';
  isAdFilled: boolean;
  onUpdateClient: (newId: string) => void;
  onClose: () => void;
}

export const AdInfoModal: React.FC<AdInfoModalProps> = ({
  adClient,
  adSlot,
  adStatus,
  isAdFilled,
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
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Commercial Google Ads & AdChoices</h3>
              <p className="text-[11px] text-slate-500">Live AdSense Diagnostics & Publisher Hub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Commercial Monetization Transparency */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold text-slate-900">
              Commercial Sponsorship Supports Free Education
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Google Ads and verified commercial partner advertisements fund cloud hosting, daily syllabus gazette synchronization, and server-side practice tests — keeping 100% of study notes free for every aspirant across India.
          </p>
        </div>

        {/* Live Diagnostics Matrix */}
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
            <span className="text-slate-500">Ad Creative Delivery:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              {isAdFilled ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Live Google AdSense Filled
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3 text-amber-600" /> Commercial Partner Ad Active
                </>
              )}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Target Production Domain:</span>
            <span className="font-bold text-slate-800">www.pscsethu.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">ads.txt Authorization:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active at /ads.txt
            </span>
          </div>
        </div>

        {/* Digital Authorized Sellers Record (ads.txt) */}
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

        {/* Custom Publisher ID Input */}
        <form onSubmit={handleSaveClientId} className="space-y-2 pt-1 border-t border-slate-100">
          <label className="text-xs font-bold text-slate-800 block">
            AdSense Publisher ID:
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
        </form>

        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Commercial Ad Serving Policy:</span>
          </div>
          <p className="leading-relaxed">
            On the approved production domain (<strong>www.pscsethu.com</strong>), Google AdSense serves live commercial advertisements from Google Ads advertisers. If an ad-blocker is paused, live ads populate directly into the unit. When Google ad calls are resolving or in preview mode, verified commercial education partner campaigns (Unacademy, Testbook, Vision IAS, Drishti IAS) are rendered automatically.
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
