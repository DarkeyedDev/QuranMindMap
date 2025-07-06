"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

export function CurrentFocus() {
  return (
    <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-100/50 dark:from-amber-950/50 dark:to-amber-900/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-amber-800 dark:text-amber-200">
          <BookOpen className="h-5 w-5" />
          <span>Current Focus</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-300">Al-Baqarah</h3>
            <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300">
              17% complete
            </Badge>
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-400">Ayah 50 of 286</p>
          <Progress value={17} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}