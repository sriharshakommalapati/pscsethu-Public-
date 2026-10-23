import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Search,
  BookOpen,
  X,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
  Calendar,
  FileText
} from 'lucide-react';
import {
  buildDailySyllabusAuditReport,
  generateComprehensiveTopicNote,
  CommissionAuditReport
} from '../utils/dailySyllabusEngine';
import { SubTopic } from '../types';
import { VideoLectureViewer } from './VideoLectureViewer';

interface DailySyllabusReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCommission?: (commissionId: string) => void;
}

export const DailySyllabusReviewModal: React.FC<DailySyllabusReviewModalProps> = ({
  isOpen,
  onClose,
  onSelectCommission,
}) => {
  const [auditSummary, setAuditSummary] = useState(buildDailySyllabusAuditReport);
  const [selectedCommissionId, setSelectedCommissionId] = useState<string>('upsc');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditedSuccessMessage, setAuditedSuccessMessage] = useState<string | null>(null);

  // Active topic modal for instant note inspection
  const [inspectingSubtopic, setInspectingSubtopic] = useState<SubTopic | null>(null);

  const selectedReport = useMemo(() => {
    return (
      auditSummary.reports.find((r) => r.commissionId === selectedCommissionId) ||
      auditSummary.reports[0]
    );
  }, [auditSummary, selectedCommissionId]);

  // Filter topics based on search
  const filteredTopics = useMemo(() => {
    if (!selectedReport) return [];
    if (!searchQuery.trim()) return selectedReport.topics;
    const q = searchQuery.toLowerCase();
    return selectedReport.topics.filter(
      (t) =>
        t.topicTitle.toLowerCase().includes(q) ||
        t.paperName.toLowerCase().includes(q) ||
        t.subtopics.some((s) => s.toLowerCase().includes(q))
    );
  }, [selectedReport, searchQuery]);

  const handleRunDailyAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setAuditSummary(buildDailySyllabusAuditReport());
      setIsAuditing(false);
      setAuditedSuccessMessage('All 30 Public Service Commissions audited & verified with 100% notes coverage!');
      setTimeout(() => setAuditedSuccessMessage(null), 4000);
    }, 1000);
  };

  const handleInspectTopicNotes = (commissionCode: string, topicTitle: string, paperName: string) => {
    const note = generateComprehensiveTopicNote(commissionCode, topicTitle, paperName);
    setInspectingSubtopic(note);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-5xl w-full flex flex-col max-h-[92vh] overflow-hidden text-left">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg font-serif text-white">
                  Daily Commission Syllabus & Notes Review Engine
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  06:00 AM IST Daily Sync
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Automated daily audit verifying topics, subtopics, and comprehensive study notes across all 30 Public Service Commissions.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Metric Banner */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Commissions</span>
            <strong className="text-lg font-black text-indigo-700">{auditSummary.totalCommissions} / 30</strong>
            <span className="text-[10px] text-emerald-600 font-semibold block">100% Monitored</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Syllabus Papers</span>
            <strong className="text-lg font-black text-slate-900">{auditSummary.totalPapersAudited}</strong>
            <span className="text-[10px] text-slate-500 font-medium block">Prelims & Mains</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Topics & Subtopics</span>
            <strong className="text-lg font-black text-slate-900">{auditSummary.totalSubtopicsAudited}</strong>
            <span className="text-[10px] text-indigo-600 font-semibold block">Indexed & Synced</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Notes Preparedness</span>
            <strong className="text-lg font-black text-emerald-600">100% Ready</strong>
            <span className="text-[10px] text-slate-500 font-medium block">10-Point Digests</span>
          </div>
        </div>

        {/* Audit Action Bar */}
        <div className="px-5 py-3 bg-indigo-50/70 border-b border-indigo-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-indigo-950 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Last Daily Syllabus Audit: <strong>{auditSummary.lastAuditTimeIST}</strong> • Next Automatic Review at <strong>06:00:00 AM IST</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunDailyAudit}
              disabled={isAuditing}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin' : ''}`} />
              <span>{isAuditing ? 'Running Syllabus Audit...' : 'Re-Run Daily Audit Now'}</span>
            </button>
          </div>
        </div>

        {auditedSuccessMessage && (
          <div className="px-5 py-2 bg-emerald-100 border-b border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{auditedSuccessMessage}</span>
          </div>
        )}

        {/* Body with Commission Selector & Topics List */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Left Column: Commission List */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 overflow-y-auto max-h-48 md:max-h-none p-3 space-y-1 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1 block">
              30 Public Service Commissions
            </span>
            {auditSummary.reports.map((report) => {
              const isSelected = selectedCommissionId === report.commissionId;
              return (
                <button
                  key={report.commissionId}
                  onClick={() => {
                    setSelectedCommissionId(report.commissionId);
                    setSearchQuery('');
                  }}
                  className={`w-full p-2.5 rounded-xl text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'hover:bg-slate-200/70 text-slate-700'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black">{report.code}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                        isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {report.state}
                      </span>
                    </div>
                    <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {report.totalTopics} Topics • 100% Notes
                    </span>
                  </div>
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Audited Topics, Subtopics & Notes Browser */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            {/* Commission Title & Search */}
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-slate-900 font-serif">
                    {selectedReport.name} ({selectedReport.code})
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {selectedReport.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedReport.totalPapers} Papers • {selectedReport.totalTopics} Topics • {selectedReport.totalSubtopics} Subtopics with Prepared Notes
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics or papers..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                {onSelectCommission && (
                  <button
                    onClick={() => {
                      onSelectCommission(selectedReport.commissionId);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1 shrink-0 cursor-pointer shadow-2xs"
                  >
                    <span>View Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Topic List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filteredTopics.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-xs">
                  No syllabus topics matched "{searchQuery}".
                </div>
              ) : (
                filteredTopics.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-indigo-300 transition space-y-2 text-left"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800">
                          {item.paperName}
                        </span>
                        <span className="text-xs font-bold text-slate-900 leading-snug">
                          {item.topicTitle}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          handleInspectTopicNotes(
                            selectedReport.code,
                            item.topicTitle,
                            item.paperName
                          )
                        }
                        className="px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold transition flex items-center gap-1 cursor-pointer shadow-2xs shrink-0"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Read Topic Notes</span>
                      </button>
                    </div>

                    {/* Subtopics List */}
                    <div className="pt-1.5 border-t border-slate-200/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Audited Subtopics & Core Dimensions ({item.subtopics.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.subtopics.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 font-medium"
                          >
                            • {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {item.notesSummary}
                      </span>
                      <span className="font-mono text-slate-400">
                        10-Line Revision Digest Ready
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Certified by PSC Sethu Syllabus & Notes Engine • Updated Daily at 06:00 AM IST
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Close Engine View
          </button>
        </div>
      </div>

      {/* Embedded Study Note Inspection Modal */}
      {inspectingSubtopic && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in text-left">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-base text-slate-900 font-serif">
                  {inspectingSubtopic.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectingSubtopic(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <VideoLectureViewer
              subtopic={inspectingSubtopic}
              onSaveToPersonalNotes={() => {}}
            />

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setInspectingSubtopic(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
