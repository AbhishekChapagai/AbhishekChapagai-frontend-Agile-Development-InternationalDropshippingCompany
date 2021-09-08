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
      infinite: true,
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
          breakpoint: 768,
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
            <div className="gadgetBand">
              <h1 className="txtCamera"><span>For Women<strong>W</strong></span></h1>

            </div>
            <Slider {...settings} className="mainCatCosmetic">
              {/* <div className="row mainCatCosmetic col-sm-12"> */}
              {
                this.state.cosmetic.map((c) => {
                  return (

                    <a href={"/product/cosmetic/cosmeticdetails/" + c._id} className="col-6 cosmeticCat">
                      {/* <a href={"/product/cosmetic/cosmeticdetails/" + c._id}> */}
                      <div className="catCosmeticImage">
                        <img src={"http://localhost:90/cosmetic/" + c.cosmeticImages[0].imageName} alt="img" />
                      </div>
                      <div className="CosmeticNameCategory">
                        <p className="CosmeticName">&nbsp;
                          {
                            c.cosmeticname ? (c.cosmeticname) : ("Cosmetic Name")
                          }  {
                            c.cosmeticmodel ? (c.cosmeticmodel) : ("Cosmetic Model")
                          }<br></br>

                        </p>
                        <p className="CosmeticType">&nbsp;
                          {
                            c.cosmetictype ? (c.cosmetictype) : ("Cosmetic Type")
                          } / {
                            c.cosmeticgender ? (c.cosmeticgender) : ("Cosmetic Type")
                          }

                        </p>
                        <p className="cosmeticRating">RATING</p>
                        <p className="CosmeticPrice">NPR&nbsp;
                          {
                            c.cosmeticprice ? (c.cosmeticprice) : ("Cosmetic Price")
                          }

                        </p>


                      </div>
                    </a>

                  )
                })
              }
            </Slider>
          </div>
        </div>

      </>
    )
  }

}

export default CosmeticCategory