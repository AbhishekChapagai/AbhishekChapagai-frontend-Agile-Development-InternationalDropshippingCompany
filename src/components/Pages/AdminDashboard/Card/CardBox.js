import React, { Component } from 'react';
import './style.css';

export default class CardBox extends Component {
    render() {

        return (
            <div className="CardBox">
                <div className="card_box_heading">
                    <h2 className="card_heading"> Current Status </h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="main_card col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="admin_card_border">
                            <h3 className="card_number"> $22,000</h3>
                            <span className="card_title">Total Revenue</span>
                            <br />
                            <span className="card_pl">Profite/Loss</span>
                        </div>
                    </div>

                    <div className="main_card col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="admin_card_border">
                            <h3 className="card_number"> $22,000</h3>
                            <span className="card_title">Total Revenue</span>
                            <br />
                            <span>Profite/Loss</span>
                        </div>
                    </div>
                    <div className="main_card col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="admin_card_border">
                            <h3 className="card_number"> $22,000</h3>
                            <span className="card_title">Total Revenue</span>
                            <br />
                            <span>Profite/Loss</span>
                        </div>
                    </div>
                    <div className="main_card col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="admin_card_border">
                            <h3 className="card_number"> $22,000</h3>
                            <span className="card_title">Total Revenue</span>
                            <br />
                            <span>Profite/Loss</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
