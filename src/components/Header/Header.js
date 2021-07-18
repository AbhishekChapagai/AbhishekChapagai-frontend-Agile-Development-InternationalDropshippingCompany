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
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="sm">
          <Container>
            <Navbar.Brand href="/"> <i class="fas fa-paper-plane"></i> dhuwani</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer extact to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Product" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/product/cosmetic">
                    Cosmetic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/product/gadget">
                    Gadget
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer extact to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>

              <Nav>
                <Link extact to="/login">
                  <button type="submit" className="btn btn_p_c">  Login </button>
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