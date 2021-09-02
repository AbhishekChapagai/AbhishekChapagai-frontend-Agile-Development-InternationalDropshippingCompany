import React, { Component } from 'react'
import axios from "axios";
import './Order.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


class MyOrder extends Component {



    render() {
            
        return (
            <>
            <div class="container">
            <Sidebar> </Sidebar>
            
                <div class="table-wrap">
                    <table class="table table-responsive table-borderless">
                        <thead>
                            <th>&nbsp;</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Review</th>
                            
                        </thead>
                        <tbody>
                            <tr class="align-middle alert border-bottom" >

                                <td class="text-center"> <img class="pic" src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png" alt="" /> </td>
                                <td>
                                    <div>
                                        <p class="m-0 fw-bold">Sneakers Shoes 2020 For Men</p>
                                        <p class="m-0 text-muted">Fugiat Voluptates quasi nemo,ipsa perferencis</p>
                                    </div>
                                </td>
                                
                                <td class="d-"> 2 </td>
                                <td> $89.98 </td>
                                <td> review </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

        </>
        )
    }
}


export default MyOrder