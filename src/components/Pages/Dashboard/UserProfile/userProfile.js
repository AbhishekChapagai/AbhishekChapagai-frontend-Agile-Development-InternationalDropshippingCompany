import React, { Component } from 'react'
import axios from "axios";
import './userProfile.css'
import { Link } from 'react-router-dom'


class Profile extends Component {

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
                                                                <h5 class="m-b-20 p-b-5 b-b-default f-w-600">MY PROFILE</h5>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Firstname</p>
                                                                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Lastname</p>
                                                                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                                        <h6 class="text-muted f-w-400">98979989898</h6>
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