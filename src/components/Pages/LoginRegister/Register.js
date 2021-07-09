import { Component } from "react";
import './LoginRegister.css';

class Register extends Component {
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
                                                <input type="text" className="form-control" id="floatingInputFirst" placeholder="John" />
                                                <label htmlFor="floatingInputFirst">First Name</label>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="floatingInputLast" placeholder="Smith" />
                                                <label htmlFor="floatingInputLast">Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>

                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <li>8 characters minimum </li>
                                    <li> One number, One Symbol </li>

                                    <button type="submit" className="btn btn_primary_color btn-md btn-block">SignUp</button>

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