import axios from "axios";
import React, { Component } from 'react';
import './Review.css';
import SimpleRating from './rating';

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
                Ratings & Reviews of this product
                {this.state.reviews.map((r) => {
                    return (
                        <>
                                <div className="row">
                                    <div className=" col-md-10 col-12 mb-5">
                                        {
                                            this.state.reviews.map((rev) => {
                                                return (<>
                                                    
                                                        <div className=" d-flex">
                                                            <div className="d-flex flex-column ">
                                                                <h3 className="review-name mt-2 mb-0">{rev.firstName}{rev.lastName}</h3>
                                                                <div className="rating-stars">
                                                                    <SimpleRating></SimpleRating>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row text-left">
                                                            <p className="content">{r.review}</p>
                                                        </div>
                                                        {/* <div className="row text-left"> <img className="review-pic" src="https://i.imgur.com/kjcZcfv.jpg" /> <img className="review-pic" src="https://i.imgur.com/SjBwAgs.jpg" /> <img className="review-pic" src="https://i.imgur.com/IgHpsBh.jpg" /> </div> */}

                                                   
                                                    </>
                                                )
                                            })
                                        }

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