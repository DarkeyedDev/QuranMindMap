"use client"

import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { DashboardOverview } from '@/components/dashboard/dashboard-overview'
import { TodaysTask } from '@/components/dashboard/todays-task'
import { StreakStats } from '@/components/dashboard/streak-stats'
import { ReviewQueue } from '@/components/dashboard/review-queue'
import { MemorizationSnapshot } from '@/components/dashboard/memorization-snapshot'
import { useState } from 'react'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar collapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, Ahmad! 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Continue your spiritual journey with today's memorization goals
              </p>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Memorization Snapshot */}
              <div className="xl:col-span-1">
                <MemorizationSnapshot />
              </div>

              {/* Today's Task */}
              <div className="xl:col-span-1">
                <TodaysTask />
              </div>

              {/* Streak & Stats */}
              <div className="xl:col-span-1">
                <StreakStats />
              </div>

              {/* Review Queue - spans 2 columns on larger screens */}
              <div className="md:col-span-2 xl:col-span-2">
                <ReviewQueue />
              </div>

              {/* Dashboard Overview - spans remaining space */}
              <div className="xl:col-span-1">
                <DashboardOverview />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}