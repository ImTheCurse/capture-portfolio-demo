import React from "react";
import home1 from "../img/home1.png";

function AboutSection(){
    return (
        <div>
            <div className="descrption">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>

                        <div className="hide">
                        <h2>your <span>dreams</span> come </h2>
                        </div>

                        <div className="hide">
                            <h2>true</h2>
                        </div>

                        <p>Contact us for any photography or videography idea that you have. we cant make your vision into reality! </p>
                        <button>Contact us</button>
                    </div>
                </div>
            </div>
            <img src={home1} alt="guy with a camera" />
        </div>
    );
}

export default AboutSection;