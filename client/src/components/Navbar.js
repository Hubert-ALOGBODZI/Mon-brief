import logo from "../images/Capture_d_Ã©cran_2022-08-24_Ã _10.08.12-removebg-preview.png";
// import {Link}  from  "react-router-dom" ;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import "../CSS/Navbar.css";
// const NavBar = () => {

//     return (

//         // <nav>
//         //     <input type="checkbox" id="check" />
//         //     <label for="check" class="checkbtn">
//         //         {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
//         //         <FontAwesomeIcon icon="fa-solid fa-bars" />
//         //     </label>
//         //     <label class="logo"><img style={{ width: 150, paddingTop: 9 }} src={logo} alt="Logo du site" /></label>
//         //     <ul>
//         //         <li><Link to="/">Home</Link></li>
//         //         <li><Link to="/">ZERTYUe</Link></li>
//         //         <li><Link to="/">iilyrouid</Link></li>
//         //         <li><Link to="/Contact">CONTACT</Link></li>
//         //         <li className="localisation checkbtn" id="check"><Link to="/">LOCALISATION</Link></li>
//         //     </ul>
//         // </nav>

//         <Navbar bg="dark" variant="dark">
// <Container>
//   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//   <Nav className="ms-auto">
//     <Nav.Link href="#home">Home</Nav.Link>
//     <Nav.Link href="#features">Features</Nav.Link>
//     <Nav.Link href="#pricing">Pricing</Nav.Link>
//   </Nav>
// </Container>
// </Navbar>

//     );
// }

// export default NavBar;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      style={{
        background: "#0F5463",
      }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            style={{ width: 150, paddingTop: 9 }}
            src={logo}
            alt="Logo du site"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              color: "white",
            }}
            navbarScroll
          >
            <Nav.Link
              style={{
                  fontSize:"20px",
                  color: "white",
              }}
              href="#action1"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{
                  color: "white",
                  fontSize:"20px",
              }}
            >
              Link
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{
                  color: "white",
                  fontSize:"20px",
              }}
            >
              Link
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{
                  color: "white",
                  fontSize:"20px",
              }}
            >
              Link
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              style={{
                  fontSize:"20px",
                color: "white",
              }}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
