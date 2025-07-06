"use client"

import { DashboardHeader } from '@/components/dashboard/header'
import { ProgressOverview } from '@/components/dashboard/progress-overview'
import { CurrentFocus } from '@/components/dashboard/current-focus'
import { StudySessions } from '@/components/dashboard/study-sessions'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2 mb-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continue your memorization journey with today's session. You're making excellent progress!
          </p>
        </div>
        
        <ProgressOverview />
        
        <CurrentFocus />
        
        <StudySessions />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}