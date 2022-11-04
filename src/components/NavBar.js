import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'

const linkStyle = {
    display: "inline-block",
    width: "70px",
    padding: "10px",
    margin: "0 6px 6px",
    background: "white",
    fontColor: "black",
    border
    textDecoration: "none",
    color: "white",
    textAlign: "center",
    fontSize: "12px"
    
    
}

function NavBar({ handleClick, isLoggedIn }) {

    return (
        <div className="navBar">
            <NavLink
            to="/"
            exact
            style={linkStyle}
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            Home
        </NavLink>
        <NavLink
            to="/createteam"
            exact
            style={linkStyle}
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            Create Team
        </NavLink>
        <NavLink
            to="/myteam"
            exact
            style={linkStyle}
            className="navLink"
            activeStyle={{
            background: "darkred",
            }}
        >
            My Team
        </NavLink>

        {isLoggedIn ?
        <NavLink
            to="/login"
            exact
            style={linkStyle}
            onClick={handleClick}
            activeStyle={{
            background: "darkred",
            }}
        >
            Logout
        </NavLink>
        : ""
        }
        
        </div>
    )
}

export default NavBar;