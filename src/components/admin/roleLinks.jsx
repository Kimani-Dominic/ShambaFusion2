import Dashboard from "./Dashboard";
import Disputes from "./BuyerDisputes";
import OrderManagement from "./BuyerOrderManagement";
import SellerOrderManagement from "./SellerOrderManagement";
import PaymentMethods from "./BuyerPayment";
import ProductManagement from "./SellerProductManagement";
import ProfileManagement from "./Profile";
import PaymentManagement from "./SellerPaymentManagement";
import ReviewsFeedbacks from "./SellerReviews";
import MarketingTools from "./SellerMarketingTools";
import Logistics from "./SellerLogisticsManagement";
import Analytics from "./Analytics";
import Shipment from "./VendorShipmentManagement";
import AIInsights from "./AI-Insights";
import PestControl from "./PestControl";
import Logout from "./Logout";
import DashboardLanding from "./Landing";

import { Home, LayoutDashboard, Package, ShoppingCart, BarChart2, Lightbulb, Bug, CreditCard, MessageSquare, Megaphone, Truck, Settings, LogOut, Store, Heart, AlertTriangle, Box, ChartNoAxesCombined } from 'lucide-react';
import TomatoPricePredictor from "./PricePrediction";

const roleLinks = {
  seller: [
    { name: 'Landing', path: '/', element: <DashboardLanding />, icon: Home },
    { name: 'Dashboard', path: 'dashboard', element: <Dashboard />, icon: LayoutDashboard },
    { name: 'Manage Products', path: 'products', element: <ProductManagement />, icon: Package },
    { name: 'Orders', path: 'orders', element: <SellerOrderManagement />, icon: ShoppingCart },
    { name: 'Analytics', path: 'analytics', element: <Analytics />, icon: BarChart2 },
    { name: 'Price prediction', path: 'price-prediction', element: <TomatoPricePredictor /> , icon: ChartNoAxesCombined },
    { name: 'AI Insights', path: 'ai-insights', element: <AIInsights />, icon: Lightbulb },
    { name: 'Pest Control', path: 'pest-control', element: <PestControl />, icon: Bug },
    { name: 'Payments', path: 'payments', element: <PaymentManagement />, icon: CreditCard },
    { name: 'Reviews and Feedback', path: 'reviews', element: <ReviewsFeedbacks />, icon: MessageSquare },
    { name: 'Marketing Tools', path: 'marketing', element: <MarketingTools />, icon: Megaphone },
    { name: 'Logistics', path: 'logistics', element: <Logistics />, icon: Truck },
    { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement />, icon: Settings },
    { name: 'Logout', path: 'logout', element: <Logout />, icon: LogOut }
  ],
  buyer: [
    { name: 'Landing', path: '/', element: <DashboardLanding />, icon: Home },
    { name: 'Dashboard', path: 'dashboard', element: <Dashboard />, icon: LayoutDashboard },
    { name: 'Browse Products', path: '/market', element: null, icon: Store },
    { name: 'Price prediction', path: 'price-prediction', element: <TomatoPricePredictor /> , icon: ChartNoAxesCombined },
    { name: 'View Orders', path: 'orders', element: <OrderManagement />, icon: ShoppingCart },
    { name: 'Payments', path: 'payments', element: <PaymentManagement />, icon: CreditCard },
    { name: 'Analytics', path: 'analytics', element: <Analytics />, icon: BarChart2 },
    { name: 'Disputes', path: 'disputes', element: <Disputes />, icon: AlertTriangle },
    { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement />, icon: Settings },
    { name: 'Logout', path: 'logout', element: <Logout />, icon: LogOut }
  ],
  vendor: [
    { name: 'Landing', path: '/', element: <DashboardLanding />, icon: Home },
    { name: 'Dashboard', path: 'dashboard', element: <Dashboard />, icon: LayoutDashboard },
    { name: 'View Shipments', path: 'shipments', element: <Shipment />, icon: Box },
    { name: 'Payments', path: 'payments', element: <PaymentManagement />, icon: CreditCard },
    { name: 'Analytics', path: 'analytics', element: <Analytics />, icon: BarChart2 },
    { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement />, icon: Settings },
    { name: 'Logout', path: 'logout', element: <Logout />, icon: LogOut }
  ],
};

export default roleLinks;