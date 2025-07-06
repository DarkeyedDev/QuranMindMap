"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BookOpen, Clock, Target } from "lucide-react"

export function ProgressOverview() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Your Progress Today</h2>
        <p className="text-muted-foreground">Track your memorization journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-emerald-800 dark:text-emerald-200">
              <span className="text-sm font-medium">Today's Progress</span>
              <Target className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">75%</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                  Daily Goal
                </Badge>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-emerald-600 dark:text-emerald-400">75% complete</p>
            </div>
            <div className="flex items-center space-x-1 text-sm text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+12% from yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-blue-800 dark:text-blue-200">
              <span className="text-sm font-medium">Verses Mastered</span>
              <BookOpen className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">142</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Total Memorized
                </Badge>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400">+8 this week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-purple-800 dark:text-purple-200">
              <span className="text-sm font-medium">Study Time</span>
              <Clock className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">45m</span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Today's Session
                </Badge>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400">Goal: 60 minutes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}