import { Menu, MenuButton, MenuDivider, MenuItem, SubMenu } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';

import React, { useState } from "react";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import './Header.css';
import ProfileMenu from './ProfileMenu';

class Header extends Component {
  render() {
    // if (role = nonuser) {
    //   var navbar = <>
    //     <Navbar collapseOnSelect expand="sm">
    //       <Container>
    //         <Navbar.Brand href="/"> <i class="fas fa-paper-plane"></i> dhuwani</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <Nav className="me-auto mb-1">
    //             <LinkContainer exact to="/">
    //               <Nav.Link>Home</Nav.Link>
    //             </LinkContainer>

    //             <LinkContainer to="/product" >
    //               <NavDropdown title="Product" id="collasible-nav-dropdown">
    //                 <LinkContainer exact to="/product/cosmetics">
    //                   <NavDropdown.Item >
    //                     Cosmetic
    //                   </NavDropdown.Item>
    //                 </LinkContainer>

    //                 <LinkContainer exact to="/product/gadgets">
    //                   <NavDropdown.Item>
    //                     Gadget
    //                   </NavDropdown.Item>
    //                 </LinkContainer>
    //               </NavDropdown>
    //             </LinkContainer>

    //             <LinkContainer exact to="/about">
    //               <Nav.Link>Test</Nav.Link>
    //             </LinkContainer>
    //           </Nav>

    //           <Nav>
    //             <Link exact to="/login">
    //               <button type="submit" className="btn btn_p_c"><i class="fas fa-sign-in-alt"></i>  Login </button>
    //             </Link>
    //           </Nav>
    //         </Navbar.Collapse>

    //       </Container>
    //     </Navbar>
    //   </>
    // }
    return (
      <div className="Header">
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
                        <i className="fas fa-user"> </i>
                      </div>

                      <div className="nav_profile_detatil">
                        <span className="mobile_profile"> Bikash Jhendi </span>
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
                  <span>Username</span>
                </div>

                <Link exact to="/login">
                  <button type="submit" className="btn btn_p_c mobile_show"><i class="fas fa-sign-out-alt"></i>  Logout </button>
                </Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>


      </div >
    )
  }
}


export default Header;