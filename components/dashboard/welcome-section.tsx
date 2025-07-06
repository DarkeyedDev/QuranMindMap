"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, TrendingUp, Users } from 'lucide-react'

const journeyCards = [
  {
    title: "Start a journey",
    description: "Use a template or start from scratch",
    icon: BookOpen,
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600"
  },
  {
    title: "Create insights",
    description: "Import from CSV or create yourself",
    icon: TrendingUp,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    title: "Create personas",
    description: "Get your customers, tell us a journey",
    icon: Users,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600"
  }
]

const templates = [
  {
    title: "L0 Framework Journey",
    subtitle: "Template",
    color: "bg-pink-100"
  },
  {
    title: "L1 Master Journey",
    subtitle: "Template",
    color: "bg-blue-100"
  },
  {
    title: "L2 Micro Journey",
    subtitle: "Template",
    color: "bg-green-100"
  },
  {
    title: "Story Map",
    subtitle: "Template",
    color: "bg-purple-100"
  },
  {
    title: "Service Blueprint",
    subtitle: "Template",
    color: "bg-yellow-100"
  }
]

export function WelcomeSection() {
  return (
    <div className="space-y-8">
      {/* Journey Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {journeyCards.map((card, index) => (
          <Card key={index} className={`${card.color} hover:shadow-md transition-shadow cursor-pointer`}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-white ${card.iconColor}`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Templates Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Start with a template</h2>
          <Button variant="ghost" size="sm" className="text-blue-600">
            See more
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className={`w-full h-24 ${template.color} rounded-lg mb-3`}></div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">{template.title}</h3>
                <p className="text-xs text-gray-500">{template.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Jump back in section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Jump back in</h2>
          <Button variant="ghost" size="sm" className="text-blue-600">
            View all
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Enhancing Retail Experience</h3>
                  <p className="text-sm text-gray-500">L3 - Task Journey</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">[A] Sample Journey</h3>
                  <p className="text-sm text-gray-500">Template</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
