// src/pages/About.jsx
import React from 'react';
import Footer from "../../layout/Footer.jsx";
import Hero from "../../components/shared/Hero";
import Header from "../../layout/Header";
import StoryImage from "../../assets/about.jpg";
import Story from "../../components/client/Story";
import Corevalues from '../../components/client/Corevalues.jsx';
import HowItWorks from '../../components/client/HowItWorks.jsx';
import Team from '../../components/client/Team.jsx';
import Impact from '../../components/client/CommunityImpact.jsx';
import Milestones from '../../components/client/Milestones.jsx';
import Vision from '../../components/client/Vision.jsx';

function About() {
    return (
        <div>
            <Header />
            <Hero 
                title="About Us"
                description="Discover the story behind ShambaFusion and our mission to connect farmers directly with consumers."
                imagePath={StoryImage} // Update this with the appropriate image
            />
            <Story />
            <Corevalues />    
            <HowItWorks />
            <Team />
            <Impact />
            <Milestones />
            <Vision />
            <Footer />
        </div>  
    );
}

export default About;
