"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, BarChart3, Target } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Add Verse",
      description: "Start memorizing",
      icon: Plus,
      color: "emerald"
    },
    {
      title: "Find Surah",
      description: "Browse & search",
      icon: Search,
      color: "blue"
    },
    {
      title: "View Stats",
      description: "Track progress",
      icon: BarChart3,
      color: "purple"
    },
    {
      title: "Set Goals",
      description: "Daily targets",
      icon: Target,
      color: "amber"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Quick Actions</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Card key={index} className={`border-${action.color}-200 bg-gradient-to-br from-${action.color}-50 to-${action.color}-100/50 dark:from-${action.color}-950/50 dark:to-${action.color}-900/30 hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}>
              <CardContent className="p-4 text-center space-y-3">
                <div className={`w-12 h-12 bg-${action.color}-100 dark:bg-${action.color}-900/50 rounded-full flex items-center justify-center mx-auto`}>
                  <Icon className={`h-6 w-6 text-${action.color}-600 dark:text-${action.color}-400`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-${action.color}-800 dark:text-${action.color}-200`}>
                    {action.title}
                  </h3>
                  <p className={`text-xs text-${action.color}-600 dark:text-${action.color}-400`}>
                    {action.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}