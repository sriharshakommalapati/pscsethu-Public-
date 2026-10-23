import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  Search,
  Filter,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Users,
  Building,
  Bell,
  ArrowUpDown,
  BookOpen,
} from 'lucide-react';
import { EXAM_DATES } from '../data/examDates';
import { COMMISSIONS } from '../data/commissions';
import { ExamDateInfo } from '../types';
import { GoogleAdUnit } from './GoogleAdUnit';

interface ExamDatesViewProps {
  onSelectCommission: (commissionId: string) => void;
}

export const ExamDatesView: React.FC<ExamDatesViewProps> = ({ onSelectCommission }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'deadline' | 'examDate' | 'vacancies'>('deadline');
  const [selectedExamDetail, setSelectedExamDetail] = useState<ExamDateInfo | null>(null);

  // Calculate remaining days from today's date
  const calculateDaysRemaining = (targetDateStr: string): number => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(targetDateStr);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'TBA';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Filtered & Sorted exams
  const filteredExams = useMemo(() => {
    return EXAM_DATES.filter((exam) => {
      const matchesSearch =
        exam.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.commissionCode.toLowerCase().includes(searchQuery.toLowerCase());

      const commission = COMMISSIONS.find((c) => c.id === exam.commissionId);
      const matchesZone = selectedZone === 'All' || (commission && commission.zone === selectedZone);
      const matchesStatus = selectedStatus === 'All' || exam.status === selectedStatus;

      return matchesSearch && matchesZone && matchesStatus;
    }).sort((a, b) => {
      if (sortBy === 'deadline') {
        const daysA = calculateDaysRemaining(a.applicationDeadline);
        const daysB = calculateDaysRemaining(b.applicationDeadline);
        return daysA - daysB;
      }
      if (sortBy === 'examDate') {
        const daysA = calculateDaysRemaining(a.prelimsDate);
        const daysB = calculateDaysRemaining(b.prelimsDate);
        return daysA - daysB;
      }
      if (sortBy === 'vacancies') {
        return b.vacancies - a.vacancies;
      }
      return 0;
    });
  }, [searchQuery, selectedZone, selectedStatus, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Real-Time State PSC Deadline Tracker</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-serif">
            All States & UPSC Exam Dates & Deadlines
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Live countdown for application deadlines and examination dates across UPSC, APPSC, TGSPC, and all State Public Service Commissions in India.
          </p>
        </div>

        {/* Quick Stats on Top Banner */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl font-black text-amber-400 font-mono">
              {EXAM_DATES.filter((e) => e.status === 'Application Open').length}
            </div>
            <div className="text-xs text-slate-400 font-medium">Applications Currently Open</div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              {EXAM_DATES.reduce((acc, e) => acc + e.vacancies, 0).toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 font-medium">Total Active Vacancies</div>
          </div>
          <div>
            <div className="text-2xl font-black text-sky-400 font-mono">
              {EXAM_DATES.length}
            </div>
            <div className="text-xs text-slate-400 font-medium">Flagship Exams Monitored</div>
          </div>
          <div>
            <div className="text-2xl font-black text-indigo-300 font-mono">
              Daily 06:00 AM
            </div>
            <div className="text-xs text-slate-400 font-medium">Automated Calendar Sync</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, commission or exam..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start md:justify-end">
          {/* Zone Filter */}
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-700 outline-none cursor-pointer"
          >
            <option value="All">All Zones</option>
            <option value="Union">Union (UPSC)</option>
            <option value="South">South (APPSC, TGSPC, TN, KA, KL)</option>
            <option value="North">North (UP, PB, HR, HP, RJ, JK)</option>
            <option value="East">East (Bihar, WB, Odisha, JH)</option>
            <option value="West">West (MH, Gujarat, Goa)</option>
            <option value="Central">Central (MP, CG)</option>
            <option value="North-East">North-East (Assam & 7 Sisters)</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-700 outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Application Open">Application Open</option>
            <option value="Upcoming Exam">Upcoming Exam</option>
          </select>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
            <span className="text-xs text-slate-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 outline-none cursor-pointer"
            >
              <option value="deadline">Application Deadline (Urgent First)</option>
              <option value="examDate">Exam Date (Nearest First)</option>
              <option value="vacancies">Highest Vacancies</option>
            </select>
          </div>
        </div>
      </div>

      {/* Google AdSense Leaderboard in Exam Dates */}
      <GoogleAdUnit
        formatType="leaderboard"
        adSlot="6019284758"
        label="SPONSORED EXAM PREPARATION & TEST ALERTS • GOOGLE ADS"
      />

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExams.map((exam, idx) => {
          const appDaysRemaining = calculateDaysRemaining(exam.applicationDeadline);
          const examDaysRemaining = calculateDaysRemaining(exam.prelimsDate);
          const isAppUrgent = appDaysRemaining > 0 && appDaysRemaining <= 15;
          const isAppClosed = appDaysRemaining < 0;

          return (
            <React.Fragment key={exam.id}>
              {idx === 3 && (
                <div className="col-span-full">
                  <GoogleAdUnit
                    formatType="in-feed"
                    adSlot="7102938461"
                    label="SPONSORED CIVIL SERVICES FAST-TRACK BATCH"
                  />
                </div>
              )}
              <div
                className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
              {/* Card Header */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-900 text-white font-mono">
                      {exam.commissionCode}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{exam.state}</span>
                  </div>

                  {/* Status Badge */}
                  {isAppClosed ? (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600">
                      Application Closed
                    </span>
                  ) : isAppUrgent ? (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700 animate-pulse border border-rose-200">
                      Closing Soon
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      Registration Open
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition leading-snug">
                  {exam.examName}
                </h3>

                {/* Vacancies Tag */}
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{exam.vacancies} Vacancies</span>
                  </span>
                  <span>•</span>
                  <span>Notification: {formatDate(exam.notificationDate)}</span>
                </div>

                {/* COUNTDOWN HIGHLIGHT BOXES */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {/* Application Deadline Countdown */}
                  <div className={`p-3 rounded-xl border ${
                    isAppClosed
                      ? 'bg-slate-50 border-slate-200'
                      : isAppUrgent
                      ? 'bg-rose-50 border-rose-200'
                      : 'bg-amber-50/80 border-amber-200'
                  }`}>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Application Deadline
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {formatDate(exam.applicationDeadline)}
                    </div>
                    <div className={`text-xs font-extrabold mt-1 ${
                      isAppClosed
                        ? 'text-slate-500'
                        : isAppUrgent
                        ? 'text-rose-700'
                        : 'text-amber-800'
                    }`}>
                      {isAppClosed
                        ? 'Closed'
                        : appDaysRemaining === 0
                        ? 'Closes Today!'
                        : `${appDaysRemaining} Days Left`}
                    </div>
                  </div>

                  {/* Prelims Exam Date Countdown */}
                  <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Prelims Exam Date
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {formatDate(exam.prelimsDate)}
                    </div>
                    <div className="text-xs font-extrabold text-sky-800 mt-1">
                      {examDaysRemaining <= 0
                        ? 'Exam Concluded'
                        : `${examDaysRemaining} Days Remaining`}
                    </div>
                  </div>
                </div>

                {/* Mains Date if present */}
                {exam.mainsDate && (
                  <div className="mt-2.5 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Mains Examination:</span>
                    <span className="font-semibold text-slate-700">{formatDate(exam.mainsDate)}</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCommission(exam.commissionId)}
                  className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Study Syllabus & Videos</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedExamDetail(exam)}
                    className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 cursor-pointer"
                  >
                    Details
                  </button>

                  <a
                    href={exam.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3 h-3 text-amber-300" />
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      </div>

      {/* Details Modal */}
      {selectedExamDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800 font-mono">
                  {selectedExamDetail.commissionCode} • {selectedExamDetail.state}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {selectedExamDetail.examName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExamDetail(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 divide-y divide-slate-100">
              <div className="pt-2 flex justify-between">
                <span className="text-slate-500 font-medium">Vacancies:</span>
                <span className="font-bold text-slate-900">{selectedExamDetail.vacancies} Posts</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-slate-500 font-medium">Application Deadline:</span>
                <span className="font-bold text-amber-800">
                  {formatDate(selectedExamDetail.applicationDeadline)} ({calculateDaysRemaining(selectedExamDetail.applicationDeadline)} days remaining)
                </span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-slate-500 font-medium">Preliminary Exam Date:</span>
                <span className="font-bold text-sky-800">
                  {formatDate(selectedExamDetail.prelimsDate)} ({calculateDaysRemaining(selectedExamDetail.prelimsDate)} days remaining)
                </span>
              </div>
              {selectedExamDetail.mainsDate && (
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500 font-medium">Mains Written Exam Date:</span>
                  <span className="font-bold text-slate-900">{formatDate(selectedExamDetail.mainsDate)}</span>
                </div>
              )}
              <div className="pt-2">
                <span className="text-slate-500 font-medium block mb-1">Educational Eligibility:</span>
                <p className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
                  {selectedExamDetail.eligibility}
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-200">
              <button
                onClick={() => setSelectedExamDetail(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedExamDetail.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
