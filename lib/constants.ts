// Centralize configuration values
export const APP_CONFIG = {
  AUDIO: {
    DEFAULT_RECITER: 'Mishary Al-Afasy',
    AVAILABLE_RECITERS: [
      'Mishary Al-Afasy',
      'Abdul Rahman Al-Sudais',
      'Saad Al-Ghamdi',
      'Maher Al-Mueaqly'
    ]
  },
  PROGRESS: {
    DAILY_VERSE_GOAL: 5,
    WEEKLY_GOAL_PERCENTAGE: 75,
    STREAK_MILESTONE: 7
  },
  REVIEW: {
    INTERVALS: [1, 3, 7, 14, 30], // days
    MAX_DAILY_REVIEWS: 20
  },
  UI: {
    SIDEBAR_COLLAPSED_WIDTH: 64,
    SIDEBAR_EXPANDED_WIDTH: 256,
    ANIMATION_DURATION: 300
  }
} as const;

export const SURAHS = [
  { id: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', totalVerses: 7 },
  { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', totalVerses: 286 },
  { id: 3, name: 'Al-Imran', arabicName: 'آل عمران', totalVerses: 200 },
  // ... more surahs
] as const;