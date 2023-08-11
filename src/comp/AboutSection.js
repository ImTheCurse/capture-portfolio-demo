import React from "react";
import home1 from "../img/home1.png";
import { About,Description,Image,Hide } from "../styles";
import { motion } from "framer-motion";
import { fade, titleAnim } from "../animation";

function AboutSection(){
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial = "hidden" animate= "show">We work to make</motion.h2>

                        <Hide>
                        <motion.h2 variants={titleAnim} initial = "hidden" animate= "show">your <span>dreams</span> come </motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim} initial = "hidden" animate= "show">true</motion.h2>
                        </Hide>

                        <p>Contact us for any photography or videography idea that you have. we cant make your vision into reality! </p>
                        <button>Contact us</button>
                    </Hide>
                </div>
                </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
}




export default AboutSection;