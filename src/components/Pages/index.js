import React, { useState } from 'react'
import CosmeticCategory from './LandingPage/cosmetic'
import LaptopCategory from './LandingPage/laptop'
import LandingComponent from './LandingPage/landing'
import CameraCategory from './LandingPage/camera'
import Gadget from './LandingPage/gadgetAD'
import Footer from '../Footer/Footer'
import Featured from './LandingPage/featuredGadgets'
import Brands from './LandingPage/browsebyBrands'




const Home = () => {

    return (
        <>  <div className="LandingBody" style={{backgroundColor: '#f2f2f2'}} >
            
            <LandingComponent />
            <CosmeticCategory />
            <Gadget/>
            <LaptopCategory />
            <Brands/>
            <Featured/>
            <CameraCategory/>
            <Footer/>
            </div>
        </>
    )
}

export default Home;