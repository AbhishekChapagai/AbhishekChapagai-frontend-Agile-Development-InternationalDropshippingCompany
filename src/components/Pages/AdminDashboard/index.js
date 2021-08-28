import React, { Component } from 'react'
import CardBox from './Card/CardBox';
import './style.css';


export default class index extends Component {
    render() {
        return (
            <div className="AdminIndex">
                <div className="container">
                    <div className="item-card">
                        <CardBox />
                    </div>
                    <div className="something">

                    </div>
                </div>
            </div>
        )
    }
}
