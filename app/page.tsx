"use client"

import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { WelcomeSection } from '@/components/dashboard/welcome-section'
import { AnalyticsPanel } from '@/components/dashboard/analytics-panel'
import { useState } from 'react'

export default function Home() {
  const [activeView, setActiveView] = useState<'welcome' | 'analytics'>('welcome')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {/* View Toggle */}
            <div className="mb-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveView('welcome')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === 'welcome'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Welcome Dashboard
                </button>
                <button
                  onClick={() => setActiveView('analytics')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === 'analytics'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Analytics View
                </button>
              </div>
            </div>

            {/* Content */}
            {activeView === 'welcome' ? <WelcomeSection /> : <AnalyticsPanel />}
          </div>
        </main>
      </div>
    </div>
  )
}