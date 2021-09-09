import axios from "axios";
import React, { Component } from 'react';
import './Review.css';
import SimpleRating from './rating';
import { Avatar } from "@material-ui/core";

const rimages = [];
class Review extends Component {
    state = {
        productId: this.props.dataFromParent,
        firstName: '',
        lastName: '',
        review: '',
        reviews: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    componentDidMount() {

        axios.get(`http://localhost:90/productone/review/${this.state.productId}`)
            .then((response) => {
                console.log(response)
                this.setState({
                    reviews: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        var Review = <>
            <div className="container">
                <div className="card">

                    <div className="review-title review_border">Ratings & Reviews of this product</div>
                    {this.state.reviews.map((r) => {
                        return (
                            <>
                                <div className="row">
                                    <div className=" col-md-10 col-12 mb-5">
                                        <div className="rev-prof">
                                            <Avatar src={`${process.env.REACT_APP_BACKEND_URL}/userImg/` + r.img} />
                                        </div>
                                        <div className=" d-flex">
                                            <div className="d-flex flex-column ">
                                                <h3 className="review-name mt-2 mb-0">{r.firstName} {r.lastName}</h3>
                                                <div className="rating-stars">
                                                    <SimpleRating></SimpleRating>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row text-left">

                                            <p className="content">{r.review}</p>
                                        </div>
                                        <div className="row text-left">
                                            {
                                                r.reviewImages ? (<>

                                                    {
                                                        r.reviewImages.map((img) => {
                                                            return (
                                                                <img className="review-pic" src={`${process.env.REACT_APP_BACKEND_URL}/review/` + img.imageName} alt={img.imageName} />
                                                            )
                                                        })
                                                    }
                                                </>
                                                ) : ""
                                            }
                                        </div>




                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>

        return (Review)
    }
}
export default Review;