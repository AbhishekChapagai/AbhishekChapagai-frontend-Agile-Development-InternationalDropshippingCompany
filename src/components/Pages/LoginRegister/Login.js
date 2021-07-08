import { Component } from "react";
import './LoginRegister.css';

class Login extends Component {
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
                            <span>Dhuwani</span>
                        </div>

                        {/* form */}
                        <div className="l_left_form">
                            <div className="l_heading">
                                <h2 className="mb-3"> Login into Dhuwani</h2>
                                {/* <p> Moto </p> */}
                            </div>

                            <div className="l_form">
                                <form>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>

                                    <div className="form-floating mb-2">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <button type="submit" className="btn btn_primary_color btn-md btn-block mb-2">Login</button>

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