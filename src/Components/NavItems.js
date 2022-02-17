import React, { Component } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DevicesIcon from '@material-ui/icons/Devices';
import LockIcon from '@material-ui/icons/Lock';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Animated } from "react-animated-css";
import {Link} from "react-router-dom";

class NavItems extends Component {
  render() {
    return (
      <Navbar expand = {false} fixed="top" className="nav">
      <Container>
      <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
        <Navbar.Brand href = "#home" ><b className = "kachi"><sup><b>*</b></sup>CODER_KACHI <sup><b>*</b></sup></b></Navbar.Brand> 
        </Animated>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby = "offcanvasNavbarLabel" placement = "start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id = "offcanvasNavbarLabel">MY DETAILS</Offcanvas.Title> 
          </Offcanvas.Header>

          <Offcanvas.Body>

          <Nav className = "justify-content-start flex-grow-1 pe-3">
        <Nav.Link className="nav-link"  ><InfoIcon /> About Me</Nav.Link>
        <Nav.Link className="nav-link"  ><PhoneAndroidIcon /> Contact Me</Nav.Link>
        <Nav.Link className="nav-link"  ><DevicesIcon /> Web Technologies</Nav.Link>
        <Nav.Link className="nav-link"  ><MenuBookIcon /> <Link to ={"/diary"}> My Diary </Link></Nav.Link>
        <Nav.Link className="nav-link"  ><LockIcon /> My CV</Nav.Link>
        <hr className = "rule"/> 


        </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Collapse id = "basic-navbar-nav"> */}
        
        {/* </Navbar.Collapse> */}
        </Container>
       </Navbar>
       
      )
  }
}


export default NavItems;


