
import Hero from "../../components/shared/Hero";
import Header from "../../layout/Header";
import HeroImage from '../../assets/hero2.jpg';
import Featured from "../../components/client/FeaturedProducts.jsx";
import products from "../../data/featuredProducts.js";
import ProductCategories from "../../components/client/productCategories.jsx";
import categories from "../../data/productCategories.js";
import DirectFromFarmers from "../../components/client/DirectFromFarmers.jsx";
import farmers from "../../data/featuredFarmers.js";
import LocalImpact from "../../components/client/LocalImpact.jsx";
import impactStats from "../../data/stats.js";
import Testimonials from "../../components/client/Reviews.jsx";
import reviews from "../../data/testimonials.js";
import Footer from "../../layout/Footer.jsx";

function Home() {
    return(
        <>
           
            <Header />
            <Hero 
                title="Welcome to Shamba Fusion"
                description="Connecting you directly to fresh, quality and locally grown tomatoes. No brokers. No middlemen. Just farm-to-table goodness."
                imagePath={HeroImage}
                primaryAction={{text: "Explore the market", href: "/market"}}
                secondaryAction={{text: "Join us", href: "/signup"}}
            />
            <Featured products={products} />
            <ProductCategories categories={categories} />
            <DirectFromFarmers farmers={farmers} />
            <LocalImpact stats={impactStats} />
            <Testimonials reviews={reviews} />
            <Footer />
        </>    
    )
}

export default Home;