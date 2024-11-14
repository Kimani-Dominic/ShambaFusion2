'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2 } from 'lucide-react'

const CROP_TYPES = [
  { value: 'tomatoes', label: 'Tomatoes' },
]

const CROP_STAGES = [
  { value: 'planting', label: 'Planting' },
  { value: 'seedling', label: 'Seedling' },
  { value: 'vegetative', label: 'Vegetative' },
  { value: 'flowering', label: 'Flowering' },
  { value: 'fruiting', label: 'Fruiting' },
  { value: 'harvesting', label: 'Harvesting' },
]

export default function AIInsights() {
  const [selectedCrop, setSelectedCrop] = useState('')
  const [selectedCropStage, setSelectedCropStage] = useState('')
  const [insights, setInsights] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchExistingInsights()
  }, [])

  const fetchExistingInsights = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/insights/`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch existing insights')
      }

      const data = await response.json()
      if (data.length > 0) {
        setSelectedCrop(data[0].crop_type)
        setSelectedCropStage(data[0].crop_stage)
        setInsights(data[0].insights)
      }
    } catch (error) {
      console.error('Error fetching existing insights:', error)
    }
  }

  const generateInsights = async (e) => {
    e.preventDefault()
    if (!selectedCrop || !selectedCropStage) {
      alert('Please select both crop type and crop stage')
      return
    }

    setIsLoading(true)

   
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/insights/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crop_type: selectedCrop,
          crop_stage: selectedCropStage,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate insights')
      }

      const data = await response.json()
      setInsights(data.insights)
    } catch (error) {
      console.error('Error generating insights:', error)
      setInsights('Failed to generate insights. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>AI-Powered Crop Insights</CardTitle>
        <CardDescription>Get personalized insights for your crop based on type and stage</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={generateInsights}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="crop" className="block">Select Crop Type</Label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger id="crop">
                  <SelectValue placeholder="Choose a crop type" />
                </SelectTrigger>
                <SelectContent>
                  {CROP_TYPES.map((crop) => (
                    <SelectItem key={crop.value} value={crop.value}>{crop.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage" className="block">Select Crop Stage</Label>
              <Select value={selectedCropStage} onValueChange={setSelectedCropStage}>
                <SelectTrigger id="stage">
                  <SelectValue placeholder="Choose a crop stage" />
                </SelectTrigger>
                <SelectContent>
                  {CROP_STAGES.map((stage) => (
                    <SelectItem key={stage.value} value={stage.value}>{stage.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Insights...
                </>
              ) : (
                'Generate Insights'
              )}
            </Button>

            {insights && (
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px] rounded-md border p-4">
                      <p>{insights}</p>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

