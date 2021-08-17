import React, { useState } from 'react'
import CosmeticCategory from './LandingPage/cosmetic'
import LaptopCategory from './LandingPage/laptop'
import LandingComponent from './LandingPage/landing'
import CameraCategory from './LandingPage/camera'
import Gadget from './LandingPage/gadgetAD'
import InformationLanding from './LandingPage/landingInfo'
import Footer from '../Footer/Footer'




const Home = () => {

    return (
        <>  <div className="LandingBody ">
            
            <LandingComponent />
            <InformationLanding/>
            <CosmeticCategory />
            <Gadget/>
            <LaptopCategory />
            <CameraCategory/>
            <Footer/>
            </div>
        </>
    )
}

export default Home;