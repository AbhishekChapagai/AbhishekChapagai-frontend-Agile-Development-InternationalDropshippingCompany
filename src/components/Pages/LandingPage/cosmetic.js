import React, { Component } from 'react'
import axios from "axios";
import './landing.css';


class CosmeticCategory extends Component {

    state = {
        cosmetic: [],
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
                
                <div className="container displayCosmetic">
                    <div className="container showCosmetic">
                        <div className="row cosmeticBand">
                            <p className="col-9 col-sm-11 txtCosmetic">Browse cosmetics</p>
                            <p className="col-3 col-sm-1 viewMore">View More</p>
                           
                        </div>
                        <div className="row mainCatCosmetic col-sm-12">
                            {
                                this.state.cosmetic.map((c) => {
                                    return (

                                         <a href={"/product/cosmetic/cosmeticdetails/" + c._id} className="cosmeticCat"> 
                                            {/* <a href={"/product/cosmetic/cosmeticdetails/" + c._id}> */}
                                            <div className="catCosmeticImage">
                                                <img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="img" />
                                            </div>
                                            <div className="CosmeticNameCategory">
                                                <p className="CosmeticName">&nbsp;
                                                    {
                                                        c.cosmeticname
                                                    }<br></br>

                                                </p>
                                                <p className="CosmeticType">&nbsp;
                                                    {
                                                        c.cosmeticdescription
                                                    }

                                                </p>
                                                <p className="CosmeticPrice">NPR&nbsp;
                                                    {
                                                        c.cosmeticprice
                                                    }

                                                </p>
                                                

                                                {/* <div className="landingCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div> */}
                                            </div>
                                            {/* </a> */}
                                        </a>

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

export default CosmeticCategory