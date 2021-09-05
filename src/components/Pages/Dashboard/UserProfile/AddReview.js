import React, { Component } from 'react'
import axios from "axios";
import './profileEdit.css'
import './review.css';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { orange } from '@material-ui/core/colors';
import { toast } from 'react-toastify';
toast.configure();

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

const useStyles = makeStyles({
    root: {
        color: 'orange',
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Rating
                name="hover-feedback"
                color='orange'
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
        </div>
    );
}

class AddReview extends Component {
    state = {
        productId: this.props.match.params.id,
        review: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }
    submitData = (e) => {
        e.preventDefault();
        const stateData = this.state;
        const data = new FormData()

        // looping image and sending to database
        for (const key of Object.keys(this.state.reviewImages)) {
            data.append('reviewImages', this.state.reviewImages[key])
        }
        data.append('productId', stateData.productId)
        data.append('review', stateData.review)
        data.append('rating', stateData.rating)

        axios.post("http://localhost:90/product/review/", data, this.state.config)
            .then((response) => {
                window.location.href = ""
                this.setState({
                    success: response.data.success
                })
            })
            .catch((err) => {
                console.log(err.response);

                this.setState({
                    success: err.response.data.success
                })
            })
    }

    fileHandler = (e) => {
        if (e.target.files.length > 3.) {
            return toast.error('Limit exceed! Max 3 imgaes.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            this.setState({
                reviewImages: e.target.files
            })
        }
    }


    render() {
        var order = <>
            <div className="mainUser">
                <div className="container">
                    <div className="row">
                        <Sidebar></Sidebar>
                        <div className="cardSection col-xl-10 col-lg-10 col-md-9 col-sm-12 ">
                            <div className="page-content page-container" id="page-content">
                                <div className="padding">
                                    <div className="row container d-flex justify-content-center">
                                        Review
                                        <div className="col-12">
                                            <div className="card user-card-full profileCard">
                                                <div className="wrapper row row m-l-0 m-r-0">
                                                    <div className=" product-img">
                                                        <img class="pic col-md-6" src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png" alt="" />

                                                        Sneakers Shoes 2020 For Men

                                                    </div>


                                                    <HoverRating />

                                                    <form>
                                                        <div className="revew-des">Review Description <br /></div>
                                                        <div className="rating-txt"> <textarea placeholder="Please provide a Feed back about this product." name="review" value={this.state.review} onChange={this.changeHandler}></textarea>
                                                        </div>
                                                        <div class="col-md-12 col-lg-10 col-12">
                                                            <div class="form-group files review-input"><label class="my-auto">Upload Your File </label> <input id="file-review" type="file" class="form-control" onChange={this.fileHandler} multiple /></div>
                                                        </div>

                                                        <button onClick={this.submitData}>submit</button>

                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        return (
            order
        )
    }
}


export default AddReview

