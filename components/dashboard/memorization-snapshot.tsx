"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Target } from 'lucide-react'

export function MemorizationSnapshot() {
  const currentSurah = "Al-Baqarah"
  const progress = 17
  const versesMemorized = 50
  const totalVerses = 286
  const weeklyGoal = 75
  const weeklyProgress = 68

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
          <BookOpen className="h-5 w-5" />
          <span>Current Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Surah Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">{currentSurah}</h3>
            <Badge variant="outline" className="border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300">
              {progress}% complete
            </Badge>
          </div>
          
          {/* Circular Progress Ring */}
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-blue-200 dark:text-blue-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                  className="text-blue-600 dark:text-blue-400"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-700 dark:text-blue-300">{progress}%</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
            Ayah {versesMemorized} of {totalVerses}
          </p>
        </div>

        {/* Weekly Goal */}
        <div className="space-y-3 pt-4 border-t border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Weekly Goal</span>
            </div>
            <span className="text-sm text-blue-600 dark:text-blue-400">{weeklyProgress}% of {weeklyGoal}%</span>
          </div>
          <Progress value={weeklyProgress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}