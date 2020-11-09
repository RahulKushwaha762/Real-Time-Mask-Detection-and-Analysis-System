import React from 'react';
import {NavDropdown, Navbar }from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
// import Webcam from "react-webcam";
import { Grid } from '@material-ui/core';
import Header from "./Header";
import {Link, withRouter} from 'react-router-dom';
import BasicCard from "./BasicCard";


function Navbar1() {

    return (
        <Grid container direction="column">    
          <Grid item>
            <Header/>
          </Grid>
          <Grid item container>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8}>
            <h1 align="center">Real Time Mask Detection System</h1>
            
            <h4 align="center">Admin Info</h4>
            <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <BasicCard 
                    title={"Lakshy Gupta"} 
                    subtitle={"ASET Delhi"}
                    number=""
                    description="00810402717"/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BasicCard 
                    title={"Rahul Kushwaha"} 
                    subtitle={"ASET Delhi"}
                    number=""
                    description="01610402717"/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BasicCard 
                    title={"Tanya Varshney"} 
                    subtitle={"ASET Delhi"}
                    number=""
                    description="41710402717"/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BasicCard 
                    title={"Akshat Chauhan"} 
                    subtitle={"ASET Delhi"}
                    number=""
                    description="41510402717"/>
                  </Grid>
            </Grid>
            </Grid>
            <Grid item xs={0} sm={2}/>
          </Grid>
        </Grid>
       /* <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Navbar.Brand href="#home">Covid-19 Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/webcamlive" to="/webcamlive">Watch Live</Nav.Link>
            <Nav.Link href="/detailedreport">Detailed Report </Nav.Link>
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
            </NavDropdown> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Webcam 
      audio={false}
      height={550}
      width={1280}
      /> }
              {/* <img src={require('../../../MinorProjectTest/MainProjectDjango/minorproject1/1.jpg')} alt="info"></img> }
              


              
      </>*/
    );
  }

  export default withRouter(Navbar1);