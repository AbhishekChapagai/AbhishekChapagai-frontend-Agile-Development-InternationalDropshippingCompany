import { Component } from "react";
import './LoginRegister.css';
import axios from "axios";

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
                this.setState({
                    success: response.data.success
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
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
                            <span> <i class="fas fa-paper-plane"></i> Dhuwani</span>
                        </div>

                        {/* form */}
                        <div className="l_left_form">
                            <div className="l_heading">
                                <h2 className="mb-3"> Login to Dhuwani</h2>
                                {/* <p> Moto </p> */}
                            </div>

                            <div className="l_form">
                                <form>
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