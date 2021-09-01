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
        return (
            <>
                    <div className="showCosmetics">
                        <div className="cosmeticsBand">
                        </div>
                        <div className="mainCatCosmetics">
                            {
                                this.state.cosmetics.map((c) => {
                                    return (

                                        <div className="cosmeticsCat">
                                            {
                                                (<a href={"/product/cosmetic/cosmeticdetails/" + c._id}>
                                                    <div className="catCosmeticsImage">
                                                        <img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="img" />
                                                    </div>
                                                    <div className="COsmeticsNameCategory">
                                                        <p className="CosmeticsName">&nbsp;
                                                            {
                                                                c.cosmeticname
                                                            }<br></br>

                                                        </p>
                                                        <p className="CosmeticsPrice">&nbsp;Rs&nbsp;
                                                            {
                                                                c.cosmeticprice
                                                            }

                                                        </p>

                                                    </div></a>) 
                                                 
                                            }
                                            <div className="cosmeticsCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>
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
export default cosmetics;