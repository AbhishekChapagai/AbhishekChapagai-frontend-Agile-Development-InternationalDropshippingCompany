import '@szhsin/react-menu/dist/index.css';

import React from "react";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import './Header.css';
import ProfileMenu from './ProfileMenu';
import axios from 'axios';
import { Avatar } from '@material-ui/core';


class Header extends Component {

  state = {
    firstName: "",
    lastName: "",
    img: "",
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }

  componentDidMount() {
    axios.get("http://localhost:90/user/token/decode", this.state.config)
      .then((response) => {
        const data = response.data
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          img: data.img
        })
      }).catch((err) => {
        console.log(err);
      })
  }

  logout = () => {
    localStorage.clear();
    window.location.href = '/'
  }

  render() {
    if (localStorage.getItem('userType') === 'User') {
      var navbar = <>
        <Navbar collapseOnSelect expand="sm">
          <Container>
            <Navbar.Brand href="/"> <i class="fas fa-paper-plane"></i> dhuwani</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mb-1">
                <LinkContainer exact to="/profile" className="mobile_show">
                  <Nav.Link>
                    <div className="nav_profile_link">
                      <div className="nav_profile_icon">
                        <Avatar src={"http://localhost:90/image/userImg/" + this.state.img} />
                      </div>

                      <div className="nav_profile_detatil">
                        <span className="mobile_profile nav_name_mob"> {this.state.firstName} {this.state.lastName} </span>
                        <br />
                        <span className="mobile_profile"> See your Profile </span>
                      </div>
                    </div>
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer exact to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/product" >
                  <NavDropdown title="Product" id="collasible-nav-dropdown">
                    <LinkContainer exact to="/product/cosmetics">
                      <NavDropdown.Item >
                        Cosmetic
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer exact to="/product/gadgets">
                      <NavDropdown.Item>
                        Gadget
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>

                <LinkContainer exact to="/request">
                  <Nav.Link>Request Product</Nav.Link>
                </LinkContainer>



                <LinkContainer exact to="/cart" className="mobile_show">
                  <Nav.Link>Cart</Nav.Link>
                </LinkContainer>
              </Nav>

              <Nav>
                <div className="mobile_hidden nav_profile">
                  <ProfileMenu />
                </div>

                <Link>
                  <button type="submit" onClick={this.logout} className="btn btn_p_c mobile_show"><i class="fas fa-sign-out-alt"></i>  Logout </button>
                </Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </>
    }
    else if (localStorage.getItem('userType') === 'Admin') {
      navbar = <>
        HEllo
      </>
    }
    else {
      navbar = <>
        <Navbar collapseOnSelect expand="sm">
          <Container>
            <Navbar.Brand href="/"> <i class="fas fa-paper-plane"></i> dhuwani</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mb-1">
                <LinkContainer exact to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/product" >
                  <NavDropdown title="Product" id="collasible-nav-dropdown">
                    <LinkContainer exact to="/product/cosmetics">
                      <NavDropdown.Item >
                        Cosmetic
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer exact to="/product/gadgets">
                      <NavDropdown.Item>
                        Gadget
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
              </Nav>

              <Nav>
                <Link exact to="/login">
                  <button type="submit" className="btn btn_p_c"><i class="fas fa-sign-in-alt"></i>  Login </button>
                </Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </>
    }

    return (
      <div className="Header">
        {navbar}
      </div >
    )
  }
}


export default Header;