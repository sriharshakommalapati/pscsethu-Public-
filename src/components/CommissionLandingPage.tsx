import React, { useState } from 'react';
import {
  Building2,
  ExternalLink,
  BookOpen,
  FileText,
  CheckSquare,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
  Download,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Layers,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { Commission, SubTopic, PreviousYearPaper, MockTest, CommunityNote } from '../types';
import { COMMISSION_SYLLABI } from '../data/commissions';
import { CURATED_SUBJECTS } from '../data/curatedLectures';
import { PREVIOUS_YEAR_PAPERS } from '../data/previousYearPapers';
import { MOCK_TESTS } from '../data/mockTests';
import { VideoLectureViewer } from './VideoLectureViewer';
import { GoogleAdUnit } from './GoogleAdUnit';
import { generateComprehensiveTopicNote } from '../utils/dailySyllabusEngine';
import { DailySyllabusReviewModal } from './DailySyllabusReviewModal';

interface CommissionLandingPageProps {
  commission: Commission;
  completedSubtopicIds: string[];
  bookmarkedSubtopicIds: string[];
  onToggleCompleteSubtopic: (subtopicId: string) => void;
  onToggleBookmarkSubtopic: (subtopicId: string) => void;
  onSaveToPersonalNotes: (title: string, content: string, subject: string) => void;
  onStartMockTest: (test: MockTest) => void;
  communityNotes: CommunityNote[];
  onNavigateToDates: () => void;
}

export const CommissionLandingPage: React.FC<CommissionLandingPageProps> = ({
  commission,
  completedSubtopicIds,
  bookmarkedSubtopicIds,
  onToggleCompleteSubtopic,
  onToggleBookmarkSubtopic,
  onSaveToPersonalNotes,
  onStartMockTest,
  communityNotes,
  onNavigateToDates,
}) => {
  const [activeTab, setActiveTab] = useState<'lectures' | 'syllabus' | 'pyq' | 'mock-tests' | 'notes'>('lectures');
  const [inspectingSyllabusTopic, setInspectingSyllabusTopic] = useState<SubTopic | null>(null);
  const [isSyllabusReviewModalOpen, setIsSyllabusReviewModalOpen] = useState(false);

  // Applicable subjects for this commission
  const availableSubjects = CURATED_SUBJECTS.filter(
    (subj) => !subj.applicableCommissions || subj.applicableCommissions.includes(commission.id)
  );

  // Active Subject, Topic, and Subtopic
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(availableSubjects[0]?.id || 'polity');
  const activeSubject = availableSubjects.find((s) => s.id === selectedSubjectId) || availableSubjects[0];

  const [selectedTopicId, setSelectedTopicId] = useState<string>(activeSubject?.topics[0]?.id || '');
  const activeTopic = activeSubject?.topics.find((t) => t.id === selectedTopicId) || activeSubject?.topics[0];

  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>(activeTopic?.subtopics[0]?.id || '');
  const activeSubtopic = activeTopic?.subtopics.find((s) => s.id === selectedSubtopicId) || activeTopic?.subtopics[0];

  const handleJumpToNotes = (topicText: string) => {
    const lower = topicText.toLowerCase();

    const matchedSubject = availableSubjects.find((s) => {
      if (lower.includes('polity') || lower.includes('constitution') || lower.includes('governance') || lower.includes('rights') || lower.includes('panchayat') || lower.includes('judicial') || lower.includes('executive') || lower.includes('legislat')) {
        return s.id === 'polity';
      }
      if (lower.includes('history') || lower.includes('freedom') || lower.includes('modern') || lower.includes('revolt') || lower.includes('reform') || lower.includes('gandhi') || lower.includes('struggle') || lower.includes('nationalism')) {
        return s.id === 'history';
      }
      if (lower.includes('geography') || lower.includes('climate') || lower.includes('environment') || lower.includes('monsoon') || lower.includes('drainage') || lower.includes('river') || lower.includes('ecology') || lower.includes('biodiversity')) {
        return s.id === 'geography';
      }
      if (lower.includes('economy') || lower.includes('economic') || lower.includes('budget') || lower.includes('fiscal') || lower.includes('agriculture') || lower.includes('msp') || lower.includes('gst') || lower.includes('finance') || lower.includes('trade') || lower.includes('bop')) {
        return s.id === 'economy';
      }
      if (lower.includes('science') || lower.includes('technology') || lower.includes('space') || lower.includes('isro') || lower.includes('cyber') || lower.includes('security') || lower.includes('disaster') || lower.includes('ai') || lower.includes('quantum') || lower.includes('semiconductor')) {
        return s.id === 'sci-tech-security';
      }
      if (lower.includes('ethics') || lower.includes('integrity') || lower.includes('aptitude') || lower.includes('values') || lower.includes('probity') || lower.includes('nolan') || lower.includes('rti') || lower.includes('emotional intelligence')) {
        return s.id === 'ethics-aptitude';
      }
      if (lower.includes('andhra') || lower.includes('polavaram') || lower.includes('bifurcation') || lower.includes('reorganisation')) {
        return s.id === 'appsc-special' || s.id === 'state-special';
      }
      if (lower.includes('telangana') || lower.includes('mulki') || lower.includes('statehood') || lower.includes('hyderabad')) {
        return s.id === 'tgspc-special' || s.id === 'state-special';
      }
      if (lower.includes('uttar pradesh') || lower.includes('zamindari') || lower.includes('odop')) {
        return s.id === 'uppsc-special' || s.id === 'state-special';
      }
      return false;
    }) || availableSubjects[0];

    if (matchedSubject) {
      setSelectedSubjectId(matchedSubject.id);
      const firstTopic = matchedSubject.topics[0];
      if (firstTopic) {
        setSelectedTopicId(firstTopic.id);
        setSelectedSubtopicId(firstTopic.subtopics[0]?.id || '');
      }
      setActiveTab('lectures');
    }
  };

  // Syllabus stages for this commission
  const syllabusStages = COMMISSION_SYLLABI[commission.id] || COMMISSION_SYLLABI['upsc'];

  // PYQs for this commission
  const commissionPYQs = PREVIOUS_YEAR_PAPERS.filter(
    (p) => p.commissionId === commission.id || (commission.id !== 'appsc' && commission.id !== 'tgspc' && p.commissionId === 'upsc')
  );

  // Mock tests for this commission
  const commissionMocks = MOCK_TESTS.filter(
    (m) => m.commissionId === commission.id || (commission.id !== 'appsc' && commission.id !== 'tgspc' && m.commissionId === 'upsc')
  );

  // Community Notes for this commission
  const commissionNotes = communityNotes.filter(
    (n) => !n.commissionCode || n.commissionCode === commission.code || n.commissionCode === 'UPSC'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Commission Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-3 py-1 rounded-lg text-xs font-black text-white font-mono shadow-xs ${commission.badgeColor}`}>
                {commission.code}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {commission.state} • {commission.zone} Zone
              </span>
              <span className="text-xs text-slate-400">
                Estd. {commission.establishedYear}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-serif text-white">
              {commission.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {commission.summary}
            </p>

            {/* Flagship Exams List */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2">
              <span className="text-xs font-semibold text-slate-400">Flagship Recruitments:</span>
              {commission.flagshipExams.slice(0, 4).map((exam, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/80 text-amber-300 border border-slate-700"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Actions & Official Portal Link */}
          <div className="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={commission.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
            >
              <span>Official Commission Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onNavigateToDates}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>Exam Dates & Deadlines</span>
            </button>
          </div>
        </div>

        {/* Upcoming Notice Ticker */}
        {commission.upcomingNotice && (
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2.5 text-xs text-amber-200">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold shrink-0">
              Latest 06:00 AM Bulletin
            </span>
            <span className="truncate">{commission.upcomingNotice}</span>
          </div>
        )}
      </div>

      {/* Main Commission Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex items-center gap-1.5 overflow-x-auto">
        <button
          onClick={() => setActiveTab('lectures')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
            activeTab === 'lectures'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Curated Study Notes & 10-Point Revision</span>
        </button>

        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
            activeTab === 'syllabus'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Detailed Exam Syllabus</span>
        </button>

        <button
          onClick={() => setActiveTab('pyq')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
            activeTab === 'pyq'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Previous Year Papers ({commissionPYQs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('mock-tests')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
            activeTab === 'mock-tests'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Interactive Mock Tests ({commissionMocks.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 cursor-pointer ${
            activeTab === 'notes'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Faculty & Student Notes</span>
        </button>
      </div>

      {/* Google AdSense Leaderboard in Commission Portal */}
      <GoogleAdUnit
        formatType="leaderboard"
        adSlot="5829103948"
        label="SPONSORED STATE CIVIL SERVICES STUDY MATERIAL • GOOGLE ADS"
      />

      {/* TAB 1: CURATED VIDEO LECTURES & 9-10 LINE NOTES EXPLORER */}
      {activeTab === 'lectures' && (
        <div className="space-y-6">
          {/* Subject Hierarchy Navigation */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                1. Select Subject
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {availableSubjects.map((subj) => (
                  <button
                    key={subj.id}
                    onClick={() => {
                      setSelectedSubjectId(subj.id);
                      setSelectedTopicId(subj.topics[0]?.id || '');
                      setSelectedSubtopicId(subj.topics[0]?.subtopics[0]?.id || '');
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer ${
                      selectedSubjectId === subj.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{subj.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Navigation */}
            {activeSubject && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  2. Select Topic
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {activeSubject.topics.map((top) => (
                    <button
                      key={top.id}
                      onClick={() => {
                        setSelectedTopicId(top.id);
                        setSelectedSubtopicId(top.subtopics[0]?.id || '');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0 cursor-pointer ${
                        selectedTopicId === top.id
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {top.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subtopic Selection Pills */}
            {activeTopic && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  3. Select Sub-topic & Comprehensive Study Notes
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {activeTopic.subtopics.map((sub) => {
                    const isCompleted = completedSubtopicIds.includes(sub.id);
                    const isSelected = selectedSubtopicId === sub.id;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubtopicId(sub.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/90 border-indigo-500 shadow-2xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`p-1.5 rounded-lg mt-0.5 ${
                            isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 leading-snug">{sub.title}</h4>
                            <span className="text-[11px] text-slate-500 font-medium">
                              {sub.readingTimeMinutes || 8} min read • Comprehensive Notes
                            </span>
                          </div>
                        </div>

                        {isCompleted && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* THE STUDY NOTES VIEWER & 10-POINT REVISION DIGEST */}
          {activeSubtopic ? (
            <>
              <VideoLectureViewer
                subtopic={activeSubtopic}
                isCompleted={completedSubtopicIds.includes(activeSubtopic.id)}
                isBookmarked={bookmarkedSubtopicIds.includes(activeSubtopic.id)}
                onToggleComplete={onToggleCompleteSubtopic}
                onToggleBookmark={onToggleBookmarkSubtopic}
                onSaveToPersonalNotes={onSaveToPersonalNotes}
              />

              {/* In-Article Google Ad Unit right below the high-yield note */}
              <GoogleAdUnit
                formatType="in-article"
                adSlot="4920194830"
                label="SPONSORED HIGH-YIELD CIVIL SERVICES MATERIAL • GOOGLE ADS"
              />
            </>
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">Select a sub-topic to view the comprehensive study notes and revision digest.</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: DETAILED SYLLABUS BREAKDOWN */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {commission.code} Examination Scheme & Comprehensive Syllabus
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Official stage-by-stage syllabus, duration, marking weightage, and topic lists mapped directly to curated study notes.
              </p>
            </div>

            {/* Daily Syllabus & Notes Audit Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-emerald-800/60 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Daily Syllabus Review: 100% Verified
                  </span>
                  <span className="text-[11px] text-emerald-300 font-mono">
                    Audited Today at 06:00 AM IST
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {commission.name} Syllabus, Subtopics & Study Notes Fully Prepared
                </h4>
                <p className="text-[11px] text-slate-300">
                  Every paper, topic, and subtopic has been verified with 10-line rapid revision digests, Prelims pointers, and Mains analytical frameworks.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsSyllabusReviewModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Audit Engine Report</span>
                </button>
              </div>
            </div>

            {/* Syllabus to Notes Quick Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm border border-indigo-800/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                    Syllabus-Aligned Notes
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    Every subject & topic includes original, high-yield study notes
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Includes conceptual framework, core points, 10-line revision digests, Prelims pointers, and Mains analytical frameworks.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('lectures')}
                className="px-3.5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shrink-0 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open Notes Hub</span>
              </button>
            </div>

            {/* Google Ad Unit inside Syllabus Tab */}
            <GoogleAdUnit
              formatType="leaderboard"
              adSlot="5019283746"
              label="SPONSORED SYLLABUS REFERENCE BOOKS • GOOGLE ADS"
            />

            <div className="space-y-6">
              {syllabusStages.map((stage, sIdx) => (
                <div key={sIdx} className="rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-amber-300">{stage.stageName}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{stage.description}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {stage.papers.length} Papers
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {stage.papers.map((paper, pIdx) => (
                      <div key={pIdx} className="p-5 bg-white space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900">{paper.name}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700">
                              {paper.nature}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span>Duration: {paper.duration}</span>
                            <span>•</span>
                            <span className="font-bold text-slate-800">{paper.totalMarks} Marks</span>
                          </div>
                        </div>

                        {paper.weightageDescription && (
                          <div className="text-xs text-indigo-900 bg-indigo-50/60 p-2.5 rounded-lg border border-indigo-100 font-medium">
                            {paper.weightageDescription}
                          </div>
                        )}

                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Key Syllabus Modules & Topics:
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {paper.topics.map((t, tIdx) => (
                              <div
                                key={tIdx}
                                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-indigo-300 transition group"
                              >
                                <div className="flex items-start gap-2 min-w-0">
                                  <span className="text-indigo-600 font-bold shrink-0 mt-0.5">•</span>
                                  <div>
                                    <span className="font-semibold text-slate-900 leading-snug block">{t}</span>
                                    <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                                      <CheckCircle2 className="w-2.5 h-2.5" /> Notes Prepared & Verified Daily
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                                  <button
                                    onClick={() => {
                                      const note = generateComprehensiveTopicNote(commission.code, t, paper.name);
                                      setInspectingSyllabusTopic(note);
                                    }}
                                    title="Read 10-Point Revision Digest & Comprehensive Study Note"
                                    className="text-[11px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 cursor-pointer shadow-2xs"
                                  >
                                    <BookOpen className="w-3 h-3" />
                                    <span>Read Notes</span>
                                  </button>
                                  <button
                                    onClick={() => handleJumpToNotes(t)}
                                    title="Explore subject notes module"
                                    className="text-[11px] font-semibold text-slate-700 hover:text-indigo-700 bg-white hover:bg-slate-100 border border-slate-200 px-2 py-1.5 rounded-lg transition cursor-pointer"
                                  >
                                    <span>Subject Hub</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PREVIOUS YEAR QUESTION PAPERS (PYQs) */}
      {activeTab === 'pyq' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {commission.code} Previous Year Question Papers & Answer Keys
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Authentic question booklets categorized by stage with answer key solutions.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 self-start sm:self-auto">
                Verified Solutions Included
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {commissionPYQs.map((pyq) => (
                <div
                  key={pyq.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-white shadow-2xs hover:shadow-sm transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-900 text-white font-mono">
                        {pyq.year} • {pyq.stage}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {pyq.totalQuestions} Questions • {pyq.totalMarks} Marks
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mt-1">{pyq.paperName}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{pyq.examName}</p>

                    <div className="mt-3">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1">
                        Prominent Question Themes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pyq.keyTopics.map((top, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-700 rounded-md"
                          >
                            {top}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Full Answer Key Available
                    </span>

                    <button
                      onClick={() => alert(`Opening Question Paper PDF & Answer Key: ${pyq.paperName} (${pyq.year})`)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>View & Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MOCK TESTS */}
      {activeTab === 'mock-tests' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Interactive Mock Tests for {commission.code}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Simulated exam interface with real timer, negative marking, instant scorecard, and detailed solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {commissionMocks.map((mock) => (
                <div
                  key={mock.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-white shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                        {mock.examStage}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {mock.durationMinutes} Minutes • {mock.totalMarks} Marks
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{mock.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Standard syllabus MCQ practice paper with {mock.questions.length} high-yield questions.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Negative Marking: <strong className="text-slate-800">1/3rd</strong>
                    </span>

                    <button
                      onClick={() => onStartMockTest(mock)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <CheckSquare className="w-4 h-4" />
                      <span>Start Mock Test</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: FACULTY NOTES */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Faculty & Student Notes for {commission.code}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Verified analytical notes specifically relevant to {commission.name}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commissionNotes.map((note) => (
                <div key={note.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-indigo-700">{note.subject}</span>
                      <span className="text-slate-400">{note.dateAdded}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{note.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-3">{note.content}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
                    <span>By: <strong>{note.authorName}</strong> ({note.authorRole})</span>
                    <span className="text-indigo-600 font-semibold">{note.upvotes} Upvotes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Embedded Study Note Inspection Modal from Syllabus */}
      {inspectingSyllabusTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in text-left">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-base text-slate-900 font-serif">
                  {inspectingSyllabusTopic.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectingSyllabusTopic(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <VideoLectureViewer
              subtopic={inspectingSyllabusTopic}
              onSaveToPersonalNotes={onSaveToPersonalNotes}
            />

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setInspectingSyllabusTopic(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer transition"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Daily Syllabus Review Modal */}
      <DailySyllabusReviewModal
        isOpen={isSyllabusReviewModalOpen}
        onClose={() => setIsSyllabusReviewModalOpen(false)}
      />
    </div>
  );
};
