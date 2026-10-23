import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { DailyRefreshBanner } from './components/DailyRefreshBanner';
import { HomePage } from './components/HomePage';
import { CommissionLandingPage } from './components/CommissionLandingPage';
import { ExamDatesView } from './components/ExamDatesView';
import { PersonalDashboard } from './components/PersonalDashboard';
import { NotesRepositoryView } from './components/NotesRepositoryView';
import { MockTestModal } from './components/MockTestModal';
import { SearchModal } from './components/SearchModal';
import { CommercialAdSidePanel } from './components/CommercialAdSidePanel';
import { COMMISSIONS } from './data/commissions';
import { MOCK_TESTS } from './data/mockTests';
import {
  loadUserStudyProgress,
  saveUserStudyProgress,
  loadCommunityNotes,
  saveCommunityNotes,
} from './utils/storage';
import { UserStudyProgress, CommunityNote, MockTest, SubTopic } from './types';
import { Building2, Shield, Calendar, BookOpen, Clock, Heart } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCommissionId, setSelectedCommissionId] = useState<string>('upsc');
  const [userProgress, setUserProgress] = useState<UserStudyProgress>(loadUserStudyProgress);
  const [communityNotes, setCommunityNotes] = useState<CommunityNote[]>(loadCommunityNotes);
  const [activeMockTest, setActiveMockTest] = useState<MockTest | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bharatpsc_sidepanel_open') !== 'false';
    }
    return true;
  });

  // Sync userProgress to LocalStorage on change
  useEffect(() => {
    saveUserStudyProgress(userProgress);
  }, [userProgress]);

  // Sync communityNotes to LocalStorage on change
  useEffect(() => {
    saveCommunityNotes(communityNotes);
  }, [communityNotes]);

  // Global keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Commission Selection
  const handleSelectCommission = (commissionId: string) => {
    setSelectedCommissionId(commissionId);
    setActiveTab('commission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Subtopic Completed status
  const handleToggleCompleteSubtopic = (subtopicId: string) => {
    setUserProgress((prev) => {
      const isCompleted = prev.completedSubtopicIds.includes(subtopicId);
      const newCompleted = isCompleted
        ? prev.completedSubtopicIds.filter((id) => id !== subtopicId)
        : [...prev.completedSubtopicIds, subtopicId];

      return {
        ...prev,
        completedSubtopicIds: newCompleted,
      };
    });
  };

  // Toggle Subtopic Bookmark status
  const handleToggleBookmarkSubtopic = (subtopicId: string) => {
    setUserProgress((prev) => {
      const isBookmarked = prev.bookmarkedSubtopicIds.includes(subtopicId);
      const newBookmarked = isBookmarked
        ? prev.bookmarkedSubtopicIds.filter((id) => id !== subtopicId)
        : [...prev.bookmarkedSubtopicIds, subtopicId];

      return {
        ...prev,
        bookmarkedSubtopicIds: newBookmarked,
      };
    });
  };

  // Save notes directly to personal journal
  const handleSaveToPersonalNotes = (title: string, content: string, subject: string) => {
    const selectedComm = COMMISSIONS.find((c) => c.id === selectedCommissionId);
    const newNote = {
      id: 'personal-note-' + Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      commissionCode: selectedComm?.code || 'UPSC',
      subject,
    };

    setUserProgress((prev) => ({
      ...prev,
      customUserNotes: [newNote, ...prev.customUserNotes],
    }));
  };

  // Add new community note contributed by professor or student
  const handleAddCommunityNote = (newNote: CommunityNote) => {
    setCommunityNotes((prev) => [newNote, ...prev]);
  };

  // Toggle bookmark note
  const handleToggleBookmarkNote = (noteId: string) => {
    setUserProgress((prev) => {
      const isBookmarked = prev.bookmarkedNoteIds.includes(noteId);
      const newBookmarked = isBookmarked
        ? prev.bookmarkedNoteIds.filter((id) => id !== noteId)
        : [...prev.bookmarkedNoteIds, noteId];

      return {
        ...prev,
        bookmarkedNoteIds: newBookmarked,
      };
    });
  };

  // Upvote note
  const handleUpvoteNote = (noteId: string) => {
    setCommunityNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, upvotes: n.upvotes + 1 } : n))
    );
  };

  // Finish Mock Test
  const handleFinishMockTest = (score: number, totalMarks: number, accuracyPercent: number) => {
    if (!activeMockTest) return;
    const attemptRecord = {
      testId: activeMockTest.id,
      testTitle: activeMockTest.title,
      score,
      totalMarks,
      accuracyPercent,
      dateTaken: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      timeSpentSeconds: 3600,
    };

    setUserProgress((prev) => ({
      ...prev,
      mockTestHistory: [attemptRecord, ...prev.mockTestHistory],
    }));
  };

  // Open specific subtopic from Dashboard or Search
  const handleOpenSubtopicFromDashboard = (subtopic: SubTopic) => {
    if (subtopic.id.startsWith('sub-ap')) {
      setSelectedCommissionId('appsc');
    } else if (subtopic.id.startsWith('sub-tg')) {
      setSelectedCommissionId('tgspc');
    } else {
      setSelectedCommissionId('upsc');
    }
    setActiveTab('commission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Active Commission object
  const activeCommission =
    COMMISSIONS.find((c) => c.id === selectedCommissionId) || COMMISSIONS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Top Automated 06:00 AM IST Refresh & Sync Banner */}
      <DailyRefreshBanner onSelectCommission={handleSelectCommission} />

      {/* Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab: ActiveTab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedCommissionId={selectedCommissionId}
        setSelectedCommissionId={setSelectedCommissionId}
        userProgress={userProgress}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Layout: Main Content & Options with Dedicated Ads Side Panel */}
      <div className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 py-4 flex flex-col lg:flex-row gap-6 items-start">
        {/* Main Page Content Body */}
        <main className="flex-1 min-w-0 w-full pb-16">
        {activeTab === 'home' && (
          <HomePage
            onSelectCommission={handleSelectCommission}
            onNavigateToDates={() => {
              setActiveTab('exam-dates');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToDashboard={() => {
              setActiveTab('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToNotes={() => {
              setActiveTab('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {(activeTab === 'commission' || activeTab === 'lectures') && (
          <CommissionLandingPage
            commission={activeCommission}
            completedSubtopicIds={userProgress.completedSubtopicIds}
            bookmarkedSubtopicIds={userProgress.bookmarkedSubtopicIds}
            onToggleCompleteSubtopic={handleToggleCompleteSubtopic}
            onToggleBookmarkSubtopic={handleToggleBookmarkSubtopic}
            onSaveToPersonalNotes={handleSaveToPersonalNotes}
            onStartMockTest={(test) => setActiveMockTest(test)}
            communityNotes={communityNotes}
            onNavigateToDates={() => {
              setActiveTab('exam-dates');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'exam-dates' && (
          <ExamDatesView onSelectCommission={handleSelectCommission} />
        )}

        {activeTab === 'dashboard' && (
          <PersonalDashboard
            progress={userProgress}
            onUpdateProgress={setUserProgress}
            communityNotes={communityNotes}
            onOpenSubtopic={handleOpenSubtopicFromDashboard}
            onSelectCommission={handleSelectCommission}
            onStartMockTest={(testId) => {
              const test = MOCK_TESTS.find((m) => m.id === testId) || MOCK_TESTS[0];
              setActiveMockTest(test);
            }}
          />
        )}

        {activeTab === 'notes' && (
          <NotesRepositoryView
            notes={communityNotes}
            onAddNote={handleAddCommunityNote}
            bookmarkedNoteIds={userProgress.bookmarkedNoteIds}
            onToggleBookmarkNote={handleToggleBookmarkNote}
            onUpvoteNote={handleUpvoteNote}
          />
        )}

        {activeTab === 'mock-tests' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 font-serif">
                    All-India & State Civil Services Mock Test Series
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Authentic negative marking (1/3rd), countdown timer, section-wise analysis, and instant scorecards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {MOCK_TESTS.map((test) => (
                  <div
                    key={test.id}
                    className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 bg-white shadow-2xs hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800 font-mono">
                          {test.commissionCode}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {test.durationMinutes} Mins • {test.totalMarks} Marks
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-slate-900 mt-2">{test.title}</h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Full-length mock covering General Studies, Indian Polity, History, Economy, and State Special topics.
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-700">
                        {test.questions.length} Questions
                      </span>
                      <button
                        onClick={() => setActiveMockTest(test)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                      >
                        Start Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </main>

        {/* Dedicated Commercial Ads Side Panel */}
        <aside className="shrink-0 w-full lg:w-auto">
          <CommercialAdSidePanel
            isOpen={isSidePanelOpen}
            onToggle={() => {
              setIsSidePanelOpen((prev) => {
                const next = !prev;
                if (typeof window !== 'undefined') {
                  localStorage.setItem('bharatpsc_sidepanel_open', String(next));
                }
                return next;
              });
            }}
          />
        </aside>
      </div>

      {/* Interactive Mock Test Simulator Modal */}
      {activeMockTest && (
        <MockTestModal
          test={activeMockTest}
          onClose={() => setActiveMockTest(null)}
          onFinishTest={handleFinishMockTest}
        />
      )}

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCommission={handleSelectCommission}
        onNavigateToDates={() => {
          setActiveTab('exam-dates');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectLecture={(subtopic) => {
          handleOpenSubtopicFromDashboard(subtopic);
        }}
      />

      {/* Portal Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Brand & Purpose */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold font-serif shadow-xs">
                  భ
                </div>
                <div>
                  <span className="font-extrabold text-sm tracking-tight font-serif text-amber-400">
                    BHARAT PSC PORTAL
                  </span>
                  <p className="text-[10px] text-slate-400">All India Public Service Commission Hub</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Comprehensive study repository offering syllabus, PYQs, mock tests, and curated YouTube video lectures with 9-10 lines high-yield notes for UPSC, APPSC, TGSPC, and all 28+ State PSCs.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Daily 06:00 AM IST Automated Bulletin Sync</span>
              </div>
            </div>

            {/* Column 2: Flagship State Portals */}
            <div>
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-3">
                Flagship PSC Portals
              </h4>
              <ul className="space-y-2">
                {COMMISSIONS.slice(0, 7).map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => handleSelectCommission(c.id)}
                      className="hover:text-amber-400 transition cursor-pointer text-left flex items-center justify-between w-full"
                    >
                      <span>{c.code} - {c.state}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{c.zone}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Regional Commissions */}
            <div>
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-3">
                Regional Commissions
              </h4>
              <ul className="space-y-2">
                {COMMISSIONS.slice(7, 14).map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => handleSelectCommission(c.id)}
                      className="hover:text-amber-400 transition cursor-pointer text-left flex items-center justify-between w-full"
                    >
                      <span>{c.code} - {c.state}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{c.zone}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Navigation & Features */}
            <div>
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-3">
                Quick Features
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('exam-dates');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    Exam Dates & Remaining Days Countdown
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('dashboard');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    Personal Study Progress Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('notes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    Important Notes by Students & Professors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedCommissionId('upsc');
                      setActiveTab('commission');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    Curated Study Notes & 10-Point Revision
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveMockTest(MOCK_TESTS[0])}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    Simulated Prelims Mock Tests
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-slate-300">
                © {new Date().getFullYear()} Bharat PSC Knowledge Portal • Curated for UPSC & State Civil Services Aspirants across India.
              </p>
              <p className="text-slate-500">
                Authorized Educational Knowledge Network • Dedicated to Fair & Accessible Civil Services Exam Prep
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="flex items-center gap-1 text-slate-400">
                Synchronized daily at 06:00 AM IST with official state gazettes
              </span>
              <span className="text-slate-600">•</span>
              <a
                href="/ads.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-amber-400 hover:text-amber-300 font-mono underline"
                title="View verified ads.txt"
              >
                ads.txt Verified
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-[10px] text-slate-400">
                Monetized via Google AdSense
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
