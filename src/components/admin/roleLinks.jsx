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
import { LogOut } from "lucide-react";
import Logout from "./Logout";

const roleLinks = {
    seller: [
      { name: 'Dashboard', path: 'dashboard', element: <Dashboard /> },
      { name: 'Manage Products', path: 'products', element: <ProductManagement /> },
      { name: 'Orders', path: 'orders', element: <SellerOrderManagement /> },
      { name: 'Analytics', path: 'analytics', element: <Analytics /> },
      {name: 'AI Insights', path: 'ai-insights', element: <AIInsights /> },
      {name: 'Pest Control', path: 'pest-control', element: <PestControl />},
      {name: 'Payments', path: 'payments', element: <PaymentManagement /> },
      { name: 'Reviews and Feedback', path: 'reviews', element: <ReviewsFeedbacks /> },
      { name: 'Marketing Tools', path: 'marketing', element: <MarketingTools /> },
      { name: 'Logistics', path: 'logistics', element: <Logistics /> },
      { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement /> },
      {name: 'Logout', path: 'logout', element: <Logout />}
    ],
    buyer: [
      { name: 'Dashboard', path: 'dashboard', element: <Dashboard /> },
      { name: 'Browse Products', path: '/market', element: null },
      { name: 'View Orders', path: 'orders', element: <OrderManagement /> },
      { name: 'Payments', path: 'favorites', element: <PaymentMethods /> },
      { name: 'Analytics', path: 'analytics', element: <Analytics /> },
      { name: 'Disputes', path: 'disputes', element: <Disputes /> },
      { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement /> },
      {name: 'Logout', path: 'logout', element: <Logout />}
    ],
    vendor: [
      { name: 'Dashboard', path: 'dashboard', element: <Dashboard /> },
      { name: 'Manage Logistics', path: 'logistics', element: <Logistics /> },
      { name: 'View Shipments', path: 'shipments', element: <Shipment /> },
      { name: 'Payments', path: 'payments', element: <PaymentManagement /> },
      { name: 'Analytics', path: 'analytics', element: <Analytics /> },
      { name: 'Profile Settings', path: 'profile-settings', element: <ProfileManagement /> },
      {name: 'Logout', path: 'logout', element: <Logout />}
    ],
}

export default roleLinks;