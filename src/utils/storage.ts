import { UserStudyProgress, CommunityNote } from '../types';
import { INITIAL_COMMUNITY_NOTES } from '../data/communityNotes';

const STORAGE_KEY = 'bharat_psc_user_progress_v1';
const NOTES_STORAGE_KEY = 'bharat_psc_community_notes_v1';

export const DEFAULT_USER_PROGRESS: UserStudyProgress = {
  completedSubtopicIds: ['sub-polity-preamble'], // pre-seed with 1 completed
  bookmarkedSubtopicIds: ['sub-polity-fundamental-rights', 'sub-tg-gentlemen-agreement'],
  bookmarkedPYQIds: ['pyq-upsc-2025-prelims-gs1', 'pyq-appsc-group1-2024-p1'],
  bookmarkedNoteIds: ['note-prof-sharma-polity'],
  mockTestHistory: [
    {
      testId: 'mock-upsc-prelims-gs1',
      testTitle: 'UPSC CSE 2026 All-India Prelims Full Mock 1',
      score: 142,
      totalMarks: 200,
      accuracyPercent: 78,
      dateTaken: '2026-09-15',
      timeSpentSeconds: 4200,
    },
  ],
  targetCommissionId: 'upsc',
  dailyGoalMinutes: 120,
  todayStudyMinutes: 65,
  streakDays: 7,
  lastStudyDate: new Date().toISOString().split('T')[0],
  customUserNotes: [
    {
      id: 'my-note-1',
      title: 'Revision: Article 21 & Procedural vs Substantive Due Process',
      content: 'Remember that Maneka Gandhi (1978) imported American "Due Process of Law" into Indian jurisprudence, overriding the literalist interpretation of A.K. Gopalan (1950). Must quote Krishna Iyer and Bhagwati judgments in GS-2.',
      date: '2026-09-16',
      commissionCode: 'UPSC',
      subject: 'Indian Polity',
    },
  ],
};

export function getStoredUserProgress(): UserStudyProgress {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) return DEFAULT_USER_PROGRESS;
    return { ...DEFAULT_USER_PROGRESS, ...JSON.parse(item) };
  } catch {
    return DEFAULT_USER_PROGRESS;
  }
}

export function saveStoredUserProgress(progress: UserStudyProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to localStorage', err);
  }
}

export function getStoredCommunityNotes(): CommunityNote[] {
  try {
    const item = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!item) return INITIAL_COMMUNITY_NOTES;
    return JSON.parse(item);
  } catch {
    return INITIAL_COMMUNITY_NOTES;
  }
}

export function saveStoredCommunityNotes(notes: CommunityNote[]): void {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Failed to save notes to localStorage', err);
  }
}

// Aliases for convenience
export const loadUserStudyProgress = getStoredUserProgress;
export const saveUserStudyProgress = saveStoredUserProgress;
export const loadCommunityNotes = getStoredCommunityNotes;
export const saveCommunityNotes = saveStoredCommunityNotes;

