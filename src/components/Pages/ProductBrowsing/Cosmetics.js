import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import {Link} from "react-router-dom";

import Flippy, { FrontSide, BackSide } from "../../infoflipcard";
import { FlippyStyle, DefaultCardContents } from '../../infoflipcard/infoflipcardelements'

class cosmetics extends Component {

    state = {
        cosmetics: [],
        
    }
    componentDidMount() {
        axios.get("http://localhost:90/cosmetic/showall", this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    cosmetics: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        var items = <>
            <div>
                <h2>Let's Browse Cosmetics</h2>

                <div className="FlippyCardAlign">
                    <div className="App">
                        <div style={{ display: 'flex', flex: '1 0 500px', justifyContent: 'space-between', 'flex-wrap': 'wrap' }}>{
                            this.state.cosmetics.map((c) => {
                                return (
                                    <div>
                                        <Flippy
                                            ref={(r) => this.flippyHorizontal = r}
                                            flipOnClick={true}
                                            style={FlippyStyle}
                                        >
                                            <DefaultCardContents>
                                                <FrontSide>

                                                    <p><img src={"http://localhost:90/image/cosmetic/" + c.productimage} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="img" /></p>

                                                    Cosmetic: {c.cosmeticname} <br /> Price: {c.cosmeticprice}<br />
                                                    {/* <button type="button">View Product</button> */}

                                                </FrontSide>

                                            </DefaultCardContents>

                                            <BackSide>
                                                <div className="backside">
                                                    <h5>Type:</h5> <p>{c.cosmetictype}</p>
                                                    <h5>Description:</h5>
                                                    <p> {c.cosmeticdescription}</p>
                                                    {/* <p>{p.userId}</p> */}
                                                </div>
                                            </BackSide>

                                        </Flippy>
                                        {
                                            c.cosmetictype==="Men"? (<Link to={"/product/cosmetic/cosmeticdetails/" + c._id}><button className="detailsbtn" type='submit'>View details</button></Link>):
                                            (<Link to={"/product/cosmetic/cosmeticdetails/" + c._id}><button className="detailsbtn" type='submit'>View details</button></Link>)
                                        }

                                    
                                    <hr/>
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
export default cosmetics;