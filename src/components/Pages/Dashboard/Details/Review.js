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
        reviewReply: '',
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
            {/* <div className="review-card card">
                Ratings & Reviews of this product
                {this.state.reviews.map((r) => {
                    return (
                        <> */}

            
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    <div className=" col-md-10 col-12 text-center mb-5">
                        <div className="card review-card">
                            <div className=" d-flex">
                                <div className="d-flex flex-column ">
                                    <h3 className="review-name mt-2 mb-0">Vikram jit Singh</h3>
                                    <div className="rating-stars">
                                    <SimpleRating></SimpleRating>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-left">
                                <p className="content">If you really enjoy spending your vacation 'on water' or would like to try something new and exciting for the first time.</p>
                            </div>
                            <div className="row text-left"> <img className="review-pic" src="https://i.imgur.com/kjcZcfv.jpg" /> <img className="review-pic" src="https://i.imgur.com/SjBwAgs.jpg" /> <img className="review-pic" src="https://i.imgur.com/IgHpsBh.jpg" /> </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
        //         )
        //     })}
        // </div>

        // </>

        return (Review)
    }
}
export default Review;