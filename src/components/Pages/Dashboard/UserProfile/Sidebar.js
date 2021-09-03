import React, { Component, state } from 'react'
import axios from "axios";
import './userProfile.css'
import { Link } from 'react-router-dom'


class Sidebar extends Component {

    state = {
        firstname: '',
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:90/user/token/decode", this.state.config)
            .then((response) => {
                const data = response.data
                this.setState({
                    firstName: data.firstName,

                })
            }).catch((err) => {
                console.log(err);
            })
    }


    render() {
        var sidebar =
        <>
        <div className="mainUser">
                <div className="row">
                    <div className="sidebarCat col-xl-2 col-lg-2 col-md-3 col-sm-12">
                        <div className="sidebar">
                            <p className="helloUser">Hello, {this.state.firstName}</p>
                            <p className="manageAccount">Manage your account</p>
                            <Link to="/user/profile"><a className="active">MY PROFILE</a></Link>
                            <Link to="/user/address"><a href="#address" className="sidebara">MY ADDRESS</a></Link>
                            <Link to="/user/myorder"><a className="sidebara">MY ORDER</a></Link>
                           
                        </div>
                    </div>
                </div>
           
        </div>
        
    </>
        return (
            sidebar
        )
    }
}


export default Sidebar