import axios from "axios";
import { Component } from "react";
import './Details.css';

class CosmeticDetails extends Component {
    state = {
        id: this.props.match.params.id,
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
    render() {
        var description = <>
            <div class="container">{
                this.state.cosmetics.map((c) => {
                    return (

                        <div>
                            <div class="card">
                                <div class="container-fliud">
                                    <div class="wrapper row">
                                        <div class="preview col-md-6">

                                            <div class="preview-pic tab-content">
                                                <div class="tab-pane active" id="pic-1"><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></div>
                                                <div class="tab-pane" id="pic-2"><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></div>
                                                <div class="tab-pane" id="pic-3"><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></div>
                                            </div>
                                            <ul class="preview-thumbnail nav nav-tabs">
                                                <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></a></li>
                                                <li><a data-target="#pic-2" data-toggle="tab"><img src={"htagtp://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></a></li>
                                                <li><a data-target="#pic-3" data-toggle="tab"><img src={"http://localhost:90/assets/image/cosmetic/" + c.cosmeticimage} /></a></li>
                                            </ul>

                                        </div>

                                        <div class="details col-md-6">
                                            <h3 class="product-title">{c.cosmeticname}</h3>
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

                                            <h4 class="price">current price: <span>${c.cosmeticprice}</span></h4>
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
                                    {c.cosmeticdescription}
                                </p>
                                <a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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