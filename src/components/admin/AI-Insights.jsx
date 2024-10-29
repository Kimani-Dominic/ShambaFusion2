import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Sprout, Cloud, Bug, Droplet, Wheat, Warehouse, Truck } from 'lucide-react'

const crops = ['Corn', 'Wheat', 'Rice', 'Soybeans', 'Potatoes'];
const locations = ['Midwest USA', 'California', 'Texas', 'Florida', 'New York'];

const stages = [
  { id: 'preparation', name: 'Preparation', icon: Sprout },
  { id: 'farming', name: 'Farming', icon: Cloud },
  { id: 'weeding', name: 'Weeding', icon: AlertCircle },
  { id: 'pestControl', name: 'Pest Control', icon: Bug },
  { id: 'irrigation', name: 'Irrigation', icon: Droplet },
  { id: 'harvesting', name: 'Harvesting', icon: Wheat },
  { id: 'storage', name: 'Storage', icon: Warehouse },
  { id: 'transportation', name: 'Transportation', icon: Truck },
];

const AIInsights = () => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [insights, setInsights] = useState(null);

  const generateInsights = () => {
    // In a real application, this would make an API call to an AI service
    // For this example, we'll generate some mock insights
    const mockInsights = {
      preparation: `For ${selectedCrop} in ${selectedLocation}, start soil preparation in early spring. Ensure soil pH is between 6.0-7.0 for optimal growth.`,
      farming: `Plant ${selectedCrop} seeds when soil temperature reaches 50°F (10°C). Space rows 30 inches apart for best yield.`,
      weeding: `Implement a combination of mechanical and chemical weed control methods. Consider using cover crops to suppress weed growth.`,
      pestControl: `Monitor for common pests like corn earworms and cutworms. Use integrated pest management techniques to minimize chemical use.`,
      irrigation: `${selectedCrop} requires about 1 inch of water per week. Use drip irrigation for water efficiency, especially important in ${selectedLocation}.`,
      harvesting: `Harvest ${selectedCrop} when kernels are fully developed and outer husks are dry. Use a combine harvester for efficiency.`,
      storage: `Store ${selectedCrop} at 15% moisture content to prevent mold growth. Use aerated bins to maintain quality.`,
      transportation: `For transportation from ${selectedLocation}, use clean, dry, and well-ventilated trucks. Avoid exposure to moisture during transit.`,
    };
    setInsights(mockInsights);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI-Powered Crop Insights</CardTitle>
        <CardDescription>Get personalized insights for your crop based on location and time of year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div>
            <Label htmlFor="crop">Select Crop</Label>
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger id="crop">
                <SelectValue placeholder="Choose a crop" />
              </SelectTrigger>
              <SelectContent>
                {crops.map((crop) => (
                  <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="location">Select Location</Label>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger id="location">
                <SelectValue placeholder="Choose a location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Current Date</Label>
            <Input
              type="date"
              id="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={generateInsights} className="w-full mb-6">Generate Insights</Button>
        
        {insights && (
          <Tabs defaultValue="preparation">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-4">
              {stages.map(({ id, name, icon: Icon }) => (
                <TabsTrigger key={id} value={id} className="flex flex-col items-center text-center py-2">
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-xs">{name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {stages.map(({ id, name, icon: Icon }) => (
              <TabsContent key={id} value={id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon className="h-6 w-6 mr-2" />
                      {name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px] rounded-md border p-4">
                      <p>{insights[id]}</p>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default AIInsights;