import React from "react";
import home1 from "../img/home1.png";
import { About,Description,Image,Hide } from "../styles";
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import Wave from "./wave";

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

                        <motion.p variants={fade}>Contact us for any photography or videography idea that you have. we cant make your vision into reality! </motion.p>
                        <motion.button variants={fade}>Contact us</motion.button>
                    </Hide>
                </div>
                </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave/>
        </About>
    );
}




export default AboutSection;