import React, { Component } from 'react'
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
        axios.get("http://localhost:90/cosmetic/women", this.state)
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
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1265,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 1201,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 785,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]

        };

        return (
            <>
                
                <div className="container displayCosmetic">
                    <div className="container showCosmetic">
                        <div className="row cosmeticBand">
                            <p className="col-9 col-sm-11 txtCosmetic">For Women</p>
                            <p className="col-3 col-sm-1 viewMore">View More</p>
                           
                        </div>
                        <Slider {...settings} className="mainCatCosmetic">
                        {/* <div className="row mainCatCosmetic col-sm-12"> */}
                            {
                                this.state.cosmetic.map((c) => {
                                    return (

                                         <a href={"/product/cosmetic/cosmeticdetails/" + c._id} className="col-6 cosmeticCat"> 
                                            {/* <a href={"/product/cosmetic/cosmeticdetails/" + c._id}> */}
                                            <div className="catCosmeticImage">
                                                <img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="img" />
                                            </div>
                                            <div className="CosmeticNameCategory">
                                                <p className="CosmeticName">&nbsp;
                                                    {
                                                        c.cosmeticname
                                                    }  {
                                                      c.cosmeticmodel
                                                  }<br></br>

                                                </p>
                                                <p className="CosmeticType">&nbsp;
                                                    {
                                                        c.cosmeticmodel
                                                    }

                                                </p>
                                                <p className="CosmeticPrice">NPR&nbsp;
                                                    {
                                                        c.cosmeticprice
                                                    }

                                                </p>
                                                

                                                {/* <div className="landingCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div> */}
                                            </div>
                                            {/* </a> */}
                                        </a>

                                    )
                                })
                            }
                        </Slider>
                        {/* </div> */}
                    </div>
                </div>
              
            </>
        )
    }

}

export default CosmeticCategory