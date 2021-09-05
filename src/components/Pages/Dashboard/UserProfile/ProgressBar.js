import React, { Component } from 'react'
import axios from "axios";
import './bar.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



class ProgressBar extends Component {



    render() {
        var order = <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bg-white p-2 border rounded px-3">
                            <div class="d-flex flex-row justify-content-between align-items-center order">
                                <div class="d-flex flex-column order-details"><span>Your order has been Placed</span><span class="date">by DHFL on 21 Jan, 2020</span></div>
                            </div>
                            <hr class="divider mb-4" />
                            <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                                <span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                                <hr class="flex-fill uncheck-track" /><span class="uncheck-dot"></span>
                                <hr class="flex-fill uncheck-track" /><span class="uncheck-dot"></span>
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center align-items-center"><span>15 Mar</span><span>Order Dispatched</span></div>
                                <div class="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for delivery</span></div>
                                <div class="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bg-white p-2 border rounded px-3">
                            <div class="d-flex flex-row justify-content-between align-items-center order">
                                <div class="d-flex flex-column order-details"><span>Your order has Reached Nepal</span><span class="date">by DHFL on 21 Jan, 2020</span></div>
                            </div>
                            <hr class="divider mb-4" />
                            <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                                <span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                                <hr class="flex-fill track-line" /> <span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                                <hr class="flex-fill uncheck-track" /><span class="uncheck-dot"></span>
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center align-items-center"><span>15 Mar</span><span>Order Dispatched</span></div>
                                <div class="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for delivery</span></div>
                                <div class="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bg-white p-2 border rounded px-3">
                            <div class="d-flex flex-row justify-content-between align-items-center order">
                                <div class="d-flex flex-column order-details"><span>Your order has been Delivered </span><span class="date">by DHFL on 21 Jan, 2020</span></div>
                            </div>
                            <hr class="divider mb-4" />
                            <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                                <span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                                <hr class="flex-fill track-line" /> <span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                                <hr class="flex-fill track-line" /><span class="d-flex justify-content-center align-items-center big-dot dot"><i class="fa fa-check text-white"></i></span>
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center align-items-center"><span>15 Mar</span><span>Order Dispatched</span></div>
                                <div class="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for delivery</span></div>
                                <div class="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
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


export default ProgressBar