
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CustomHeader from '../../components/client/CustomMarketHeader';
import breadcrumbPaths from '../../data/breadCrumbNavLinks.js';
import Breadcrumb from '../../components/client/BreadCrumbNav.jsx';
import products from '../../data/products.js';
import ProductListing from '../../components/client/ProductListing.jsx';
import MeetTheFarmer from '../../components/client/MeetTheFarmer.jsx';
import farmers from '../../data/farmers.js';
import FarmerProfile from '../../components/client/FarmerProfile.jsx';
import farmerProfile from '../../data/farmerProfile.js';
import axiosInstance from '../../API/index';
import { useEffect, useState } from 'react';

function Market() {

    return(
        <>
            <Header />
            <CustomHeader />
            <ProductListing products={products} />
            <MeetTheFarmer farmers={farmers} />
            {/* <FarmerProfile farmer={farmerProfile} /> */}
            <Footer />
        </>
    );
}

export default Market;