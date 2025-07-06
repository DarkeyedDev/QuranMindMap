"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, TrendingUp, Clock, Award } from 'lucide-react'

export function StreakStats() {
  const stats = [
    {
      label: "Current Streak",
      value: "7 days",
      icon: Flame,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      label: "Avg. Verses/Day",
      value: "4.2",
      icon: TrendingUp,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      label: "Study Time Today",
      value: "23 min",
      icon: Clock,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      label: "Longest Streak",
      value: "21 days",
      icon: Award,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
    }
  ]

  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/50 dark:to-orange-900/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
          <Flame className="h-5 w-5" />
          <span>Your Stats</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-2">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Weekly Progress */}
        <div className="pt-4 border-t border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">This Week</span>
            <Badge variant="outline" className="border-orange-300 text-orange-700 dark:border-orange-700 dark:text-orange-300">
              5/7 days
            </Badge>
          </div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                className={`flex-1 h-2 rounded-full ${
                  day <= 5 
                    ? 'bg-orange-500 dark:bg-orange-400' 
                    : 'bg-orange-200 dark:bg-orange-800'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-orange-600 dark:text-orange-400 mt-1">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}