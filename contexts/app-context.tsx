"use client"

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { UserProgress, StudySession, Achievement } from '@/lib/types';

interface AppState {
  user: {
    id: string;
    name: string;
    email: string;
    plan: 'free' | 'premium';
  };
  progress: UserProgress[];
  currentSession: StudySession | null;
  achievements: Achievement[];
  streak: number;
  isLoading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'UPDATE_PROGRESS'; payload: UserProgress }
  | { type: 'START_SESSION'; payload: StudySession }
  | { type: 'END_SESSION' }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: Achievement };

const initialState: AppState = {
  user: {
    id: '1',
    name: 'Ahmad',
    email: 'ahmad@example.com',
    plan: 'premium'
  },
  progress: [],
  currentSession: null,
  achievements: [],
  streak: 7,
  isLoading: false,
  error: null
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: state.progress.map(p => 
          p.surahId === action.payload.surahId ? action.payload : p
        )
      };
    case 'START_SESSION':
      return { ...state, currentSession: action.payload };
    case 'END_SESSION':
      return { ...state, currentSession: null };
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, action.payload]
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}