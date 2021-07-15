import { Component } from "react";
import './Header.css';

class Header extends Component {

    icon = () => {
        const icon = document.querySelector(".nav_mobile_hamburger");

        icon.classList.toggle("iconClick");
    }

    render() {
        return (
            <div className="Header primary_text_color">

                <div className="container d-flex align-items-center">


                    {/* left side of navbar */}
                    <div className="nav_logo">
                        {/* <div className="nav_mobile_hamburger">
                            <span class="line line0"> </span>
                            <span class="line line1"> </span>
                            <span class="line line2"> </span>
                        </div> */}

                        <span>
                            Dhuwani
                        </span>
                    </div>



                    <nav>
                        {/*  left side of navbar */}
                        <div className="nav_left_side">
                            Product
                            {/* <ul className="nav_links">
                            <li className="nav_link_li"> 1 </li>
                            <li className="nav_link_li"> 2</li>
                            <li className="nav_link_li"> 3 </li>
                        </ul> */}
                        </div>

                        {/*  right side of navbar */}
                        <div className="nav_right_side">
                            <button type="submit" className="btn_login btn btn-primary " > Login </button>
                            {/* <button type="submit" className="btn_register btn btn-primary " > Register </button> */}
                        </div>
                    </nav>
                </div>
            </div >
        )
    }
}

export default Header;