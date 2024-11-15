"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, Droplets, Thermometer, TrendingUp } from 'lucide-react'

// Mock data for the price prediction chart
const mockPredictionData = [
  { month: 'Jan', actualPrice: 25, predictedPrice: 27 },
  { month: 'Feb', actualPrice: 27, predictedPrice: 28 },
  { month: 'Mar', actualPrice: 28, predictedPrice: 30 },
  { month: 'Apr', actualPrice: 31, predictedPrice: 32 },
  { month: 'May', actualPrice: 33, predictedPrice: 34 },
  { month: 'Jun', actualPrice: 32, predictedPrice: 35 },
  { month: 'Jul', actualPrice: null, predictedPrice: 37 },
  { month: 'Aug', actualPrice: null, predictedPrice: 39 },
  { month: 'Sep', actualPrice: null, predictedPrice: 40 },
]

export default function TomatoPricePredictor() {
  const [region, setRegion] = useState('central')
  const [weatherCondition, setWeatherCondition] = useState('normal')
  const [supplyLevel, setSupplyLevel] = useState(50)

  const currentPrice = 32
  const predictedPrice = 37
  const priceChange = ((predictedPrice - currentPrice) / currentPrice) * 100

  const updatePrediction = () => {
    // In a real application, this would call an API to update the prediction
    console.log('Updating prediction with:', { region, weatherCondition, supplyLevel })
    alert('Prediction updated! (This is a mock update)')
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Tomato Price Predictor</CardTitle>
        <CardDescription>Forecast future tomato prices based on market trends and conditions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">KES {currentPrice.toFixed(2)}/kg</div>
              <p className="text-xs text-muted-foreground">As of today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Predicted Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">KES {predictedPrice.toFixed(2)}/kg</div>
              <p className="text-xs text-muted-foreground">Next month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Price Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center">
                {priceChange >= 0 ? (
                  <>
                    <ArrowUpRight className="text-green-500 mr-1" />
                    <span className="text-green-500">+{priceChange.toFixed(2)}%</span>
                  </>
                ) : (
                  <>
                    <ArrowDownRight className="text-red-500 mr-1" />
                    <span className="text-red-500">{priceChange.toFixed(2)}%</span>
                  </>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Projected change</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Price Prediction Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                actualPrice: {
                  label: "Actual Price",
                  color: "hsl(var(--chart-1))",
                },
                predictedPrice: {
                  label: "Predicted Price",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockPredictionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="actualPrice" stroke="var(--color-actualPrice)" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="predictedPrice" stroke="var(--color-predictedPrice)" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Adjust Prediction Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                      <SelectItem value="central">Central</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weather">Weather Condition</Label>
                  <Select value={weatherCondition} onValueChange={setWeatherCondition}>
                    <SelectTrigger id="weather">
                      <SelectValue placeholder="Select weather condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drought">
                        <div className="flex items-center">
                          <Thermometer className="mr-2 h-4 w-4" />
                          Drought
                        </div>
                      </SelectItem>
                      <SelectItem value="normal">
                        <div className="flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Normal
                        </div>
                      </SelectItem>
                      <SelectItem value="excessive_rain">
                        <div className="flex items-center">
                          <Droplets className="mr-2 h-4 w-4" />
                          Excessive Rain
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supply">Expected Supply Level</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="supply"
                    min={0}
                    max={100}
                    step={1}
                    value={[supplyLevel]}
                    onValueChange={(value) => setSupplyLevel(value[0])}
                    className="flex-grow"
                  />
                  <span className="font-medium">{supplyLevel}%</span>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={updatePrediction} className="w-full">Update Prediction</Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  )
}