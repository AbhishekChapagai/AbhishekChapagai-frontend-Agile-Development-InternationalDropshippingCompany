import React, { useState } from 'react'
import CosmeticCategory from './LandingPage/cosmetic'
import LaptopCategory from './LandingPage/laptop'
import LandingComponent from './LandingPage/landing'
import CameraCategory from './LandingPage/camera'



const Home = () => {

    return (
        <>
            <LandingComponent />
            <CosmeticCategory />
            <LaptopCategory />
            {/* <CameraCategory/> */}
        </>
    )
}

export default Home;