import React from "react";
import AboutSection from "../comp/AboutSection";
import ServicesSection from "../comp/ServicesSection";
import FaqSection from "../comp/FaqSection";
import {motion} from 'framer-motion';
import { pageAnimation } from "../animation";

function AboutUs(){
    return (
        
        <motion.div variants={pageAnimation} initial = "hidden" animate = "show" exit= "exit">
        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>
        </motion.div>
    );
}

export default AboutUs;