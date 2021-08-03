import axios from "axios";
import { Component } from "react";
import './Details.css';

class CameraDetails extends Component {
    state = { 
        userid: localStorage.getItem("userid"),
        id: this.props.match.params.id,
        quantity: "",
        gadgets: [],
        
    }
    componentDidMount() {
        axios.get(`http://localhost:90/gadget/one/` + this.state.id )
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
    Addtocart(){
        const data={userid: this.state.userid, productid:this.state.id, quantity:this.state.quantity}
        axios.post(`http://localhost:90/gadgetcart/insert/` )
        
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
                this.state.gadgets.map((c) => {
        return (

            <div>
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} /></div>
                                    <div class="tab-pane" id="pic-2"><img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} /></div>
                                    <div class="tab-pane" id="pic-3"><img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} /></div>
                                </div>
                                <ul class="preview-thumbnail nav nav-tabs">
                                    <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src={"htagtp://localhost:90/assets/image/gadget/" + c.gadgetimage} /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src={"http://localhost:90/assets/image/gadget/" + c.gadgetimage} /></a></li>
                                </ul>

                            </div>

                            <div class="details col-md-6">
                                <h3 class="product-title">{c.gadgetname}</h3>
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
                                        <input value={this.state.quantity}  onChange={e=>{this.setState({quantity:e.target.value})}}  />
                                        <div class="btn-plus"><i class="bi bi-plus"></i></div>
                                    </div>
                                </div>

                                <h4 class="price">current price: <span>${c.gadgetprice}</span></h4>
                                <div class="action">
                                    <button class="add-to-cart  btn-default" type="button" onClick={this.Addtocart} >add to cart</button>
                                    <button class="like btn-default" type="button"><span class="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="module" class="container additional-des">
                    <h3>Summary</h3>
                    <p class="collapse" id="collapseExample" aria-expanded="false">
                    {c.gaadgetdescription}
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
                            <div class="col ">Type  :</div>
                            <div class="col">Camera Resolution  :</div>
                            <div class="col">Sales Package  :</div>
                            <div class="col">Dimensions (WxHxD)  :</div>
                            <div class="col">Camera Weight  :</div>
                        </div>
                        <div class="col ">
                            <div class="col "></div>
                            <div class="col">{c.camera.cameraResolution}</div>
                            <div class="col">{c.camera.cameraSalesPackage}</div>
                            <div class="col">{c.camera.cameraDimensions}</div>
                            <div class="col">{c.camera.cameraWeight}</div>
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head"> Lens   </a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Lens Type  :</div>
                            <div class="col">Lens Focal Length  :</div>
                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraLensType}</div>
                            <div class="col">{c.camera.cameraLensFocalLength}</div>
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head"> Sensor    </a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Sensor Type  :</div>
                            <div class="col">Sensor Format  :</div>
                            <div class="col">Sensor Size  :</div>
                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraSensorType}</div>
                            <div class="col">{c.camera.cameraSensorFormat}</div>
                            <div class="col">{c.camera.cameraSensorSize}</div>
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head">   Display    </a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Screen Size  :</div>
                            <div class="col">Display Type  :</div>
                            <div class="col">Display Resolution (dots)  :</div>


                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraScreenSize}</div>
                            <div class="col">{c.camera.cameraDisplayType}</div>
                            <div class="col">{c.camera.cameraDisplayResolution}</div>

                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head">  Connectivity and Storage </a>
                        </div>
                        <div class="col product-col">
                            <div class="col ">Memory Card Type  :</div>
                            <div class="col">Connectivity  :</div>

                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraMemoryCardType}</div>
                            <div class="col">{c.camera.cameraConnectivity}</div>

                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head">  Image and Video Details</a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Video Formats  :</div>
                            <div class="col">HDR Support  :</div>
                            <div class="col">Image Formats  :</div>
                            <div class="col">Supported Audio Formats  :</div>
                            <div class="col">Video Resolution  :</div>
                            <div class="col">Video Resolution Details  :</div>
                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraConnectivity}</div>
                            <div class="col">{c.camera.cameraHDRSupport}</div>
                            <div class="col">{c.camera.cameraImageFormats}</div>
                            <div class="col">{c.camera.cameraSupportedAudioFormats}</div>
                            <div class="col">{c.camera.cameraVideoResolution}</div>
                            <div class="col">{c.camera.cameraVideoResolutionDetails}</div>
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head">Power </a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Battery Type  :</div>
                            <div class="col">Battery Capacity  :</div>
                            <div class="col">No. Of Shots  :</div>
                            
                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraBatteryType}</div>
                            <div class="col">{c.camera.cameraBatteryCapacity}</div>
                            <div class="col">{c.camera.cameraNoOfShots}</div>
                            
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col">
                            <a class="spec-head">Input/Output   </a>
                        </div>
                        <div class="col product-col">
                            <div class="col">Microphone  :</div>
                            <div class="col">Tripod Socket  :</div>
                            <div class="col">3.5mm Headphone Jack  :</div>
                            <div class="col">USB Connectivity :</div>
                            <div class="col">PictBridge Support  :</div>
                            
                        </div>
                        <div class="col">
                            <div class="col">{c.camera.cameraMicrophone}</div>
                            <div class="col">{c.camera.cameraTripodSocket}</div>
                            <div class="col">{c.camera.cameraHeadphoneJack}</div>
                            <div class="col">{c.camera.cameraUSBConnectivity}</div>
                            <div class="col">{c.camera.cameraPictBridgeSupport}</div>
                            
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


export default CameraDetails;