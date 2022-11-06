import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'

function NavBar({ handleClick, isLoggedIn }) {

    return (
        <div className="navBar">
            <NavLink
            to="/"
            exact
            className="navLink"
            activeStyle={{
            background: "#878f99",
            }}
        >
            Home
        </NavLink>
        <NavLink
            to="/myteam"
            exact
            className="navLink"
            activeStyle={{
            background: "#878f99",
            }}
        >
            My Team
        </NavLink>
        <NavLink
            to="/mysavedteams"
            exact
            className="navLink"
            activeStyle={{
            background: "#878f99",
            }}
        >
            Saved Teams
        </NavLink>

        {isLoggedIn ?
        <NavLink
            to="/login"
            exact
            className="navLink"
            onClick={handleClick}
            activeStyle={{
            background: "#878f99",
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