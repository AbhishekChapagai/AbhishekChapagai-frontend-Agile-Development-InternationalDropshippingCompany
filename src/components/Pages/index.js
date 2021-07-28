import React, {useState} from 'react'
import CosmeticCategory from './LandingPage/cosmetic'
import GadgetCategory from './LandingPage/gadget'
import LandingComponent from './LandingPage/landing'



const Home = () => {

    return (
        <>
            <LandingComponent/>
            <CosmeticCategory/>
            <GadgetCategory/>
        </>
    )
}

export default Home;