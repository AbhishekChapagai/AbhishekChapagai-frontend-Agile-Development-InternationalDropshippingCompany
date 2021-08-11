import React, { Component, state } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import './profileEdit.css'

class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            img: '',
            userId: '',
            config: {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        };
        this.submitUpdate = this.submitUpdate.bind(this)
    }

    componentWillMount() {
        this.getuserdata();
        console.log(this.state.headers)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }

    getuserdata = () => {
        axios.get("http://localhost:90/user/token/decode", this.state.config)
            .then((response) => {
                const data = response.data
                this.setState({
                    firstname: data.firstName,
                    lastname: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    userId: data.userId
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    submitUpdate = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('email', this.state.email)
        data.append('phone', this.state.phone)
        data.append('img', this.state.img)

        axios.put(`http://localhost:90/user/profile/update/${this.state.userId}`, data, this.state.config)
            .then((response) => {
                console.log(response)
                alert("user updated successfully");
            }).catch((err) => {
                console.log(err.response)
                alert("error updating user");
            })
    }

    render() {
        return (
            <>
                <div className="mainUser">
                    <div className="container">
                        <div className="row">
                            <div className="sidebarCat col-xl-2 col-lg-2 col-md-3 col-sm-12">
                                <div className="sidebar">
                                    <p className="helloUser">Hello</p>
                                    <p className="manageAccount">Manage your account</p>
                                    <Link to="/user/profile"><a className="active">My Profile</a></Link>
                                    <Link to="/user/address"><a href="#address" className="sidebara">My Address</a></Link>
                                    <Link><a href="#order" className="sidebara">My Order</a></Link>
                                </div>
                            </div>
                            <div className="cardSection col-xl-10 col-lg-10 col-md-9 col-sm-12 ">
                                <div className="page-content page-container" id="page-content">
                                    <div className="padding">
                                        <div className="row container d-flex justify-content-center">
                                            <div className="col-12">
                                                <div className="card user-card-full profileCard">
                                                    <div className="row m-l-0 m-r-0">

                                                        <div className="col-sm-12">
                                                            <div className="card-block">
                                                                <h5 className="m-b-20 p-b-5 b-b-default f-w-600">My profile</h5>
                                                                <div className="row profileRow">
                                                                    <div className="col-sm-4">
                                                                        <p className="m-b-10">Firstname</p>
                                                                        <input id="form_name" type="text" name="firstname" class="form-control" value={this.state.firstname} onChange={this.changeHandler} />
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <p className="m-b-10">Lastname</p>
                                                                        <input id="form_name" type="text" name="lastname" class="form-control" value={this.state.lastname} onChange={this.changeHandler} />
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <p className="m-b-10">Email</p>
                                                                        <input id="form_name" type="text" name="email" class="form-control" value={this.state.email} onChange={this.changeHandler} />
                                                                    </div>
                                                                </div>
                                                                <div className="row profileRow2">
                                                                    <div className="col-sm-4">
                                                                        <p className="m-b-10">Phone number</p>
                                                                        <input id="form_name" type="text" name="phone" class="form-control" value={this.state.phone} onChange={this.changeHandler} />
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <p className="m-b-10">Profile Picture</p>
                                                                        <input id="form_name" type="file" name="img" class="form-control" onChange={this.fileHandler} />
                                                                        <label> </label>
                                                                    </div>

                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <button type="submit" value="update" className="m-b-6 buttonSaveChanges" onClick={this.submitUpdate}>SAVE CHANGES</button>

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
export default EditProfile;