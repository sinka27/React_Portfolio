import React from "react";
import styled from 'styled-components';
import Particles from "../components/Particles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

function Aboutpage() {
    return (
        <div className = "App">
          
        <AboutStyled>
           <div className="tsparticles">
               <Particles />
           </div>
           <div className="typography">
                <h1>Parul<span> Raj</span></h1>
                <p>
                I am an Electronics Engineer with my major in VLSI Design, currently
                        making a career transit to become a Full Stack Developer. I enjoy
                        working in motivating environment where I can assist others while
                        challenging and understanding the work at hand.
                </p>
                 <div className="icons">
                    <a href="https://www.linkedin.com/in/parul-raj-36b92865/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/sinka27" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="mailto: sinka27392@gmail.com" className="icon i-mail">
                        <MailIcon />
                    </a>
                    <a href="tel:2066027731" className="icon i-phone">
                        <PhoneIcon />
                    </a>
                </div> 
            </div>
           
            </AboutStyled>
        </div>
       
    )}

//customised div
const AboutStyled = styled.header`
 width: 100%;
 height: 100vh;
 position: relative;
 .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        color: var(--sidebar-dark-color);
        h1{
            color: black;
            span{
                /* color: var(); */
                font-size: 40px;
            }
        }
        
        
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: hand;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #0e76a8;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #171515;
                }
            }
            .i-mail{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #c71610;
                }
            }
            .i-phone{
                &:hover{
                    border: 2px solid #5F4687;
                    color: black;
                }
            }
        }

 }
`;
export default Aboutpage;
