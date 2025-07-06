"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  BookOpen, 
  BarChart3, 
  Target, 
  Settings, 
  Users, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  Trophy,
  TrendingUp
} from 'lucide-react'

interface SidebarProps {
  className?: string
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: Home, current: true },
  { name: 'Study Sessions', href: '#', icon: BookOpen, current: false },
  { name: 'Progress', href: '#', icon: BarChart3, current: false },
  { name: 'Goals', href: '#', icon: Target, current: false },
  { name: 'Calendar', href: '#', icon: Calendar, current: false },
  { name: 'Achievements', href: '#', icon: Trophy, current: false },
]

const buildingBlocks = [
  { name: 'Journeys', icon: BookOpen },
  { name: 'Personas', icon: Users },
  { name: 'Metrics', icon: TrendingUp },
  { name: 'Insights', icon: BarChart3 },
]

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Qur'an Memorizer</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            {!collapsed && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Main
              </h3>
            )}
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    item.current
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <item.icon className={cn("flex-shrink-0 h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                  {!collapsed && item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Building Blocks */}
          <div>
            {!collapsed && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Building blocks
              </h3>
            )}
            <nav className="space-y-1">
              {buildingBlocks.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <item.icon className={cn("flex-shrink-0 h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                  {!collapsed && item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <Settings className={cn("flex-shrink-0 h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
            {!collapsed && "Settings"}
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <HelpCircle className={cn("flex-shrink-0 h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
            {!collapsed && "Help & support"}
          </a>
        </div>
      </div>
    </div>
  )
}
