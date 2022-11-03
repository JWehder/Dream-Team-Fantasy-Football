import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    align: "center",
    
    
}

function NavBar({ handleClick, isLoggedIn }) {

    return (
        <div>
            <NavLink
            to="/"
            exact
            style={linkStyle}
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