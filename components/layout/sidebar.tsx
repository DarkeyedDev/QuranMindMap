"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
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
  RotateCcw,
  Flame,
  Crown
} from 'lucide-react'

interface SidebarProps {
  collapsed?: boolean
  onToggle?: (collapsed: boolean) => void
  className?: string
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: Home, current: true },
  { name: 'Memorize Today', href: '#', icon: BookOpen, current: false, badge: '3' },
  { name: 'Goals', href: '#', icon: Target, current: false },
  { name: 'Review', href: '#', icon: RotateCcw, current: false, badge: '12' },
  { name: 'Calendar', href: '#', icon: Calendar, current: false },
  { name: 'Achievements', href: '#', icon: Trophy, current: false },
]

const buildingBlocks = [
  { name: 'Progress', icon: BarChart3 },
  { name: 'Community', icon: Users },
  { name: 'Challenges', icon: Flame },
]

export function Sidebar({ collapsed = false, onToggle, className }: SidebarProps) {
  const handleToggle = () => {
    onToggle?.(!collapsed)
  }

  return (
    <div className={cn(
      "flex flex-col h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">Qur'an</span>
              <div className="text-sm text-gray-500 dark:text-gray-400">Memorizer</div>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggle}
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
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
            )}
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group",
                    item.current
                      ? "bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-r-2 border-blue-700 dark:border-blue-300"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  )}
                >
                  <item.icon className={cn(
                    "flex-shrink-0 h-5 w-5", 
                    collapsed ? "mx-auto" : "mr-3",
                    item.current ? "text-blue-700 dark:text-blue-300" : ""
                  )} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Building Blocks */}
          <div>
            {!collapsed && (
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Explore
              </h3>
            )}
            <nav className="space-y-1">
              {buildingBlocks.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <item.icon className={cn("flex-shrink-0 h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                  {!collapsed && item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className={cn("flex items-center", collapsed ? "justify-center" : "space-x-3")}>
          <Avatar className="h-8 w-8 border-2 border-blue-500">
            <AvatarImage src="/avatars/ahmad.jpg" alt="Ahmad" />
            <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">A</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Ahmad</p>
                <Crown className="h-4 w-4 text-yellow-500" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Premium Plan</p>
            </div>
          )}
        </div>
        
        {!collapsed && (
          <div className="mt-3 space-y-1">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings className="flex-shrink-0 h-4 w-4 mr-3" />
              Settings
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <HelpCircle className="flex-shrink-0 h-4 w-4 mr-3" />
              Help & Support
            </a>
          </div>
        )}
      </div>
    </div>
  )
}