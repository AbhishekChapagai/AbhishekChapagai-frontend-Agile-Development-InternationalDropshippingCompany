import React, { Component } from 'react'
import axios from "axios";
import './userProfile.css'
import { Link } from 'react-router-dom'

class Address extends Component {

    render() {
        return (
            <>
                <div className="mainUser">
                    <div className="container">
                        <div className="row">
                            <div className="sidebarCat col-xl-2 col-lg-2 col-md-3 col-sm-12">
                                <div class="sidebar">
                                    <p className="manageAccount">Manage your account</p>
                                    <Link to="/user/profile"><a>My Profile</a></Link>
                                    <Link to="/user/address"><a class="active">My Address</a></Link>
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
                                                    
                                                        <div class="col-sm-12">
                                                            <div class="card-block">
                                                                <h5 class="m-b-20 p-b-5 b-b-default f-w-600">My address</h5>
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="m-b-9">District</p>
                                                                        <p class="text-unmuted">rntng@gmail.com</p>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <p class="m-b-9">Tole</p>
                                                                        <p class="text-unmuted">rntng@gmail.com</p>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <p class="m-b-9">Phone Number</p>
                                                                        <p class="text-unmuted">rntng@gmail.com</p>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <br></br>
                                                                        <p class="text-mute">EDIT</p>
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


export default Address