import { Component } from "react";
import './LoginRegister.css';
import axios from "axios";

class Register extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }

    submitData = (e) => {
        e.preventDefault();
        // data.append('firstname', this.state.firstname)
        // data.append('lastname', this.state.lastname)
        // data.append('email', this.state.email)
        // data.append('password', this.state.password)

        axios.post("http://localhost:90/user/signup", this.state)
            .then((response) => {
                console.log(response);
                console.log(this.state);
                // window.location.href = "/signin"
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    render() {
        return (
            <div className="Register">
                {/* left side  */}
                {/* r stands for register */}
                <div className="r_left_side">

                    {/* top container */}
                    <div className="r_left_top">

                        {/* logo */}
                        <div className="r_left_logo">
                            {/* <img src={Logo} alt="logo" /> */}
                            <span>Dhuwani</span>
                        </div>

                        {/* form */}
                        <div className="r_left_form">
                            <div className="r_heading">
                                <h2> Join Dhuwani </h2>
                                {/* <p> Moto </p> */}
                            </div>

                            <div className="r_form">
                                <form>
                                    <div className="row g-2">
                                        <div className="col-md">
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="floatingInputFirst" placeholder="Jhon" name="firstname" value={this.state.firstname}
                                                    data-testid="firstname-input" onChange={this.changeHandler} />
                                                <label id="firstname" htmlFor="floatingInputFirst">First Name</label>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="floatingInputLast" placeholder="Smith" name="lastname" value={this.state.lastname}
                                                    data-testid="lastname-input" onChange={this.changeHandler} />
                                                <label id="lastname" htmlFor="floatingInputLast">Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com" name="email" value={this.state.email}
                                            data-testid="email-input" onChange={this.changeHandler} />
                                        <label id="email" htmlFor="floatingInput">Email address</label>
                                        {this.state.email && !(/\S+@\S+\.\S+/).test(this.state.email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}

                                    </div>

                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="password1!" name="password" value={this.state.password}
                                            data-testid="password-input" onChange={this.changeHandler} />
                                        <label id="password" htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <li>8 characters minimum </li>
                                    <li> One number, One Symbol </li>

                                    <button type="submit" id="login-btn" className="btn btn_primary_color btn-md btn-block" onClick={this.submitData}>Register</button>


                                </form>

                                <p className="r_form_agree">
                                    By clicking Register, you agree to our <b>Terms of Service </b> and <b>Privacy Policy</b>.
                                </p>

                                <p className="r_form_login">
                                    Already have an account? <a href="/login"> Log in </a>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* bottom container */}
                    <div className="r_left_bottom">
                        <span> &copy; 2021 Dhuwani | Kathmandu, Nepal</span>
                    </div>
                </div>

                {/* right side */}
                <div className="r_right_side col-4">
                    {/* <img src={test} /> */}
                    <p className="img"> Right Side. Image Sections </p>
                </div>

            </div >
        );
    }
}

export default Register;