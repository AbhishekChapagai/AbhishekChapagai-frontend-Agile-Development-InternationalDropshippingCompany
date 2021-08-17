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
                <div className="container displayGadget">
                    <div className="container showGadget">
                        <div className="row gadgetBand">
                            <p className="col-9 col-sm-11 txtGadget">Popular laptops</p>
                            <p className="col-3 col-sm-1 viewMore">View More</p>
                            {/* <div className="col-sm- 6 viewMoreGadget">View more&nbsp;<i class="fas fa-angle-double-right"></i> </div> */}
                        </div>
                        <div className="row mainCatGadget col-sm-12">
                            {
                                this.state.gadget.map((g) => {
                                    return (

                                        <a href ={"/product/gadget/laptopdetails/" + g._id} className="col-sm-3 gadgetCat">
                                            <div className="catGadgetImage">
                                                <img src={"http://localhost:90/gadget/" + g.gadgetimage} alt="img" />
                                            </div>
                                            <div className="GadgetNameCategory">
                                                <p className="GadgetName">&nbsp;
                                                    {
                                                        g.gadgetname
                                                    }<br></br>

                                                </p>
                                                <p className="GadgetType">&nbsp;
                                                    {
                                                        g.gadgettype
                                                    }<br></br>

                                                </p>
                                                <p className="GadgetPrice">&nbsp;Rs&nbsp;
                                                    {
                                                        g.gadgetprice
                                                    }

                                                </p>
                                            </div>
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

export default LaptopCategory