import axios from "axios";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class LaptopBrowsing extends Component {

    state = {
        gadget: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        },
    }

    componentDidMount() {
        axios.get("http://localhost:90/gadget/laptop", this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    gadget: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    render() {

        return (
            <div className="showGadgets">
                <div className="gadgetsBand">
                    <NavDropdown title="Product Type" id="collasible-nav-dropdown">
                        <LinkContainer exact to="/product/camera">
                            <NavDropdown.Item >
                                Camera
                            </NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer exact to="/product/laptop">
                            <NavDropdown.Item>
                                Laptop
                            </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </div>

                <div className="gadgetsFilter">
                    <h>Filter By Name</h>
                    
                    <a href={"/laptop/acer"}>Acer</a>
                    <a href={"/laptop/dell"}>Dell</a>
                    <a href={"/laptop/asus"}>Asus</a>
                    <a href={"/laptop/hp"}>Hp</a>
                    <a href={"/laptop/razer"}>Razer</a>
                    <a href={"/laptop/lenovo"}>Lenovo</a>
                    <a href={"/laptop/apple"}>Apple</a>
                    <a href={"/laptop/msi"}>MSI</a>
                    <a href={"/laptop/aorus"}>Aorus</a>
                    <a href={"/laptop/microsoft"}>Microsoft</a>
                   
                </div>


                <div className="mainCatGadgets">
                    {
                        this.state.gadget.map((g) => {
                            return (


                                <div className="gadgetsCat">

                                    <a href={"/product/gadget/laptopdetails/" + g._id}>
                                        <div className="catGadgetsImage">
                                            <img src={"http://localhost:90/gadget/" + g.gadgetimage} alt="img" />
                                        </div>
                                        <div className="GadgetsNameCategory">
                                            <p className="GadgetsName">&nbsp;

                                                {
                                                    g.gadgetname
                                                }<br></br>

                                            </p>
                                            <p className="GadgetsPrice">&nbsp;Rs&nbsp;
                                                {
                                                    g.gadgetprice
                                                }

                                            </p>

                                        </div></a>


                                    <div className="gadgetscart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>


        )
    }

}
export default LaptopBrowsing