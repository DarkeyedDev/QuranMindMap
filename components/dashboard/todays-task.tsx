"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Pause, RotateCcw, CheckCircle, Volume2 } from 'lucide-react'
import { useState } from 'react'
import { useAudioPlayer } from '@/hooks/use-audio-player'
import { progressStorage } from '@/lib/storage'
import { useEffect } from 'react'

export function TodaysTask() {
  const [completedVerses, setCompletedVerses] = useState<number[]>([])
  
  // Audio player hook
  const { isPlaying, toggle, restart, error } = useAudioPlayer({
    src: '/audio/al-baqarah-51-53.mp3', // This would be the actual audio file
    loop: false
  })

  const todaysVerses = [
    { id: 1, number: 51, arabic: "وَإِذْ وَاعَدْنَا مُوسَىٰ أَرْبَعِينَ لَيْلَةً", translation: "And [recall] when We made an appointment with Moses for forty nights." },
    { id: 2, number: 52, arabic: "ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِن بَعْدِهِ", translation: "Then you took [for worship] the calf after he had left." },
    { id: 3, number: 53, arabic: "وَأَنتُمْ ظَالِمُونَ", translation: "And you were wrongdoers." }
  ]

  // Load completed verses from storage on mount
  useEffect(() => {
    const progress = progressStorage.get();
    const surahProgress = progress.find(p => p.surahId === 2); // Al-Baqarah
    if (surahProgress) {
      const todayVerseIds = todaysVerses.map(v => v.id);
      const completedToday = surahProgress.completedVerses.filter(id => 
        todayVerseIds.includes(id)
      );
      setCompletedVerses(completedToday);
    }
  }, []);
  const toggleVerse = (verseId: number) => {
    const newCompleted = completedVerses.includes(verseId) 
      ? completedVerses.filter(id => id !== verseId)
      : [...completedVerses, verseId];
    
    setCompletedVerses(newCompleted);
    
    // Save to storage
    const progress = progressStorage.get();
    const surahProgress = progress.find(p => p.surahId === 2);
    const allCompleted = surahProgress ? surahProgress.completedVerses : [];
    
    const updatedCompleted = completedVerses.includes(verseId)
      ? allCompleted.filter(id => id !== verseId)
      : [...allCompleted.filter(id => id !== verseId), verseId];
    
    progressStorage.updateSurah(2, updatedCompleted);
  }

  const toggleVerse = (verseId: number) => {
    const newCompleted = completedVerses.includes(verseId) 
      ? completedVerses.filter(id => id !== verseId)
      : [...completedVerses, verseId];
    
    setCompletedVerses(newCompleted);
    
    // Save to storage
    const progress = progressStorage.get();
    const surahProgress = progress.find(p => p.surahId === 2);
    const allCompleted = surahProgress ? surahProgress.completedVerses : [];
    
    const updatedCompleted = newCompleted.includes(verseId)
      ? [...allCompleted.filter(id => !todaysVerses.map(v => v.id).includes(id)), ...newCompleted]
      : allCompleted.filter(id => id !== verseId);
    
    progressStorage.updateSurah(2, updatedCompleted);
  }
        ? prev.filter(id => id !== verseId)
        : [...prev, verseId]
    )
  }

  return (
    <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/30">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-green-800 dark:text-green-200">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5" />
            <span>Today's Memorization</span>
          </div>
          <Badge variant="outline" className="border-green-300 text-green-700 dark:border-green-700 dark:text-green-300">
            3 verses
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Audio Controls */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <Button
            variant="outline"
            size="icon"
            onClick={restart}
            className="border-green-300 hover:bg-green-200 dark:border-green-700 dark:hover:bg-green-800"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            onClick={toggle}
            className="bg-green-600 hover:bg-green-700 text-white"
            disabled={!!error}
          >
            {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <div className="text-sm text-green-600 dark:text-green-400">
            Mishary Al-Afasy
          </div>
        </div>
        
        {error && (
          <div className="text-sm text-red-600 dark:text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Verses List */}
        <div className="space-y-3">
          {todaysVerses.map((verse) => (
            <div
              key={verse.id}
              className={`p-4 rounded-lg border transition-all ${
                completedVerses.includes(verse.id)
                  ? 'bg-green-200 dark:bg-green-800/50 border-green-300 dark:border-green-600'
                  : 'bg-white dark:bg-gray-800 border-green-200 dark:border-green-700'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  Verse {verse.number}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleVerse(verse.id)}
                  className={`h-8 w-8 p-0 ${
                    completedVerses.includes(verse.id)
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-400'
                  }`}
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <p className="text-right text-lg font-arabic text-gray-900 dark:text-white leading-relaxed">
                  {verse.arabic}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {verse.translation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="flex items-center justify-between pt-4 border-t border-green-200 dark:border-green-800">
          <span className="text-sm text-green-600 dark:text-green-400">
            Progress: {completedVerses.length}/{todaysVerses.length} verses
          </span>
          <div className="w-24 bg-green-200 dark:bg-green-800 rounded-full h-2">
            <div 
              className="bg-green-600 dark:bg-green-400 h-2 rounded-full transition-all"
              style={{ width: `${(completedVerses.length / todaysVerses.length) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}