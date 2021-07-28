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
        axios.get("http://localhost:90/cosmetic/six", this.state)
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

                <div className="displayCosmetic">
                    <div className="showCosmetic">
                        <div className="cosmeticBand">
                            <p className="txtCosmetic">Health & Beauty</p>
                            {/* <p className="txtProduct"> Products</p> */}
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
                </div>

            </>
        )
    }

}

export default CosmeticCategory