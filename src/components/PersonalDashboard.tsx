import React, { useState } from 'react';
import {
  UserCheck,
  Flame,
  Clock,
  CheckCircle2,
  Bookmark,
  BookOpen,
  Award,
  TrendingUp,
  FileText,
  Play,
  PlusCircle,
  ExternalLink,
  ChevronRight,
  Trash2,
  Sparkles,
  Calendar,
  Target,
} from 'lucide-react';
import { UserStudyProgress, SubTopic, PreviousYearPaper, CommunityNote } from '../types';
import { COMMISSIONS } from '../data/commissions';
import { CURATED_SUBJECTS } from '../data/curatedLectures';
import { PREVIOUS_YEAR_PAPERS } from '../data/previousYearPapers';
import { GoogleAdUnit } from './GoogleAdUnit';

interface PersonalDashboardProps {
  progress: UserStudyProgress;
  onUpdateProgress: (newProgress: UserStudyProgress) => void;
  communityNotes: CommunityNote[];
  onOpenSubtopic: (subtopic: SubTopic) => void;
  onSelectCommission: (commissionId: string) => void;
  onStartMockTest: (testId?: string) => void;
}

export const PersonalDashboard: React.FC<PersonalDashboardProps> = ({
  progress,
  onUpdateProgress,
  communityNotes,
  onOpenSubtopic,
  onSelectCommission,
  onStartMockTest,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookmarks' | 'my-notes' | 'tests'>('overview');
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteSubject, setNewNoteSubject] = useState('General Studies');
  const [isAddingNote, setIsAddingNote] = useState(false);

  // Compute stats
  const allSubtopics: SubTopic[] = [];
  CURATED_SUBJECTS.forEach((subject) => {
    subject.topics.forEach((topic) => {
      topic.subtopics.forEach((sub) => {
        allSubtopics.push(sub);
      });
    });
  });

  const totalLecturesCount = allSubtopics.length;
  const completedCount = progress.completedSubtopicIds.length;
  const completionPercentage = Math.round((completedCount / Math.max(1, totalLecturesCount)) * 100);

  const bookmarkedSubtopics = allSubtopics.filter((s) =>
    progress.bookmarkedSubtopicIds.includes(s.id)
  );

  const bookmarkedPYQs = PREVIOUS_YEAR_PAPERS.filter((p) =>
    progress.bookmarkedPYQIds.includes(p.id)
  );

  const bookmarkedNotes = communityNotes.filter((n) =>
    progress.bookmarkedNoteIds.includes(n.id)
  );

  const targetCommission = COMMISSIONS.find((c) => c.id === progress.targetCommissionId) || COMMISSIONS[0];

  const handleAddStudyTime = (minutes: number) => {
    onUpdateProgress({
      ...progress,
      todayStudyMinutes: progress.todayStudyMinutes + minutes,
    });
  };

  const handleCreateCustomNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    const newNote = {
      id: 'custom-note-' + Date.now(),
      title: newNoteTitle.trim(),
      content: newNoteContent.trim(),
      date: new Date().toISOString().split('T')[0],
      commissionCode: targetCommission.code,
      subject: newNoteSubject,
    };

    onUpdateProgress({
      ...progress,
      customUserNotes: [newNote, ...progress.customUserNotes],
    });

    setNewNoteTitle('');
    setNewNoteContent('');
    setIsAddingNote(false);
  };

  const handleDeleteCustomNote = (noteId: string) => {
    onUpdateProgress({
      ...progress,
      customUserNotes: progress.customUserNotes.filter((n) => n.id !== noteId),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Banner & Target Selection */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Personalized Aspirant Tracker</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>{progress.streakDays} Day Streak!</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif">
            Student Study & Revision Dashboard
          </h1>
          <p className="mt-1 text-slate-300 text-sm">
            Track syllabus progress, manage bookmarked videos & notes, and log mock test performance.
          </p>
        </div>

        {/* Target Commission Switcher */}
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 shrink-0 w-full md:w-auto">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            Primary Target Examination
          </label>
          <div className="flex items-center gap-2">
            <select
              value={progress.targetCommissionId}
              onChange={(e) => {
                onUpdateProgress({
                  ...progress,
                  targetCommissionId: e.target.value,
                });
              }}
              className="bg-slate-900 text-white font-bold text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-600 outline-none cursor-pointer"
            >
              {COMMISSIONS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => onSelectCommission(progress.targetCommissionId)}
              className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition cursor-pointer"
              title="Open Target Commission Landing Page"
            >
              Open Hub
            </button>
          </div>
        </div>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Overall Completion */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Syllabus Completion</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {completionPercentage}%
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, completionPercentage)}%` }}
              />
            </div>
          </div>
          <div className="mt-3 text-[11px] text-slate-500">
            {completedCount} of {totalLecturesCount} video lectures completed
          </div>
        </div>

        {/* Daily Study Time */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Today’s Study Time</span>
            <Clock className="w-4 h-4 text-sky-600" />
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {progress.todayStudyMinutes} <span className="text-sm font-normal text-slate-500">/ {progress.dailyGoalMinutes} min</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-sky-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (progress.todayStudyMinutes / progress.dailyGoalMinutes) * 100)}%` }}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <button
              onClick={() => handleAddStudyTime(15)}
              className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              +15m
            </button>
            <button
              onClick={() => handleAddStudyTime(30)}
              className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              +30m
            </button>
            <button
              onClick={() => handleAddStudyTime(60)}
              className="px-2 py-0.5 text-[10px] font-bold rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 cursor-pointer font-bold"
            >
              +1 hr
            </button>
          </div>
        </div>

        {/* Bookmarked Resources */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Saved Resources</span>
            <Bookmark className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {bookmarkedSubtopics.length + bookmarkedPYQs.length + bookmarkedNotes.length}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              {bookmarkedSubtopics.length} Study Notes • {bookmarkedPYQs.length} PYQs • {bookmarkedNotes.length} Notes
            </div>
          </div>
          <button
            onClick={() => setActiveTab('bookmarks')}
            className="mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View Saved Items</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mock Test Score */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
            <span>Mock Test Performance</span>
            <Award className="w-4 h-4 text-purple-600" />
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {progress.mockTestHistory.length > 0
                ? `${progress.mockTestHistory[0].score}/${progress.mockTestHistory[0].totalMarks}`
                : '0/200'}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              {progress.mockTestHistory.length} Test(s) attempted • {progress.mockTestHistory[0]?.accuracyPercent || 0}% accuracy
            </div>
          </div>
          <button
            onClick={() => onStartMockTest()}
            className="mt-3 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
          >
            <span>Take Fresh Mock</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* DASHBOARD TAB CONTROLS */}
      <div className="border-b border-slate-200 flex items-center gap-4 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 border-b-2 transition cursor-pointer ${
            activeTab === 'overview'
              ? 'border-indigo-600 text-indigo-700 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Syllabus Subject Breakdown
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'bookmarks'
              ? 'border-indigo-600 text-indigo-700 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4 text-amber-500" />
          <span>Bookmarked Resources ({bookmarkedSubtopics.length + bookmarkedPYQs.length + bookmarkedNotes.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('my-notes')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'my-notes'
              ? 'border-indigo-600 text-indigo-700 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-4 h-4 text-blue-500" />
          <span>My Personal Notes ({progress.customUserNotes.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('tests')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'tests'
              ? 'border-indigo-600 text-indigo-700 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Award className="w-4 h-4 text-emerald-600" />
          <span>Test History</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & SUBJECT PROGRESS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Subject-Wise Completion for {targetCommission.code}
            </h3>
            <div className="space-y-4">
              {CURATED_SUBJECTS.map((subject) => {
                const subtopicIds: string[] = [];
                subject.topics.forEach((t) => t.subtopics.forEach((s) => subtopicIds.push(s.id)));
                const completedInSubject = subtopicIds.filter((id) =>
                  progress.completedSubtopicIds.includes(id)
                ).length;
                const percent = Math.round((completedInSubject / Math.max(1, subtopicIds.length)) * 100);

                return (
                  <div key={subject.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-sm text-slate-900">{subject.name}</span>
                        <p className="text-xs text-slate-500 mt-0.5">{subject.description}</p>
                      </div>
                      <span className="font-mono font-bold text-xs px-2 py-1 rounded bg-white border border-slate-200 text-slate-700">
                        {completedInSubject}/{subtopicIds.length} ({percent}%)
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BOOKMARKED RESOURCES */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-6">
          {/* Bookmarked Study Notes */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-base text-slate-900">
                Bookmarked Study Notes & 10-Point Revision ({bookmarkedSubtopics.length})
              </h3>
            </div>

            {bookmarkedSubtopics.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No study notes bookmarked yet. Click the bookmark icon on any syllabus study note to access it quickly here.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedSubtopics.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50/60 flex flex-col justify-between"
                  >
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800">
                        {sub.readingTimeMinutes || 8} min read • Comprehensive Notes
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-2">{sub.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{sub.summary}</p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] text-amber-800 font-semibold">
                        10-Point Revision Digest Ready
                      </span>
                      <button
                        onClick={() => onOpenSubtopic(sub)}
                        className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 cursor-pointer"
                      >
                        Read & Review Notes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bookmarked PYQs */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-base text-slate-900">
                Bookmarked Previous Year Question Papers ({bookmarkedPYQs.length})
              </h3>
            </div>

            {bookmarkedPYQs.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No PYQs bookmarked yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedPYQs.map((pyq) => (
                  <div key={pyq.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white">
                        {pyq.commissionCode}
                      </span>
                      <span className="text-xs font-bold text-slate-700">{pyq.year} {pyq.stage}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mt-1.5">{pyq.paperName}</h4>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {pyq.keyTopics.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: MY PERSONAL STUDY NOTES */}
      {activeTab === 'my-notes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">My Study Notes & Personal Revision</h3>
              <p className="text-xs text-slate-500">Create private notes and flash summaries for your target exams.</p>
            </div>
            <button
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{isAddingNote ? 'Cancel' : 'Add New Note'}</span>
            </button>
          </div>

          {/* New Note Form */}
          {isAddingNote && (
            <form onSubmit={handleCreateCustomNote} className="bg-white p-5 rounded-2xl border border-indigo-200 shadow-sm space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Note Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fundamental Rights Article 21 Nuances"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Indian Polity / AP Economy"
                    value={newNoteSubject}
                    onChange={(e) => setNewNoteSubject(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Note Content & Key Points</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your notes or paste video summaries here..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-lg hover:bg-indigo-700 cursor-pointer"
                >
                  Save Note
                </button>
              </div>
            </form>
          )}

          {/* Notes List */}
          {progress.customUserNotes.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
              <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs text-slate-500">You haven't written any private notes yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {progress.customUserNotes.map((note) => (
                <div key={note.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        {note.subject || 'General'}
                      </span>
                      <span>{note.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{note.title}</h4>
                    <p className="text-xs text-slate-700 mt-2 whitespace-pre-line leading-relaxed">
                      {note.content}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => handleDeleteCustomNote(note.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: MOCK TEST HISTORY */}
      {activeTab === 'tests' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-base text-slate-900">Recent Mock Test Attempts</h3>
          {progress.mockTestHistory.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No mock tests attempted yet.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {progress.mockTestHistory.map((test, index) => (
                <div key={index} className="py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{test.testTitle}</h4>
                    <span className="text-xs text-slate-500">Attempted on {test.dateTaken}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-base text-emerald-700 font-mono">
                      {test.score} / {test.totalMarks}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      Accuracy: {test.accuracyPercent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {/* In-Dashboard High Yield Google Ad Unit */}
      <div className="pt-4">
        <GoogleAdUnit
          formatType="in-article"
          adSlot="4920194837"
          label="SPONSORED BY GOOGLE ADS • ASPIRANTS NETWORK"
        />
      </div>
    </div>
  );
};
