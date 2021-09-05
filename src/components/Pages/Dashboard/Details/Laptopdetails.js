import axios from "axios";
import { Component } from "react";
import './Details.css';
import Questions from './Question';
import Review from './Review';
import { toast } from "react-toastify";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

toast.configure();

const images = [];

class LaptopDetails extends Component {
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
        producttype: "",
        gadgets: [],

    }

    componentDidMount() {
        axios.get(`http://localhost:90/gadget/one/` + this.state.id)
            .then((response) => {

                for (var i = 0; i < response.data.data[0].gadgetImages.length; i++) {
                    const image = response.data.data[0].gadgetImages[i].imageName
                    images.push({ original: `${process.env.REACT_APP_BACKEND_URL}/gadget/` + image, thumbnail: `${process.env.REACT_APP_BACKEND_URL}/gadget/` + image })
                }
                this.setState({

                    gadgets: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    Addtocart() {

        const data = { userid: this.state.userid, productid: this.state.id, quantity: this.state.quantity, productname: this.state.productname, productprice: this.state.productprice, producttype: this.state.producttype }
        axios.post(`http://localhost:90/mycart/insert/`, data)


            .then((response) => {
                console.log("successful")

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
                console.log(err)

                toast.warning('Product already exist in cart!', {
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
            alert("Minimum quantity reached!")
        }
    }


    render() {
        var description = <>
            <div class="container">
                {
                    this.state.gadgets.map((l) => {
                        return (
                            <div>
                                <div class="details-card">
                                    <div class="container-fliud">
                                        <div class="wrapper row">
                                            <div class="preview col-md-6">

                                                <ImageGallery items={images} />
                                            </div>


                                            <div class="details col-md-6">
                                                <h3 class="product-title" value={this.state.productname = l.gadgetname}{...this.state.producttype = l.gadgettype} onChange={e => { this.setState({ productname: e.target.value }) }}>{l.gadgetname}</h3>
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


                                                        <div className="btn-minus" onClick={this.itemMinus}><i className="glyphicon glyphicon-minus"></i><i class="fas fa-minus"></i></div>
                                                        <input value={this.state.quantity} onChange={e => { this.setState({ quantity: e.target.value }) }} disabled />
                                                        <div className="btn-plus" onClick={this.itemPlus}>< i className="bi bi-plus"></i><i class="fas fa-plus quantity-plus"></i></div>


                                                    </div>
                                                </div>

                                                <h4 class="price" value={this.state.productprice = l.gadgetprice} onChange={e => { this.setState({ productprice: e.target.value }) }}>current price: <span>Rs {l.gadgetprice}</span></h4>
                                                <div class="action">
                                                    <button class="add-to-cart  btn-default" type="button" onClick={this.Addtocart}>add to cart</button>
                                                    <button class="like btn-default" type="button"><span class="wishlist fa fa-heart"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="module" class="container additional-des">
                                    <h3>Summary</h3>
                                    <p class="collapse" id="collapseExample" aria-expanded="false">
                                        {l.gadgetdescription}
                                    </p>
                                    <a class="showmore" role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
                                            <div class="col ">{l.brandName}</div>
                                            <div class="col">{l.laptop.laptopModel}</div>
                                            <div class="col">{l.laptop.laptopDimension}</div>
                                            <div class="col">{l.laptop.laptopWeight}</div>
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
                                            <div class="col">{l.laptop.laptopSize}</div>
                                            <div class="col">{l.laptop.laptopResolution}</div>
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
                                            <div class="col">{l.laptop.laptopProcessor}</div>
                                            <div class="col">{l.laptop.laptopBaseClock}</div>
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
                                            <div class="col">{l.laptop.laptopRam}</div>


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
                                            <div class="col">{l.laptop.laptopGraphic}</div>
                                            <div class="col">{l.laptop.laptopDedicatedGraphicMemory}</div>
                                            <div class="col">{l.laptop.laptopDedicatedGraphic}</div>
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
                                            <div class="col">{l.laptop.laptopHarddisk}</div>
                                            <div class="col">{l.laptop.laptopSSD}</div>
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
                                            <div class="col">{l.laptop.laptopNoOfUSBPorts}</div>
                                            <div class="col">{l.laptop.laptopUSBPorts}</div>
                                            <div class="col">{l.laptop.laptopHDMIPorts}</div>
                                            <div class="col">{l.laptop.laptopMultiCardSlot}</div>
                                            <div class="col">{l.laptop.laptopHeadphone}</div>
                                            <div class="col">{l.laptop.laptopJack}</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )
                    })
                }

            </div>

            <Review dataFromParent={this.state.id}></Review>
            <Questions dataFromParent={this.state.id}> </Questions>

        </>
        return (
            description
        )






    }
}



export default LaptopDetails;