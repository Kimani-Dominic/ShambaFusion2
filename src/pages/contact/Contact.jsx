
import Hero from '../../components/shared/Hero';
import Header from '.././../layout/Header';
import Footer from '.././../layout/Footer';
import ContactImage from '../../assets/contact.jpg';
import ContactForm from '../../components/ContactForm';
import CustomerSupport from '../../components/CustomerSupport';
import FAQ from '../../components/FAQ';
import ServiceHours from '../../components/ServiceHours';

function Contact() {
    return (
        <>
            <Header />
            <Hero 
                title="Get in touch"
                description="We are here to help you with any questions or concerns. Feel free to reach out to us!"
                imagePath={ContactImage}
                // primaryAction={{text: "Explore the market", href: "/market"}}
                // secondaryAction={{text: "Join us", href: "/signup"}}
            />
            <ContactForm />
            <ServiceHours />
            <CustomerSupport />
            <FAQ />
            <Footer />
        </>
    );
}

export default Contact