import React, { Component } from 'react'
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './landing.css';


class CameraCategory extends Component {

  state = {
    gadget: [],
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    },
  }

  componentDidMount() {
    axios.get("http://localhost:90/camera/five", this.state)
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
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
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
          breakpoint: 785,
          settings: {
            slidesToShow: 1,
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

        {/* CAMERA CATEGORY */}
        <div className="container displayCamera">
          <div className="container showCamera">
            <div className="cameraBand">
              <h1 className="txtCamera"><span>Cameras<strong>C</strong></span></h1>
            </div>
            <Slider {...settings} className="mainCatCamera">
              {
                this.state.gadget.map((g) => {
                  return (

                    <a href={"/product/gadget/cameradetails/" + g._id} className="col-6 cameraCat">
                      <div className="catGadgetImage">
                        <img src={"http://localhost:90/gadget/" + g.gadgetImages[0].imageName} alt="img" />
                      </div>
                      <div className="CameraNameCategory">
                        <p className="CameraName">&nbsp;
                          {
                            g.gadgetname ? (g.gadgetname) : ("Name")

                          } {g.camera.cameraModel ? (g.camera.cameraModel) : ("Model")} / {g.camera.cameraResolution ? (g.camera.cameraResolution) : ("Resolution")}/ {g.camera.cameraSensorType ? (g.camera.cameraSensorType) : ("Sensor")} / {g.camera.cameraConnectivity ? (g.camera.cameraConnectivity) : ("Connectivity")} / {g.camera.cameraBatteryCapacity ? (g.camera.cameraBatteryCapacity) : ("Battery")}<br></br>


                        </p>

                        <p className="ratingCamera">RATING</p>
                        <p className="CameraPrice">&nbsp;Rs&nbsp;
                          {
                            g.gadgetprice ? (g.gadgetprice) : ("Price")
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

export default CameraCategory