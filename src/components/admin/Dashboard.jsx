import { useRole } from "../../hooks/useRole";
import SellerDashboard from "./sellerDashboard";
import VendorDashboard from "./vendorDashboard";
import BuyerDashboard from "./BuyerDashboard";

function Dashboard() {

    // const {role} = useRole();
    const role = localStorage.getItem('user_role')

    return (
        <div className="p-6 bg-white rounded-lg shadow-md" >
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            {role === 'buyer' && <BuyerDashboard />}
            {role === 'seller' && <SellerDashboard />}
            {role === 'vendor' && <VendorDashboard />}
        </div>
    );

}

export default Dashboard;