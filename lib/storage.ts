// Local storage utilities for offline functionality
const STORAGE_KEYS = {
  USER_PROGRESS: 'quran_memorizer_progress',
  COMPLETED_VERSES: 'quran_memorizer_completed',
  SETTINGS: 'quran_memorizer_settings',
  STREAK_DATA: 'quran_memorizer_streak'
} as const;

export interface StoredProgress {
  surahId: number;
  completedVerses: number[];
  lastUpdated: string;
}

export interface StoredSettings {
  theme: 'light' | 'dark' | 'system';
  reciter: string;
  autoPlay: boolean;
  dailyGoal: number;
}

class LocalStorage {
  private isClient = typeof window !== 'undefined';

  get<T>(key: string, defaultValue: T): T {
    if (!this.isClient) return defaultValue;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return defaultValue;
    }
  }

  set<T>(key: string, value: T): void {
    if (!this.isClient) return;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage:`, error);
    }
  }

  remove(key: string): void {
    if (!this.isClient) return;
    
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage:`, error);
    }
  }

  clear(): void {
    if (!this.isClient) return;
    
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage:`, error);
    }
  }
}

export const storage = new LocalStorage();

// Specific storage functions
export const progressStorage = {
  get: (): StoredProgress[] => storage.get(STORAGE_KEYS.USER_PROGRESS, []),
  set: (progress: StoredProgress[]) => storage.set(STORAGE_KEYS.USER_PROGRESS, progress),
  
  updateSurah: (surahId: number, completedVerses: number[]) => {
    const allProgress = progressStorage.get();
    const existingIndex = allProgress.findIndex(p => p.surahId === surahId);
    
    const updatedProgress: StoredProgress = {
      surahId,
      completedVerses,
      lastUpdated: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      allProgress[existingIndex] = updatedProgress;
    } else {
      allProgress.push(updatedProgress);
    }
    
    progressStorage.set(allProgress);
  }
};

export const settingsStorage = {
  get: (): StoredSettings => storage.get(STORAGE_KEYS.SETTINGS, {
    theme: 'system',
    reciter: 'Mishary Al-Afasy',
    autoPlay: false,
    dailyGoal: 5
  }),
  set: (settings: Partial<StoredSettings>) => {
    const current = settingsStorage.get();
    storage.set(STORAGE_KEYS.SETTINGS, { ...current, ...settings });
  }
};