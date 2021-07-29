import React, { Component } from 'react'
import axios from "axios";
import './landing.css';


class LaptopCategory extends Component {

    state = {
        gadget: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        },
    }

    componentDidMount() {
        axios.get("http://localhost:90/gadget/five", this.state)
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
            <>

                {/* GADGET CATEGORY */}

                <div className="displayGadget">
                    <div className="showGadget">
                        <div className="gadgetBand">
                            <p className="txtGadget">Laptops</p>
                            {/* <p className="txtGProduct"> Products</p> */}
                            <div className="viewMoreGadget">View more </div>
                        </div>
                        <div className="mainCatGadget">
                            {
                                this.state.gadget.map((g) => {
                                    return (

                                        <div className="gadgetCat">
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

export default LaptopCategory