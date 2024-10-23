import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Calendar, Percent, Eye, ShoppingCart, TrendingUp } from 'lucide-react';

// Sample marketing data
const initialCampaigns = [
  { id: 1, name: 'Summer Discount', discount: 20, startDate: '2024-09-01', endDate: '2024-09-30', views: 120, conversions: 10, data: [
    { day: 'Day 1', views: 10, conversions: 1 },
    { day: 'Day 2', views: 20, conversions: 2 },
    { day: 'Day 3', views: 30, conversions: 3 },
    { day: 'Day 4', views: 40, conversions: 4 },
    { day: 'Day 5', views: 50, conversions: 5 },
    { day: 'Day 6', views: 60, conversions: 6 },
    { day: 'Day 7', views: 70, conversions: 7 },
  ]},
  { id: 2, name: 'Harvest Fest', discount: 15, startDate: '2024-10-01', endDate: '2024-10-15', views: 85, conversions: 5, data: [
    { day: 'Day 1', views: 5, conversions: 0 },
    { day: 'Day 2', views: 10, conversions: 1 },
    { day: 'Day 3', views: 15, conversions: 1 },
    { day: 'Day 4', views: 20, conversions: 2 },
    { day: 'Day 5', views: 25, conversions: 3 },
    { day: 'Day 6', views: 30, conversions: 4 },
    { day: 'Day 7', views: 35, conversions: 5 },
  ]},
];

const MarketingTools = () => {
  const [campaigns] = useState(initialCampaigns);

  const getConversionRate = (conversions, views) => {
    return views ? ((conversions / views) * 100).toFixed(2) : 0;
  };

  const CampaignCard = ({ campaign }) => (
    <Card>
      <CardHeader>
        <CardTitle>{campaign.name}</CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{campaign.startDate} - {campaign.endDate}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Discount</span>
            <div className="flex items-center">
              <Percent className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-2xl font-bold">{campaign.discount}%</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Views</span>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-2xl font-bold">{campaign.views}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Conversions</span>
            <div className="flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2 text-purple-500" />
              <span className="text-2xl font-bold">{campaign.conversions}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Conversion Rate</span>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-orange-500" />
              <span className="text-2xl font-bold">{getConversionRate(campaign.conversions, campaign.views)}%</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <ChartContainer
            config={{
              views: {
                label: "Views",
                color: "hsl(var(--chart-1))",
              },
              conversions: {
                label: "Conversions",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={campaign.data}>
                <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="views" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="conversions" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Marketing Tools</h2>
      
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="analytics">Detailed Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Overview of your current marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              {campaigns.length === 0 ? (
                <p className="text-center text-muted-foreground">No active campaigns at the moment.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Conversions</TableHead>
                      <TableHead>Conversion Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaigns.map(campaign => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">{campaign.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{campaign.discount}%</Badge>
                        </TableCell>
                        <TableCell>{campaign.views}</TableCell>
                        <TableCell>{campaign.conversions}</TableCell>
                        <TableCell>{getConversionRate(campaign.conversions, campaign.views)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="grid gap-6 md:grid-cols-2">
            {campaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingTools;