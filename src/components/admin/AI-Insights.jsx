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




// 'use client'

// import React, { useState, useEffect } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Loader2 } from 'lucide-react'

// const CROP_TYPES = [
//   { value: 'tomatoes', label: 'Tomatoes' },
// ]

// const CROP_STAGES = [
//   { value: 'planting', label: 'Planting' },
//   { value: 'seedling', label: 'Seedling' },
//   { value: 'vegetative', label: 'Vegetative' },
//   { value: 'flowering', label: 'Flowering' },
//   { value: 'fruiting', label: 'Fruiting' },
//   { value: 'harvesting', label: 'Harvesting' },
// ]

// export default function AIInsights() {
//   const [selectedCrop, setSelectedCrop] = useState('')
//   const [selectedCropStage, setSelectedCropStage] = useState('')
//   const [insights, setInsights] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     fetchExistingInsights()
//   }, [])
  










//   const fetchExistingInsights = async () => {
//     try {
//       const response = await fetch('/api/insights/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any authentication headers if required
//         },
//       })

//       if (!response.ok) {
//         throw new Error('Failed to fetch existing insights')
//       }

//       const data = await response.json()
//       if (data.length > 0) {
//         setSelectedCrop(data[0].crop_type)
//         setSelectedCropStage(data[0].crop_stage)
//         setInsights(data[0].insights)
//       }
//     } catch (error) {
//       console.error('Error fetching existing insights:', error)
//     }
//   }

//   const generateInsights = async () => {
//     if (!selectedCrop || !selectedCropStage) {
//       alert('Please select both crop type and crop stage')
//       return
//     }

//     setIsLoading(true)
//     try {
//       const response = await fetch('/api/insights/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any authentication headers if required
//         },
//         body: JSON.stringify({
//           crop_type: selectedCrop,
//           crop_stage: selectedCropStage,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to generate insights')
//       }

//       const data = await response.json()
//       setInsights(data.insights)
//     } catch (error) {
//       console.error('Error generating insights:', error)
//       setInsights('Failed to generate insights. Please try again.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle>AI-Powered Crop Insights</CardTitle>
//         <CardDescription>Get personalized insights for your crop based on type and stage</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <Label htmlFor="crop" className="mb-2 block">Select Crop Type</Label>
//             <Select value={selectedCrop} onValueChange={setSelectedCrop}>
//               <SelectTrigger id="crop">
//                 <SelectValue placeholder="Choose a crop type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {CROP_TYPES.map((crop) => (
//                   <SelectItem key={crop.value} value={crop.value}>{crop.label}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="stage" className="mb-2 block">Select Crop Stage</Label>
//             <Select value={selectedCropStage} onValueChange={setSelectedCropStage}>
//               <SelectTrigger id="stage">
//                 <SelectValue placeholder="Choose a crop stage" />
//               </SelectTrigger>
//               <SelectContent>
//                 {CROP_STAGES.map((stage) => (
//                   <SelectItem key={stage.value} value={stage.value}>{stage.label}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//         <Button onClick={generateInsights} className="w-full mb-6" disabled={isLoading}>
//           {isLoading ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Generating Insights...
//             </>
//           ) : (
//             'Generate Insights'
//           )}
//         </Button>
        
//         {insights && (
//           <Card>
//             <CardHeader>
//               <CardTitle>AI Insights</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ScrollArea className="h-[200px] rounded-md border p-4">
//                 <p>{insights}</p>
//               </ScrollArea>
//             </CardContent>
//           </Card>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
// import { AlertCircle, Sprout, Cloud, Bug, Droplet, Wheat, Warehouse, Truck } from 'lucide-react'

// const crops = ['Heirloom Tomatoes', 'Plum Tomatoes', 'Grape', 'Organic Tomatoes'];
// // const locations = ['Murang\'a', 'Sagana', 'Maragua', 'Kenol', 'Sagana'];

// const stages = [
//   { id: 'preparation', name: 'Preparation', icon: Sprout },
//   { id: 'farming', name: 'Farming', icon: Cloud },
//   { id: 'weeding', name: 'Weeding', icon: AlertCircle },
//   { id: 'pestControl', name: 'Pest Control', icon: Bug },
//   { id: 'irrigation', name: 'Irrigation', icon: Droplet },
//   { id: 'harvesting', name: 'Harvesting', icon: Wheat },
//   { id: 'storage', name: 'Storage', icon: Warehouse },
//   { id: 'transportation', name: 'Transportation', icon: Truck },
// ];

// const AIInsights = () => {
//   const [selectedCrop, setSelectedCrop] = useState('');
//   const [selectedCropStage, setSelectedCropStage] = useState('');
//   // const [selectedLocation, setSelectedLocation] = useState('');
//   // const [currentDate, setCurrentDate] = useState('');
//   const [insights, setInsights] = useState(null);

//   const generateInsights = () => {
//     // In a real application, this would make an API call to an AI service
//     // For this example, we'll generate some mock insights
//     const mockInsights = {
//       preparation: `For ${selectedCrop} in ${selectedLocation}, start soil preparation in early spring. Ensure soil pH is between 6.0-7.0 for optimal growth.`,
//       farming: `Plant ${selectedCrop} seeds when soil temperature reaches 50°F (10°C). Space rows 30 inches apart for best yield.`,
//       weeding: `Implement a combination of mechanical and chemical weed control methods. Consider using cover crops to suppress weed growth.`,
//       pestControl: `Monitor for common pests like corn earworms and cutworms. Use integrated pest management techniques to minimize chemical use.`,
//       irrigation: `${selectedCrop} requires about 1 inch of water per week. Use drip irrigation for water efficiency, especially important in ${selectedLocation}.`,
//       harvesting: `Harvest ${selectedCrop} when kernels are fully developed and outer husks are dry. Use a combine harvester for efficiency.`,
//       storage: `Store ${selectedCrop} at 15% moisture content to prevent mold growth. Use aerated bins to maintain quality.`,
//       transportation: `For transportation from ${selectedLocation}, use clean, dry, and well-ventilated trucks. Avoid exposure to moisture during transit.`,
//     };
//     setInsights(mockInsights);
//   };

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle>AI-Powered Crop Insights</CardTitle>
//         <CardDescription>Get personalized insights for your crop based on location and time of year</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4 md:grid-cols-3 mb-6">
//           <div>
//             <Label htmlFor="crop">Select Tomato Variant</Label>
//             <Select value={selectedCrop} onValueChange={setSelectedCrop}>
//               <SelectTrigger id="crop">
//                 <SelectValue placeholder="Choose a crop" />
//               </SelectTrigger>
//               <SelectContent>
//                 {crops.map((crop) => (
//                   <SelectItem key={crop} value={crop}>{crop}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="location">Select Crop stage</Label>
//             <Select value={setSelectedCropStage} onValueChange={setSelectedCropStage}>
//               <SelectTrigger id="location">
//                 <SelectValue placeholder="Choose a location" />
//               </SelectTrigger>
//               <SelectContent>
//                 {locations.map((location) => (
//                   <SelectItem key={location} value={location}>{location}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="date">Current Date</Label>
//             <Input
//               type="date"
//               id="date"
//               value={currentDate}
//               onChange={(e) => setCurrentDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <Button onClick={generateInsights} className="w-full mb-6">Generate Insights</Button>
        
//         {insights && (
//           <Tabs defaultValue="preparation">
//             <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-4">
//               {stages.map(({ id, name, icon: Icon }) => (
//                 <TabsTrigger key={id} value={id} className="flex flex-col items-center text-center py-2">
//                   <Icon className="h-5 w-5 mb-1" />
//                   <span className="text-xs">{name}</span>
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//             {stages.map(({ id, name, icon: Icon }) => (
//               <TabsContent key={id} value={id}>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center">
//                       <Icon className="h-6 w-6 mr-2" />
//                       {name}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <ScrollArea className="h-[200px] rounded-md border p-4">
//                       <p>{insights[id]}</p>
//                     </ScrollArea>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             ))}
//           </Tabs>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default AIInsights;