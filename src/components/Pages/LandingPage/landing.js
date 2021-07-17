import React from 'react'
import { LandingContainer, LandingBg, VideoBg } from './LandingElement'
import Video from '../../../assets/images/dhuwani.mp4'

const landing = () => {
    return (
        <LandingContainer>
            <LandingBg>
                <VideoBg autoPlay loop muted
                src={Video} type="video/mp4"/>
            </LandingBg>
        </LandingContainer>
    )
}

export default landing
