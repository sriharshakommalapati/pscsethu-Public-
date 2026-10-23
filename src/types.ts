export type Zone = 'Union' | 'South' | 'North' | 'West' | 'East' | 'Central' | 'North-East';

export interface Commission {
  id: string;
  code: string;
  name: string;
  state: string;
  zone: Zone;
  badgeColor: string;
  headquarters: string;
  officialWebsite: string;
  establishedYear: number;
  flagshipExams: string[];
  summary: string;
  upcomingNotice?: string;
}

export interface SyllabusStage {
  stageName: string;
  description: string;
  papers: {
    name: string;
    code: string;
    duration: string;
    totalMarks: number;
    nature: 'Objective (MCQ)' | 'Descriptive' | 'Qualifying' | 'Personality Test';
    topics: string[];
    weightageDescription?: string;
  }[];
}

export interface SubTopic {
  id: string;
  topicId: string;
  subjectId: string;
  title: string;
  summary: string;
  readingTimeMinutes: number;
  /**
   * High-level conceptual framework synthesized across academic literature
   */
  conceptualFramework: string[];
  /**
   * Detailed subject-matter breakdown with structured headings and points
   */
  coreNotesSections: {
    heading: string;
    points: string[];
  }[];
  /**
   * Exactly 9-10 lines of concise, high-yield rapid revision notes
   */
  notes9to10Lines: string[];
  /**
   * High-frequency Prelims facts, articles, and objective one-liners
   */
  prelimsPointers: string[];
  /**
   * Mains multi-dimensional analytical cues and answer-writing frameworks
   */
  mainsAnalysis: string[];
  keyArticlesOrTerms: string[];
  keyPYQReference: string;
}

export interface Topic {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  subtopics: SubTopic[];
}

export interface Subject {
  id: string;
  name: string;
  iconName: string;
  description: string;
  applicableCommissions?: string[]; // Empty means all
  topics: Topic[];
}

export interface PreviousYearPaper {
  id: string;
  commissionId: string;
  commissionCode: string;
  year: number;
  examName: string;
  stage: 'Prelims' | 'Mains';
  paperName: string;
  totalMarks: number;
  totalQuestions: number;
  keyTopics: string[];
  hasSolutions: boolean;
  downloadUrl?: string;
}

export interface MockTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subject: string;
  topic: string;
}

export interface MockTest {
  id: string;
  commissionId: string;
  commissionCode: string;
  title: string;
  examStage: 'Prelims GS-1' | 'Prelims CSAT' | 'Group-1 Prelims' | 'Group-2 Paper-1';
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: number; // e.g. 0.33
  questions: MockTestQuestion[];
}

export interface ExamDateInfo {
  id: string;
  commissionId: string;
  commissionCode: string;
  state: string;
  examName: string;
  notificationDate: string;
  applicationStartDate: string;
  applicationDeadline: string; // YYYY-MM-DD
  prelimsDate: string; // YYYY-MM-DD
  mainsDate?: string; // YYYY-MM-DD
  vacancies: number;
  officialLink: string;
  status: 'Application Open' | 'Upcoming Exam' | 'Notification Released' | 'Results Awaited' | 'Exam Concluded';
  eligibility: string;
}

export interface CommunityNote {
  id: string;
  commissionId?: string;
  commissionCode?: string;
  subject: string;
  topic: string;
  authorName: string;
  authorRole: 'Professor' | 'Student' | 'Subject Expert' | 'Rank Holder';
  authorTitle?: string;
  institution?: string;
  title: string;
  content: string;
  takeaways: string[];
  dateAdded: string;
  upvotes: number;
  verified: boolean;
  referenceUrl?: string;
}

export interface UserStudyProgress {
  completedSubtopicIds: string[];
  bookmarkedSubtopicIds: string[];
  bookmarkedPYQIds: string[];
  bookmarkedNoteIds: string[];
  mockTestHistory: {
    testId: string;
    testTitle: string;
    score: number;
    totalMarks: number;
    accuracyPercent: number;
    dateTaken: string;
    timeSpentSeconds: number;
  }[];
  targetCommissionId: string;
  dailyGoalMinutes: number;
  todayStudyMinutes: number;
  streakDays: number;
  lastStudyDate: string;
  customUserNotes: {
    id: string;
    title: string;
    content: string;
    date: string;
    commissionCode?: string;
    subject?: string;
  }[];
}

export interface DailyRefreshNotice {
  id: string;
  date: string;
  time: string;
  category: 'Notification' | 'Syllabus' | 'Exam Date' | 'Study Material' | 'Result';
  title: string;
  commissionCode: string;
  summary: string;
  isNew: boolean;
}
