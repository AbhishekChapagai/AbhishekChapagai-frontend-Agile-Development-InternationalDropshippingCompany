import React, { useState } from 'react'
import CosmeticCategory from './LandingPage/cosmetic'
import LaptopCategory from './LandingPage/laptop'
import LandingComponent from './LandingPage/landing'
import CameraCategory from './LandingPage/camera'
import Gadget from './LandingPage/gadgetAD'




const Home = () => {

    return (
        <>
            <LandingComponent />
            <CosmeticCategory />
            <Gadget/>
            <LaptopCategory />
            {/* <CameraCategory/> */}
        </>
    )
}

export default Home;