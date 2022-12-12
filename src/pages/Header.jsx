import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
//import logo from '../img/java.jpg'
import '../css/all.css'
const Header = () => {
  return (
    
      <Navbar expand="lg" bg="light" variant="light">
        <Container fluid>
          <LinkContainer to={"/Homepage"} >
          <Navbar.Brand > 
            <div className="bll">GOKBORU</div>
            {/* <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top" /> */}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/Course">
              <Nav.Link><div className="bll">Course</div></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MyCourse">
              <Nav.Link><div className="bll">MyCourse</div></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Certificate">
              <Nav.Link><div className="bll">Certificate</div></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link><div className="bll">About</div></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link ><div className="bll">Contact</div></Nav.Link>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

export default Header;