// Commercial Google Ads Data & Partner Network
import upscPrepBanner from '../assets/images/ad_upsc_prep_banner_1793454657663.jpg';
import techCertBanner from '../assets/images/ad_tech_certificate_banner_1793454672004.jpg';
import booksBanner from '../assets/images/ad_books_publication_banner_1793454685298.jpg';

export interface CommercialAdItem {
  id: string;
  sponsorName: string;
  sponsorDomain: string;
  badge: string;
  headline: string;
  tagline: string;
  description: string;
  imageUrl?: string;
  ctaText: string;
  targetUrl: string;
  discountBadge?: string;
  rating?: string;
  reviewsCount?: string;
  category: string;
  themeColor: string;
}

export const COMMERCIAL_ADS: CommercialAdItem[] = [
  {
    id: 'ad-upsc-foundation-2026',
    sponsorName: 'Civil Services Excellence Academy',
    sponsorDomain: 'iacademyexcellence.com',
    badge: 'Ad • Google Ads',
    headline: 'UPSC GS Foundation & Prelims Test Series 2026',
    tagline: '5-Star Rated by All-India Civil Services Aspirants',
    description: '200+ full-length & sectional mock tests, 1/3rd negative marking analytics, NCERT foundational video capsules, and daily 06:00 AM current affairs dossiers.',
    imageUrl: upscPrepBanner,
    ctaText: 'Join Batch Now',
    targetUrl: 'https://upsc.gov.in',
    discountBadge: 'Flat 45% Early Bird • Code: SETHU45',
    rating: '4.9 ★',
    reviewsCount: '84,200+ Aspirants',
    category: 'Prelims + Mains Mentorship',
    themeColor: 'from-amber-500 to-amber-600',
  },
  {
    id: 'ad-google-cloud-career',
    sponsorName: 'Google Cloud & Career Certificates',
    sponsorDomain: 'cloud.google.com/certifications',
    badge: 'Ad • Google Ads',
    headline: 'Advance Your Career with Google Professional Certifications',
    tagline: 'Industry-Demanded Skills in Cloud, Data & Public Administration',
    description: 'Accelerate your administrative, analytics & IT acumen with officially accredited Google certifications. 100% online, flexible schedule, hands-on labs.',
    imageUrl: techCertBanner,
    ctaText: 'Earn Your Certificate',
    targetUrl: 'https://cloud.google.com/learn/certification',
    discountBadge: 'Free Pro Learning Trial',
    rating: '4.8 ★',
    reviewsCount: '2.4M+ Professionals',
    category: 'Professional IT & Governance',
    themeColor: 'from-sky-500 to-indigo-600',
  },
  {
    id: 'ad-civil-services-books',
    sponsorName: 'National Civil Services Book Hub',
    sponsorDomain: 'civilprepbooks.in',
    badge: 'Ad • Google Ads',
    headline: 'Best-Seller 30-Year PYQ Solved Papers & Question Bank',
    tagline: 'All India Civil Services & State PSC 1994–2025 Edition',
    description: 'Comprehensive topic-wise analysis, authentic verified solutions, 10-line rapid revision digests, and latest syllabus-aligned subject guides in English & Regional languages.',
    imageUrl: booksBanner,
    ctaText: 'Order Online (50% Off)',
    targetUrl: 'https://ncert.nic.in',
    discountBadge: 'Limited Period: UP TO 50% OFF',
    rating: '4.9 ★',
    reviewsCount: '150k+ Copies Sold',
    category: 'Essential Preparation Books',
    themeColor: 'from-rose-500 to-amber-600',
  },
  {
    id: 'ad-testbook-pass-pro',
    sponsorName: 'Testbook SuperCoaching',
    sponsorDomain: 'testbook.com',
    badge: 'Ad • Google Ads',
    headline: 'Testbook Pass Pro - 1,500+ UPSC & State PSC Mock Tests',
    tagline: 'All India Live Rank, Real-Time Percentile & Sectional Diagnostics',
    description: 'Practice simulated exam hall environments with authentic countdown timers, negative marking calculators, and bilingual step-by-step solutions.',
    ctaText: 'Unlock Pass @ ₹299/yr',
    targetUrl: 'https://testbook.com',
    discountBadge: 'Student Pass @ ₹299/yr',
    rating: '4.9 ★',
    reviewsCount: '3.5M+ Tests Completed',
    category: 'Live Mock Test Series',
    themeColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'ad-unacademy-ias',
    sponsorName: 'Unacademy Plus UPSC',
    sponsorDomain: 'unacademy.com/goal/upsc-civil-services',
    badge: 'Ad • Google Ads',
    headline: 'UPSC CSE 2026 GS Foundation & CSAT Live Masterclasses',
    tagline: '1-on-1 Mentorship by Top Educators & Daily Mains Answer Evaluation',
    description: 'Daily answer-writing checks, personalized study roadmaps, and full syllabus coverage for General Studies Papers I, II, III, and IV.',
    ctaText: 'Explore Courses',
    targetUrl: 'https://unacademy.com',
    discountBadge: 'Code: PSCSETHU for 40% OFF',
    rating: '4.8 ★',
    reviewsCount: '120k+ Aspirants',
    category: 'Live Classes & Mentorship',
    themeColor: 'from-blue-600 to-indigo-700',
  },
];
