import axios from "axios";
import { Component } from "react";
import './Details.css';

class CosmeticDetails extends Component {
    constructor(props) {
        super(props);
        this.Addtocart = this.Addtocart.bind(this);
      }
    state = {
        userid: localStorage.getItem("userid"),
        id: this.props.match.params.id,
        quantity: "",
        cosmetics: [],

    }
    componentDidMount() {
        axios.get(`http://localhost:90/cosmetic/one/` + this.state.id)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    cosmetics: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    Addtocart(){
        const data={userid: this.state.userid, productid:this.state.id, quantity:this.state.quantity}
        axios.post(`http://localhost:90/cosmeticcart/insert/` , data )
        
            .then((response) => {
                console.log("successful")
                
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        var description = <>
            <div className="container">{
                this.state.cosmetics.map((c) => {
                    return (

                        <div>
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">

                                            <div className="preview-pic tab-content">
                                                <div className="tab-pane active" id="pic-1"><img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></div>
                                                <div className="tab-pane" id="pic-2"><img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></div>
                                                <div className="tab-pane" id="pic-3"><img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></div>
                                            </div>
                                            <ul className="preview-thumbnail nav nav-tabs">
                                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></a></li>
                                                <li><a data-target="#pic-2" data-toggle="tab"><img src={"htagtp://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></a></li>
                                                <li><a data-target="#pic-3" data-toggle="tab"><img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="productimage" /></a></li>
                                            </ul>

                                        </div>

                                        <div className="details col-md-6">
                                            <h3 className="product-title">{c.cosmeticname}</h3>
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
                                                    <div className="btn-minus"><span className="glyphicon glyphicon-minus">-</span></div>
                                                    <input type="number"value={this.state.quantity}  onChange={e=>{this.setState({quantity:e.target.value})}} />
                                                    <div className="btn-plus"><i className="bi bi-plus"></i>+</div>
                                                </div>
                                            </div>

                                            <h4 className="price">current price: <span>${c.cosmeticprice}</span></h4>
                                            <div className="action">
                                                <button className="add-to-cart  btn-default" type="button" onClick={this.Addtocart}>add to cart</button>
                                                <button className="like btn-default" type="button"><span className="fa fa-heart"></span></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="module" className="container additional-des">
                                <h3>Summary</h3>
                                <p className="collapse" id="collapseExample" aria-expanded="false">
                                    {c.cosmeticdescription}
                                </p>
                                <a role="button" className="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                </a>
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


export default CosmeticDetails;