"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Clock, Award } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      title: "Completed Al-Fatihah",
      description: "All 7 verses memorized",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "emerald"
    },
    {
      title: "Progress in Al-Baqarah",
      description: "Reached verse 50",
      time: "4 hours ago",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Study Session",
      description: "45 minutes completed",
      time: "Yesterday",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Milestone Reached",
      description: "100 verses memorized",
      time: "2 days ago",
      icon: Award,
      color: "amber"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <Button variant="outline" size="sm">
          View All Activity
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                  <div className={`w-10 h-10 bg-${activity.color}-100 dark:bg-${activity.color}-900/50 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-5 w-5 text-${activity.color}-600 dark:text-${activity.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground truncate">
                        {activity.title}
                      </h3>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {activity.time}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}