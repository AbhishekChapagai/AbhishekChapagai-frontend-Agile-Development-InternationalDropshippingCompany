import React, { Component, state } from 'react'
import axios from "axios";
import './userProfile.css'
import { Link } from 'react-router-dom'


class Profile extends Component {

    state={
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    componentDidMount() {
        const id = localStorage.getItem("userid");
        console.log(id)
        axios.get('http://localhost:90/user/profile/' + id)
            .then((response) => {
                console.log(response)
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    phone: response.data.phone,
                })
            })
    }

    render() {
        return (
            <>
                <div className="mainUser">
                    <div className="container">
                        <div className="row">
                            <div className="sidebarCat col-xl-2 col-lg-2 col-md-3 col-sm-12">
                                <div class="sidebar">
                                    <p className="manageAccount">Manage your account</p>
                                    <Link to="/user/profile"><a class="active">My Profile</a></Link>
                                    <Link to="/user/address"><a href="#address">My Address</a></Link>
                                    <Link><a href="#order">My Order</a></Link>
                                </div>
                            </div>
                            <div className="cardSection col-xl-10 col-lg-10 col-md-9 col-sm-12 ">
                                <div class="page-content page-container" id="page-content">
                                    <div class="padding">
                                        <div class="row container d-flex justify-content-center">
                                            <div class="col-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                                            {/* <div class="card-block text-center text-white">
                                                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                                                <h6 class="f-w-600">Hembo Tingor</h6>

                                                            </div> */}
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h5 class="m-b-20 p-b-5 b-b-default f-w-600">My profile</h5>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10">Firstname</p>
                                                                        <p class="text-muted">{this.state.firstname}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10">Lastname</p>
                                                                        <p class="text-muted">{this.state.lastname}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10">Email</p>
                                                                        <p class="text-muted">{this.state.email}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10">Phone</p>
                                                                        <p class="text-muted">{this.state.phone}</p>
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                        <br></br>
                                                                        <div class="m-b-6"><i class="fas fa-user-edit"></i> EDIT PROFILE</div>

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
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Profile