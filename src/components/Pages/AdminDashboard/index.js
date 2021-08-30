import React, { Component } from 'react'
import CardBox from './Card/CardBox';
import './style.css';
import UserTable from './User/UserTable';


export default class index extends Component {
    render() {
        return (
            <div className="AdminIndex">
                <div className="container">
                    <div className="card_box">
                        <CardBox />
                    </div>
                    <div className="user_table">
                        <UserTable />
                    </div>
                </div>
            </div>
        )
    }
}
