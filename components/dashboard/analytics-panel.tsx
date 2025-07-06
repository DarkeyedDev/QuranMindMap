"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react'

export function AnalyticsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Journey / Enhancing Retail Experience</h2>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant="secondary" className="bg-red-100 text-red-700">Journey</Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">Insights</Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">Opportunities</Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">Solutions</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">Metrics</Badge>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Phases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Brand Awareness</span>
                <Badge className="bg-pink-100 text-pink-700">Phase</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Recognizing Quality</span>
                <Badge className="bg-blue-100 text-blue-700">Phase</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Considering Options</span>
                <Badge className="bg-purple-100 text-purple-700">Phase</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Customer Effort Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">17.7</span>
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </div>
                <p className="text-sm text-gray-500">Below target</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">91%</span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-sm text-gray-500">Above target</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Weekly</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experience Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-gray-600">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-4 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 120">
                  <path
                    d="M0,60 Q100,20 200,40 T400,60"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                  <circle cx="100" cy="35" r="4" fill="#8B5CF6" />
                  <circle cx="200" cy="40" r="4" fill="#8B5CF6" />
                  <circle cx="300" cy="50" r="4" fill="#8B5CF6" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Experience journey visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-gray-600">Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Improve product discovery</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Enhance checkout process</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Personalize recommendations</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
