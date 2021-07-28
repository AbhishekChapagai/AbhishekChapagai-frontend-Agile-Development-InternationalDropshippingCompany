import { Component } from "react";
import './Details.css';
// import Image1 from '../../../../assets/images/download.jpg';
// import Image2 from '../../../../assets/images/img2.jpg';
// import Image3 from '../../../../assets/images/img.png';

class CameraDetails extends Component {
    render() {
        return (

            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    {/* <div class="tab-pane active" id="pic-1"><img src={Image1} /></div> */}
                                    {/* <div class="tab-pane" id="pic-2"><img src={Image2} /></div> */}
                                    {/* <div class="tab-pane" id="pic-3"><img src={Image3} /></div> */}
                                </div>
                                <ul class="preview-thumbnail nav nav-tabs">
                                    {/* <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={Image1} /></a></li> */}
                                    {/* <li><a data-target="#pic-2" data-toggle="tab"><img src={Image2} /></a></li> */}
                                    {/* <li><a data-target="#pic-3" data-toggle="tab"><img src={Image3} /></a></li> */}
                                </ul>

                            </div>

                            <div class="details col-md-6">
                                <h3 class="product-title">men's shoes fashion</h3>
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

                                <h4 class="price">current price: <span>$180</span></h4>
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
                        Acer Aspire is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels.
                        It is powered by a Core i7 processor and it comes with 8GB of RAM. The Acer Aspire packs 1TB of HDD storage.

                        Graphics are powered by Intel HD Graphics 620. Connectivity options include Wi-Fi 802.11 ac and it comes
                        with 3 USB ports (2 x USB 2.0, 1 x USB 3.0), HDMI Port, Multi Card Slot, Headphone and Mic Combo Jack, RJ45 (LAN) ports.

                        As of 24th July 2021, Acer Aspire price in India starts at Rs. 79,979.
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
                            <div class="col ">DSLR</div>
                            <div class="col">24.1 MP</div>
                            <div class="col">Camera, Battery, Charger, Interface Cable, Lens</div>
                            <div class="col">101.3 x 129 x 77.6 mm</div>
                            <div class="col">475 grams</div>
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
                            <div class="col">Canon EF Mount</div>
                            <div class="col">18 - 55 mm</div>
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
                            <div class="col">CMOS</div>
                            <div class="col">APS-C</div>
                            <div class="col">22.3 x 14.9 mm</div>
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
                            <div class="col">3inch</div>
                            <div class="col">LCD</div>
                            <div class="col">920000dots</div>

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
                            <div class="col">SD, SDHC, SDXC</div>
                            <div class="col">NFC, Wi-Fi</div>

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
                            <div class="col">MOV</div>
                            <div class="col">No</div>
                            <div class="col">EXIF, DCF, RAW, JPEG, DPOF</div>
                            <div class="col">Linear PCM</div>
                            <div class="col">480p, 720p, 1080p</div>
                            <div class="col">1080p Frame rate : 24, 25, 30
                                720p Frame rate : 60
                                VGA Frame rate : 30</div>
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
                            <div class="col">Li-ion Battery</div>
                            <div class="col">860mAh</div>
                            <div class="col">410Shots</div>
                            
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
                            <div class="col">Built-in Microphone</div>
                            <div class="col">Yes</div>
                            <div class="col">Yes</div>
                            <div class="col">USB 2.0</div>
                            <div class="col">Yes</div>
                            
                        </div>
                    </div>


                </div>

            </div>







        )
    }
}


export default CameraDetails;