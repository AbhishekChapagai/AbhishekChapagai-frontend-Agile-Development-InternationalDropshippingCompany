import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
import { Link } from "react-router-dom";

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
        return(
            <>
            <div className="displayCosmetic">
                    <div className="showCosmetic">
                        <div className="cosmeticBand">
                            <p className="txtCosmetic">Cosmetics</p>
                            {/* <p className="txtProduct"> Products</p> */}
                        </div>
                        <div className="mainCatCosmetic">
                            {
                                this.state.cosmetics.map((c) => {
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

                                                <div className="landingCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>
                                            </div>
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
export default cosmetics;