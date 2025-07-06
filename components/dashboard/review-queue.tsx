"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RotateCcw, Clock, AlertTriangle, CheckCircle } from 'lucide-react'

export function ReviewQueue() {
  const reviewItems = [
    {
      id: 1,
      surah: "Al-Fatihah",
      verses: "1-7",
      dueDate: "Today",
      priority: "high",
      lastReviewed: "3 days ago"
    },
    {
      id: 2,
      surah: "Al-Baqarah",
      verses: "1-20",
      dueDate: "Today",
      priority: "medium",
      lastReviewed: "1 week ago"
    },
    {
      id: 3,
      surah: "Al-Baqarah",
      verses: "21-35",
      dueDate: "Tomorrow",
      priority: "low",
      lastReviewed: "2 days ago"
    },
    {
      id: 4,
      surah: "Al-Imran",
      verses: "1-10",
      dueDate: "In 2 days",
      priority: "low",
      lastReviewed: "1 day ago"
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800'
      default:
        return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="h-4 w-4" />
      case 'medium':
        return <Clock className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
    }
  }

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/30">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-purple-800 dark:text-purple-200">
          <div className="flex items-center space-x-2">
            <RotateCcw className="h-5 w-5" />
            <span>Review Queue</span>
          </div>
          <Badge variant="outline" className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300">
            {reviewItems.filter(item => item.dueDate === "Today").length} due today
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {reviewItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full border ${getPriorityColor(item.priority)}`}>
                  {getPriorityIcon(item.priority)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {item.surah}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Verses {item.verses}</span>
                    <span>•</span>
                    <span>Last reviewed {item.lastReviewed}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    item.dueDate === "Today" 
                      ? "text-red-600 dark:text-red-400" 
                      : "text-gray-600 dark:text-gray-400"
                  }`}>
                    {item.dueDate}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Review
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 pt-4 border-t border-purple-200 dark:border-purple-800">
          <Button variant="outline" size="sm" className="flex-1">
            Review All Due
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Schedule Review
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}