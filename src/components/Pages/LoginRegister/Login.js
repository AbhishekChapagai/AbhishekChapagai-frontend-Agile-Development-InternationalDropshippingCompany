import { Component } from "react";
import './LoginRegister.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
toast.configure();

class Login extends Component {
    state = {
        email: "",
        password: "",
        passwordHidden: true
    }

    toggleShow = this.toggleShow.bind(this);

    toggleShow() {
        this.setState({ passwordHidden: !this.state.passwordHidden });
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault();
        localStorage.clear();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, this.state)
            .then((response) => {
                console.log(response);
                console.log(response.data.token);
                this.setState({
                    success: response.data.success

                })
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userType", response.data.userType);
                localStorage.setItem("userid", response.data.userid);
                localStorage.setItem("verified", response.data.verified);

                console.log(response.data.userid)

            })
            .catch((err) => {
                console.log(err.response)
                this.setState({
                    success: err.response.data.success
                })

                toast.error('Invalid Email or Password!!!', {
                    position: "top-right",
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
            window.location.href = "/auth"
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
                            <Link className="logoLink" to="/">
                                <span>
                                    <i className="fas fa-paper-plane"></i> dhuwani
                                </span>
                            </Link>
                        </div>

                        {/* form */}
                        <div className="l_left_form">
                            <div className="l_heading">
                                <h2 className="mb-3"> Login to dhuwani</h2>
                                {/* <p> Moto </p> */}
                            </div>

                            <div className="l_form" >
                                <form id="LoginForm">

                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"
                                            data-testid="email-input" value={this.state.email} onChange={this.changeHandler} />
                                        <label id="email" htmlFor="floatingInput">Email address</label>
                                        {this.state.email && !(/\S+@\S+\.\S+/).test(this.state.email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}

                                    </div>

                                    <div className="form-floating mb-2 input_right_icon">
                                        <input type={this.state.passwordHidden ? 'password' : 'text'} className="form-control form_control_input" id="floatingPassword" placeholder="Password" name="password"
                                            data-testid="password-input" value={this.state.password} onChange={this.changeHandler} />
                                        <i id="input_form_right_icon" className="form_right_icon"
                                            onClick={this.toggleShow}>
                                            {this.state.passwordHidden ? < i className="fas fa-eye-slash icon_change"></i> : < i className="fas fa-eye icon_change"></i>}
                                        </i>
                                        <label id="password" htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <p className="l_form_forgot">
                                        <a className="l_link" href="/login/forgot/password"> Forgot Password?</a>
                                    </p>

                                    <button type="submit" id="register-btn" className="btn btn_primary_color btn-md btn-block mb-2" onClick={this.submitLogin}>Login</button>
                                </form>



                                <p className="l_form_login">
                                    No account? <Link className="l_link" to="/register"> Join dhuwani</Link>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* bottom container */}
                    <div className="l_left_bottom">
                        <span> &copy; 2021 dhuwani | Kathmandu, Nepal</span>
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