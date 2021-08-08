import axios from 'axios';
import React, { Component } from 'react';
import './style.css';

class VerifyEmail extends Component {
    state = {
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    send_mail = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/login/send/validation-mail", this.state, this.state.config)
            .then((response) => {
                console.log(response);
                this.setState({
                    success: response.data.success
                })
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    render() {
        return (
            <div className="VerifyEmail" >
                <div className="container verify_container col-xl-6 col-lg-6 col-md-6 ol-sm-10">
                    <h2 className="email_heading">Verify Your Email Address</h2>
                    <span className="email_msg">
                        Before you can access your account, you must first verify your email address. An email was sent to you.
                        Please also check your spam folder as well.
                    </span>
                    <span className="email_msg">
                        You didn't recieve an email. Click the button below to send an email once again.
                    </span>
                    <button className="btn btn_primary_color btn_send_verification" onClick={this.send_mail}>Send Email</button>
                </div>
            </div>
        )
    }
}

export default VerifyEmail;