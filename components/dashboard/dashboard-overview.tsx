"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Trophy, Users, Target } from 'lucide-react'

export function DashboardOverview() {
  const achievements = [
    { name: "First Surah", icon: "🎯", unlocked: true },
    { name: "7-Day Streak", icon: "🔥", unlocked: true },
    { name: "100 Verses", icon: "📖", unlocked: false },
    { name: "Perfect Week", icon: "⭐", unlocked: false }
  ]

  const upcomingGoals = [
    { name: "Complete Al-Fatihah", progress: 100, target: "Completed" },
    { name: "Memorize 50 verses", progress: 42, target: "50 verses" },
    { name: "7-day streak", progress: 100, target: "Achieved" }
  ]

  return (
    <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-900/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
          <Trophy className="h-5 w-5" />
          <span>Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Recent Achievements */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Recent Achievements</h4>
          <div className="grid grid-cols-2 gap-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border text-center ${
                  achievement.unlocked
                    ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800'
                    : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 opacity-50'
                }`}
              >
                <div className="text-lg mb-1">{achievement.icon}</div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {achievement.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Progress */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Current Goals</h4>
          <div className="space-y-3">
            {upcomingGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{goal.name}</span>
                  <Badge variant={goal.progress === 100 ? "default" : "secondary"} className="text-xs">
                    {goal.target}
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Users className="h-4 w-4 mr-2" />
            Join Community
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Target className="h-4 w-4 mr-2" />
            Set New Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}