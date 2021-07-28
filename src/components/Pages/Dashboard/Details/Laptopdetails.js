import axios from "axios";
import { Component } from "react";
import './Details.css';

class LaptopDetails extends Component {
    state = {
        id: this.props.match.params.id,
        gadgets: [],

    }
    componentDidMount() {
        axios.get(`http://localhost:90/gadget/one/` + this.state.id)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    gadgets: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        var description = <>
            <div class="container">{
                this.state.gadgets.map((l) => {
                    return (
                        <div>
                            <div class="card">
                                <div class="container-fliud">
                                    <div class="wrapper row">
                                        <div class="preview col-md-6">

                                            <div class="preview-pic tab-content">
                                                <div class="tab-pane active" id="pic-1"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></div>
                                                <div class="tab-pane" id="pic-2"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></div>
                                                <div class="tab-pane" id="pic-3"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></div>
                                            </div>
                                            <ul class="preview-thumbnail nav nav-tabs">
                                                <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></a></li>
                                                <li><a data-target="#pic-2" data-toggle="tab"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></a></li>
                                                <li><a data-target="#pic-3" data-toggle="tab"><img src={"http://localhost:90/assets/image/gadget/" + l.gadgetimage} /></a></li>
                                            </ul>

                                        </div>

                                        <div class="details col-md-6">
                                            <h3 class="product-title">{l.gadgetname}</h3>
                                            <div class="rating">
                                                <div class="stars">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                            </div>
                                            <div class="section" >
                                                <h6 class="title-attr"><small>Quantity</small></h6>
                                                <div>
                                                    <div class="btn-minus"><span class="glyphicon glyphicon-minus"></span></div>
                                                    <input value="1" />
                                                    <div class="btn-plus"><i class="bi bi-plus"></i></div>
                                                </div>
                                            </div>

                                            <h4 class="price">current price: <span>${l.gadgetprice}</span></h4>
                                            <div class="action">
                                                <button class="add-to-cart  btn-default" type="button">add to cart</button>
                                                <button class="like btn-default" type="button"><span class="fa fa-heart"></span></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="module" class="container additional-des">
                                <h3>Summary</h3>
                                <p class="collapse" id="collapseExample" aria-expanded="false">
                                    {l.gaadgetdescription}
                                </p>
                                <a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                </a>
                            </div>
                            <div class="container product-details">
                                <a class="spec-title"> Additional Specification</a>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head">General </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col ">Brand  :</div>
                                        <div class="col">Model  :</div>
                                        <div class="col">Dimensions (mm)  :</div>
                                        <div class="col">Weight (kg)  :</div>
                                    </div>
                                    <div class="col ">
                                        <div class="col ">{l.laptopBrand}</div>
                                        <div class="col">{l.laptopModel}</div>
                                        <div class="col">{l.laptopDimension}</div>
                                        <div class="col">{l.laptopWeight}</div>
                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head"> Display </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col">Size  :</div>
                                        <div class="col">Resolution  :</div>
                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopResolution}</div>
                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head"> Processor </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col">Processor  :</div>
                                        <div class="col">Base Clock Speed  :</div>
                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopProcessor}</div>
                                        <div class="col">{l.laptopBaseClock}</div>
                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head">   Memory </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col">RAM  :</div>

                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopRam}</div>

                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head">  Graphics </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col ">Graphics Processor  :</div>
                                        <div class="col">Dedicated Graphic Memory Type  :</div>
                                        <div class="col">Dedicated Graphics  :</div>
                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopGraphic}</div>
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head">  Storage</a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col">Hard disk  :</div>
                                        <div class="col">SSD  :</div>
                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                    </div>
                                </div>
                                <div class="row product-row">
                                    <div class="col">
                                        <a class="spec-head">Ports and slots </a>
                                    </div>
                                    <div class="col product-col">
                                        <div class="col">Number of USB Ports  :</div>
                                        <div class="col">USB Ports  :</div>
                                        <div class="col">HDMI Port  :</div>
                                        <div class="col">Multi Card Slot  :</div>
                                        <div class="col">Headphone and Mic Combo Jack  :</div>
                                        <div class="col">RJ45 (LAN)  :</div>
                                    </div>
                                    <div class="col">
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                        <div class="col">{l.laptopSize}</div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    )
                })
            }

            </div>

        </>
        return (
            description
        )






    }
}


export default LaptopDetails;