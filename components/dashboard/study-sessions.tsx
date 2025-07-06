"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, AlertCircle, Plus, Play } from "lucide-react"

export function StudySessions() {
  const sessions = [
    {
      title: "Daily Review",
      description: "12 verses ready for review",
      duration: "≈ 15 minutes",
      count: 12,
      icon: RefreshCw,
      color: "emerald",
      status: "Ready to start"
    },
    {
      title: "Needs Practice",
      description: "8 verses to strengthen",
      duration: "≈ 10 minutes",
      count: 8,
      icon: AlertCircle,
      color: "orange",
      status: "Needs attention"
    },
    {
      title: "Learn New",
      description: "5 Continue with new verses",
      duration: "≈ 20 minutes",
      count: 5,
      icon: Plus,
      color: "blue",
      status: "Continue learning"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Study Sessions</h2>
        <p className="text-muted-foreground">Progress Tracker</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessions.map((session, index) => {
          const Icon = session.icon
          return (
            <Card key={index} className={`border-${session.color}-200 bg-gradient-to-br from-${session.color}-50 to-${session.color}-100/50 dark:from-${session.color}-950/50 dark:to-${session.color}-900/30 hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-3">
                <CardTitle className={`flex items-center justify-between text-${session.color}-800 dark:text-${session.color}-200`}>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-5 w-5" />
                    <span className="text-lg">{session.title}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`border-${session.color}-300 text-${session.color}-700 dark:border-${session.color}-700 dark:text-${session.color}-300`}>
                      {session.count} items
                    </Badge>
                    <span className={`text-xs text-${session.color}-600 dark:text-${session.color}-400`}>{session.status}</span>
                  </div>
                  <p className={`text-sm text-${session.color}-700 dark:text-${session.color}-300 font-medium`}>
                    {session.description}
                  </p>
                  <p className={`text-xs text-${session.color}-600 dark:text-${session.color}-400`}>
                    {session.duration}
                  </p>
                </div>
                <Button 
                  className={`w-full bg-${session.color}-600 hover:bg-${session.color}-700 text-white`}
                  size="sm"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Session
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}