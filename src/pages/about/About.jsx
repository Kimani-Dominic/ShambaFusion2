// src/pages/About.jsx
import React from 'react';
import Footer from "../../layout/Footer.jsx";
import Hero from "../../components/shared/Hero";
import Header from "../../layout/Header";
import StoryImage from "../../assets/about.jpg";
import Story from "../../components/Story";
import Corevalues from '../../components/Corevalues.jsx';
import HowItWorks from '../../components/HowItWorks.jsx';
import Team from '../../components/Team.jsx';
import Impact from '../../components/CommunityImpact.jsx';
import Milestones from '../../components/Milestones.jsx';
import Vision from '../../components/Vision.jsx';

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
