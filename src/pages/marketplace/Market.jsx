
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CustomHeader from '../../components/CustomMarketHeader';
import breadcrumbPaths from '../../data/breadCrumbNavLinks.js';
import Breadcrumb from '../../components/BreadCrumbNav.jsx';
import products from '../../data/products.js';
import ProductListing from '../../components/ProductListing.jsx';
import MeetTheFarmer from '../../components/MeetTheFarmer.jsx';
import farmers from '../../data/farmers.js';
import FarmerProfile from '../../components/FarmerProfile.jsx';
import farmerProfile from '../../data/farmerProfile.js';

function Market() {
    return(
        <>
            <Header />
            <CustomHeader />
            <Breadcrumb paths={breadcrumbPaths} />
            <ProductListing products={products} />
            <MeetTheFarmer farmers={farmers} />
            {/* <FarmerProfile farmer={farmerProfile} /> */}
            <Footer />
        </>
    );
}

export default Market;