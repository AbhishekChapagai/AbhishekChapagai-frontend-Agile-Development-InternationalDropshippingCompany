import React, { Component } from 'react'
import axios from "axios";
import { LandingContainer, LandingBg, ImageBg, LandingContent, LandingH1, LandingP } from './LandingElement'
import Video from '../../../assets/images/landing.mp4';
import './landing.css';


class landing extends Component {

    state = {
        cosmetic: [],
        gadget: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        },
    }

    componentDidMount() {
        axios.get("http://localhost:90/cosmetic/five", this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    cosmetic: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

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
                <div className="displayCosmetic">
                    <div className="showCosmetic">
                        <div className="cosmeticBand">
                            <p>Cosmetics</p>
                            <div className="viewMore">View more </div>
                        </div>
                        {
                            this.state.cosmetic.map((c) => {
                                return (
                                    <div className="cosmetic">
                                        <p><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} alt="img" /></p>
                                        <p className="CosmeticName">Name: &nbsp;
                                            {
                                                c.cosmeticname
                                            }
                                        </p>
                                        <p>
                                            {/* <Link to={"/vehicleDetails/" + product._id}> <button className="btnView" >DETAILS</button></Link> */}
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                {/* GADGET CATEGORY */}

                <div class="displayGadget">
                    <div class="showGadget">
                        <div className="gadgetBand">
                            <p>Gadgets</p>
                            <div className="viewMore">View more </div>
                        </div>
                        {
                            this.state.cosmetic.map((g) => {
                                return (
                                    <div class="product">
                                        <p><img src={"http://localhost:90/assets/image/cosmetic/" + g.gadgetimage} alt="img" /></p>
                                        <p>Name: &nbsp;
                                            {
                                                g.gadgetname
                                            }
                                        </p>
                                        <p>
                                            {/* <Link to={"/vehicleDetails/" + product._id}> <button className="btnView" >DETAILS</button></Link> */}
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>



            </>
        )
    }

}

export default landing
