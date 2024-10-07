
import Hero from "../../components/shared/Hero";
import Header from "../../layout/Header";
import HeroImage from '../../assets/hero.jpg';
import Featured from "../../components/FeaturedProducts.jsx";
import products from "../../data/featuredProducts.js";
import ProductCategories from "../../components/productCategories.jsx";
import categories from "../../data/productCategories.js";
import DirectFromFarmers from "../../components/DirectFromFarmers.jsx";
import farmers from "../../data/featuredFarmers.js";
import LocalImpact from "../../components/LocalImpact.jsx";
import impactStats from "../../data/stats.js";
import Testimonials from "../../components/Reviews.jsx";
import reviews from "../../data/testimonials.js";
import Footer from "../../layout/Footer.jsx";

function Home() {
    return(
        <>
           
            <Header />
            <Hero 
                title="Welcome to Shamba Fusion"
                description="Connecting you directly with local farmers for fresh, quality produce. No brokers. No middlemen. Just farm-to-table goodness."
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