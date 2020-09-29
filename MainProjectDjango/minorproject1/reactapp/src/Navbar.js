import React from 'react';
import {NavDropdown, Navbar }from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
// import Webcam from "react-webcam";
import {Link, withRouter} from 'react-router-dom';


function Navbar1() {

    return (
        <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Covid-19 Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/webcamlive" to="/webcamlive">Watch Live</Nav.Link>
            <Nav.Link href="#pricing">Detailed Report </Nav.Link>
            <Nav.Link href="#donate">Donate </Nav.Link>
            <Nav.Link href="#help">Help </Nav.Link>
            <Nav.Link href="#about">About </Nav.Link>
            <Nav.Link href="#contact">Contact </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Webcam 
      audio={false}
      height={550}
      width={1280}
      /> */}
              {/* <img src={require('../../../MinorProjectTest/MainProjectDjango/minorproject1/1.jpg')} alt="info"></img> */}
              <img src={require('./images/1.jpg')} alt="info"></img>
      </>
    );
  }

  export default withRouter(Navbar1);