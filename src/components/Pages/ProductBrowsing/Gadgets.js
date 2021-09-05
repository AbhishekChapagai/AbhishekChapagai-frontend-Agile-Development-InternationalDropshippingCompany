import axios from "axios";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import '../ProductBrowsing/ProductBrowsing.css'
// import { price, gadgettype } from "./CheckBox/Data";
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from "../../infoflipcard";
import { FlippyStyle, DefaultCardContents } from '../../infoflipcard/infoflipcardelements'
import { Checkbox } from "@material-ui/core";
import CheckBox from "./CheckBox";

class gadgets extends Component {

    state = {
        gadget: [],

    }
    componentDidMount() {
        axios.get("http://localhost:90/gadget/showall",)
            .then((response) => {
                console.log(response)
                this.setState({
                    gadget: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        return (
            <div className="showGadgets">
                <div className="gadgetsBand">
                    <NavDropdown title="Product Type" id="collasible-nav-dropdown">
                        <LinkContainer exact to="/product/camera">
                            <NavDropdown.Item >
                                Camera
                            </NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer exact to="/product/laptop">
                            <NavDropdown.Item>
                                Laptop
                            </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </div>


                <div className="mainCatGadgets">
                    {
                        this.state.gadget.map((g) => {
                            return (


                                <div className="gadgetsCat">
                                    {
                                        g.gadgettype === "Laptop" ? (<a href={"/product/gadget/laptopdetails/" + g._id}>
                                            <div className="catGadgetsImage">
                                                <img src="{${process.env.REACT_APP_BACKEND_URL}/gadget/ + g.gadgetImages}" alt="img" />
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


                                            <a href={"/product/gadget/cameradetails/" + g._id}><div className="catGadgetsImage">
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

                                                </div></a>

                                    }
                                    <div className="gadgetscart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>


        )
    }
}

export default gadgets;