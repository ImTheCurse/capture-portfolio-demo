import React from "react";
import styled from 'styled-components';
import { About } from "../styles";
import Toggle from "./toggle";
import { LayoutGroup } from "framer-motion";

const FaqSection = () =>{
    return (
        <Faq>
            <LayoutGroup>
            <h2>Any Questions? <span>FAQ</span></h2>
            
            <Toggle title = 'How Do I Start?'>
                    <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.</p>
                    </div>
                
            </Toggle>
            <Toggle title = 'What A Standard Timeline For A Project?'>
                    <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.</p>
                    </div>
            </Toggle>

            <Toggle title = 'Diffrent Payment Options'>
            
                    <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.</p>
                    </div>
            
            </Toggle>

            <Toggle title = 'Daily Schedule'>
                    <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.</p>
                    </div>
           
            </Toggle>
            </LayoutGroup>
        </Faq>


    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccc;
        height: 0.2rem;
        width: 100%auto;
        margin: 2rem 0rem;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;