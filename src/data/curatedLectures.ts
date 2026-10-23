import { Subject } from '../types';
import { POLITY_SUBJECT } from './notes/polityNotes';
import { HISTORY_SUBJECT } from './notes/historyNotes';
import { GEOGRAPHY_SUBJECT } from './notes/geographyNotes';
import { ECONOMY_SUBJECT } from './notes/economyNotes';
import { SCI_TECH_SUBJECT } from './notes/scienceTechNotes';
import { ETHICS_SUBJECT } from './notes/ethicsNotes';
import { STATE_SPECIAL_SUBJECT } from './notes/stateSpecialNotes';

// Dedicated APPSC subject mapped for direct selection
export const APPSC_SPECIAL_SUBJECT: Subject = {
  id: 'appsc-special',
  name: 'Andhra Pradesh Special Studies & Reorganisation',
  iconName: 'Building2',
  description: 'AP Reorganisation Act 2014, Polavaram National Project, Navaratnalu, and Bifurcation socio-economic challenges.',
  applicableCommissions: ['appsc'],
  topics: STATE_SPECIAL_SUBJECT.topics.filter(t => t.id === 'state-appsc-studies')
};

// Dedicated TGSPC subject mapped for direct selection
export const TGSPC_SPECIAL_SUBJECT: Subject = {
  id: 'tgspc-special',
  name: 'Telangana Movement & State Formation',
  iconName: 'Sparkles',
  description: 'Gentlemen’s Agreement 1956, Mulki Rules, Article 371D, 1969 Agitation, and Statehood movement.',
  applicableCommissions: ['tgspc'],
  topics: STATE_SPECIAL_SUBJECT.topics.filter(t => t.id === 'state-tgspc-studies')
};

// Dedicated UPPSC subject mapped for direct selection
export const UPPSC_SPECIAL_SUBJECT: Subject = {
  id: 'uppsc-special',
  name: 'Uttar Pradesh Special General Studies (Paper 5 & 6)',
  iconName: 'Landmark',
  description: 'UP History & Heritage, Zamindari Abolition 1950, ODOP Economy, and Industrial Expressways.',
  applicableCommissions: ['uppsc'],
  topics: STATE_SPECIAL_SUBJECT.topics.filter(t => t.id === 'state-northern-central-studies')
};

export const CURATED_SUBJECTS: Subject[] = [
  POLITY_SUBJECT,
  HISTORY_SUBJECT,
  GEOGRAPHY_SUBJECT,
  ECONOMY_SUBJECT,
  SCI_TECH_SUBJECT,
  ETHICS_SUBJECT,
  STATE_SPECIAL_SUBJECT,
  APPSC_SPECIAL_SUBJECT,
  TGSPC_SPECIAL_SUBJECT,
  UPPSC_SPECIAL_SUBJECT
];
