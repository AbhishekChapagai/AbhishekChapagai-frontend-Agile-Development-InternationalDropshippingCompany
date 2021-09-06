import React, { Component, useContext } from 'react'
import CardBox from './Card/CardBox';
import './style.css';
import UserTable from './User/UserTable';

import { Redirect } from "react-router-dom"; // wrap
import ProductRequested from './Product/ProductRequested/ProductRequested';

export default class index extends Component {

    render() {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem('userType') === "User") {
                return <Redirect to='/' />
            }
        }
        else {
            return <Redirect to='/login' />
        }

        return (
            <div className="AdminIndex">
                <div className="container">
                    <div className="card_box">
                        <CardBox />
                    </div>
                    <div className="user_table">
                        <UserTable />
                    </div>
                    <div className="product_req_table">
                        <ProductRequested />
                    </div>
                </div>
            </div>
        )
    }
}
