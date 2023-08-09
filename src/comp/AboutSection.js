import React from "react";
import home1 from "../img/home1.png";
import { About,Description,Image,Hide } from "../styles";

function AboutSection(){
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>

                        <Hide>
                        <h2>your <span>dreams</span> come </h2>
                        </Hide>
                        <Hide>
                            <h2>true</h2>
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