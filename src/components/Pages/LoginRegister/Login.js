import { Component } from "react";
import './LoginRegister.css';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
toast.configure();

class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
            .then((response) => {
                console.log(response);
                console.log(response.data.token);
                this.setState({
                    success: response.data.success
                })
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userType", response.data.userType);
            })
            .catch((err) => {
                console.log(err.response)
                this.setState({
                    success: err.response.data.success
                })

                toast.error('Invalid Email or Password!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    render() {
        if (this.state.success === true) {
            return <Redirect to="/auth" />
        }

        return (
            <div className="Login">
                {/* left side  */}
                {/* r stands for register */}
                <div className="l_left_side">

                    {/* top container */}
                    <div className="l_left_top">

                        {/* logo */}
                        <div className="l_left_logo">
                            {/* <img src={Logo} alt="logo" /> */}
                            <Link className="logoLink" exact to="/">
                                <span>
                                    <i class="fas fa-paper-plane"></i> Dhuwani
                                </span>
                            </Link>
                        </div>

                        {/* form */}
                        <div className="l_left_form">
                            <div className="l_heading">
                                <h2 className="mb-3"> Login to Dhuwani</h2>
                                {/* <p> Moto </p> */}
                            </div>

                            <div className="l_form">
                                <form id="loginForm">
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"
                                            data-testid="email-input" value={this.state.email} onChange={this.changeHandler} />
                                        <label id="email" htmlFor="floatingInput">Email address</label>
                                        {this.state.email && !(/\S+@\S+\.\S+/).test(this.state.email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}

                                    </div>

                                    <div className="form-floating mb-2">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"
                                            data-testid="password-input" value={this.state.password} onChange={this.changeHandler} />
                                        <label id="password" htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <button type="submit" id="register-btn" className="btn btn_primary_color btn-md btn-block mb-2" onClick={this.submitLogin}>Login</button>


                                </form>

                                <p className="l_form_login">
                                    No account? <a href="/register"> Join Dhuwani</a>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* bottom container */}
                    <div className="l_left_bottom">
                        <span> &copy; 2021 Dhuwani | Kathmandu, Nepal</span>
                    </div>
                </div>

                {/* right side */}
                <div className="l_right_side col-4">
                    {/* <img src={test} /> */}
                    <p className="img"> Right Side. Image Sections </p>
                </div>

            </div >
        );
    }
}

export default Login;