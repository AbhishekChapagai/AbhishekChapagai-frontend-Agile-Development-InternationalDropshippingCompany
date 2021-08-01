import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import {Link} from "react-router-dom";

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
        var items = <>
            <div>
                <h2>Let's Browse Gadgets</h2>

                <div className="FlippyCardAlign">
                    <div className="Application">
                        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flexWrap': 'wrap' }}>{
                            this.state.gadgets.map((g) => {
                                return (
                                    <div>
                                        <Flippy
                                            ref={(r) => this.flippyHorizontal = r}
                                            flipOnClick={true}
                                            style={FlippyStyle}
                                        >
                                            <DefaultCardContents>
                                                <FrontSide>
                                                    <p><img src={"http://localhost:90/image/gadget/" + g.gadgetimage} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="img" /></p>

                                                    Brand: {g.gadgetname} <br /> Price: {g.gadgetprice}<br />
                                                    <button type="button">View Product</button>
                                                </FrontSide>

                                            </DefaultCardContents>

                                            <BackSide>
                                                <div className="backside">
                                                    <h5>Type:</h5> <p>{g.gadgettype}</p>
                                                    <h5>Description:</h5>
                                                    <p> {g.gadgetdescription}</p>
                                                    {/* <p>{p.userId}</p> */}
                                                </div>
                                            </BackSide>
                                        </Flippy>
                                        {
                                            g.gadgettype==="Laptop"? (<Link to={"/product/gadget/laptopdetails/" + g._id}><button className="detailsbtn" type='submit'>View details</button></Link>):
                                            (<Link to={"/product/gadget/cameradetails/" + g._id}><button className="detailsbtn" type='submit'>View details</button></Link>)
                                        }
                                        
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
        return (
            items
        )
    }
}

export default gadgets;