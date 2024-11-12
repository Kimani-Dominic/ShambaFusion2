import React from 'react'
import { Card, CardContent } from "../ui/card"

export default function DashboardLanding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            Welcome to your dashboard
          </h1>
        </CardContent>
      </Card>
    </div>
  )
}