import React, { useState } from 'react';
import { useRole } from '../../hooks/useRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Package, Clock, CheckCircle, XCircle, TrendingUp, MapPin, Bell, Filter } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const Logistics = () => {
  const { role } = useRole();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New delivery request: #7890", read: false },
    { id: 2, message: "Delivery #5678 is out for delivery", read: true },
  ]);
  const [filter, setFilter] = useState('all');

  const DeliveryItem = ({ id, status, location }) => (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <Package className="mr-2 h-4 w-4 text-muted-foreground" />
        <span>Order #{id}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
        <span className="mr-4 text-sm text-muted-foreground">{location}</span>
        <Badge variant={status === 'Delivered' ? 'success' : status === 'In Transit' ? 'warning' : 'secondary'}>
          {status}
        </Badge>
      </div>
    </div>
  );

  const MetricCard = ({ title, value, icon: Icon }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );

  const performanceData = [
    { day: 'Mon', deliveries: 12 },
    { day: 'Tue', deliveries: 19 },
    { day: 'Wed', deliveries: 15 },
    { day: 'Thu', deliveries: 22 },
    { day: 'Fri', deliveries: 30 },
    { day: 'Sat', deliveries: 18 },
    { day: 'Sun', deliveries: 10 },
  ];

  const renderVendorLogistics = () => (
    <Tabs defaultValue="current" className="space-y-4">
      <TabsList>
        <TabsTrigger value="current">Current Deliveries</TabsTrigger>
        <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
        <TabsTrigger value="manage">Manage Requests</TabsTrigger>
      </TabsList>
      <TabsContent value="current">
        <Card>
          <CardHeader>
            <CardTitle>Current Deliveries</CardTitle>
            <CardDescription>Overview of ongoing deliveries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <Input placeholder="Search deliveries..." className="max-w-sm" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="in-transit">In Transit</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DeliveryItem id="1234" status="In Transit" location="En route to New York" />
            <DeliveryItem id="5678" status="Delivered" location="Chicago, IL" />
            <DeliveryItem id="9101" status="Pending" location="Warehouse, Dallas" />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="metrics">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard title="Average Delivery Time" value="2 days" icon={Clock} />
          <MetricCard title="Successful Deliveries" value="45" icon={CheckCircle} />
          <MetricCard title="Pending Deliveries" value="3" icon={Package} />
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>Number of deliveries per day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                deliveries: {
                  label: "Deliveries",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="deliveries" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="manage">
        <Card>
          <CardHeader>
            <CardTitle>Manage Delivery Requests</CardTitle>
            <CardDescription>Approve or reject pending delivery requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>New delivery request: #7890</span>
              <div>
                <Button variant="outline" size="sm" className="mr-2">
                  <CheckCircle className="mr-2 h-4 w-4" /> Approve
                </Button>
                <Button variant="outline" size="sm">
                  <XCircle className="mr-2 h-4 w-4" /> Reject
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  const renderSellerLogistics = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Pending Deliveries</CardTitle>
          <CardDescription>Overview of orders awaiting delivery</CardDescription>
        </CardHeader>
        <CardContent>
          <DeliveryItem id="1234" status="Awaiting Pickup" location="Warehouse, Seattle" />
          <DeliveryItem id="5678" status="Out for Delivery" location="En route to Los Angeles" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Delivery Performance</CardTitle>
          <CardDescription>Summary of your delivery statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <MetricCard title="On-time Deliveries" value="20" icon={CheckCircle} />
            <MetricCard title="Delayed Deliveries" value="2" icon={Clock} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Schedule a Pickup</CardTitle>
          <CardDescription>Arrange for a delivery service to collect your packages</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Pickup Date</label>
                <Input type="date" id="pickup-date" className="mt-1" />
              </div>
              <div>
                <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">Pickup Time</label>
                <Input type="time" id="pickup-time" className="mt-1" />
              </div>
            </div>
            <div>
              <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <Input type="text" id="pickup-location" placeholder="Enter address" className="mt-1" />
            </div>
            <Button>Schedule Pickup</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{role === 'vendor' ? 'Vendor' : 'Seller'} Logistics</h2>
        <div className="relative">
          <Bell className="h-6 w-6 text-muted-foreground cursor-pointer" />
          {notifications.some(n => !n.read) && (
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          )}
        </div>
      </div>
      {role === 'vendor' && renderVendorLogistics()}
      {role === 'seller' && renderSellerLogistics()}
    </div>
  );
};

export default Logistics;