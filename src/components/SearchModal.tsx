import React, { useState } from 'react';
import { Search, X, Building2, Calendar, BookOpen, FileText, ChevronRight } from 'lucide-react';
import { COMMISSIONS } from '../data/commissions';
import { EXAM_DATES } from '../data/examDates';
import { CURATED_SUBJECTS } from '../data/curatedLectures';
import { Commission, SubTopic } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCommission: (commissionId: string) => void;
  onNavigateToDates: () => void;
  onSelectLecture: (subtopic: SubTopic) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCommission,
  onNavigateToDates,
  onSelectLecture,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Matched commissions
  const matchedCommissions = COMMISSIONS.filter(
    (c) =>
      c.code.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q)
  ).slice(0, 5);

  // Matched exams
  const matchedExams = EXAM_DATES.filter(
    (e) =>
      e.examName.toLowerCase().includes(q) ||
      e.commissionCode.toLowerCase().includes(q) ||
      e.state.toLowerCase().includes(q)
  ).slice(0, 4);

  // Matched subtopics
  const allSubtopics: SubTopic[] = [];
  CURATED_SUBJECTS.forEach((s) => {
    s.topics.forEach((t) => {
      t.subtopics.forEach((sub) => {
        if (
          sub.title.toLowerCase().includes(q) ||
          sub.summary.toLowerCase().includes(q) ||
          sub.keyArticlesOrTerms.some((term) => term.toLowerCase().includes(q))
        ) {
          allSubtopics.push(sub);
        }
      });
    });
  });
  const matchedLectures = allSubtopics.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search state commissions, exam dates, syllabus notes, topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm outline-none text-slate-900 placeholder-slate-400 font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto space-y-4 divide-y divide-slate-100 text-xs">
          {/* Commissions */}
          {matchedCommissions.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Public Service Commissions
              </span>
              <div className="space-y-1.5">
                {matchedCommissions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCommission(c.id);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white font-mono">
                        {c.code}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900">{c.name}</span>
                        <p className="text-[11px] text-slate-500">{c.state} • {c.zone} Zone</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Exam Dates */}
          {matchedExams.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Exam Dates & Deadlines
              </span>
              <div className="space-y-1.5">
                {matchedExams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => {
                      onNavigateToDates();
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-left transition cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900">{exam.examName}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                          {exam.commissionCode}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Prelims: {exam.prelimsDate} • Deadline: {exam.applicationDeadline}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600">View Tracker</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Study Notes & Subject Modules */}
          {matchedLectures.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Curated Study Notes & 10-Point Revision
              </span>
              <div className="space-y-1.5">
                {matchedLectures.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      onSelectLecture(sub);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-left transition cursor-pointer"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900">{sub.title}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{sub.summary}</p>
                    </div>
                    <span className="text-[11px] text-amber-700 font-semibold shrink-0">
                      10-Point Notes
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedCommissions.length === 0 && matchedExams.length === 0 && matchedLectures.length === 0 && (
            <div className="py-8 text-center text-slate-400">
              No results found for "{query}". Try searching "UPSC", "APPSC", "Telangana", or "Preamble".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
