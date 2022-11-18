import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ handleClick, isLoggedIn }) {

    return (
      <div className="navBar">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand to="/">Fantasy Football</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="myteam">My Team</Nav.Link>
            <Nav.Link to="mysavedteams">My Saved Teams</Nav.Link>
            {isLoggedIn ? <Nav.Link href="login">Logout</Nav.Link> : ""}
          </Nav>
        </Container>
      </Navbar>  
      </div>
    )
}

export default NavBar;