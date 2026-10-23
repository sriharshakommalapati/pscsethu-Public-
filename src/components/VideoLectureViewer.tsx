import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle,
  Bookmark,
  BookmarkCheck,
  FileText,
  Clock,
  Sparkles,
  Copy,
  Check,
  PlusCircle,
  HelpCircle,
  Award,
  Layers,
  ListChecks,
  ChevronRight,
  Maximize2,
  Type,
  Share2,
} from 'lucide-react';
import { SubTopic } from '../types';
import { GoogleAdUnit } from './GoogleAdUnit';

interface VideoLectureViewerProps {
  subtopic: SubTopic;
  isCompleted?: boolean;
  isBookmarked?: boolean;
  onToggleComplete?: (subtopicId: string) => void;
  onToggleBookmark?: (subtopicId: string) => void;
  onSaveToPersonalNotes?: (title: string, notesText: string, subject: string) => void;
}

export const VideoLectureViewer: React.FC<VideoLectureViewerProps> = ({
  subtopic,
  isCompleted = false,
  isBookmarked = false,
  onToggleComplete = () => {},
  onToggleBookmark = () => {},
  onSaveToPersonalNotes,
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'comprehensive' | 'revision-10' | 'prelims' | 'mains'>('comprehensive');
  const [largeFont, setLargeFont] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addedToNotes, setAddedToNotes] = useState(false);

  const handleCopyAllNotes = () => {
    const formatted = [
      `=== ${subtopic.title} ===`,
      `Summary: ${subtopic.summary}`,
      '',
      '--- 10-POINT RAPID REVISION DIGEST ---',
      ...subtopic.notes9to10Lines,
      '',
      '--- CORE THEMATIC NOTES ---',
      ...subtopic.coreNotesSections.flatMap((sec) => [
        `[${sec.heading}]`,
        ...sec.points.map((p) => `• ${p}`),
        '',
      ]),
      '--- PRELIMS KEY FACTS ---',
      ...subtopic.prelimsPointers.map((p) => `• ${p}`),
      '',
      '--- MAINS ANALYTICAL DIMENSIONS ---',
      ...subtopic.mainsAnalysis.map((m) => `• ${m}`),
      '',
      `PYQ Reference: ${subtopic.keyPYQReference}`,
    ].join('\n');

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveNotesToDashboard = () => {
    if (onSaveToPersonalNotes) {
      const summaryText = [
        subtopic.summary,
        '',
        'High-Yield Points:',
        ...subtopic.notes9to10Lines,
      ].join('\n');

      onSaveToPersonalNotes(subtopic.title, summaryText, subtopic.subjectId);
      setAddedToNotes(true);
      setTimeout(() => setAddedToNotes(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all">
      {/* Header Banner & Metadata */}
      <div className="p-6 sm:p-7 border-b border-slate-200/90 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Textbook & Academic Notes Module</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{subtopic.readingTimeMinutes || 8} min read</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% Verified Civil Services Content
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight font-serif text-white pt-1">
              {subtopic.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {subtopic.summary}
            </p>
          </div>

          {/* Top Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(subtopic.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 border-slate-700'
              }`}
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-slate-950" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-slate-300" />
                  <span>Bookmark</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleComplete(subtopic.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                  : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 border-slate-700'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        {/* Secondary Tool Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Text Size:</span>
            <button
              onClick={() => setLargeFont(!largeFont)}
              className={`px-2.5 py-1 rounded-lg border transition cursor-pointer flex items-center gap-1 font-bold ${
                largeFont
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>{largeFont ? 'Large (18px)' : 'Standard (15px)'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAllNotes}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer font-medium"
              title="Copy complete study notes to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Notes Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Complete Notes</span>
                </>
              )}
            </button>

            <button
              onClick={handleSaveNotesToDashboard}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Save to personal study dashboard"
            >
              {addedToNotes ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved to Dashboard</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Save to My Notes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* VIEW SELECTOR TABS */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveViewMode('comprehensive')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer ${
            activeViewMode === 'comprehensive'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Detailed Textbook Notes</span>
        </button>

        <button
          onClick={() => setActiveViewMode('revision-10')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer ${
            activeViewMode === 'revision-10'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <ListChecks className="w-4 h-4" />
          <span>10-Point Rapid Revision Digest</span>
        </button>

        <button
          onClick={() => setActiveViewMode('prelims')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer ${
            activeViewMode === 'prelims'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Prelims High-Frequency Facts</span>
        </button>

        <button
          onClick={() => setActiveViewMode('mains')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer ${
            activeViewMode === 'mains'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Mains Answer-Writing Framework</span>
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className={`p-6 sm:p-8 space-y-8 ${largeFont ? 'text-base sm:text-lg' : 'text-sm'}`}>
        {/* Conceptual Overview Card (Always Visible on Comprehensive) */}
        {activeViewMode === 'comprehensive' && (
          <div className="space-y-8">
            {/* Conceptual Framework Box */}
            {subtopic.conceptualFramework && subtopic.conceptualFramework.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-indigo-950 text-base">
                    Conceptual Framework & Core Foundations
                  </h3>
                </div>
                <div className="space-y-2.5 text-slate-800 leading-relaxed">
                  {subtopic.conceptualFramework.map((point, i) => (
                    <p key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Core Thematic Chapter Sections */}
            <div className="space-y-6">
              {subtopic.coreNotesSections && subtopic.coreNotesSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4 hover:border-slate-300 transition"
                >
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-xl bg-slate-900 text-white text-xs font-black flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {sec.heading}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* High-Yield In-Article Google AdSense Unit */}
        <GoogleAdUnit
          formatType="in-article"
          adSlot="7194820194"
          label="SPONSORED CIVIL SERVICES RESOURCE • GOOGLE ADS"
        />

        {/* 10-Point Rapid Revision Digest */}
        {(activeViewMode === 'revision-10' || activeViewMode === 'comprehensive') && (
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/30 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-200/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500 text-slate-950 font-bold">
                  <ListChecks className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base sm:text-lg">
                    10-Point High-Yield Rapid Revision Digest
                  </h3>
                  <p className="text-xs text-amber-900 font-medium">
                    Standardized 10 key exam takeaways synthesized for quick pre-exam memory consolidation
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-amber-200 text-amber-900 font-mono">
                10 BULLETS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {subtopic.notes9to10Lines.map((line, idx) => {
                const parts = line.split(': ');
                const label = parts.length > 1 ? parts[0] : `Point ${idx + 1}`;
                const text = parts.length > 1 ? parts.slice(1).join(': ') : line;

                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-amber-200/80 shadow-2xs flex items-start gap-3"
                  >
                    <span className="px-2 py-0.5 rounded text-[11px] font-black bg-amber-100 text-amber-900 shrink-0 font-mono">
                      {label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Prelims High-Frequency Facts */}
        {(activeViewMode === 'prelims' || activeViewMode === 'comprehensive') && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-200/80">
              <div className="p-2 rounded-xl bg-emerald-600 text-white font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Prelims High-Frequency Facts & One-Liners
                </h3>
                <p className="text-xs text-emerald-900 font-medium">
                  Objective points, key articles, statutory numbers, and high-probability MCQ facts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {subtopic.prelimsPointers && subtopic.prelimsPointers.map((pointer, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-2xs flex items-start gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {pointer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mains Answer-Writing Framework */}
        {(activeViewMode === 'mains' || activeViewMode === 'comprehensive') && (
          <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-purple-200/80">
              <div className="p-2 rounded-xl bg-purple-600 text-white font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Mains Multi-Dimensional Answer-Writing Framework
                </h3>
                <p className="text-xs text-purple-900 font-medium">
                  Critical analysis angles, constitutional arguments, and structured descriptive dimensions
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {subtopic.mainsAnalysis && subtopic.mainsAnalysis.map((analysis, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-purple-200/80 shadow-2xs flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    M{i + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {analysis}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terms, Landmark Precedents & Exam PYQ Reference Bottom Footer */}
        <div className="pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Key Articles, Precedents & Legal Terms */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Key Articles, Doctrinal Terms & Concepts</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {subtopic.keyArticlesOrTerms.map((term, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          {/* PYQ Reference */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Previous Year Question (PYQ) Trend Reference
              </div>
              <p className="text-xs text-indigo-900 font-semibold mt-1.5">
                {subtopic.keyPYQReference}
              </p>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/70 flex items-center justify-between">
              <span>Aligned with latest UPSC, APPSC & TGSPC syllabus pattern</span>
              <span className="text-emerald-700 font-bold">High Probability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
