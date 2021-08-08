import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import { Link } from "react-router-dom";

import Flippy, { FrontSide, BackSide } from "../../infoflipcard";
import { FlippyStyle, DefaultCardContents } from '../../infoflipcard/infoflipcardelements'

class gadgets extends Component {

    state = {
        gadgets: [],

    }
    componentDidMount() {
        axios.get("http://localhost:90/gadget/showall",)
            .then((response) => {
                console.log(response)
                this.setState({
                    gadgets: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        return (
            <>



                {/* GADGET CATEGORY */}

                <div className="displayGadget">
                    <div className="showGadget">
                        <div className="gadgetBand">
                            <p className="txtGadget">Laptops</p>
                            {/* <p className="txtGProduct"> Products</p> */}
                        </div>
                        <div className="mainCatGadget">
                            {
                                this.state.gadgets.map((g) => {
                                    return (
                                        <div  className="gadgetCat">
                                        {
                                            g.gadgettype === "Laptop" ? (<a href={"/product/gadget/laptopdetails/" + g._id}>
                                                <div className="catGadgetImage">
                                                <img src={"http://localhost:90/assets/image/gadget/" + g.gadgetimage} alt="img" />
                                            </div>
                                                <div className="GadgetNameCategory">
                                                    <p className="GadgetName">&nbsp;
                                                        {
                                                            g.gadgetname
                                                        }<br></br>
                                        
                                                    </p>
                                                    <p className="GadgetPrice">&nbsp;Rs&nbsp;
                                                        {
                                                            g.gadgetprice
                                                        }
                                        
                                                    </p>
                                        
                                                </div></a>) :
                                                (<a href={"/product/gadget/cameradetails/" + g._id}><div className="catGadgetImage">
                                                    <img src={"http://localhost:90/assets/image/gadget/" + g.gadgetimage} alt="img" />
                                                </div>
                                                    <div className="GadgetNameCategory">
                                                        <p className="GadgetName">&nbsp;
                                                            {
                                                                g.gadgetname
                                                            }<br></br>
                                        
                                                        </p>
                                                        <p className="GadgetPrice">&nbsp;Rs&nbsp;
                                                            {
                                                                g.gadgetprice
                                                            }
                                        
                                                        </p>
                                        
                                                    </div></a>)
                                        }
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

            </>
        )
    }
}

export default gadgets;