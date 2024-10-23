import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Package, Calendar, Search, SortAsc, SortDesc, Plus, MapPin, BarChart } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const initialShipments = [
  { id: 1, orderId: "ORD-001", status: "In Transit", destination: "New York, NY", estimatedDelivery: "2024-10-15" },
  { id: 2, orderId: "ORD-002", status: "Delivered", destination: "Los Angeles, CA", estimatedDelivery: "2024-10-10" },
  { id: 3, orderId: "ORD-003", status: "Preparing", destination: "Chicago, IL", estimatedDelivery: "2024-10-20" },
];

const performanceData = [
  { day: 'Mon', shipments: 12 },
  { day: 'Tue', shipments: 19 },
  { day: 'Wed', shipments: 15 },
  { day: 'Thu', shipments: 22 },
  { day: 'Fri', shipments: 30 },
  { day: 'Sat', shipments: 18 },
  { day: 'Sun', shipments: 10 },
];

const Shipment = () => {
  const [shipments, setShipments] = useState(initialShipments);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'estimatedDelivery', direction: 'asc' });
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [newShipment, setNewShipment] = useState({ orderId: '', destination: '', estimatedDelivery: '' });

  const filteredShipments = shipments
    .filter(shipment => filterStatus === 'all' || shipment.status === filterStatus)
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleStatusUpdate = (id, newStatus) => {
    setShipments(shipments.map(shipment =>
      shipment.id === id ? { ...shipment, status: newStatus } : shipment
    ));
  };

  const handleNewShipment = (e) => {
    e.preventDefault();
    const id = shipments.length + 1;
    setShipments([...shipments, { id, status: 'Preparing', ...newShipment }]);
    setNewShipment({ orderId: '', destination: '', estimatedDelivery: '' });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Shipment Management</CardTitle>
        <CardDescription>Manage and track your shipments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current Shipments</TabsTrigger>
            <TabsTrigger value="new">Create Shipment</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Preparing">Preparing</SelectItem>
                    <SelectItem value="In Transit">In Transit</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" onClick={() => handleSort('estimatedDelivery')}>
                  {sortConfig.key === 'estimatedDelivery' && sortConfig.direction === 'asc' ? <SortAsc /> : <SortDesc />}
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search shipments..." className="pl-8 w-[300px]" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort('estimatedDelivery')}>
                      Estimated Delivery
                      {sortConfig.key === 'estimatedDelivery' && (sortConfig.direction === 'asc' ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
                    </Button>
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredShipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell>{shipment.orderId}</TableCell>
                    <TableCell>
                      <Badge variant={
                        shipment.status === 'Delivered' ? 'success' :
                        shipment.status === 'In Transit' ? 'warning' : 'secondary'
                      }>
                        {shipment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{shipment.destination}</TableCell>
                    <TableCell>{shipment.estimatedDelivery}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedShipment(shipment)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Shipment Details</DialogTitle>
                            <DialogDescription>Order ID: {selectedShipment?.orderId}</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="status">Status</Label>
                              <Select
                                value={selectedShipment?.status}
                                onValueChange={(value) => handleStatusUpdate(selectedShipment.id, value)}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Preparing">Preparing</SelectItem>
                                  <SelectItem value="In Transit">In Transit</SelectItem>
                                  <SelectItem value="Delivered">Delivered</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="destination">Destination</Label>
                              <Input id="destination" value={selectedShipment?.destination} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="estimatedDelivery">Estimated Delivery</Label>
                              <Input id="estimatedDelivery" value={selectedShipment?.estimatedDelivery} className="col-span-3" />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="new">
            <form onSubmit={handleNewShipment} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="orderId">Order ID</Label>
                  <Input
                    id="orderId"
                    value={newShipment.orderId}
                    onChange={(e) => setNewShipment({...newShipment, orderId: e.target.value})}
                    placeholder="Enter Order ID"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    value={newShipment.destination}
                    onChange={(e) => setNewShipment({...newShipment, destination: e.target.value})}
                    placeholder="Enter Destination"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="estimatedDelivery">Estimated Delivery Date</Label>
                <Input
                  id="estimatedDelivery"
                  type="date"
                  value={newShipment.estimatedDelivery}
                  onChange={(e) => setNewShipment({...newShipment, estimatedDelivery: e.target.value})}
                  required
                />
              </div>
              <Button type="submit">Create Shipment</Button>
            </form>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{shipments.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {shipments.filter(s => s.status === 'In Transit').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Delivered</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {shipments.filter(s => s.status === 'Delivered').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">On-Time Delivery Rate</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Weekly Shipment Performance</CardTitle>
                <CardDescription>Number of shipments processed per day</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    shipments: {
                      label: "Shipments",
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
                      <Line type="monotone" dataKey="shipments" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Shipment;