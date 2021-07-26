import React, { Component } from 'react'
import axios from "axios";
import { LandingContainer, LandingBg, ImageBg, LandingContent, LandingH1, LandingP } from './LandingElement'
import Video from '../../../assets/images/landing.mp4';
import './landing.css';


class LandingComponent extends Component {

    // state = {
    //     cosmetic: [],
    //     gadget: [],
    //     config: {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     },
    // }

    // componentDidMount() {
    //     axios.get("http://localhost:90/cosmetic/six", this.state)
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({
    //                 cosmetic: response.data.data
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })

    //     // axios.get("http://localhost:90/gadget/six", this.state)
    //     // .then((response) => {
    //     //     console.log(response)
    //     //     this.setState({
    //     //         cosmetic: response.data.data
    //     //     })
    //     // })
    //     // .catch((err) => {
    //     //     console.log(err.response)
    //     // })
    // }

    // Gadget link

    // componentDidMount() {
    //     axios.get("http://localhost:90/gadget/six", this.state)
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({
    //                 cosmetic: response.data.data
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }

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

                {/* COSMETIC CATEGORY */}

                {/* <div className="displayCosmetic">
                    <div className="showCosmetic">
                        <div className="cosmeticBand">
                            <p className="txtCosmetic">Cosmetic</p>
                            <p className="txtProduct"> Products</p>
                            <div className="viewMore">View more </div>
                        </div>
                        <div className="mainCatCosmetic">
                            {
                                this.state.cosmetic.map((c) => {
                                    return (

                                        <div className="cosmeticCat">
                                            <div className="catCosmeticImage">
                                                <img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} alt="img" />
                                            </div>
                                            <div className="CosmeticNameCategory">
                                                <p className="CosmeticName">&nbsp;
                                                    {
                                                        c.cosmeticname
                                                    }<br></br>

                                                </p>
                                                <p className="CosmeticPrice">&nbsp;Rs&nbsp;
                                                    {
                                                        c.cosmeticprice
                                                    }

                                                </p>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div> */}

                {/* GADGET CATEGORY */}

                {/* <div className="displayGadget">
                    <div className="showGAdget">
                        <div className="gadgetBand">
                            <p className="txtGadget">Gadget</p>
                            <p className="txtGProduct"> Products</p>
                            <div className="viewMoreGadget">View more </div>
                        </div>
                        <div className="mainCatGadget">
                            {
                                this.state.gadget.map((c) => {
                                    return (

                                        <div className="gadgetCat">
                                            <div className="catGadgetImage">
                                                <img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} alt="img" />
                                            </div>
                                            <div className="GadgetNameCategory">
                                                <p className="GadgetName">&nbsp;
                                                    {
                                                        c.gadgetname
                                                    }<br></br>

                                                </p>
                                                <p className="GadgetPrice">&nbsp;Rs&nbsp;
                                                    {
                                                        c.gadgetprice
                                                    }

                                                </p>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div> */}

            </>
        )
    }

}

export default LandingComponent
