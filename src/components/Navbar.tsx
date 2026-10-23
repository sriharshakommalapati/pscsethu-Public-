import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  BookOpen,
  CheckSquare,
  UserCheck,
  Search,
  ChevronDown,
  Sparkles,
  Flame,
  FileText,
  GraduationCap,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { COMMISSIONS } from '../data/commissions';
import { UserStudyProgress } from '../types';

export type ActiveTab = 'home' | 'commission' | 'exam-dates' | 'lectures' | 'notes' | 'mock-tests' | 'dashboard';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCommissionId: string;
  setSelectedCommissionId: (id: string) => void;
  userProgress: UserStudyProgress;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCommissionId,
  setSelectedCommissionId,
  userProgress,
  onOpenSearch,
}) => {
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectCommission = (id: string) => {
    setSelectedCommissionId(id);
    setActiveTab('commission');
    setIsStateDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-amber-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200/50 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 text-lg tracking-tight font-serif">
                    PSC <span className="text-amber-600">Sethu</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60 font-mono">
                    pscsethu.com
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                  UPSC & All 30 State Public Service Commissions
                </p>
              </div>
            </button>
          </div>

          {/* Search Trigger Button */}
          <div className="hidden lg:flex flex-1 max-w-xs items-center">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search State PSC, Syllabus, Topics...</span>
              </span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-300 rounded text-slate-500 shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Home Directory
            </button>

            {/* Quick Prominent Flagship Buttons from Prompt: UPSC, APPSC, TGSPC */}
            <div className="flex items-center gap-1 px-1.5 py-1 bg-slate-100/80 rounded-lg border border-slate-200/70">
              <button
                onClick={() => handleSelectCommission('upsc')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                  activeTab === 'commission' && selectedCommissionId === 'upsc'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-indigo-900 hover:bg-white'
                }`}
              >
                UPSC
              </button>
              <button
                onClick={() => handleSelectCommission('appsc')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                  activeTab === 'commission' && selectedCommissionId === 'appsc'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-emerald-900 hover:bg-white'
                }`}
              >
                APPSC
              </button>
              <button
                onClick={() => handleSelectCommission('tgspc')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                  activeTab === 'commission' && selectedCommissionId === 'tgspc'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-rose-900 hover:bg-white'
                }`}
              >
                TGSPC
              </button>

              {/* All 28 States Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-white rounded-md transition cursor-pointer"
                >
                  <span>All 28 States</span>
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </button>

                {isStateDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 max-h-96 overflow-y-auto"
                    onMouseLeave={() => setIsStateDropdownOpen(false)}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Select State Public Service Commission
                    </div>
                    {COMMISSIONS.map((comm) => (
                      <button
                        key={comm.id}
                        onClick={() => handleSelectCommission(comm.id)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition cursor-pointer ${
                          selectedCommissionId === comm.id && activeTab === 'commission'
                            ? 'bg-indigo-50/80 font-bold text-indigo-900'
                            : 'text-slate-700'
                        }`}
                      >
                        <div>
                          <span className="font-semibold">{comm.code}</span>
                          <span className="text-slate-500 ml-1.5 text-[11px]">({comm.state})</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {comm.zone}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Exam Dates & Deadlines */}
            <button
              onClick={() => setActiveTab('exam-dates')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'exam-dates'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Exam Dates & Deadlines</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>

            {/* Curated Lectures & Notes */}
            <button
              onClick={() => setActiveTab('lectures')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'lectures'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Curated Study Notes</span>
            </button>

            {/* Faculty & Student Notes */}
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'notes'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>Faculty Notes</span>
            </button>

            {/* Mock Tests */}
            <button
              onClick={() => setActiveTab('mock-tests')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'mock-tests'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mock Tests</span>
            </button>
          </nav>

          {/* Right Action: Personal Dashboard & Streak */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Personal Dashboard Button */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition cursor-pointer shadow-xs ${
                activeTab === 'dashboard'
                  ? 'bg-amber-500 text-slate-950 border-amber-600'
                  : 'bg-slate-900 text-white border-slate-950 hover:bg-slate-800'
              }`}
            >
              <UserCheck className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">My Study Dashboard</span>
              <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 font-mono">
                <Flame className="w-3 h-3 text-amber-400" />
                {userProgress.streakDays}d
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            Key Commission Hubs
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleSelectCommission('upsc')}
              className="py-2 text-center text-xs font-bold rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 cursor-pointer"
            >
              UPSC (Union)
            </button>
            <button
              onClick={() => handleSelectCommission('appsc')}
              className="py-2 text-center text-xs font-bold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer"
            >
              APPSC (Andhra)
            </button>
            <button
              onClick={() => handleSelectCommission('tgspc')}
              className="py-2 text-center text-xs font-bold rounded-lg bg-rose-50 text-rose-700 border border-rose-200 cursor-pointer"
            >
              TGSPC (Telangana)
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-1">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              All States Directory (28 States)
            </button>
            <button
              onClick={() => {
                setActiveTab('exam-dates');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-50 flex items-center justify-between cursor-pointer"
            >
              <span>Exam Dates & Remaining Days</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                Live Deadlines
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('lectures');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Curated Study Notes & 10-Point Revision
            </button>
            <button
              onClick={() => {
                setActiveTab('notes');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Faculty & Student Notes Community
            </button>
            <button
              onClick={() => {
                setActiveTab('mock-tests');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Interactive Mock Tests
            </button>
            <button
              onClick={() => {
                setActiveTab('dashboard');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-bold rounded-lg bg-indigo-50 text-indigo-700 cursor-pointer"
            >
              Personal Progress Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
