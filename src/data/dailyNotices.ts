import { DailyRefreshNotice } from '../types';

export const DAILY_BULLETINS: DailyRefreshNotice[] = [
  {
    id: 'notice-1',
    date: '2026-09-17',
    time: '06:00 AM IST',
    category: 'Notification',
    commissionCode: 'APPSC',
    title: 'APPSC Group-1 Services: Mains Written Exam Center Allocation Live',
    summary: 'The Andhra Pradesh Public Service Commission has finalized the district examination centers for the upcoming Group-1 Mains Examination. Aspirants can verify their allotted test center via the candidate portal.',
    isNew: true,
  },
  {
    id: 'notice-2',
    date: '2026-09-17',
    time: '06:00 AM IST',
    category: 'Exam Date',
    commissionCode: 'UPSC',
    title: 'UPSC Civil Services 2026: Preliminary Examination Center Preference Window',
    summary: 'Commission has opened a 7-day correction and preference modification window for candidates who applied for the Civil Services & IFoS preliminary tests.',
    isNew: true,
  },
  {
    id: 'notice-3',
    date: '2026-09-17',
    time: '06:00 AM IST',
    category: 'Study Material',
    commissionCode: 'TGSPC',
    title: 'TGSPC Paper-VI: Telangana Movement Special Notes Added by Osmania Faculty',
    summary: 'Curated 9-10 lines high-yield notes and video lecture added for Gentlemen’s Agreement 1956 and Mulki Rules safeguards in the BharatPSC repository.',
    isNew: true,
  },
  {
    id: 'notice-4',
    date: '2026-09-17',
    time: '06:00 AM IST',
    category: 'Notification',
    commissionCode: 'UPPSC',
    title: 'UPPSC Combined State PCS 2026: Prelims Admit Card Download Commenced',
    summary: 'Admit cards for UPPSC Combined State / Upper Subordinate Services Preliminary Examination are now downloadable with updated roll number sequences.',
    isNew: true,
  },
  {
    id: 'notice-5',
    date: '2026-09-16',
    time: '06:00 AM IST',
    category: 'Result',
    commissionCode: 'BPSC',
    title: 'BPSC 69th CCE Mains Final Result & Cut-off Marks Category-Wise Released',
    summary: 'Bihar Public Service Commission has published the list of 1,280 successful candidates called for the final interview rounds in Patna.',
    isNew: false,
  },
];

/**
 * Calculates remaining hours, minutes, and seconds until the next 6:00 AM IST.
 */
export function getTimeUntilNext6AMIST(): { hours: number; minutes: number; seconds: number; formattedText: string } {
  const now = new Date();
  // IST is UTC + 5:30
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));

  const next6AM = new Date(istTime);
  if (istTime.getHours() >= 6) {
    // Tomorrow at 6:00 AM IST
    next6AM.setDate(next6AM.getDate() + 1);
  }
  next6AM.setHours(6, 0, 0, 0);

  const diffMs = next6AM.getTime() - istTime.getTime();
  const diffSec = Math.max(0, Math.floor(diffMs / 1000));
  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  const formattedText = `${hours}h ${minutes}m ${seconds}s`;
  return { hours, minutes, seconds, formattedText };
}

/**
 * Formats Indian Standard Time string
 */
export function getCurrentISTString(): string {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  return istTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }) + ' IST';
}
