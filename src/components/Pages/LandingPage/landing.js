import React, { Component } from 'react'
import axios from "axios";
import { LandingContainer, LandingBg, ImageBg, LandingContent, LandingH1, LandingP, LandingInfo, InfoP } from './LandingElement'
import Video from '../../../assets/images/land1.jpg';
import './landing.css';


class landing extends Component {

    render() {

        return (
            <>
                <LandingContainer>
                    <LandingBg>
                        <ImageBg autoPlay loop muted
                            src={Video} type="video/mp4" />
                    </LandingBg>

                    <LandingContent>
                        <LandingH1>BUY OR REQUEST</LandingH1>
                        <LandingP>PRODUCTS INTERNATIONALLY HERE ON DHUWANI !</LandingP>
                        <LandingP>COSMETICS | LAPTOPS | CAMERAS</LandingP>
                    </LandingContent>
                    
                </LandingContainer>
                
            </>
        )
    }

}

export default landing
