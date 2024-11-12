import React from 'react';
import { useRole } from '../../hooks/useRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, Bar, Pie } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DollarSign, ShoppingBag, TrendingUp, Truck, Users, BarChart2 } from 'lucide-react';
const Analytics = () => {
  // const { role } = useRole();
  const role = localStorage.getItem('user_role')

  // Mock data for charts
  const lineChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 280 },
    { name: 'May', value: 590 },
    { name: 'Jun', value: 320 },
  ];

  const barChartData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 500 },
    { name: 'Product D', value: 280 },
    { name: 'Product E', value: 590 },
  ];

  const pieChartData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 500 },
    { name: 'Category D', value: 280 },
  ];

  const StatCard = ({ title, value, icon: Icon }) => (
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

  const ChartCard = ({ title, description, children }) => (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        {children}
      </CardContent>
    </Card>
  );

  const renderBuyerAnalytics = () => (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Purchases" value="KES 1,200,000" icon={DollarSign} />
        <StatCard title="Average Purchase Value" value="KES 450,000" icon={ShoppingBag} />
        <StatCard title="Purchase Frequency" value="120/week" icon={TrendingUp} />
        <StatCard title="Unique Products Bought" value="15" icon={BarChart2} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <ChartCard title="Purchases Over Time" description="Monthly purchase trends">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Line data={lineChartData} />
          </ChartContainer>
        </ChartCard>
        <ChartCard title="Spending Distribution" description="Spending across categories">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Pie data={pieChartData} />
          </ChartContainer>
        </ChartCard>
      </div>
    </>
  );

  const renderSellerAnalytics = () => (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Sales" value="KES 3,200,000" icon={DollarSign} />
        <StatCard title="Products Sold" value="45" icon={ShoppingBag} />
        <StatCard title="Average Order Value" value="KES 180,000" icon={TrendingUp} />
        <StatCard title="Active Customers" value="28" icon={Users} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <ChartCard title="Product Performance" description="Sales by product">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Bar data={barChartData} />
          </ChartContainer>
        </ChartCard>
        <ChartCard title="Sales Over Time" description="Monthly sales trends">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Line data={lineChartData} />
          </ChartContainer>
        </ChartCard>
      </div>
    </>
  );

  const renderVendorAnalytics = () => (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Deliveries" value="75" icon={Truck} />
        <StatCard title="Earnings" value="KES 180,000" icon={DollarSign} />
        <StatCard title="Average Delivery Time" value="2.3 hours" icon={TrendingUp} />
        <StatCard title="Customer Rating" value="4.8/5" icon={Users} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <ChartCard title="Delivery Performance Over Time" description="Monthly delivery trends">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Line data={lineChartData} />
          </ChartContainer>
        </ChartCard>
        <ChartCard title="Earnings Trend" description="Monthly earnings">
          <ChartContainer config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }} className="h-[300px]">
            <Bar data={barChartData} />
          </ChartContainer>
        </ChartCard>
      </div>
    </>
  );

  const renderAnalytics = () => {
    switch(role) {
      case 'buyer':
        return renderBuyerAnalytics();
      case 'seller':
        return renderSellerAnalytics();
      case 'vendor':
        return renderVendorAnalytics();
      default:
        return <p className="text-center text-gray-500">No analytics available for your role</p>;
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">{role.charAt(0).toUpperCase() + role.slice(1)} Analytics</h2>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          {renderAnalytics()}
        </TabsContent>
        <TabsContent value="detailed">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
              <CardDescription>In-depth analytics and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed analysis content would go here. This could include more complex charts, tables, or other data visualizations specific to each role.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;