import React, { useState } from 'react';
import {
  GraduationCap,
  UserCheck,
  PlusCircle,
  ThumbsUp,
  Bookmark,
  BookmarkCheck,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Share2,
  Copy,
  Check,
  Building,
  Tag,
  X,
} from 'lucide-react';
import { CommunityNote } from '../types';
import { COMMISSIONS } from '../data/commissions';

interface NotesRepositoryViewProps {
  notes: CommunityNote[];
  onAddNote: (newNote: CommunityNote) => void;
  bookmarkedNoteIds: string[];
  onToggleBookmarkNote: (noteId: string) => void;
  onUpvoteNote: (noteId: string) => void;
}

export const NotesRepositoryView: React.FC<NotesRepositoryViewProps> = ({
  notes,
  onAddNote,
  bookmarkedNoteIds,
  onToggleBookmarkNote,
  onUpvoteNote,
}) => {
  const [activeRoleFilter, setActiveRoleFilter] = useState<'All' | 'Professor' | 'Student'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommission, setSelectedCommission] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State for Adding Note
  const [formData, setFormData] = useState({
    authorName: '',
    authorRole: 'Professor' as 'Professor' | 'Student',
    authorTitle: '',
    institution: '',
    commissionCode: 'UPSC',
    subject: 'Indian Polity & Governance',
    topic: '',
    title: '',
    content: '',
    takeaways: ['', '', ''],
    referenceUrl: '',
  });

  const handleCopyNote = (note: CommunityNote) => {
    const text = `${note.title}\nBy: ${note.authorName} (${note.authorRole})\nSubject: ${note.subject} - ${note.topic}\n\n${note.content}\n\nKey Takeaways:\n${note.takeaways.map((t) => `• ${t}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(note.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.title || !formData.content) {
      alert('Please fill in Author Name, Title, and Note Content.');
      return;
    }

    const newNote: CommunityNote = {
      id: 'note-user-' + Date.now(),
      authorName: formData.authorName,
      authorRole: formData.authorRole,
      authorTitle: formData.authorTitle || (formData.authorRole === 'Professor' ? 'Guest Faculty' : 'Civil Services Aspirant'),
      institution: formData.institution || 'Academic Contributor',
      commissionCode: formData.commissionCode,
      subject: formData.subject,
      topic: formData.topic || 'General Studies Topic',
      title: formData.title,
      content: formData.content,
      takeaways: formData.takeaways.filter((t) => t.trim().length > 0),
      dateAdded: new Date().toISOString().split('T')[0],
      upvotes: 1,
      verified: formData.authorRole === 'Professor',
      referenceUrl: formData.referenceUrl,
    };

    onAddNote(newNote);
    setIsAddModalOpen(false);
    // Reset form
    setFormData({
      authorName: '',
      authorRole: 'Professor',
      authorTitle: '',
      institution: '',
      commissionCode: 'UPSC',
      subject: 'Indian Polity & Governance',
      topic: '',
      title: '',
      content: '',
      takeaways: ['', '', ''],
      referenceUrl: '',
    });
  };

  const filteredNotes = notes.filter((note) => {
    const matchesRole =
      activeRoleFilter === 'All'
        ? true
        : activeRoleFilter === 'Professor'
        ? note.authorRole === 'Professor' || note.authorRole === 'Subject Expert'
        : note.authorRole === 'Student' || note.authorRole === 'Rank Holder';

    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.topic.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCommission =
      selectedCommission === 'All' || note.commissionCode === selectedCommission;

    return matchesRole && matchesSearch && matchesCommission;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Academic Knowledge Sharing Repository</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif">
            Important Notes by Professors & Students
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Curated high-yield conceptual summaries, case law analyses, and topper revisions contributed directly by university faculty, subject matter experts, and successful aspirants.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer shrink-0"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Contribute Important Note</span>
        </button>
      </div>

      {/* Filter & Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes, concepts, authors..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Role Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveRoleFilter('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeRoleFilter === 'All' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              All Notes ({notes.length})
            </button>
            <button
              onClick={() => setActiveRoleFilter('Professor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                activeRoleFilter === 'Professor'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Professors ({notes.filter((n) => n.authorRole === 'Professor' || n.authorRole === 'Subject Expert').length})</span>
            </button>
            <button
              onClick={() => setActiveRoleFilter('Student')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                activeRoleFilter === 'Student'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-amber-800'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Students / Toppers ({notes.filter((n) => n.authorRole === 'Student' || n.authorRole === 'Rank Holder').length})</span>
            </button>
          </div>

          {/* Commission Filter */}
          <select
            value={selectedCommission}
            onChange={(e) => setSelectedCommission(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-700 outline-none cursor-pointer"
          >
            <option value="All">All Commissions</option>
            <option value="UPSC">UPSC</option>
            <option value="APPSC">APPSC</option>
            <option value="TGSPC">TGSPC</option>
            <option value="UPPSC">UPPSC</option>
          </select>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNotes.map((note, idx) => {
          const isBookmarked = bookmarkedNoteIds.includes(note.id);
          const isProfessor = note.authorRole === 'Professor' || note.authorRole === 'Subject Expert';

          return (
            <div
              key={note.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Author & Header info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-xs shrink-0 ${
                        isProfessor
                          ? 'bg-gradient-to-br from-blue-700 to-indigo-800'
                          : 'bg-gradient-to-br from-amber-500 to-orange-600'
                      }`}
                    >
                      {isProfessor ? (
                        <GraduationCap className="w-6 h-6 text-blue-100" />
                      ) : (
                        <UserCheck className="w-6 h-6 text-amber-100" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-slate-900 text-sm">{note.authorName}</span>
                        {note.verified && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Verified Faculty
                          </span>
                        )}
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-700">
                          {note.authorRole}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {note.authorTitle} • <span className="text-slate-600 font-medium">{note.institution}</span>
                      </p>
                    </div>
                  </div>

                  {/* Commission Badge */}
                  {note.commissionCode && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 font-mono">
                      {note.commissionCode}
                    </span>
                  )}
                </div>

                {/* Subject & Topic Pill */}
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="font-semibold text-indigo-700 bg-indigo-50/70 px-2 py-0.5 rounded">
                    {note.subject}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 font-medium">{note.topic}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-800 transition">
                  {note.title}
                </h3>

                {/* Note Content */}
                <p className="text-xs sm:text-sm text-slate-700 mt-3 whitespace-pre-line leading-relaxed line-clamp-6">
                  {note.content}
                </p>

                {/* Key Takeaways Section */}
                {note.takeaways && note.takeaways.length > 0 && (
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Key Takeaways for Mains & Prelims</span>
                    </div>
                    <ul className="space-y-1">
                      {note.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="text-xs text-slate-800 flex items-start gap-1.5 leading-snug">
                          <span className="text-amber-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onUpvoteNote(note.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 font-bold transition active:scale-95 cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{note.upvotes} Upvotes</span>
                  </button>

                  <span className="text-slate-400 text-[11px]">Added: {note.dateAdded}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyNote(note)}
                    className="p-1.5 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1 transition cursor-pointer"
                    title="Copy note text"
                  >
                    {copiedId === note.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => onToggleBookmarkNote(note.id)}
                    className={`p-1.5 rounded-lg border transition cursor-pointer ${
                      isBookmarked
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                    }`}
                    title={isBookmarked ? 'Bookmarked' : 'Bookmark this note'}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-600" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ADD NOTE MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Contribute Important Study Note
                  </h3>
                  <p className="text-xs text-slate-500">
                    Share academic analysis with thousands of UPSC & State PSC aspirants
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitNote} className="space-y-4 mt-4 text-xs">
              {/* Role Toggle */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Your Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, authorRole: 'Professor' })}
                    className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-2 border transition cursor-pointer ${
                      formData.authorRole === 'Professor'
                        ? 'bg-blue-50 text-blue-700 border-blue-400'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Professor / Faculty</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, authorRole: 'Student' })}
                    className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-2 border transition cursor-pointer ${
                      formData.authorRole === 'Student'
                        ? 'bg-amber-50 text-amber-800 border-amber-400'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Student / Aspirant</span>
                  </button>
                </div>
              </div>

              {/* Author & Affiliation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Author Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. A. Sharma or Rajesh K."
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Designation / Degree</label>
                  <input
                    type="text"
                    placeholder="e.g. Assistant Professor or AIR 35 UPSC"
                    value={formData.authorTitle}
                    onChange={(e) => setFormData({ ...formData, authorTitle: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">University / Institution</label>
                <input
                  type="text"
                  placeholder="e.g. Osmania University, Hyderabad / Delhi University"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                />
              </div>

              {/* Commission & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Commission</label>
                  <select
                    value={formData.commissionCode}
                    onChange={(e) => setFormData({ ...formData, commissionCode: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none cursor-pointer"
                  >
                    <option value="UPSC">UPSC (All India)</option>
                    <option value="APPSC">APPSC (Andhra Pradesh)</option>
                    <option value="TGSPC">TGSPC (Telangana)</option>
                    <option value="UPPSC">UPPSC (Uttar Pradesh)</option>
                    <option value="BPSC">BPSC (Bihar)</option>
                    <option value="MPSC">MPSC (Maharashtra)</option>
                    <option value="TNPSC">TNPSC (Tamil Nadu)</option>
                    <option value="KPSC">KPSC (Karnataka)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Indian Polity, AP Economy, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Specific Topic Name</label>
                <input
                  type="text"
                  placeholder="e.g. Preamble Basic Structure, Article 21, Gentlemen Agreement"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Note Headline / Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Critical Judgments on Governor's Assent Power under Article 200"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Detailed Note Content *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write clear, comprehensive conceptual analysis, facts, case laws, or economic data..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-3 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none font-sans leading-relaxed"
                />
              </div>

              {/* Key Takeaways */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Key Exam Takeaways (Bullet Points)
                </label>
                <div className="space-y-2">
                  {formData.takeaways.map((takeaway, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={`Key takeaway point ${idx + 1}`}
                      value={takeaway}
                      onChange={(e) => {
                        const newT = [...formData.takeaways];
                        newT[idx] = e.target.value;
                        setFormData({ ...formData, takeaways: newT });
                      }}
                      className="w-full p-2 rounded-lg border border-slate-300 focus:border-indigo-500 outline-none"
                    />
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Publish Note</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
