// Define proper TypeScript interfaces
export interface Verse {
  id: number;
  number: number;
  arabic: string;
  translation: string;
  transliteration?: string;
  audioUrl?: string;
}

export interface Surah {
  id: number;
  name: string;
  arabicName: string;
  verses: Verse[];
  totalVerses: number;
  revelationType: 'meccan' | 'medinan';
}

export interface UserProgress {
  userId: string;
  surahId: number;
  completedVerses: number[];
  lastReviewed: Date;
  masteryLevel: 'learning' | 'reviewing' | 'mastered';
}

export interface StudySession {
  id: string;
  userId: string;
  surahId: number;
  verseIds: number[];
  startTime: Date;
  endTime?: Date;
  completed: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface ReviewItem {
  id: string;
  surah: string;
  verses: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  lastReviewed: string;
}