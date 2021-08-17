import axios from "axios";
import { Component } from "react";
import './Details.css';
import Questions from './Question';
import { toast } from "react-toastify";
toast.configure();

class CameraDetails extends Component {
    constructor(props) {
        super(props);
        this.Addtocart = this.Addtocart.bind(this);
    }
    state = {
        userid: localStorage.getItem("userid"),
        id: this.props.match.params.id,
        quantity: "1",
        productname: "",
        productprice: "",
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
    Addtocart() {
        const data = { userid: this.state.userid, productid: this.state.id, quantity: this.state.quantity,  productname: this.state.productname, productprice: this.state.productprice }
        axios.post(`http://localhost:90/gadgetcart/insert/`, data)

            .then((response) => {
                console.log(response.data)
                this.setState({
                    gadgets: response.data.data
                })

                toast.success('Product added to cart!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((err) => {
                console.log(err.response)

                toast.error('Product already exist in cart!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    itemPlus = () => {
        this.setState({ quantity: parseInt(this.state.quantity) + parseInt(1) });
    }

    itemMinus = () => {
        const minus = this.state.quantity;

        if (minus > 1) {
            this.setState({ quantity: parseInt(this.state.quantity) - parseInt(1) });
        }
        else {
            alert("Can't add product less than quantity 1!")
        }
    }

    render() {
        var description = <>
            <div className="container">{
                this.state.gadgets.map((c) => {
                    return (

                        <div>
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">

                                            <div className="preview-pic tab-content">
                                                <div className="tab-pane active" id="pic-1"><img src={"http://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></div>
                                                <div className="tab-pane" id="pic-2"><img src={"http://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></div>
                                                <div className="tab-pane" id="pic-3"><img src={"http://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></div>
                                            </div>
                                            <ul className="preview-thumbnail nav nav-tabs">
                                                <li className="active img-active"><a data-target="#pic-1" data-toggle="tab"><img src={"http://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></a></li>
                                                <li><a data-target="#pic-2" data-toggle="tab"><img src={"htagtp://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></a></li>
                                                <li><a data-target="#pic-3" data-toggle="tab"><img src={"http://localhost:90/gadget/" + c.gadgetimage} alt="productimage" /></a></li>
                                            </ul>

                                        </div>

                                        <div className="details col-md-6">
                                            <h3 class="product-title" value={this.state.productname = c.gadgetname} onChange={e => { this.setState({ productname: e.target.value }) }}>{c.gadgetname}</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                            <div className="section" >
                                                <h6 className="title-attr"><small>Quantity</small></h6>
                                                <div>
                                                    <div className="btn-minus" onClick={this.itemMinus}><button className="glyphicon glyphicon-minus">-</button></div>
                                                    <input value={this.state.quantity} onChange={e => { this.setState({ quantity: e.target.value }) }} disabled />
                                                    <div className="btn-plus" onClick={this.itemPlus}><button className="bi bi-plus">+</button></div>
                                                </div>
                                            </div>

                                            <h4 class="price" value={this.state.productprice = c.gadgetprice} onChange={e => { this.setState({ productprice: e.target.value }) }}>current price: <span>${c.gadgetprice}</span></h4>
                                            <div className="action">
                                                <button className="add-to-cart  btn-default" type="button" onClick={this.Addtocart} >add to cart</button>
                                                <button className="like btn-default" type="button"><span className="fa fa-heart"></span></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="module" className="container additional-des">
                                <h3>Summary</h3>
                                <p className="collapse" id="collapseExample" aria-expanded="false">
                                    {c.gaadgetdescription}
                                </p>
                                <a role="button" className="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                </a>
                            </div>

                            <div className="container product-details">
                                <a className="spec-title"> Additional Specification</a>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">General </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col ">Type  :</div>
                                        <div className="col">Camera Resolution  :</div>
                                        <div className="col">Sales Package  :</div>
                                        <div className="col">Dimensions (WxHxD)  :</div>
                                        <div className="col">Camera Weight  :</div>
                                    </div>
                                    <div className="col ">
                                        <div className="col "></div>
                                        <div className="col">{c.cameraResolution}</div>
                                        <div className="col">{c.cameraSalesPackage}</div>
                                        <div className="col">{c.cameraDimensions}</div>
                                        <div className="col">{c.cameraWeight}</div>
                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head"> Lens   </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Lens Type  :</div>
                                        <div className="col">Lens Focal Length  :</div>
                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraLensType}</div>
                                        <div className="col">{c.cameraLensFocalLength}</div>
                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head"> Sensor    </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Sensor Type  :</div>
                                        <div className="col">Sensor Format  :</div>
                                        <div className="col">Sensor Size  :</div>
                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraSensorType}</div>
                                        <div className="col">{c.cameraSensorFormat}</div>
                                        <div className="col">{c.cameraSensorSize}</div>
                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">   Display    </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Screen Size  :</div>
                                        <div className="col">Display Type  :</div>
                                        <div className="col">Display Resolution (dots)  :</div>


                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraScreenSize}</div>
                                        <div className="col">{c.cameraDisplayType}</div>
                                        <div className="col">{c.cameraDisplayResolution}</div>

                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">  Connectivity and Storage </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col ">Memory Card Type  :</div>
                                        <div className="col">Connectivity  :</div>

                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraMemoryCardType}</div>
                                        <div className="col">{c.cameraConnectivity}</div>

                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">  Image and Video Details</a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Video Formats  :</div>
                                        <div className="col">HDR Support  :</div>
                                        <div className="col">Image Formats  :</div>
                                        <div className="col">Supported Audio Formats  :</div>
                                        <div className="col">Video Resolution  :</div>
                                        <div className="col">Video Resolution Details  :</div>
                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraConnectivity}</div>
                                        <div className="col">{c.cameraHDRSupport}</div>
                                        <div className="col">{c.cameraImageFormats}</div>
                                        <div className="col">{c.cameraSupportedAudioFormats}</div>
                                        <div className="col">{c.cameraVideoResolution}</div>
                                        <div className="col">{c.cameraVideoResolutionDetails}</div>
                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">Power </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Battery Type  :</div>
                                        <div className="col">Battery Capacity  :</div>
                                        <div className="col">No. Of Shots  :</div>

                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraBatteryType}</div>
                                        <div className="col">{c.cameraBatteryCapacity}</div>
                                        <div className="col">{c.cameraNoOfShots}</div>

                                    </div>
                                </div>
                                <div className="row product-row">
                                    <div className="col">
                                        <a className="spec-head">Input/Output   </a>
                                    </div>
                                    <div className="col product-col">
                                        <div className="col">Microphone  :</div>
                                        <div className="col">Tripod Socket  :</div>
                                        <div className="col">3.5mm Headphone Jack  :</div>
                                        <div className="col">USB Connectivity :</div>
                                        <div className="col">PictBridge Support  :</div>

                                    </div>
                                    <div className="col">
                                        <div className="col">{c.cameraMicrophone}</div>
                                        <div className="col">{c.cameraTripodSocket}</div>
                                        <div className="col">{c.cameraHeadphoneJack}</div>
                                        <div className="col">{c.cameraUSBConnectivity}</div>
                                        <div className="col">{c.cameraPictBridgeSupport}</div>

                                    </div>
                                </div>


                            </div>

                        </div>
                    )
                })
            }

            </div>
            <Questions dataFromParent={this.state.id}> </Questions>
        </>





        return (
            description
        )
    }
}


export default CameraDetails;