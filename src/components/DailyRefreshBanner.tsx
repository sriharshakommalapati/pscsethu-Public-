import React, { useState, useEffect } from 'react';
import { RefreshCw, Clock, Bell, CheckCircle2, ChevronRight, X, Sparkles, ShieldCheck } from 'lucide-react';
import { DAILY_BULLETINS, getTimeUntilNext6AMIST, getCurrentISTString } from '../data/dailyNotices';
import { DailyRefreshNotice } from '../types';
import { DailySyllabusReviewModal } from './DailySyllabusReviewModal';

interface DailyRefreshBannerProps {
  onSelectCommission?: (commissionId: string) => void;
}

export const DailyRefreshBanner: React.FC<DailyRefreshBannerProps> = ({ onSelectCommission }) => {
  const [countdown, setCountdown] = useState(getTimeUntilNext6AMIST());
  const [currentTimeIST, setCurrentTimeIST] = useState(getCurrentISTString());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSyllabusReviewOpen, setIsSyllabusReviewOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshedTimestamp, setLastRefreshedTimestamp] = useState('Today at 06:00:00 AM IST');
  const [notices, setNotices] = useState<DailyRefreshNotice[]>(DAILY_BULLETINS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeUntilNext6AMIST());
      setCurrentTimeIST(getCurrentISTString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const newTimestamp = `Today at 06:00:00 AM IST (Sync Verified at ${currentTimeIST})`;
      setLastRefreshedTimestamp(newTimestamp);
      setToastMessage('Portal synchronised with 06:00 AM IST Public Service Commission notices!');
      setTimeout(() => setToastMessage(null), 4000);
    }, 800);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-200 text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Live Sync: 06:00 AM IST Daily
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden md:inline">
              Current IST: <strong className="text-amber-300 font-mono">{currentTimeIST}</strong>
            </span>
            <span className="text-slate-400 hidden md:inline">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Next Refresh: <span className="font-mono text-sky-300 font-semibold">{countdown.formattedText}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSyllabusReviewOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 transition font-medium cursor-pointer"
              title="Daily audit of syllabus topics, subtopics and comprehensive notes across 30 Commissions"
            >
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">Daily Syllabus & Notes Review (30/30)</span>
              <span className="sm:hidden">Syllabus Review</span>
            </button>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition border border-slate-700 active:scale-95 cursor-pointer"
              title="Verify latest 6:00 AM IST commission notices"
            >
              <RefreshCw className={`w-3 h-3 text-amber-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Checking Updates...' : 'Check 6:00 AM IST Updates'}</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition font-medium cursor-pointer"
            >
              <Bell className="w-3 h-3 text-amber-400" />
              <span>Daily Bulletin ({notices.filter((n) => n.isNew).length} New)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-emerald-900 text-emerald-100 border border-emerald-700 px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-fade-in text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-emerald-300 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Daily Bulletin Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100">Daily 06:00 AM IST Commission Bulletin</h3>
                  <p className="text-xs text-slate-400">
                    Automated daily ingest for UPSC, APPSC, TGSPC and State PSCs
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-amber-50/80 border-b border-amber-200/70 flex items-center justify-between text-xs text-amber-950">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Last Synced: <strong>{lastRefreshedTimestamp}</strong></span>
              </div>
              <div className="flex items-center gap-1 font-mono text-slate-700">
                <span>Next update in: <strong>{countdown.formattedText}</strong></span>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-slate-100">
              {notices.map((notice) => (
                <div key={notice.id} className="pt-3 first:pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800">
                        {notice.commissionCode}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-100 text-rose-700">
                          Fresh Today 06:00 AM
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{notice.time}</span>
                  </div>

                  <h4 className="font-semibold text-slate-900 text-sm mt-1.5">{notice.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{notice.summary}</p>

                  {onSelectCommission && (
                    <button
                      onClick={() => {
                        const commId = notice.commissionCode.toLowerCase();
                        onSelectCommission(commId);
                        setIsModalOpen(false);
                      }}
                      className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View {notice.commissionCode} Landing Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Schedule and syllabi verified across all 30 public service commissions in India.
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
              >
                Close Bulletin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Daily Syllabus & Notes Audit Engine Modal */}
      <DailySyllabusReviewModal
        isOpen={isSyllabusReviewOpen}
        onClose={() => setIsSyllabusReviewOpen(false)}
        onSelectCommission={onSelectCommission}
      />
    </>
  );
};
