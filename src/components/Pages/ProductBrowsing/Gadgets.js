import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import '../ProductBrowsing/ProductBrowsing.css'
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

                <div className="displayGadgets">
                    <div className="showGadgets">
                        <div className="gadgetsBand">
                            <p className="txtGadgets">Laptops</p>
                            {/* <p className="txtGProduct"> Products</p> */}
                        </div>
                        <div className="mainCatGadgets">
                            {
                                this.state.gadgets.map((g) => {
                                    return (
                                        <div className="gadgetsCat">
                                            {
                                                g.gadgettype === "Laptop" ? (<a href={"/product/gadget/laptopdetails/" + g._id}>
                                                    <div className="catGadgetsImage">
                                                        <img src={"http://localhost:90/gadget/" + g.gadgetimage} alt="img" />
                                                    </div>
                                                    <div className="GadgetsNameCategory">
                                                        <p className="GadgetsName">&nbsp;
                                                            {
                                                                g.gadgetname
                                                            }<br></br>

                                                        </p>
                                                        <p className="GadgetsPrice">&nbsp;Rs&nbsp;
                                                            {
                                                                g.gadgetprice
                                                            }

                                                        </p>

                                                    </div></a>) :
                                                    (<a href={"/product/gadget/cameradetails/" + g._id}><div className="catGadgetsImage">
                                                        <img src={"http://localhost:90/gadget/" + g.gadgetimage} alt="img" />
                                                    </div>
                                                        <div className="GadgetsNameCategory">
                                                            <p className="GadgetsName">&nbsp;
                                                                {
                                                                    g.gadgetname
                                                                }<br></br>

                                                            </p>
                                                            <p className="GadgetsPrice">&nbsp;Rs&nbsp;
                                                                {
                                                                    g.gadgetprice
                                                                }

                                                            </p>

                                                        </div></a>)
                                            }
                                            <div className="gadgetsCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>
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