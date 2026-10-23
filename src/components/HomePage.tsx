import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Building2,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Clock,
  ArrowRight,
  Compass,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { COMMISSIONS, COMMISSION_ZONES } from '../data/commissions';
import { Commission } from '../types';
import { EXAM_DATES } from '../data/examDates';
import { GoogleAdUnit } from './GoogleAdUnit';

interface HomePageProps {
  onSelectCommission: (commissionId: string) => void;
  onNavigateToDates: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToNotes: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCommission,
  onNavigateToDates,
  onNavigateToDashboard,
  onNavigateToNotes,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  // Filter commissions
  const filteredCommissions = useMemo(() => {
    return COMMISSIONS.filter((comm) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        comm.name.toLowerCase().includes(query) ||
        comm.code.toLowerCase().includes(query) ||
        comm.state.toLowerCase().includes(query) ||
        comm.headquarters.toLowerCase().includes(query);

      const matchesZone = selectedZone === 'All' || comm.zone === selectedZone;

      return matchesSearch && matchesZone;
    });
  }, [searchQuery, selectedZone]);

  // Featured flagship commissions: UPSC, APPSC, TGSPC
  const featuredCommissions = COMMISSIONS.filter((c) =>
    ['upsc', 'appsc', 'tgspc'].includes(c.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Billboard / Leaderboard Google Ad */}
      <GoogleAdUnit
        formatType="leaderboard"
        adSlot="2948102948"
        label="SPONSORED CIVIL SERVICES PREPARATION & ALL-INDIA MOCK TESTS • GOOGLE ADS"
      />

      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-slate-800 text-white shadow-2xl p-6 sm:p-10 lg:p-12">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>National Public Service Commission Knowledge Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-serif leading-tight">
            All States & UPSC Civil Services Study Repository
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            One single unified platform connecting all 28+ State Public Service Commissions across India.
            Access comprehensive syllabus breakdowns, previous year papers, simulated mock tests, and curated textbook study notes with <strong>10-point high-yield rapid revision digests</strong>.
          </p>

          {/* Search & Quick Filter Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state (e.g. Andhra Pradesh, Telangana, Uttar Pradesh) or PSC code..."
                className="w-full pl-11 pr-4 py-3.5 text-xs sm:text-sm rounded-2xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
              />
            </div>

            <button
              onClick={onNavigateToDates}
              className="px-5 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20 cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Exam Dates & Deadlines</span>
            </button>
          </div>

          {/* Quick Jump Pills for Key Commissions */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Quick Access:</span>
            {['upsc', 'appsc', 'tgspc', 'uppsc', 'bpsc', 'mpsc', 'tnpsc', 'kpsc'].map((id) => {
              const comm = COMMISSIONS.find((c) => c.id === id);
              if (!comm) return null;
              return (
                <button
                  key={id}
                  onClick={() => onSelectCommission(id)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-amber-400/50 transition cursor-pointer font-mono font-bold"
                >
                  {comm.code}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Google AdSense Leaderboard Placement 1 */}
      <GoogleAdUnit
        formatType="leaderboard"
        adSlot="2938475610"
        label="SPONSORED CIVIL SERVICES PREPARATION • GOOGLE ADS"
      />

      {/* THREE PROMINENT FLAGSHIP COMMISSIONS: UPSC, APPSC, TGSPC */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
              Flagship Public Service Commissions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Primary portals for UPSC Civil Services, APPSC Group-1/2, and TGSPC Group-1/2/3 examinations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCommissions.map((comm) => (
            <div
              key={comm.id}
              className="bg-white rounded-2xl border-2 border-slate-200/90 hover:border-indigo-500 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black text-white font-mono shadow-xs ${comm.badgeColor}`}>
                    {comm.code}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {comm.state}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition leading-snug">
                  {comm.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {comm.summary}
                </p>

                {/* Flagship Exams */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {comm.flagshipExams.slice(0, 3).map((exam, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-semibold bg-indigo-50 text-indigo-800 rounded-md"
                    >
                      {exam}
                    </span>
                  ))}
                </div>

                {/* Latest 6 AM IST update */}
                {comm.upcomingNotice && (
                  <div className="mt-3.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 font-medium line-clamp-2">
                    <span className="font-bold text-amber-950">6:00 AM Update: </span>
                    {comm.upcomingNotice}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">HQ: {comm.headquarters}</span>
                <button
                  onClick={() => onSelectCommission(comm.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 group-hover:bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>Open Landing Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ALL STATES PUBLIC SERVICE COMMISSIONS DIRECTORY */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-600" />
              <span>All India State Public Service Commissions ({filteredCommissions.length})</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Browse syllabus, previous year question papers, high-yield study notes, and tests for all states in India.
            </p>
          </div>

          {/* Zone Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">Zone:</span>
            {['All', ...COMMISSION_ZONES].map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-indigo-600 text-white font-bold shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Native In-Feed Sponsored Placement */}
        <GoogleAdUnit
          formatType="in-feed"
          adSlot="3847561920"
          label="SPONSORED STATE PSC COACHING & TEST SERIES"
        />

        {/* Commission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCommissions.map((comm) => (
            <div
              key={comm.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-md transition-all p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-xs font-bold text-white font-mono ${comm.badgeColor}`}>
                      {comm.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {comm.state}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {comm.zone} Zone
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-700 transition leading-snug">
                  {comm.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                  {comm.summary}
                </p>

                {/* Flagship exams list */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {comm.flagshipExams.slice(0, 3).map((exam, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-700 rounded"
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href={comm.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1"
                  title="Official portal"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  onClick={() => onSelectCommission(comm.id)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                >
                  <span>Explore Landing Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK HIGHLIGHT BENTO: EXAM DATES & PROFESSOR NOTES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        {/* Deadlines Box */}
        <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/50 p-6 rounded-2xl border border-amber-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-base text-amber-950 font-serif">
                  Upcoming Exam Deadlines & Countdowns
                </h3>
              </div>
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-amber-200 text-amber-900">
                Live Days Remaining
              </span>
            </div>
            <p className="text-xs text-amber-800/80 mb-4">
              Real-time countdown for application forms and prelims exam dates across UPSC and all state commissions.
            </p>

            <div className="space-y-2.5">
              {EXAM_DATES.slice(0, 3).map((exam) => (
                <div
                  key={exam.id}
                  className="p-3 bg-white rounded-xl border border-amber-200/60 shadow-2xs flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {exam.commissionCode}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-1">{exam.examName}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-rose-700 block">
                      Deadline: {exam.applicationDeadline}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {exam.vacancies} Vacancies
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onNavigateToDates}
            className="mt-5 w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>View All States Exam Dates & Countdowns</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Academic Notes Box */}
        <div className="bg-gradient-to-br from-indigo-50/70 to-blue-50/50 p-6 rounded-2xl border border-indigo-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-700" />
                <h3 className="font-bold text-base text-indigo-950 font-serif">
                  Academic Notes by Professors & Toppers
                </h3>
              </div>
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-indigo-200 text-indigo-900">
                Open Contribution
              </span>
            </div>
            <p className="text-xs text-indigo-800/80 mb-4">
              Access high-yield conceptual summaries and contribute your own important notes for state PSC and UPSC preparation.
            </p>

            <div className="p-4 bg-white rounded-xl border border-indigo-200/60 shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                  Faculty Verified
                </span>
                <span className="text-xs font-bold text-slate-800">
                  Governor's Constitutional Assent Powers (Art. 200)
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">
                Detailed judicial precedents including Shamsher Singh (1974) and State of Punjab v. Principal Secretary (2023).
              </p>
              <div className="text-[11px] text-slate-400 pt-1">
                Contributed by Prof. K. R. Sitaram, Faculty of Constitutional Law
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToNotes}
            className="mt-5 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>Open Notes Repository & Add New Notes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
